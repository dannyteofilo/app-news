import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  countries=[
    {country:'Argentina',id:'ar',urlImage:'https://newsapi.org/images/flags/ar.svg'},
    {country:'Australia',id:'au',urlImage:'https://newsapi.org/images/flags/au.svg'},
    {country:'Austria',id:'at',urlImage:'https://newsapi.org/images/flags/at.svg'},
    {country:'Belgium',id:'be',urlImage:'https://newsapi.org/images/flags/be.svg'},
    {country:'Brazil',id:'br',urlImage:'https://newsapi.org/images/flags/ar.svg'},
    {country:'Bulgaria',id:'bg',urlImage:'https://newsapi.org/images/flags/bg.svg'},
    {country:'Canada',id:'ca',urlImage:'https://newsapi.org/images/flags/ca.svg'},
    {country:'China',id:'cn',urlImage:'https://newsapi.org/images/flags/cn.svg'},
    {country:'Colombia',id:'co',urlImage:'https://newsapi.org/images/flags/co.svg'},
    {country:'Cuba',id:'cu',urlImage:'https://newsapi.org/images/flags/cu.svg'},
    {country:'Czech Republic',id:'cz',urlImage:'https://newsapi.org/images/flags/cz.svg'},
    {country:'Egypt',id:'eg',urlImage:'https://newsapi.org/images/flags/eg.svg'},
    {country:'France',id:'fr',urlImage:'https://newsapi.org/images/flags/fr.svg'},
    {country:'Germany',id:'de',urlImage:'https://newsapi.org/images/flags/de.svg'},
    {country:'Greece',id:'gr',urlImage:'https://newsapi.org/images/flags/gr.svg'},
    {country:'Hong Kong',id:'hk',urlImage:'https://newsapi.org/images/flags/hk.svg'},
    {country:'Hungary',id:'hu',urlImage:'https://newsapi.org/images/flags/hu.svg'},
    {country:'India',id:'in',urlImage:'https://newsapi.org/images/flags/in.svg'},
    {country:'Indonesia',id:'id',urlImage:'https://newsapi.org/images/flags/id.svg'},
    {country:'Ireland',id:'ie',urlImage:'https://newsapi.org/images/flags/ie.svg'},
    {country:'Israel',id:'il',urlImage:'https://newsapi.org/images/flags/il.svg'},
    {country:'italy',id:'it',urlImage:'https://newsapi.org/images/flags/it.svg'},
    {country:'Japan',id:'jp',urlImage:'https://newsapi.org/images/flags/jp.svg'},
    {country:'Latvia',id:'lv',urlImage:'https://newsapi.org/images/flags/lv.svg'},
    {country:'Lithuania',id:'lt',urlImage:'https://newsapi.org/images/flags/lt.svg'},
    {country:'Malaysia',id:'my',urlImage:'https://newsapi.org/images/flags/my.svg'},
    {country:'Mexico',id:'mx',urlImage:'https://newsapi.org/images/flags/mx.svg'},

  ]
  constructor() { }
}
