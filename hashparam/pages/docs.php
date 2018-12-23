<div class="row page-content">
    <div class="large-12 columns">
        
        <h2>Docs</h2>
        <h4 class="subheader">Please see below for documentation on each of the available functions...</h4>
        
        <div class="function-doc">
        	<div class="signature">
		        <h4><code>$.fn.hashparam()</code></h4>
			</div>
            <p class="description">
            	Retrieve all hash parameters in a map. <a href="demo#function=hashparam()">See example</a>
            </p>
            <div class="returns">
            	<h5>Returns</h5>
                <div class="return">
                	<span class="type"><em>Type:</em> <code>Map</code></span>
                    <span class="doc">All hash parameters in a key/value pair map or <code>{}</code></span>
                </div>
            </div>
		</div>
        
        <div class="function-doc">
        	<div class="signature">
		        <h4><code>$.fn.hashparam(name)</code></h4>
			</div>
            <p class="description">
            	Retrieve an individual hash parameter. <a href="demo#function=hashparam(name)">See example</a>
            </p>
            <div class="returns">
            	<h5>Returns</h5>
                <div class="return">
                	<span class="type"><em>Type:</em> <code>String</code></span>
                    <span class="doc">The value of the parameter</span>
                </div>
            </div>
            <div class="parameters">
                <h5>Parameters</h5>
            	<div class="parameter">
                	<span class="name">name</span>
                	<span class="type"><em>Type:</em> <code>String</code></span>
                	<span class="doc">The name of the parmater to retrieve</span>
                </div>
            </div>
		</div>
        
        <div class="function-doc">
        	<div class="signature">
		        <h4><code>$.fn.hashparam(map)</code></h4>
			</div>
            <p class="description">
            	For each key/value pair in the map, set a hash parameter. <a href="demo#function=hashparam(map)">See example</a>
            </p>
            <div class="parameters">
                <h5>Parameters</h5>
            	<div class="parameter">
                	<span class="name">map</span>
                	<span class="type"><em>Type:</em> <code>Map</code></span>
                	<span class="doc">A map of key/value pairs to set as hash parameters</span>
                </div>
            </div>
		</div>
        
        <div class="function-doc">
        	<div class="signature">
		        <h4><code>$.fn.hashparam(name, value)</code></h4>
			</div>
            <p class="description">
            	Set an individual hash parameter. <a href="demo#function=hashparam(name,value)">See example</a>
            </p>
            <div class="returns">
            	<h5>Returns</h5>
                <div class="return">
                	<span class="type"><em>Type:</em> <code>String</code></span>
                    <span class="doc">The previous value of the parameter or <code>null</code></span>
                </div>
            </div>
            <div class="parameters">
                <h5>Parameters</h5>
            	<div class="parameter">
                	<span class="name">name</span>
                	<span class="type"><em>Type:</em> <code>String</code></span>
                	<span class="doc">The name of the parmater to set</span>
                </div>
            	<div class="parameter">
                	<span class="name">value</span>
                	<span class="type"><em>Type:</em> <code>String</code> or <code>Number</code> or <code>Boolean</code></span>
                	<span class="doc">The value of the parmater to set</span>
                </div>
            </div>
		</div>
        
        <div class="function-doc">
        	<div class="signature">
		        <h4><code>$.fn.hashparam.remove(name)</code></h4>
			</div>
            <p class="description">
            	Remove a specific hash parameter. <a href="demo#function=hashparam.remove(name)">See example</a>
            </p>
            <div class="returns">
            	<h5>Returns</h5>
                <div class="return">
                	<span class="type"><em>Type:</em> <code>String</code></span>
                    <span class="doc">The value of the parameter before being removed or <code>null</code></span>
                </div>
            </div>
            <div class="parameters">
                <h5>Parameters</h5>
            	<div class="parameter">
                	<span class="name">name</span>
                    <span class="type"><em>Type:</em> <code>String</code></span>
                    <span class="doc">The name of the parameter to remove</span>
                </div>
            </div>
		</div>
        
        <div class="function-doc">
        	<div class="signature">
		        <h4><code>$.fn.hashparam.clear()</code></h4>
			</div>
            <p class="description">
            	Clear all hash parameters. <a href="demo#function=hashparam()">See example</a>
            </p>
            <div class="returns">
            	<h5>Returns</h5>
                <div class="return">
                	<span class="type"><em>Type:</em> <code>Map</code></span>
                    <span class="doc">All previous key/value pairs before cleared or <code>{}</code></span>
                </div>
            </div>
		</div>
        
    </div>
</div>