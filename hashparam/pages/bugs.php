<div class="row page-content">
    <div class="large-12 columns">
        
        <h2>Bugs</h2>
       	<h4 class="subheader">These guys have been known to crawl around every once in a while</h4>
        
        <p>Yayy, no bugs currently!</p>
        
        <!--ul class="list">
        	<li></li>
        </ul-->
        
        <div class="spacer-small"></div>
        
        <div class="panel">
        
        	<h3 class="subheader">Submit a bug</h3>
            
            <form name="bugs_form" method="post" action="/process/bugs.php" class="ajax">
            
                <div data-alert class="alert-box success none">
                    Thanks, but not really...
                    <a href="#" class="close">&times;</a>
                </div>
                <div data-alert class="alert-box alert none">
                    Sorry, we couldn't process your bug.
                    <a href="#" class="close">&times;</a>
                </div>
            
                <div>
                    <label class="block" for="email_address">Email Address</label>
                    <input type="email" id="email_address" name="email_address" placeholder="email@example.com" />
                </div>
                <div>
                    <textarea name="bug" rows="10" placeholder="What did we do wrong?"></textarea>
                </div>
                
                <?php //include('inc/recaptcha.php'); ?>

                <div class="text-right">
                    <button type="submit" class="radius button">Submit</button>
                </div>
            
            </form>
        
        </div>
        
    </div>
</div>