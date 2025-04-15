# What is UDML?

### A universal design language for the AI era — built in public, by the community

> **UDML** (Universal Design Markup Language) is an open, semantic design language that describes user interfaces in a way that AI developer agents — like Cursor, Copilot, or Claude — can turn into fully functional applications across platforms and frameworks.

Unlike static design files, UDML is _inherently semantic_ and _machine-readable by default_. But more importantly, it's _meant to evolve with your input._

***

## 💡 Let's see it!

### Here's a Figma design based on Airbnb:

![Airbnb Listing Card](https://universaldesign.io/assets/ListingCard.svg)

### Here's how it looks in UDML:

```xml
<Component name="ListingCard">
	<Column name="cardContainer" cornerRadius="lg" gap="med">
	<!-- Image Carousel -->
	<Column name="carouselContainer">
 		<Carousel height="200px" autoScroll="false" onHover=showArrows(leftArrow, RightArrow) dotIndicators="true">
			<repeat>
				<Image><Data description="listing image" limit=10/></Image>
			</repeat>
		</Carousel>

		<Badge layer=2 variant="highlight" margin="16px" position="top-left">Superhost</Badge>
		<IconButton layer=2 icon="heart" variant="ghost" onClick="toggleFavorite" position="top-right" />
		
		<!-- Scroll arrows (shown on hover) -->
		<IconButton name="leftArrow" layer=2 visibility="hidden" icon="chevron-left" onClick="previousSlide" position="center-left"/>
		<IconButton name="rightArrow" layer=2 visibility="hidden" icon="chevron-right" onClick="nextSlide" position="center-right"/>
		
		<Interaction name="showArrows>
			<Action type="setProperty" property="visibility" value="true">
		</Interaction>
	</Column>

	<!-- Property Details -->
	<Column name="listingDetails" padding="md" justify="space-between">
		<Row name="topRow" gap="auto">
			<Text variant="title-sm">Groveland, California</Text>
			<Row name="starRating" gap="xs" align="center">
				<Icon name="star" size="sm" />
				<Text variant="body-sm">4.91</Text>
			</Row>
		</Row>
		<Text variant="body-sm">Yosemite National Park</Text>
		<Text variant="body-sm"><Data description="date range"</Data></Text>
		<Text variant="body-bold">$289/night</Text>
	 </Column>

	 </Column>
</Component>
```

### And here's the code, all of which was generated in Claude 3.7 with a single prompt from the UDML above.

{% embed url="https://codepen.io/Mike-M-the-vuer/pen/MYYgQpy?default-tab=result" height="500" %}

***

## 💡 Why UDML?

The way we design and build interfaces is changing — fast.

* Design tools like Figma are visual, but not semantic.
* AI tools are smart, but need structure and context to generate production-grade code.
* Developers and designers still rely on handoff, rewrites, and tribal knowledge to ship UI.

**UDML changes that** by creating a shared language between humans and machines — one that describes _intent_, not just pixels.

***

## 🤝 Made to Be a Community Standard

UDML isn’t just a spec — it’s a conversation.

We’re building this in the open, and we need your help:

* 📐 Suggest improvements to the language and naming
* 🧩 Propose new components, behaviors, or interaction patterns
* 🔌 Share ideas for tooling, integrations, and real-world use

> **If you've ever wanted a better way to design for machines&#x20;**_**and**_**&#x20;people — you're in the right place.**

Join the [Discussions](discussions/), open an [Issue](issues/), or jump into a [Pull Request](pulls/). We’d love to hear from you.

***

## 🔍 Quick Overview

### ✅ What UDML Is:

* XML-based and easy to parse
* Describes structure, style, behavior, and intent
* Designed for AI agents to generate UI across any environment
* Modular, extensible, and reusable

### 🚫 What It’s Not:

* A rendering engine
* A replacement for Figma or code
* A locked spec — we’re building this together

***

## 🧠 Core Concepts

### 1. **Semantic UI**

Everything in UDML maps to a real UI concept — not just a shape or layer.

### 2. **AI-Oriented**

You can embed **plain language instructions** to help AI understand the _why_ behind your design.

### 3. **Modular & Reusable**

Use components, tokens, and imports to scale across teams and projects.

### 4. **Open & Extensible**

UDML can grow with your needs — define your own tokens, screens, and even new elements.

***

## 🗂 UDML Structure

```xml
<udml version="1.0">
  <instructions>...</instructions>    <!-- Human-readable goals for AI -->
  <meta>...</meta>                    <!-- Authoring and context metadata -->
  <tokens>...</tokens>                <!-- Global colors, spacing, typography -->
  <styles>...</styles>                <!-- Reusable visual styles -->
  <components>...</components>        <!-- Custom UI components -->
  <screens>...</screens>              <!-- Pages, views, or modals -->
  <imports>...</imports>              <!-- External libraries -->
</udml>
```

***

## 🔭 Roadmap

We're actively working on:

* ✅ Spec v0.1 (draft component definitions)
* 🔄 Schema definition (XSD/JSON Schema)
* 🔧 CLI for validation and conversion
* 🧩 Figma exporter (WIP)
* 📘 Public docs (via GitBook)
* 🌱 A growing, open-source community

***

## 🪪 License

Open-source and free to use. Final license pending.

***

Want to shape the future of how humans and AI build software together?

👉 [Start here](discussions/)
