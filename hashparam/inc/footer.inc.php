		<div class="row">
			<div class="large-12 columns">
			
				<footer class="row">
					<div class="large-12 columns">
						<hr />
						<div class="row">
				
							<div class="large-6 columns">
								<p>&copy;<?php echo date('Y'); ?> <a href="http://www.wykapedia.org/web">wykaPedia Web Design</a></p>
							</div>
				
							<div class="large-6 small-12 columns">
								<ul class="inline-list right">
                                	<li><a href="/test/">Test</a></li>
									<li><a href="/bugs/">Bugs</a></li>
									<li><a href="/feedback/">Feedback</a></li>
									<li><a href="/license/">License</a></li>
								</ul>
							</div>
				
						</div>
					</div>
				</footer>
				
			</div>
		</div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <?php if ($_PATH == 'test'): ?><script src="//code.jquery.com/qunit/qunit-1.15.0.js"></script><?php endif; ?>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
        <script src="/vendor/foundation-5.4.6.custom/js/foundation.min.js"></script>
        <script src="/js/plugins.js"></script>
        <script src="/js/plugin/jquery.hashparam.min.js"></script>
        <script src="/js/main.js"></script>
		<script type="text/javascript">$(document).foundation();</script>
		<?php if ($_PATH == 'demo'): ?><script type="text/javascript">$(document).ready(Rainbow.color);</script><? endif; ?>
		<script type="text/javascript">
			$(document).ready(function () {
				var page = '<?php echo $_PATH; ?>';
				if (jQuery.isFunction(Page[page])) {
					Page[page]();	
				}
			});
		</script>

    </body>
    
</html>