<div class="row page-content">
    <div class="large-12 columns">
        
        <h2>Feedback</h2>
        <h4 class="subheader">How would we get better without your 2 abrahams lincolns?</h4>
        
        <div class="spacer-small"></div>
        
        <div class="panel">
	
            <h3 class="subheader">Describe approximately how much you love us</h3>
            
            <form name="feeback_form" method="post" action="/process/feedback.php" class="ajax">
            
                <div data-alert class="alert-box success none">
                    Thanks for that.  We love you too!!
                    <a href="#" class="close">&times;</a>
                </div>
                <div data-alert class="alert-box alert none">
                    Love connection was unsuccessful.
                    <a href="#" class="close">&times;</a>
                </div>
            
                <div>
                    <label class="block" for="email_address">Email Address</label>
                    <input type="email" id="email_address" name="email_address" placeholder="email@example.com" />
                </div>
                <div>
                    <textarea name="feedback" rows="10" placeholder="You are so cool, please keep it up!"></textarea>
                </div>
                
                <?php //include('inc/recaptcha.php'); ?>

                <div class="text-right">
                    <button type="submit" class="radius button">Submit</button>
                </div>
            
            </form>
        
        </div>
        
        <!--ul class="list">
        	<li></li>
        </ul-->
        
    </div>
</div>