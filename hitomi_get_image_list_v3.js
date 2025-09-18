// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 1;
switch (g) {
case 1447:
case 2950:
case 1989:
case 1326:
case 1995:
case 2118:
case 1215:
case 704:
case 2593:
case 2739:
case 2376:
case 2284:
case 1424:
case 4024:
case 2710:
case 3515:
case 2423:
case 384:
case 1014:
case 1126:
case 3754:
case 622:
case 1594:
case 2318:
case 1283:
case 1645:
case 3914:
case 1473:
case 176:
case 3706:
case 3735:
case 2085:
case 3294:
case 238:
case 3583:
case 3425:
case 2398:
case 1514:
case 692:
case 2656:
case 2742:
case 574:
case 3188:
case 1820:
case 2019:
case 3214:
case 2372:
case 2870:
case 3861:
case 2604:
case 2599:
case 3780:
case 2030:
case 1122:
case 2198:
case 2250:
case 1289:
case 2429:
case 3388:
case 3644:
case 517:
case 2337:
case 2093:
case 17:
case 2848:
case 3589:
case 2172:
case 2984:
case 3015:
case 470:
case 3702:
case 4094:
case 2207:
case 3273:
case 263:
case 2523:
case 2975:
case 1112:
case 2430:
case 286:
case 2111:
case 3224:
case 2029:
case 1547:
case 312:
case 1839:
case 1524:
case 1312:
case 629:
case 3766:
case 1196:
case 47:
case 3247:
case 1810:
case 2687:
case 3279:
case 2074:
case 1140:
case 1047:
case 2391:
case 2413:
case 1116:
case 1024:
case 3638:
case 3181:
case 2328:
case 2841:
case 1178:
case 2023:
case 1842:
case 2275:
case 2907:
case 1414:
case 3697:
case 2720:
case 2191:
case 2499:
case 1770:
case 1225:
case 3859:
case 1073:
case 2222:
case 2481:
case 3717:
case 2189:
case 522:
case 3572:
case 3399:
case 308:
case 1918:
case 2809:
case 3385:
case 3113:
case 4082:
case 3598:
case 198:
case 3957:
case 3018:
case 3521:
case 976:
case 3537:
case 2926:
case 665:
case 1350:
case 3199:
case 1852:
case 3313:
case 251:
case 3491:
case 3185:
case 1400:
case 833:
case 3666:
case 160:
case 2588:
case 3849:
case 2803:
case 3411:
case 3877:
case 826:
case 1367:
case 3119:
case 2226:
case 201:
case 1384:
case 2764:
case 2088:
case 3738:
case 617:
case 3193:
case 592:
case 2922:
case 147:
case 674:
case 3832:
case 1998:
case 3797:
case 2620:
case 89:
case 1557:
case 1218:
case 3662:
case 1972:
case 466:
case 3843:
case 3098:
case 637:
case 3021:
case 3960:
case 1670:
case 1086:
case 241:
case 3591:
case 1500:
case 3011:
case 2278:
case 2646:
case 2752:
case 3528:
case 591:
case 1291:
case 793:
case 2610:
case 1911:
case 1228:
case 4060:
case 1375:
case 1709:
case 755:
case 3472:
case 447:
case 890:
case 1745:
case 3129:
case 397:
case 166:
case 3498:
case 3606:
case 348:
case 1641:
case 1082:
case 1307:
case 73:
case 157:
case 2081:
case 820:
case 2863:
case 2642:
case 2916:
case 3418:
case 327:
case 3680:
case 2704:
case 3323:
case 2633:
case 252:
case 1634:
case 385:
case 3744:
case 2978:
case 3511:
case 3476:
case 2212:
case 521:
case 3286:
case 1864:
case 2992:
case 1928:
case 1211:
case 3123:
case 599:
case 1284:
case 1739:
case 893:
case 1013:
case 3649:
case 118:
case 3584:
case 836:
case 2447:
case 2651:
case 1267:
case 685:
case 2326:
case 3913:
case 2215:
case 1746:
case 1519:
case 1530:
case 138:
case 1099:
case 2014:
case 2126:
case 790:
case 3230:
case 3999:
case 2609:
case 2283:
case 1019:
case 901:
case 3475:
case 3360:
case 1599:
case 1604:
case 697:
case 1585:
case 3759:
case 1030:
case 2322:
case 2514:
case 3632:
case 3919:
case 1742:
case 3299:
case 2094:
case 2820:
case 1321:
case 3930:
case 1337:
case 3701:
case 823:
case 1790:
case 2755:
case 1984:
case 1172:
case 1093:
case 27:
case 3550:
case 2171:
case 1513:
case 2479:
case 1198:
case 2122:
case 2295:
case 512:
case 1250:
case 1967:
case 2289:
case 1429:
case 1121:
case 3213:
case 2112:
case 2658:
case 3186:
case 4030:
case 1430:
case 3835:
case 337:
case 2925:
case 4019:
case 2396:
case 941:
case 3223:
case 1111:
case 845:
case 374:
case 1207:
case 3854:
case 3665:
case 658:
case 2839:
case 531:
case 3274:
case 3386:
case 2079:
case 2196:
case 1311:
case 1493:
case 2810:
case 902:
case 1574:
case 2669:
case 3484:
case 2890:
case 3182:
case 2579:
case 3229:
case 1855:
case 18:
case 2116:
case 418:
case 2024:
case 3802:
case 1328:
case 1687:
case 1834:
case 952:
case 2378:
case 4085:
case 3382:
case 949:
case 2833:
case 519:
case 3575:
case 2770:
case 3761:
case 2225:
case 3880:
case 2192:
case 3708:
case 2340:
case 1841:
case 1275:
case 608:
case 2663:
case 1907:
case 1720:
case 527:
case 1845:
case 1271:
case 3440:
case 2298:
case 1195:
case 4081:
case 918:
case 2150:
case 1809:
case 3765:
case 2560:
case 3416:
case 3571:
case 2918:
case 173:
case 548:
case 2221:
case 2482:
case 3114:
case 3026:
case 2237:
case 260:
case 3478:
case 1588:
case 321:
case 1395:
case 2769:
case 109:
case 1389:
case 1851:
case 3288:
case 585:
case 2384:
case 1764:
case 2937:
case 391:
case 3194:
case 159:
case 2367:
case 1803:
case 3844:
case 3988:
case 441:
case 2486:
case 101:
case 1183:
case 1315:
case 402:
case 2184:
case 2972:
case 142:
case 597:
case 3394:
case 228:
case 3661:
case 2804:
case 3608:
case 2998:
case 1922:
case 1620:
case 2763:
case 3831:
case 1115:
case 632:
case 2060:
case 2218:
case 3071:
case 1383:
case 2291:
case 3653:
case 1639:
case 3578:
case 2911:
case 1610:
case 2228:
case 631:
case 1292:
case 3379:
case 3705:
case 141:
case 401:
case 459:
case 804:
case 1278:
case 1646:
case 3592:
case 1858:
case 102:
case 611:
case 2582:
case 3179:
case 2460:
case 3471:
case 392:
case 2375:
case 283:
case 3096:
case 207:
case 1581:
case 619:
case 1916:
case 3040:
case 3743:
case 3981:
case 152:
case 2457:
case 3124:
case 1940:
case 684:
case 3732:
case 3596:
case 3897:
case 2307:
case 1081:
case 1756:
case 98:
case 639:
case 1212:
case 26:
case 2991:
case 2864:
case 3601:
case 3426:
case 2928:
case 1992:
case 3838:
case 2211:
case 3324:
case 3512:
case 2634:
case 2703:
case 3777:
case 2000:
case 2107:
case 3173:
case 854:
case 149:
case 3668:
case 3107:
case 2173:
case 509:
case 1511:
case 2668:
case 1476:
case 2512:
case 2324:
case 3703:
case 1091:
case 551:
case 3887:
case 3928:
case 1602:
case 2347:
case 1123:
case 3211:
case 680:
case 1727:
case 3991:
case 2601:
case 1286:
case 1374:
case 2596:
case 1731:
case 3307:
case 2373:
case 3457:
case 148:
case 573:
case 3641:
case 2732:
case 3082:
case 2981:
case 2659:
case 1323:
case 795:
case 638:
case 2040:
case 1418:
case 1174:
case 3709:
case 1865:
case 1472:
case 3375:
case 307:
case 779:
case 3582:
case 2179:
case 8:
case 2817:
case 3460:
case 458:
case 2471:
case 1606:
case 1635:
case 197:
case 366:
case 2281:
case 1282:
case 3745:
case 2540:
case 3175:
case 1011:
case 1528:
case 4037:
case 2592:
case 703:
case 2379:
case 501:
case 2736:
case 2705:
case 3086:
case 3751:
case 3911:
case 3228:
case 2749:
case 3291:
case 1329:
case 1797:
case 3921:
case 3763:
case 663:
case 3060:
case 3557:
case 3856:
case 2071:
case 1072:
case 1193:
case 2608:
case 347:
case 1021:
case 2394:
case 3804:
case 2661:
case 835:
case 3670:
case 1518:
case 1662:
case 3184:
case 1843:
case 840:
case 2844:
case 541:
case 1130:
case 1393:
case 3367:
case 1411:
case 4011:
case 1877:
case 275:
case 291:
case 815:
case 2194:
case 229:
case 3276:
case 2827:
case 3852:
case 919:
case 3400:
case 1313:
case 485:
case 1428:
case 4028:
case 1836:
case 1537:
case 549:
case 867:
case 1849:
case 984:
case 2478:
case 1666:
case 3976:
case 2765:
case 1399:
case 108:
case 2416:
case 1385:
case 3298:
case 1572:
case 1957:
case 398:
case 1260:
case 2440:
case 85:
case 1521:
case 2522:
case 3272:
case 673:
case 3663:
case 1973:
case 1697:
case 881:
case 3833:
case 2923:
case 3073:
case 3192:
case 2382:
case 1762:
case 3378:
case 651:
case 265:
case 1924:
case 1638:
case 1181:
case 3890:
case 2300:
case 2229:
case 3024:
case 3116:
case 601:
case 112:
case 3547:
case 3846:
case 877:
case 659:
case 1224:
case 997:
case 3196:
case 217:
case 1247:
case 2467:
case 3810:
case 1415:
case 2929:
case 3312:
case 3524:
case 1766:
case 889:
case 2665:
case 3494:
case 1617:
case 237:
case 2507:
case 2806:
case 2835:
case 3573:
case 3925:
case 2075:
case 2223:
case 1483:
case 4083:
case 3658:
case 642:
case 411:
case 3915:
case 2213:
case 3295:
case 3122:
case 412:
case 2993:
case 3603:
case 1015:
case 724:
case 2160:
case 3171:
case 131:
case 3479:
case 2701:
case 3755:
case 37:
case 1589:
case 2550:
case 3983:
case 3094:
case 1188:
case 3514:
case 2632:
case 1808:
case 2919:
case 4025:
case 761:
case 3741:
case 432:
case 2360:
case 602:
case 1861:
case 1780:
case 2643:
case 2475:
case 1754:
case 769:
case 3609:
case 3283:
case 3594:
case 3126:
case 2219:
case 1706:
case 1735:
case 652:
case 119:
case 3645:
case 2407:
case 3473:
case 2913:
case 3215:
case 2584:
case 3989:
case 3995:
case 2605:
case 2649:
case 1515:
case 794:
case 3424:
case 58:
case 908:
case 2567:
case 2866:
case 139:
case 1089:
case 2753:
case 1095:
case 3992:
case 1426:
case 1347:
case 824:
case 3212:
case 2374:
case 1601:
case 2744:
case 2028:
case 349:
case 1777:
case 1512:
case 1324:
case 2091:
case 1981:
case 1659:
case 676:
case 2323:
case 352:
case 3916:
case 1040:
case 598:
case 1743:
case 2982:
case 2174:
case 1373:
case 3081:
case 1596:
case 3756:
case 1124:
case 1016:
case 248:
case 3940:
case 302:
case 4022:
case 1281:
case 2606:
case 2498:
case 2282:
case 3216:
case 1540:
case 3858:
case 528:
case 2129:
case 2865:
case 192:
case 547:
case 1096:
case 1179:
case 1817:
case 1516:
case 4071:
case 3610:
case 1578:
case 3125:
case 3292:
case 974:
case 2986:
case 1653:
case 67:
case 1592:
case 3869:
case 341:
case 2591:
case 1379:
case 1661:
case 3971:
case 2662:
case 342:
case 1022:
case 2843:
case 3620:
case 2797:
case 2330:
case 3115:
case 2193:
case 492:
case 781:
case 3922:
case 507:
case 2319:
case 1608:
case 2832:
case 2738:
case 1194:
case 670:
case 1526:
case 1827:
case 301:
case 1844:
case 3315:
case 1412:
case 3183:
case 2411:
case 3803:
case 2576:
case 175:
case 3787:
case 3226:
case 56:
case 1026:
case 1478:
case 2666:
case 4078:
case 2199:
case 2313:
case 1288:
case 2491:
case 2537:
case 4092:
case 3395:
case 3926:
case 3851:
case 2076:
case 777:
case 3389:
case 2260:
case 2018:
case 4040:
case 714:
case 2521:
case 1314:
case 2598:
case 3845:
case 208:
case 373:
case 1765:
case 789:
case 2113:
case 164:
case 3222:
case 557:
case 2717:
case 1923:
case 735:
case 698:
case 1575:
case 1007:
case 3128:
case 1382:
case 740:
case 3191:
case 1100:
case 3499:
case 3023:
case 3275:
case 2525:
case 2973:
case 3841:
case 4050:
case 2489:
case 1450:
case 1802:
case 2181:
case 3391:
case 1300:
case 3664:
case 2801:
case 756:
case 922:
case 2868:
case 165:
case 3074:
case 2247:
case 3493:
case 1467:
case 4067:
case 3311:
case 2766:
case 2415:
case 706:
case 872:
case 2853:
case 1386:
case 4084:
case 3029:
case 2979:
case 75:
case 1507:
case 1806:
case 1223:
case 1075:
case 3430:
case 1186:
case 3207:
case 3523:
case 232:
case 3975:
case 2617:
case 1160:
case 2015:
case 2702:
case 231:
case 3337:
case 3790:
case 3093:
case 2589:
case 1067:
case 3172:
case 1768:
case 3429:
case 3121:
case 2644:
case 1677:
case 3967:
case 3250:
case 1084:
case 3599:
case 1360:
case 2083:
case 2780:
case 1759:
case 211:
case 750:
case 3030:
case 3019:
case 437:
case 4075:
case 1475:
case 3656:
case 3321:
case 474:
case 1930:
case 1285:
case 1919:
case 2425:
case 3398:
case 1632:
case 871:
case 3530:
case 2706:
case 3085:
case 2294:
case 1357:
case 338:
case 3176:
case 219:
case 3519:
case 2914:
case 4007:
case 1407:
case 879:
case 657:
case 1999:
case 3318:
case 3423:
case 7:
case 1219:
case 284:
case 318:
case 1157:
case 3739:
case 1567:
case 1050:
case 66:
case 2095:
case 1753:
case 465:
case 1913:
case 3474:
case 3746:
case 3267:
case 3950:
case 1605:
case 803:
case 330:
case 2503:
case 289:
case 3712:
case 471:
case 708:
case 994:
case 345:
case 4087:
case 1949:
case 837:
case 214:
case 1936:
case 1905:
case 1464:
case 1613:
case 2244:
case 1166:
case 310:
case 2463:
case 2614:
case 1243:
case 3532:
case 277:
case 626:
case 3796:
case 1556:
case 1857:
case 388:
case 2045:
case 3543:
case 2231:
case 3818:
case 2782:
case 3032:
case 3148:
case 578:
case 1362:
case 3465:
case 1056:
case 3904:
case 2361:
case 865:
case 2509:
case 2308:
case 1619:
case 961:
case 3043:
case 3740:
case 2458:
case 633:
case 2931:
case 1630:
case 3837:
case 2700:
case 2927:
case 758:
case 2551:
case 3348:
case 2469:
case 924:
case 281:
case 1249:
case 3792:
case 1236:
case 1693:
case 3778:
case 613:
case 1456:
case 4056:
case 1335:
case 2563:
case 443:
case 103:
case 2757:
case 1404:
case 3443:
case 2297:
case 282:
case 1629:
case 179:
case 962:
case 1886:
case 1587:
case 2069:
case 355:
case 2353:
case 2238:
case 316:
case 3811:
case 2403:
case 3287:
case 2679:
case 3726:
case 305:
case 2569:
case 1087:
case 1800:
case 3964:
case 3891:
case 3355:
case 4052:
case 2647:
case 2451:
case 1180:
case 3436:
case 3405:
case 3828:
case 1302:
case 1064:
case 2368:
case 1788:
case 2101:
case 2409:
case 3155:
case 1623:
case 2760:
case 3565:
case 785:
case 668:
case 1102:
case 3722:
case 2217:
case 472:
case 3134:
case 323:
case 1265:
case 3607:
case 2673:
case 304:
case 526:
case 3508:
case 2262:
case 1520:
case 1208:
case 4033:
case 1433:
case 3561:
case 2570:
case 2885:
case 3220:
case 892:
case 2966:
case 3468:
case 972:
case 59:
case 784:
case 2434:
case 2:
case 2349:
case 2779:
case 3895:
case 3626:
case 2336:
case 3889:
case 3109:
case 3401:
case 1327:
case 2143:
case 161:
case 2048:
case 1410:
case 2724:
case 513:
case 250:
case 2377:
case 3303:
case 2132:
case 1344:
case 943:
case 4039:
case 2962:
case 354:
case 2660:
case 1961:
case 1723:
case 2177:
case 3103:
case 533:
case 462:
case 3622:
case 124:
case 2819:
case 2332:
case 246:
case 1908:
case 3920:
case 2773:
case 3707:
case 1331:
case 1144:
case 2070:
case 732:
case 1953:
case 3939:
case 3612:
case 1046:
case 3568:
case 2202:
case 987:
case 3501:
case 1117:
case 1010:
case 2448:
case 3946:
case 1268:
case 1713:
case 4020:
case 2714:
case 3358:
case 1542:
case 3233:
case 925:
case 267:
case 1259:
case 2280:
case 3825:
case 3696:
case 2935:
case 3169:
case 2470:
case 821:
case 1317:
case 979:
case 162:
case 424:
case 206:
case 1785:
case 2954:
case 3616:
case 568:
case 2041:
case 2682:
case 995:
case 1959:
case 2980:
case 2235:
case 2794:
case 875:
case 3933:
case 891:
case 971:
case 1719:
case 3363:
case 829:
case 1730:
case 494:
case 1397:
case 3059:
case 3239:
case 2034:
case 2874:
case 3990:
case 1901:
case 2600:
case 2902:
case 1338:
case 3210:
case 1546:
case 3068:
case 590:
case 469:
case 953:
case 20:
case 1824:
case 1539:
case 1793:
case 235:
case 3001:
case 3163:
case 1197:
case 1510:
case 1968:
case 240:
case 2277:
case 3951:
case 3689:
case 3527:
case 3826:
case 114:
case 3695:
case 2936:
case 2905:
case 2613:
case 1244:
case 3544:
case 505:
case 53:
case 3711:
case 721:
case 1045:
case 523:
case 134:
case 2232:
case 9:
case 2685:
case 1231:
case 3945:
case 94:
case 1614:
case 4063:
case 2243:
case 3497:
case 644:
case 3531:
case 51:
case 2857:
case 1308:
case 3683:
case 3209:
case 4058:
case 2004:
case 1931:
case 1782:
case 536:
case 2943:
case 3245:
case 950:
case 1694:
case 3871:
case 3417:
case 2781:
case 3027:
case 2205:
case 2693:
case 2977:
case 3615:
case 3120:
case 1888:
case 1003:
case 2552:
case 3728:
case 3044:
case 1469:
case 946:
case 1917:
case 2404:
case 3263:
case 1297:
case 2354:
case 3718:
case 3958:
case 3139:
case 654:
case 1153:
case 3431:
case 3896:
case 3625:
case 3110:
case 203:
case 1757:
case 2564:
case 3969:
case 225:
case 3427:
case 2629:
case 279:
case 3812:
case 3339:
case 2886:
case 481:
case 2106:
case 1238:
case 884:
case 295:
case 811:
case 1624:
case 2788:
case 2800:
case 1569:
case 3390:
case 956:
case 3737:
case 1301:
case 545:
case 2452:
case 489:
case 3133:
case 1647:
case 4051:
case 2302:
case 915:
case 3840:
case 831:
case 1217:
case 4045:
case 1168:
case 3963:
case 1997:
case 1673:
case 3721:
case 2882:
case 3190:
case 3772:
case 940:
case 4009:
case 1409:
case 3517:
case 3816:
case 1760:
case 90:
case 3333:
case 1063:
case 3097:
case 2380:
case 294:
case 1136:
case 1105:
case 3562:
case 989:
case 623:
case 3152:
case 1570:
case 3618:
case 1885:
case 2814:
case 2442:
case 368:
case 3270:
case 4041:
case 914:
case 3725:
case 1305:
case 1779:
case 3402:
case 440:
case 897:
case 4055:
case 40:
case 1813:
case 390:
case 269:
case 63:
case 1966:
case 3248:
case 3676:
case 1434:
case 1349:
case 150:
case 1377:
case 1893:
case 1724:
case 2688:
case 2344:
case 2131:
case 2439:
case 320:
case 3884:
case 3948:
case 2446:
case 3637:
case 2327:
case 616:
case 1747:
case 3062:
case 1177:
case 2908:
case 3698:
case 3435:
case 981:
case 224:
case 1332:
case 146:
case 3621:
case 1773:
case 2331:
case 1830:
case 693:
case 467:
case 2020:
case 636:
case 885:
case 2894:
case 2723:
case 2879:
case 1555:
case 3234:
case 3789:
case 737:
case 2117:
case 450:
case 2010:
case 4048:
case 1448:
case 313:
case 2268:
case 1686:
case 982:
case 1534:
case 32:
case 1202:
case 1470:
case 3462:
case 3875:
case 262:
case 1365:
case 2785:
case 3006:
case 3035:
case 446:
case 3580:
case 1714:
case 1541:
case 1935:
case 1280:
case 115:
case 3187:
case 2719:
case 2873:
case 3080:
case 156:
case 610:
case 1041:
case 3164:
case 3554:
case 1235:
case 2138:
case 2959:
case 1980:
case 2042:
case 1794:
case 1823:
case 3934:
case 1055:
case 10:
case 2824:
case 2539:
case 2090:
case 3387:
case 2197:
case 3002:
case 400:
case 3715:
case 3466:
case 3955:
case 1874:
case 2901:
case 3364:
case 645:
case 2546:
case 2628:
case 1210:
case 3847:
case 3546:
case 2955:
case 923:
case 1239:
case 29:
case 3253:
case 2364:
case 2002:
case 500:
case 3968:
case 1246:
case 54:
case 1767:
case 3539:
case 2387:
case 3090:
case 1001:
case 1553:
case 2554:
case 144:
case 3138:
case 404:
case 226:
case 3959:
case 1933:
case 2164:
case 3873:
case 2535:
case 905:
case 1363:
case 1059:
case 2783:
case 1942:
case 2187:
case 3719:
case 634:
case 1233:
case 3542:
case 4008:
case 1408:
case 2054:
case 296:
case 3259:
case 851:
case 3533:
case 3799:
case 2006:
case 2035:
case 546:
case 955:
case 1559:
case 1169:
case 3317:
case 4061:
case 2241:
case 1910:
case 873:
case 1290:
case 1612:
case 993:
case 1939:
case 550:
case 3010:
case 1946:
case 1369:
case 1501:
case 3879:
case 2795:
case 1750:
case 3117:
case 3039:
case 3020:
case 2970:
case 2672:
case 3127:
case 154:
case 849:
case 2621:
case 1920:
case 3331:
case 1707:
case 2356:
case 1061:
case 682:
case 2062:
case 1103:
case 3908:
case 2435:
case 324:
case 2104:
case 2884:
case 3774:
case 2637:
case 3327:
case 4053:
case 1453:
case 3344:
case 1815:
case 55:
case 3439:
case 2867:
case 2566:
case 852:
case 290:
case 369:
case 2248:
case 910:
case 50:
case 2352:
case 3490:
case 535:
case 802:
case 1351:
case 2850:
case 1889:
case 841:
case 3261:
case 3520:
case 104:
case 3442:
case 1775:
case 2152:
case 1309:
case 556:
case 945:
case 1459:
case 353:
case 3623:
case 3102:
case 2258:
case 488:
case 2517:
case 2816:
case 123:
case 534:
case 2721:
case 2798:
case 2840:
case 2133:
case 430:
case 6:
case 1828:
case 371:
case 1405:
case 4005:
case 3800:
case 1964:
case 1891:
case 445:
case 105:
case 2737:
case 13:
case 3452:
case 1355:
case 2142:
case 514:
case 2269:
case 1987:
case 1334:
case 600:
case 3106:
case 3135:
case 116:
case 2310:
case 1477:
case 4077:
case 1811:
case 3629:
case 2776:
case 2444:
case 3886:
case 3154:
case 766:
case 1726:
case 325:
case 2969:
case 1432:
case 136:
case 4032:
case 2896:
case 387:
case 303:
case 278:
case 2017:
case 3456:
case 2431:
case 1443:
case 880:
case 3965:
case 193:
case 2718:
case 2146:
case 3404:
case 3552:
case 2728:
case 2044:
case 455:
case 3249:
case 1837:
case 1348:
case 3162:
case 2615:
case 2120:
case 2027:
case 3236:
case 3977:
case 3693:
case 2903:
case 1370:
case 2871:
case 1904:
case 2417:
case 2031:
case 436:
case 4065:
case 1465:
case 2245:
case 3362:
case 1716:
case 2683:
case 606:
case 3932:
case 3619:
case 493:
case 2531:
case 1204:
case 188:
case 41:
case 110:
case 1532:
case 2497:
case 3685:
case 372:
case 2909:
case 1818:
case 3504:
case 3232:
case 2544:
case 145:
case 405:
case 3487:
case 3949:
case 2711:
case 1712:
case 1876:
case 1005:
case 3464:
case 904:
case 1049:
case 640:
case 3277:
case 2203:
case 2689:
case 2527:
case 2826:
case 798:
case 2695:
case 2438:
case 1002:
case 4066:
case 340:
case 30:
case 1934:
case 335:
case 2001:
case 2692:
case 1628:
case 2210:
case 569:
case 847:
case 2784:
case 1364:
case 2990:
case 3600:
case 594:
case 1807:
case 1506:
case 1535:
case 3254:
case 2640:
case 1187:
case 315:
case 126:
case 3235:
case 3206:
case 3823:
case 3794:
case 2616:
case 1164:
case 3682:
case 3365:
case 4062:
case 306:
case 3954:
case 2461:
case 3470:
case 2233:
case 196:
case 3280:
case 2696:
case 2408:
case 1054:
case 3714:
case 1502:
case 898:
case 2053:
case 1789:
case 1234:
case 786:
case 3555:
case 1611:
case 420:
case 561:
case 3686:
case 2290:
case 2158:
case 2939:
case 2612:
case 3773:
case 2920:
case 1621:
case 2883:
case 1356:
case 3177:
case 433:
case 3332:
case 346:
case 3819:
case 1406:
case 1435:
case 1698:
case 3660:
case 2671:
case 603:
case 254:
case 496:
case 3343:
case 1454:
case 2453:
case 1156:
case 2815:
case 413:
case 3893:
case 3377:
case 1948:
case 3266:
case 679:
case 857:
case 1637:
case 2401:
case 3813:
case 3779:
case 1402:
case 738:
case 2895:
case 2626:
case 3305:
case 695:
case 1850:
case 866:
case 671:
case 883:
case 2468:
case 1676:
case 2561:
case 2775:
case 1152:
case 3899:
case 780:
case 2220:
case 3105:
case 2459:
case 718:
case 1562:
case 3657:
case 168:
case 1270:
case 1725:
case 2508:
case 2345:
case 99:
case 3445:
case 1721:
case 3997:
case 2722:
case 1798:
case 3558:
case 3217:
case 2134:
case 1333:
case 3063:
case 1097:
case 749:
case 1816:
case 1517:
case 2155:
case 1878:
case 3368:
case 1038:
case 2987:
case 2449:
case 926:
case 3624:
case 2334:
case 3451:
case 3938:
case 3159:
case 2436:
case 2405:
case 1892:
case 2828:
case 1390:
case 3301:
case 23:
case 1538:
case 1427:
case 4027:
case 1346:
case 2287:
case 3679:
case 996:
case 2726:
case 216:
case 2477:
case 2811:
case 1339:
case 1812:
case 3069:
case 2264:
case 1263:
case 1146:
case 382:
case 2432:
case 1896:
case 1597:
case 1110:
case 3757:
case 543:
case 178:
case 741:
case 2065:
case 1139:
case 4031:
case 742:
case 3888:
case 2549:
case 3944:
case 1903:
case 3161:
case 2170:
case 579:
case 381:
case 1728:
case 1044:
case 2536:
case 3700:
case 3927:
case 2077:
case 3551:
case 2348:
case 2684:
case 3458:
case 2956:
case 1683:
case 1320:
case 2821:
case 1822:
case 3545:
case 2904:
case 3361:
case 3509:
case 2370:
case 759:
case 1031:
case 587:
case 3782:
case 2032:
case 2148:
case 2716:
case 478:
case 2465:
case 870:
case 2256:
case 990:
case 3045:
case 2543:
case 288:
case 210:
case 3614:
case 1497:
case 595:
case 3244:
case 2952:
case 968:
case 1203:
case 4038:
case 1438:
case 1527:
case 245:
case 1544:
case 1711:
case 2876:
case 2577:
case 3051:
case 3786:
case 3227:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758178802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,];
var gg_b = "1758178802/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
