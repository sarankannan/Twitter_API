class authenticatedUser {

    getAuthenticatedUsers1(baseUrl,UserName1,UserName2,UserName3,UserName4,ID1,ID2,ID3,ID4) {
        let getUser1, getUser2,getUser3,getUser4,getUser5,getId1,getId2,getId3,getId4,getId5;
        //let User1 = 'Twitter'
       // let User2 = 'TwitterDev'
        //let User3 = 'TwitterAPI'
        //let User4 = 'TwitterNYC'
        //let User5 = 'TwitterSF'
        cy.request({
          method: "GET",
    
          url: baseUrl +'by?usernames='+UserName1+','+UserName2+','+UserName3+','+UserName4,
          auth: {  bearer:
            "AAAAAAAAAAAAAAAAAAAAAI6wdAEAAAAAmCcWiKdmwvJ9EzbThKE0tjVsmZg%3DEuq8opMMHZeHVkw1xKxuimQJkZfV0sfSF39P3wuqe1h3YTQRzD"
          },
        }).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.not.be.empty;
          const convertToString = JSON.stringify(response.body);
          const getValue = JSON.parse(convertToString);
          getUser1 = getValue.data[0].username;
          expect(getUser1).include(UserName1)
          getId1 = getValue.data[0].id;
          expect(parseInt(getId1)).to.equal(ID1)
          getUser2 = getValue.data[1].username;
          expect(getUser2).include(UserName2)
          getId2 = getValue.data[1].id;
          expect(parseInt(getId2)).to.equal(ID2)
          getUser3 = getValue.data[2].username;
          expect(getUser3).include(UserName3)
          getId3 = getValue.data[2].id;
          expect(parseInt(getId3)).to.equal(ID3)
          getUser4 = getValue.data[3].username;
          expect(getUser4).include(UserName4)
          getId4 = getValue.data[3].id;
          expect(parseInt(getId4)).to.equal(ID4)
          });
        return getId1,getId2,getId3,getId4,getId5,getUser1,getUser2,getUser3,getUser4,getUser5;
    }
    getAuthenticatedUsers2(baseUrl,UserName1,UserName2,UserName3,UserName4,UserName5,ID1,ID2,ID3,ID4) {
        let getUser1, getUser2,getUser3,getUser4,getUser5,getId1,getId2,getId3,getId4,getError;
       // let User1 = 'Twitter'
        //let User2 = 'TwitterDev'
        //let User3 = 'TwitterAPI'
        //let User4 = 'TwitterNYC'
       // let User5 = 'Twitterdevvvvv'
        cy.request({
          method: "GET",
    
          url: baseUrl +'by?usernames='+UserName1+','+UserName2+','+UserName3+','+UserName4+','+UserName5,
          auth: {  bearer:
            "AAAAAAAAAAAAAAAAAAAAAI6wdAEAAAAAmCcWiKdmwvJ9EzbThKE0tjVsmZg%3DEuq8opMMHZeHVkw1xKxuimQJkZfV0sfSF39P3wuqe1h3YTQRzD"
          },
        }).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.not.be.empty;
          const convertToString = JSON.stringify(response.body);
          const getValue = JSON.parse(convertToString);
          getUser1 = getValue.data[0].username;
          expect(getUser1).include(UserName1)
          getId1 = getValue.data[0].id;
          expect(parseInt(getId1)).to.equal(ID1)
          getUser2 = getValue.data[1].username;
          expect(getUser2).include(UserName2)
          getId2 = getValue.data[1].id;
          expect(parseInt(getId2)).to.equal(ID2)
          getUser3 = getValue.data[2].username;
          expect(getUser3).include(UserName3)
          getId3 = getValue.data[2].id;
          expect(parseInt(getId3)).to.equal(ID3)
          getUser4 = getValue.data[3].username;
          expect(getUser4).include(UserName4)
          getId4 = getValue.data[3].id;
          expect(parseInt(getId4)).to.equal(ID4)
          getUser5 = getValue.errors[0].value;
          expect(getUser5).include(UserName5)
          getError = getValue.errors[0].title;
          expect(getError).to.equal("Not Found Error");
      });
  return getId1,getId2,getId3,getId4,getUser1,getUser2,getUser3,getUser4,getUser5,getError;
    }
    getAuthenticatedUsers(baseUrl,UserNames) {
        let getMessage;
        //let Users = ['twitter','twitterdev','twitterapi','twitternyc','twittersf','twittersafety','blackbirds','twitteruk','twittersupport','twittersports','twitterdesign','twitternews','twittermoments','twitterbusiness','nonprofits','twittervideo','twitterindia','twittertv','twitterkorea','twitterdata','twittergov','twitterir','twitteralas','twittersg','twittercanada','twitteross','twittereng','twitterstripes','twitterasians','policy','twitterid','twittergovjp','ukmoments','twittercomms','twittergaming','twittermena','officialpartner','twitterbooks','twitterretweets','twitterable','twittersre','momentsindia','twitterseguro','twittermiami','terns','jointheflockjp','twitterfashnjp','momentses','twitterthailand','momentsbrasil','twittervideoin','twittermusicjp','twittermktlatam','jointheflockbr','twittersportsjp','twitter','twitterdev','twitterapi','twitternyc','twittersf','twittersafety','blackbirds','twitteruk','twittersupport','twittersports','twitterdesign','twitternews','twittermoments','twitterbusiness','nonprofits','twittervideo','twitterindia','twittertv','twitterkorea','twitterdata','twittergov','twitterir','twitteralas','twittersg','twittercanada','twitteross','twittereng','twitterstripes','twitterasians','policy','twitterid','twittergovjp','ukmoments','twittercomms','twittergaming','twittermena','officialpartner','twitterbooks','twitterretweets','twitterable','twittersre','momentsindia','twitterseguro','twittermiami','terns','jointheflockjp','twitterfashnjp','momentses','twitterthailand','momentsbrasil','twittervideoin','twittermusicjp','twittermktlatam','jointheflockbr','twittersportsjp']
        cy.request({
          method: "GET",
    
          url: baseUrl +'by?usernames='+UserNames,
          failOnStatusCode: false,
     auth:{  bearer:
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
  export default authenticatedUser;
  
