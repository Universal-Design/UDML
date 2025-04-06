import * as vscode from 'vscode';
import { UDMLMappingProvider } from './vscode-mapping-generator';

export function activate(context: vscode.ExtensionContext) {
  const mappingProvider = new UDMLMappingProvider({
    getProgram: () => {
      // Implementation would return the TypeScript program
      return null;
    }
  });
  
  // Register commands
  context.subscriptions.push(
    vscode.commands.registerCommand('udml.generateMappings', async () => {
      const mappings = await mappingProvider.generateMappings();
      
      // Show in a new editor
      const doc = await vscode.workspace.openTextDocument({
        content: mappings,
        language: 'xml'
      });
      
      await vscode.window.showTextDocument(doc);
    })
  );
  
  // Auto-update on component changes
  const watcher = vscode.workspace.createFileSystemWatcher('src/**/*.{tsx,ts}');
  watcher.onDidChange(async () => {
    await mappingProvider.updateMappings();
  });
  
  context.subscriptions.push(watcher);
}

export function deactivate() {} 