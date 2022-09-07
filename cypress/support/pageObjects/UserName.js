class userID {

    getUserByUserName1(baseUrl,UserName1,ID1) {
      let getId,getUser;
     // let User = 'TwitterDev';
      cy.request({
        method: "GET",
         url:
          baseUrl +'by/username/'+UserName1,
        auth: {  bearer:
          "AAAAAAAAAAAAAAAAAAAAAI6wdAEAAAAAmCcWiKdmwvJ9EzbThKE0tjVsmZg%3DEuq8opMMHZeHVkw1xKxuimQJkZfV0sfSF39P3wuqe1h3YTQRzD"
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.not.be.empty;
        const convertToString = JSON.stringify(response.body);
        const getValue = JSON.parse(convertToString);
        getId= getValue.data.id;
        getUser = getValue.data.username;
       expect(parseInt(getId)).to.equal(ID1)
       expect(getUser).to.equal(UserName1)
      });
  
      return getId,getUser;
    }
    getUserByUserName2(baseUrl,UserName5) {
      let getUser, getError;
      cy.request({
        method: "GET",
        url: baseUrl +'by/username/'+UserName5,
        auth: {  bearer:
          "AAAAAAAAAAAAAAAAAAAAAI6wdAEAAAAAmCcWiKdmwvJ9EzbThKE0tjVsmZg%3DEuq8opMMHZeHVkw1xKxuimQJkZfV0sfSF39P3wuqe1h3YTQRzD"
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.not.be.empty;
        const convertToString = JSON.stringify(response.body);
        const getValue = JSON.parse(convertToString);
        getUser= getValue.errors[0].value;
        expect(getUser).to.equal(UserName5)
        getError = getValue.errors[0].title;
        expect(getError).to.equal("Not Found Error");
      });
  
      return getUser,getError;
    }
    getUserByUserName3(baseUrl,InvalidUserName) {
      let getDetail;
      cy.request({
        method: "GET",
        url: baseUrl +'by/username/'+InvalidUserName,
        failOnStatusCode: false,
  
        auth: {  bearer:
          "AAAAAAAAAAAAAAAAAAAAAI6wdAEAAAAAmCcWiKdmwvJ9EzbThKE0tjVsmZg%3DEuq8opMMHZeHVkw1xKxuimQJkZfV0sfSF39P3wuqe1h3YTQRzD"
        },
      }).then((response) => {
        expect(response.status).to.equal(400);
        const convertToString = JSON.stringify(response.body);
        const getValue = JSON.parse(convertToString);
       getDetail = getValue.errors[0].message;
       expect(getDetail).include(
        "query parameter value ["+ InvalidUserName+"] does not match");
        
 
      });
  
      return getDetail;
    }
    getUsersByUserName(baseUrl,UserName1,UserName2,ID1,ID2) {
      let getUser1, getUser2,getId1,getId2;
     // let User1 = 'TwitterDev'
      //let User2 = 'TwitterNYC'
      cy.request({
        method: "GET",
  
        url: baseUrl +'by?usernames='+UserName1+','+UserName2,
        auth: {  bearer:
          "AAAAAAAAAAAAAAAAAAAAAI6wdAEAAAAAmCcWiKdmwvJ9EzbThKE0tjVsmZg%3DEuq8opMMHZeHVkw1xKxuimQJkZfV0sfSF39P3wuqe1h3YTQRzD"
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.not.be.empty;
        const convertToString = JSON.stringify(response.body);
        const getValue = JSON.parse(convertToString);
        getUser1 = getValue.data[0].username;
        expect(getUser1).to.equal(UserName1)
        getId1 = getValue.data[0].id;
        expect(parseInt(getId1)).to.equal(ID1)
        getUser2 = getValue.data[1].username;
        expect(getUser2).to.equal(UserName2)
        getId2 = getValue.data[1].id;
        expect(parseInt(getId2)).to.equal(ID2)
        });
      return getId1,getId2,getUser1,getUser2;
    }
  
    getUsersByUserNames(baseUrl,UserNames) {
      let getMessage;
      //let Users = ['twitter','twitterdev','twitterapi','twitternyc','twittersf','twittersafety','blackbirds','twitteruk','twittersupport','twittersports','twitterdesign','twitternews','twittermoments','twitterbusiness','nonprofits','twittervideo','twitterindia','twittertv','twitterkorea','twitterdata','twittergov','twitterir','twitteralas','twittersg','twittercanada','twitteross','twittereng','twitterstripes','twitterasians','policy','twitterid','twittergovjp','ukmoments','twittercomms','twittergaming','twittermena','officialpartner','twitterbooks','twitterretweets','twitterable','twittersre','momentsindia','twitterseguro','twittermiami','terns','jointheflockjp','twitterfashnjp','momentses','twitterthailand','momentsbrasil','twittervideoin','twittermusicjp','twittermktlatam','jointheflockbr','twittersportsjp','twitter','twitterdev','twitterapi','twitternyc','twittersf','twittersafety','blackbirds','twitteruk','twittersupport','twittersports','twitterdesign','twitternews','twittermoments','twitterbusiness','nonprofits','twittervideo','twitterindia','twittertv','twitterkorea','twitterdata','twittergov','twitterir','twitteralas','twittersg','twittercanada','twitteross','twittereng','twitterstripes','twitterasians','policy','twitterid','twittergovjp','ukmoments','twittercomms','twittergaming','twittermena','officialpartner','twitterbooks','twitterretweets','twitterable','twittersre','momentsindia','twitterseguro','twittermiami','terns','jointheflockjp','twitterfashnjp','momentses','twitterthailand','momentsbrasil','twittervideoin','twittermusicjp','twittermktlatam','jointheflockbr','twittersportsjp']
      cy.request({
        method: "GET",
  
        url: baseUrl +'by?usernames='+UserNames,
        failOnStatusCode: false,
   
        auth: {  bearer:
          "AAAAAAAAAAAAAAAAAAAAAI6wdAEAAAAAmCcWiKdmwvJ9EzbThKE0tjVsmZg%3DEuq8opMMHZeHVkw1xKxuimQJkZfV0sfSF39P3wuqe1h3YTQRzD"
        },
      }).then((response) => {
        expect(response.status).to.equal(400);
        expect(response.body).to.not.be.empty;
        const convertToString = JSON.stringify(response.body);
        const getValue = JSON.parse(convertToString);
        getMessage = getValue.errors[0].message;
        expect(getMessage).include("query parameter list [110] is not between 1 and 100")
       });
      return getMessage;
    }
  }
  export default userID;
  