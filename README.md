Material Blog
===

WARNING. EARLY ALPHA VERSION. NOT RECOMMENDED FOR PRODUCTION.
===

Hi. I'm a starter theme called `Material Blog`. I'm a theme meant for hacking so don't use me as a Parent Theme. Instead try turning me into the next, most awesome, WordPress theme out there. That's what I'm here for.

I'm built on `_s` by Automattic, a lean, well documented, HTML5 WordPress starter theme and `Materialize`, A modern responsive front-end framework based on Material Design by Google.

What you can expect from `Material Blog`:
* Just the right amount of lean, well-commented, modern, HTML5 templates.
* Helpful 404 template.
* A sample custom header implementation in `inc/custom-header.php` that can be activated by uncommenting one line in `functions.php` and adding the code snippet found in the comments of `inc/custom-header.php` to your `header.php` template.
* Custom template tags in `inc/template-tags.php` that keep your templates clean and neat and prevent code duplication.
* Some small tweaks in `inc/extras.php` that can improve your theming experience.
* Predefined classes creating a configurable color palette.
* 12 column fluid responsive grid system.
* Responsive images and video.
* Roboto 2.0 font with fluid text scaling and line-height for optimized readability on any device.
* SO MANY COMPONENTS:
	* Badges.
	* Stylized Buttons.
	* Cards.
	* Stylized lists (referred to as `collections`) with collapsible functionality.
	* Beautifully styled forms with switches, date picker and more.
	* A whopping 740 Material Design icons by Google for all the things.
	* Dialog boxes and modals.
	* Parallax page layouts.
	* Fixed positioning of any element on a page (aka `pinning`).
	* ScrollFire and ScrollSpy.
	* Mobile optimized navigation with intuitive drag to open and close.
	
Getting Started
---------------

Material Blog was started on Feb 13th, 2015 and is by no means ready for production. If you wish
to play with it, grabbing a copy of the `dist` folder and placing in your themes directory will get
you started. Take note, integration of the Materialize framework is still underway.

##### Compiling the source
If you wish to compile from the source, you'll need the latest versions of NPM, Grunt and Bower.

Run `bower install` to install the materialize framework
Run `npm install` to install the Grunt plugins needed to compile the source.
Run `grunt build` to process all the Sass, minify scripts and CSS, and process a WordPress ready theme.