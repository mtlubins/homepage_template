import {renderToTag} from './renderers.js';

export function createFooter() {
    const target = 'footer';
    const content = `
    <div class="row footer-container" >
   
        <div class="col-md-4">
            <h4>LOGO HERE</h4>
        </div>
        <div class="col-md-4">
            <h4>Kontakt</h4>
            <ul class="list-unstyled">
                <li><a href="mailto:mtlubins@live.com.com">mtlubins@live.com</a></li>
                <li>531-001-163</li>
            </ul>
        </div>
        <div class="col-md-4">
            <h4>Go Social</h4>
            <ul class="list-unstyled social">
                <li class="social-media-item">  
                    <a href="#"><i class="fab fa-twitter-square"></i></a>
                </li>
                <li class="social-media-item">  
                    <a href="#"><i class="fab fa-facebook-square"></i></a>
                </li>   
                <li class="social-media-item">  
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </li>      
            </ul>
      </div>
    </div>
    `;

    function render() {
        renderToTag(target, content);
    }

    return {
        render
    }
}
