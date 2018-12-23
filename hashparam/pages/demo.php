<div class="row page-content">
    <div class="large-12 columns">
        
        <h2>Demo</h2>
        <h4 class="subheader">Here are a few examples of how to use hashparam</h4>
        <div class="spacer-small"></div>
        
        <div class="example">
        	<a name="function=hashparam()"></a>
	        <h4>Retrieving all hash parameters</h4>
            <h6 class="title">Hash</h6>
            <h6 class="hash">#category=outdoors&amp;subCategory=hiking&amp;product=packs</h6>
            <h6 class="title">Code</h6>
            <div class="clearfix"></div>
			<pre>
<code data-language="javascript">
    var hashParameters = $.fn.hashparam();
    
</code>
			</pre>
            <h6 class="title">At Runtime</h6>
			<pre>
<code data-language="javascript">
    hashParameters = {
    	category: "outdoors",
    	subCategory: "hiking",
    	product: "packs"
    };
    
</code>
			</pre>
		</div>
        
        <div class="example">
        	<a name="function=hashparam(name)"></a>
	        <h4>Retrieving a hash parameter value</h4>
            <h6 class="title">Hash</h6>
            <h6 class="hash">#q=hiking+back+packs</h6>
            <h6 class="title">Code</h6>
			<pre>
<code data-language="javascript">
    var query = $.fn.hashparam("q");
    
</code>
			</pre>
            <h6 class="title">At Runtime</h6>
			<pre>
<code data-language="javascript">
    query = "hiking back packs";
    
</code>
			</pre>
		</div>
        
        <div class="example">
        	<a name="function=hashparam(map)"></a>
	        <h4>Set multiple hash parameters in one call</h4>
            <div class="row">
            	<div class="large-2 columns">
                    <h6 class="title">Previous Hash</h6>
                    <h6 class="hash">#</h6>
				</div>
                <div class="large-10 columns">
                    <h6 class="title">Resulting Hash</h6>
                    <h6 class="hash">#category=new&amp;page=10&amp;order=DESC</h6>
                </div>
            </div>
            <h6 class="title">Code</h6>
			<pre>
<code data-language="javascript">
    var hashParameters = {
    	category: "new",
    	page: 10,
        order: "DESC"
    };
    $.fn.hashparam(hashParameters);
    
</code>
			</pre>
		</div>
        
        <div class="example">
        	<a name="function=hashparam(name,value)"></a>
	        <h4>Set a particular hash parameter value</h4>
            <div class="row">
            	<div class="large-2 columns">
            		<h6 class="title">Previous Hash</h6>
            		<h6 class="hash">#page=1</h6>
                </div>
                <div class="large-10 columns">
		            <h6 class="title">Resulting Hash</h6>
		            <h6 class="hash">#page=1&amp;enabled=true</h6>
                </div>
            </div>
            <h6 class="title">Code</h6>
			<pre>
<code data-language="javascript">
    $.fn.hashparam("enabled", true); // Boolean value
    
</code>
			</pre>
            <div class="spacer-small"></div>
            <div class="row">
            	<div class="large-2 columns">
                    <h6 class="title">Previous Hash</h6>
                    <h6 class="hash">#</h6>
                </div>
                <div class="large-10 columns">
                    <h6 class="title">Resulting Hash</h6>
                    <h6 class="hash">#title=The+Story+of+Life</h6>
                </div>
            </div>
			<h6 class="title">Code</h6>
			<pre>
<code data-language="javascript">
    $.fn.hashparam("title", "The Story of Life"); // String value
    
</code>
			</pre>
            <div class="spacer-small"></div>
            <div class="row">
            	<div class="large-2 columns">
                    <h6 class="title">Previous Hash</h6>
                    <h6 class="hash">#count=15</h6>
                </div>
                <div class="large-10 columns">
                    <h6 class="title">Resulting Hash</h6>
                    <h6 class="hash">#count=27</h6>
                </div>
            </div>
            <h6 class="title">Code</h6>
			<pre>
<code data-language="javascript">
    $.fn.hashparam("count", 27); // Number value
    
</code>
			</pre>
		</div>
        
        <div class="example">
        	<a name="function=hashparam.remove(name)"></a>
	        <h4>Remove a particular hash parameter</h4>
            <div class="row">
            	<div class="large-5 columns">
                    <h6 class="title">Previous Hash</h6>
                    <h6 class="hash">#category=outdoors&amp;subCategory=camping</h6>
                </div>
                <div class="large-7 columns">
                    <h6 class="title">Resulting Hash</h6>
                    <h6 class="hash">#category=outdoors</h6>
				</div>  
            </div>
            <h6 class="title">Code</h6>
			<pre>
<code data-language="javascript">
    var subCategory = $.fn.hashparam.remove("subCategory");
    
</code>
			</pre>
            <h6 class="title">At Runtime</h6>
			<pre>
<code data-language="javascript">
    subCategory = "camping";
    
</code>
			</pre>
		</div>
        
        <div class="example">
        	<a name="function=hashparam.clear()"></a>
	        <h4>Remove all hash parameters</h4>
            <div class="row">
            	<div class="large-7 columns">
                    <h6 class="title">Previous Hash</h6>
                    <h6 class="hash">#category=outdoors&amp;subCategory=hiking&amp;product=packs</h6>
                </div>
                <div class="large-5 columns">
                    <h6 class="title">Resulting Hash</h6>
                    <h6 class="hash">#</h6>
				</div>
            </div>
            <h6 class="title">Code</h6>
			<pre>
<code data-language="javascript">
    var previousHashParameters = $.fn.hashparam.clear();
    
</code>
			</pre>
            <h6 class="title">At Runtime</h6>
			<pre>
<code data-language="javascript">
    previousHashParameters = {
    	category: "outdoors",
    	subCategory: "hiking",
    	product: "packs"
    };
    
</code>
			</pre>
		</div>
        
    </div>
</div>