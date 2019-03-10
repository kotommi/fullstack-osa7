describe("Blog", function() {
  beforeEach(function() {
    resetAndCreateUser();
    cy.visit("http://localhost:3000");
  });

  it("front page can be opened", function() {
    cy.contains("Login");
  });

  it("login fails with message", function() {
    cy.contains("login").click();
    cy.contains("invalid");
  });

  it("user can login and logout", function() {
    cy.get("#username").type("asdasd");
    cy.get("#password").type("asdasd");
    cy.contains("login").click();
    cy.contains("asdasd is logged in");
    cy.contains("logout").click();
    cy.contains("Login");
  });
});

describe("Logged in functionality", function() {
  beforeEach(function() {
    cy.visit("http://localhost:3000");
    cy.get("#username").type("asdasd");
    cy.get("#password").type("asdasd");
    cy.contains("login").click();
    cy.contains("asdasd is logged in");
  });
  it("user can create new blog", function() {
    createBlog();
  });
  it("users page link works", function() {
    cy.get("#userLink").click();
    cy.contains("Users");
    cy.contains("username");
    cy.contains("blogs created");
  });
  it("user page works", function() {
    cy.get("#userLink").click();
    cy.get("#asdasdLink").click();
    cy.contains("asdasd");
    cy.contains("added blogs");
    cy.contains("new blag");
  });
  it("liking a blog works", function() {
    cy.contains("new blag").click();
    cy.contains("www.goog.le");
    cy.contains("0 likes");
    cy.contains("added by asdasd");
    cy.get("#likeButton").click();
    cy.contains("1 likes");
  });
  it("removing a blog works", function() {
    cy.contains("new blag").click();
    cy.contains("added by asdasd");
    cy.get("#removeButton").click();
    cy.contains("removed new blag");
  });
});

const resetAndCreateUser = function() {
  cy.request("POST", "http://localhost:3003/api/testing/reset");
  const user = {
    name: "asdasd",
    username: "asdasd",
    password: "asdasd"
  };
  cy.request("POST", "http://localhost:3003/api/users", user);
};

const createBlog = function() {
  cy.contains("create new").click();
  cy.get("#title").type("new blag");
  cy.get("#author").type("authorius");
  cy.get("#url").type("www.goog.le");
  cy.get("#create").click();
  cy.contains("new blag");
};
