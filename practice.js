/************************************************************
 * Josh Knell Lecture JavaScript Components 1
 */
//step 3 build out the panel class
class Panel {
    constructor(panel) {
        this.panel = panel;
        this.panelButtons = this.panel.querySelector('.panel-buttons');
        this.panelBtnOpen = this.panel.querySelector('.panel-btn-open');
        this.panelBtnClose = this.panel.querySelector('.panel-btn-close');
        this.panelContent = this.panel.querySelector('.panel-content');

        //explicit binding of this
        // this.panelButtons.addEventListener('click', this.togglePanel.bind(this));

        //this is not bound to the arrow and therefor looks up and finds the this keyword in the constructor
        this.panelButtons.addEventListener('click', () => this.togglePanel());

    }
    //methods
    togglePanel() {
        this.panelBtnOpen.classList.toggle('hide-btn');
        this.panelBtnClose.classList.toggle('hide-btn');
        this.panelContent.classList.toggle('toggle-on');

    }

}

//step 1 get original DOM elements
const panels = document.querySelectorAll('.panel');

//Step 2 return a newly constructed DOM element
panels.forEach(function (panel) {
    return new Panel(panel);
});