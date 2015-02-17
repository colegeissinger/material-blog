<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package Material Blog
 */
?>

	</main><!-- #content -->

	<footer id="colophon" class="site-footer page-footer" role="contentinfo">
		<div class="container">
			<div class="site-info row">
				<div class="col s12">
					<a href="<?php echo esc_url( __( 'http://wordpress.org/', 'material-blog' ) ); ?>"><?php printf( __( 'Proudly powered by %s', 'material-blog' ), 'WordPress' ); ?></a>
					<span class="sep"> | </span>
					<?php printf( __( 'Theme: %1$s by %2$s.', 'material-blog' ), 'Material Blog', '<a href="http://underscores.me/" rel="designer">Underscores.me</a>' ); ?>
				</div><!-- .col.s12 -->
			</div><!-- .site-info.row -->
		</div><!-- .container -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
