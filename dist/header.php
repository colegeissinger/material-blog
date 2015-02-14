<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package Material Blog
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'material-blog' ); ?></a>

	<header id="masthead" class="site-header navbar-fixed" role="banner">
		<nav id="site-navigation" class="main-navigation" role="navigation">
			<div class="nav-wrapper container">
				<div class="row">
					<div class="col s12">
						<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php esc_html( bloginfo( 'name' ) ); ?></a>
						<?php
						wp_nav_menu( array(
							'container'  => '',
							'menu_class' => 'right hide-on-med-and-down',
							'menu_id'    => '',
						) );
						?>
					</div>
				</div>
			</div>
		</nav>
	</header><!-- #masthead -->

	<main id="content" class="site-content container">
