// module design pattern
const UIController = (function() {
  const homePageTmpl = gameName => {
    return `<h1>Welcome to ${gameName}</h1>
        <button class='${DomString.btnStart.slice(1)}'>Let's Start</button>`;
  };

  const playerInfoPageTmpl = () => {
    return `<h2>Player 1 user name</h2>
    <input type="text" />`;
  };

  const rootElement = "#root";
  const DomString = {
    rootElement: rootElement,
    btnStart: `.btnStart`
  };

  return {
    DomString,
    Tmpl: {
      homePageTmpl,
      playerInfoPageTmpl
    }
  };
})();

const TTTGameController = (function() {
  ``;
  return {
    gameName: "Tic Tac Toe"
  };
})();

const AppController = (function(UICtrl, TTTGameCtrl) {
  const rootElement = document.querySelector(UICtrl.DomString.rootElement);
  const renderUserInfoPage = () => {
    rootElement.innerHTML = UICtrl.Tmpl.playerInfoPageTmpl();
  };

  const renderHomePage = () => {
    const tmp = UIController.Tmpl.homePageTmpl(TTTGameCtrl.gameName);

    rootElement.innerHTML = tmp;

    const setupHomePageEvent = () => {
      const btnStart = document.querySelector(UICtrl.DomString.btnStart);
      btnStart.addEventListener("click", () => {
        console.log("btn clicked");
        renderUserInfoPage();
      });
    };
    setupHomePageEvent();
  };

  return {
    init: function() {
      renderHomePage();
    }
  };
})(UIController, TTTGameController);

AppController.init();
