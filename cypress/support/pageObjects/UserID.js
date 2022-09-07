class userID {
  

    getUserByID1(baseUrl,ID1,UserName1) {
      let getId,getUser;
      cy.request({
        method: "GET",
        url:baseUrl +ID1,
        auth: {  bearer:
          "AAAAAAAAAAAAAAAAAAAAAI6wdAEAAAAAmCcWiKdmwvJ9EzbThKE0tjVsmZg%3DEuq8opMMHZeHVkw1xKxuimQJkZfV0sfSF39P3wuqe1h3YTQRzD"
        },
      })
      .then((response) => {
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
    getUserByID2(baseUrl,ID5) {
      let getId, getError;
      cy.request({
        method: "GET",
        url: baseUrl + ID5,
        auth: {bearer:
          "AAAAAAAAAAAAAAAAAAAAAI6wdAEAAAAAmCcWiKdmwvJ9EzbThKE0tjVsmZg%3DEuq8opMMHZeHVkw1xKxuimQJkZfV0sfSF39P3wuqe1h3YTQRzD",
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.not.be.empty;
        const convertToString = JSON.stringify(response.body);
        const getValue = JSON.parse(convertToString);
        getId= getValue.errors[0].value;
        expect(parseInt(getId)).to.equal(ID5)
        getError = getValue.errors[0].title;
        expect(getError).to.equal("Not Found Error");
      });
  
      return getId,getError;
    }
    getUserByID3(baseUrl,InvalidID) {
      let getDetail;
      //let ID = 224493.94946;
      cy.request({
        method: "GET",
        url: baseUrl + InvalidID,
        failOnStatusCode: false,
  
        auth: {bearer:
          "AAAAAAAAAAAAAAAAAAAAAI6wdAEAAAAAmCcWiKdmwvJ9EzbThKE0tjVsmZg%3DEuq8opMMHZeHVkw1xKxuimQJkZfV0sfSF39P3wuqe1h3YTQRzD",
        },
      }).then((response) => {
        expect(response.status).to.equal(400);
        const convertToString = JSON.stringify(response.body);
        const getValue = JSON.parse(convertToString);
        getDetail = getValue.errors[0].message;
        expect(getDetail).include(
          "query parameter value [" + InvalidID + "] is not valid"
        );
      });
  
      return getDetail;
    }
    getUsersByID(baseUrl,ID1,ID2,UserName1,UserName2) {
      let getUser1, getUser2,getId1,getId2;
    //let ID1 = 2244994945;
     // let ID2 = 495309159;
      cy.request({
        method: "GET",
  
        url: baseUrl +'?ids='+ID1+ ','+ ID2,
        auth: {bearer:
          "AAAAAAAAAAAAAAAAAAAAAI6wdAEAAAAAmCcWiKdmwvJ9EzbThKE0tjVsmZg%3DEuq8opMMHZeHVkw1xKxuimQJkZfV0sfSF39P3wuqe1h3YTQRzD",
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.not.be.empty;
        const convertToString = JSON.stringify(response.body);
        const getValue = JSON.parse(convertToString);
        getId1 = getValue.data[0].id;
        getId2 = getValue.data[1].id;
        getUser1 = getValue.data[0].username;
        getUser2 = getValue.data[1].username;
        expect(parseInt(getId1)).to.equal(ID1)
        expect(parseInt(getId2)).to.equal(ID2)
        expect(getUser1).to.equal(UserName1)
        expect(getUser2).to.equal(UserName2)
       });
      return getId1,getId2,getUser1,getUser2;
    }
  
    getUsersByIDS(baseUrl,IDS) {
      let getMessage;
      //let IDS = [783214,2244994945,6253282,495309159,172020392,95731075,2548985366,277761722,17874544,300392950,87532773,372575989,3260518932,121291606,158079127,3282859598,103770785,586198217,216531294,1526228120,222953824,1603818258,2548979088,2244983430,1347713256,376825877,6844292,738118115595165697,738118487122419712,218984871,2550997820,1159458169,2296297326,234489024,3873936134,2228891959,791978718,427475002,1194267639100723200,1168976680867762177,905409822,738115375477362688,88723966,1049385226424786944,284201599,1705676064,2861317614,3873965293,1244731491088809984,4172587277,717465714357972992,862314223,2551000568,2548977510,1159274324,783214,2244994945,6253282,495309159,172020392,95731075,2548985366,277761722,17874544,300392950,87532773,372575989,3260518932,121291606,158079127,3282859598,103770785,586198217,216531294,1526228120,222953824,1603818258,2548979088,2244983430,1347713256,376825877,6844292,738118115595165697,738118487122419712,218984871,2550997820,1159458169,2296297326,234489024,3873936134,2228891959,791978718,427475002,1194267639100723200,1168976680867762177,905409822,738115375477362688,88723966,1049385226424786944,284201599,1705676064,2861317614,3873965293,1244731491088809984,4172587277,717465714357972992,862314223,2551000568,2548977510,1159274324]
      cy.request({
        method: "GET",
  
        url: baseUrl +'?ids='+IDS,
        failOnStatusCode: false,
  
        auth: {bearer:
          "AAAAAAAAAAAAAAAAAAAAAI6wdAEAAAAAmCcWiKdmwvJ9EzbThKE0tjVsmZg%3DEuq8opMMHZeHVkw1xKxuimQJkZfV0sfSF39P3wuqe1h3YTQRzD",
        },
      }).then((response) => {
        expect(response.status).to.equal(400);
        expect(response.body).to.not.be.empty;
        const convertToString = JSON.stringify(response.body);
        const getValue = JSON.parse(convertToString);
        getMessage = getValue.errors[0].message;
        expect(getMessage).include(
          "query parameter list [110] is not between 1 and 100")
       });
      return getMessage;
    }
  }
  export default userID;
  