'use strict';

export const Person = `
type Person @cacheControl(maxAge: 6000){
  id: Int
  name: String
  country : String
}`;