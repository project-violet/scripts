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
var o = 0;
switch (g) {
case 1038:
case 598:
case 2620:
case 3373:
case 221:
case 1244:
case 655:
case 110:
case 414:
case 557:
case 2771:
case 2726:
case 2845:
case 2647:
case 3261:
case 1843:
case 3609:
case 2591:
case 3006:
case 3371:
case 1775:
case 1432:
case 2410:
case 1439:
case 2773:
case 2787:
case 1767:
case 1595:
case 3263:
case 1091:
case 3838:
case 3294:
case 1229:
case 263:
case 3318:
case 2055:
case 575:
case 3728:
case 3716:
case 1053:
case 2008:
case 3610:
case 3174:
case 917:
case 1497:
case 2474:
case 322:
case 3230:
case 3109:
case 2553:
case 3102:
case 3447:
case 3254:
case 1051:
case 546:
case 2328:
case 1555:
case 2402:
case 830:
case 2120:
case 3853:
case 4056:
case 2574:
case 3638:
case 1964:
case 47:
case 3287:
case 649:
case 1700:
case 1993:
case 353:
case 2794:
case 2763:
case 405:
case 3151:
case 1606:
case 2451:
case 1765:
case 1002:
case 4049:
case 1938:
case 1009:
case 4024:
case 3436:
case 1991:
case 2097:
case 3271:
case 371:
case 3809:
case 3802:
case 939:
case 2509:
case 3153:
case 2761:
case 3385:
case 3226:
case 3394:
case 1329:
case 1719:
case 1712:
case 180:
case 484:
case 2754:
case 3653:
case 547:
case 2636:
case 3445:
case 645:
case 1010:
case 2908:
case 2145:
case 2216:
case 3354:
case 2464:
case 1106:
case 916:
case 820:
case 3810:
case 3330:
case 3193:
case 701:
case 2057:
case 2438:
case 300:
case 1951:
case 1539:
case 2161:
case 1619:
case 3461:
case 2351:
case 1444:
case 3919:
case 1257:
case 2736:
case 2194:
case 3485:
case 949:
case 2163:
case 1308:
case 1429:
case 3463:
case 2353:
case 2185:
case 666:
case 488:
case 3336:
case 262:
case 41:
case 687:
case 4013:
case 585:
case 3816:
case 2929:
case 2274:
case 1600:
case 3977:
case 537:
case 3587:
case 616:
case 323:
case 2887:
case 2391:
case 1706:
case 1677:
case 1875:
case 3793:
case 2694:
case 1743:
case 2338:
case 589:
case 504:
case 3571:
case 2826:
case 2818:
case 3220:
case 526:
case 2209:
case 3518:
case 2393:
case 3526:
case 2364:
case 1384:
case 1112:
case 2130:
case 1119:
case 3247:
case 3430:
case 2154:
case 2661:
case 9:
case 2251:
case 282:
case 468:
case 686:
case 3616:
case 3019:
case 667:
case 3628:
case 1928:
case 1175:
case 1357:
case 1916:
case 2187:
case 352:
case 3530:
case 2118:
case 3554:
case 3426:
case 1332:
case 2310:
case 4068:
case 1819:
case 474:
case 170:
case 1397:
case 527:
case 780:
case 3561:
case 2618:
case 2029:
case 333:
case 2022:
case 2747:
case 3077:
case 3083:
case 2291:
case 101:
case 2885:
case 3320:
case 2044:
case 3774:
case 2238:
case 2894:
case 2863:
case 1877:
case 3128:
case 515:
case 1295:
case 1529:
case 1522:
case 3594:
case 1800:
case 3116:
case 3081:
case 840:
case 2302:
case 536:
case 418:
case 1284:
case 2416:
case 2264:
case 2080:
case 1546:
case 1060:
case 758:
case 1501:
case 1762:
case 4045:
case 3723:
case 493:
case 1240:
case 12:
case 2896:
case 3805:
case 1970:
case 2649:
case 2642:
case 582:
case 3858:
case 2560:
case 3776:
case 3860:
case 911:
case 2558:
case 3721:
case 1286:
case 2414:
case 1503:
case 2266:
case 2323:
case 2505:
case 1459:
case 724:
case 1452:
case 3596:
case 2713:
case 3311:
case 868:
case 2470:
case 1848:
case 236:
case 2959:
case 2407:
case 2531:
case 294:
case 3107:
case 215:
case 3833:
case 3556:
case 2711:
case 4036:
case 3268:
case 2598:
case 942:
case 874:
case 1031:
case 3250:
case 2533:
case 3549:
case 1148:
case 2507:
case 86:
case 403:
case 3870:
case 1340:
case 2570:
case 2099:
case 3766:
case 285:
case 13:
case 3807:
case 3658:
case 1960:
case 707:
case 1704:
case 2433:
case 4047:
case 1772:
case 1779:
case 952:
case 2498:
case 4020:
case 2946:
case 3282:
case 734:
case 1592:
case 1599:
case 1386:
case 1070:
case 3211:
case 1788:
case 2935:
case 1537:
case 377:
case 204:
case 1933:
case 289:
case 75:
case 2052:
case 1401:
case 748:
case 3633:
case 226:
case 1446:
case 1552:
case 1559:
case 3213:
case 512:
case 450:
case 2514:
case 2458:
case 2037:
case 1931:
case 1480:
case 3631:
case 3160:
case 981:
case 1648:
case 1717:
case 888:
case 1237:
case 386:
case 3511:
case 2878:
case 1440:
case 72:
case 3798:
case 2668:
case 2331:
case 3988:
case 197:
case 329:
case 492:
case 2634:
case 652:
case 2811:
case 1179:
case 1172:
case 1259:
case 583:
case 2398:
case 1486:
case 2214:
case 2466:
case 1104:
case 531:
case 3917:
case 2190:
case 106:
case 2333:
case 3731:
case 1335:
case 990:
case 2207:
case 1117:
case 4087:
case 681:
case 2270:
case 1604:
case 572:
case 2521:
case 3758:
case 3876:
case 3062:
case 3069:
case 1023:
case 3666:
case 1672:
case 2360:
case 1076:
case 29:
case 2882:
case 2940:
case 4018:
case 2150:
case 2168:
case 2523:
case 3582:
case 3589:
case 4071:
case 2927:
case 1525:
case 1021:
case 3979:
case 1292:
case 3224:
case 3121:
case 971:
case 73:
case 402:
case 1615:
case 2421:
case 1337:
case 2613:
case 107:
case 2231:
case 899:
case 1169:
case 134:
case 430:
case 257:
case 1162:
case 2189:
case 2314:
case 2182:
case 2850:
case 1425:
case 3123:
case 196:
case 3489:
case 298:
case 1352:
case 2834:
case 2678:
case 279:
case 4054:
case 1235:
case 366:
case 1888:
case 2868:
case 3550:
case 387:
case 953:
case 2307:
case 335:
case 814:
case 642:
case 1923:
case 316:
case 3349:
case 4061:
case 2178:
case 1527:
case 623:
case 2111:
case 3623:
case 3411:
case 15:
case 1669:
case 1662:
case 1921:
case 3676:
case 2027:
case 3072:
case 1804:
case 661:
case 3079:
case 2749:
case 1280:
case 275:
case 3707:
case 2113:
case 2258:
case 20:
case 1203:
case 2040:
case 3770:
case 1586:
case 2890:
case 1976:
case 3621:
case 3296:
case 754:
case 2205:
case 2858:
case 3560:
case 2776:
case 3642:
case 4093:
case 365:
case 85:
case 3896:
case 2607:
case 114:
case 1369:
case 2389:
case 195:
case 2114:
case 941:
case 2670:
case 3414:
case 1159:
case 1152:
case 552:
case 1801:
case 3992:
case 1272:
case 319:
case 3080:
case 3321:
case 962:
case 2723:
case 1699:
case 788:
case 3782:
case 3789:
case 1096:
case 3124:
case 1192:
case 912:
case 3711:
case 1315:
case 327:
case 2833:
case 3533:
case 369:
case 2048:
case 2250:
case 178:
case 533:
case 807:
case 2234:
case 2898:
case 3470:
case 2831:
case 3713:
case 2449:
case 834:
case 1217:
case 336:
case 3142:
case 3959:
case 2378:
case 2390:
case 2:
case 1042:
case 4009:
case 4002:
case 2133:
case 105:
case 3433:
case 1899:
case 3824:
case 1892:
case 2524:
case 3366:
case 663:
case 1740:
case 2198:
case 17:
case 2289:
case 2282:
case 1269:
case 1262:
case 2131:
case 1996:
case 3276:
case 3431:
case 1372:
case 3903:
case 3790:
case 1603:
case 4074:
case 3849:
case 3842:
case 2658:
case 774:
case 3980:
case 385:
case 3696:
case 2807:
case 2605:
case 1786:
case 1024:
case 2766:
case 2368:
case 3196:
case 2105:
case 3514:
case 2948:
case 2213:
case 951:
case 2496:
case 1103:
case 3405:
case 84:
case 1852:
case 523:
case 2160:
case 2814:
case 480:
case 2631:
case 3059:
case 561:
case 3656:
case 1101:
case 613:
case 2211:
case 3768:
case 718:
case 3750:
case 326:
case 1146:
case 259:
case 2633:
case 1011:
case 714:
case 2356:
case 1186:
case 828:
case 3813:
case 2490:
case 308:
case 2798:
case 3756:
case 188:
case 286:
case 2511:
case 571:
case 3811:
case 1348:
case 3634:
case 2578:
case 1479:
case 229:
case 3650:
case 1735:
case 2988:
case 2823:
case 3940:
case 2434:
case 778:
case 3889:
case 39:
case 83:
case 2450:
case 1627:
case 347:
case 2224:
case 3927:
case 532:
case 217:
case 1562:
case 1701:
case 651:
case 1780:
case 2821:
case 2760:
case 3986:
case 2249:
case 2242:
case 1082:
case 3796:
case 2876:
case 1703:
case 3423:
case 1978:
case 77:
case 931:
case 2489:
case 838:
case 398:
case 3850:
case 1588:
case 2256:
case 357:
case 3189:
case 3233:
case 3868:
case 2550:
case 2017:
case 266:
case 1911:
case 2534:
case 2714:
case 174:
case 1752:
case 1759:
case 2121:
case 239:
case 2176:
case 3231:
case 1517:
case 3476:
case 1913:
case 1248:
case 375:
case 709:
case 2707:
case 3260:
case 1886:
case 2590:
case 2072:
case 784:
case 3027:
case 2296:
case 3205:
case 3890:
case 3113:
case 1415:
case 3178:
case 612:
case 844:
case 2342:
case 1840:
case 2969:
case 2962:
case 1989:
case 18:
case 1982:
case 3689:
case 2411:
case 3682:
case 2623:
case 3086:
case 3724:
case 1792:
case 972:
case 2004:
case 1827:
case 4058:
case 2110:
case 2674:
case 3538:
case 1200:
case 2893:
case 1541:
case 2371:
case 4005:
case 2326:
case 792:
case 2285:
case 363:
case 3593:
case 956:
case 1506:
case 4060:
case 1283:
case 1375:
case 1947:
case 321:
case 2387:
case 2891:
case 3095:
case 2006:
case 1920:
case 2602:
case 3718:
case 1281:
case 2261:
case 587:
case 685:
case 3845:
case 290:
case 3328:
case 3409:
case 637:
case 2254:
case 3316:
case 3553:
case 2102:
case 1212:
case 1219:
case 2230:
case 4033:
case 1808:
case 1855:
case 2420:
case 689:
case 243:
case 3008:
case 2716:
case 99:
case 870:
case 3551:
case 2851:
case 3474:
case 2174:
case 1036:
case 1639:
case 1197:
case 947:
case 2520:
case 2809:
case 3136:
case 2802:
case 567:
case 2436:
case 3645:
case 665:
case 1945:
case 1383:
case 2691:
case 2226:
case 3502:
case 2218:
case 2153:
case 1365:
case 2943:
case 957:
case 383:
case 4070:
case 1267:
case 2906:
case 730:
case 619:
case 998:
case 3574:
case 2638:
case 1020:
case 2874:
case 1381:
case 1897:
case 3763:
case 2941:
case 2151:
case 1729:
case 253:
case 1406:
case 2193:
case 946:
case 2651:
case 1319:
case 3228:
case 2354:
case 669:
case 3510:
case 4014:
case 2191:
case 3491:
case 615:
case 150:
case 3955:
case 517:
case 694:
case 232:
case 3636:
case 2445:
case 3353:
case 919:
case 1477:
case 3185:
case 2494:
case 2751:
case 497:
case 657:
case 1122:
case 3516:
case 3210:
case 880:
case 2828:
case 679:
case 362:
case 793:
case 2336:
case 44:
case 965:
case 1481:
case 3351:
case 1708:
case 3654:
case 2753:
case 1954:
case 211:
case 120:
case 341:
case 2919:
case 3818:
case 2220:
case 577:
case 675:
case 3826:
case 1087:
case 1073:
case 261:
case 2067:
case 3338:
case 2430:
case 3154:
case 1306:
case 559:
case 2526:
case 2454:
case 60:
case 3130:
case 994:
case 3209:
case 2518:
case 915:
case 1567:
case 2738:
case 2965:
case 2573:
case 1985:
case 927:
case 1575:
case 2983:
case 1071:
case 1963:
case 242:
case 1622:
case 1026:
case 3391:
case 1795:
case 3887:
case 969:
case 2418:
case 2554:
case 2426:
case 3118:
case 1519:
case 407:
case 3854:
case 2471:
case 102:
case 2012:
case 1054:
case 3251:
case 382:
case 1739:
case 2710:
case 252:
case 496:
case 656:
case 3187:
case 2487:
case 2473:
case 3863:
case 69:
case 1500:
case 3238:
case 1822:
case 3894:
case 904:
case 1829:
case 3885:
case 989:
case 3044:
case 1241:
case 3416:
case 3264:
case 1565:
case 2081:
case 647:
case 3293:
case 1061:
case 1987:
case 1973:
case 2594:
case 2347:
case 2563:
case 926:
case 750:
case 3374:
case 351:
case 1918:
case 1926:
case 3671:
case 1063:
case 1971:
case 2077:
case 3747:
case 2083:
case 3618:
case 3029:
case 1094:
case 3022:
case 281:
case 1844:
case 2702:
case 708:
case 2970:
case 1642:
case 2325:
case 920:
case 3152:
case 2503:
case 3159:
case 1266:
case 603:
case 1323:
case 3204:
case 395:
case 835:
case 2459:
case 1505:
case 3369:
case 314:
case 2060:
case 2546:
case 119:
case 1376:
case 2769:
case 1782:
case 3692:
case 1624:
case 3725:
case 22:
case 2058:
case 839:
case 2499:
case 399:
case 3315:
case 3288:
case 1124:
case 3192:
case 747:
case 3637:
case 1937:
case 1778:
case 443:
case 364:
case 3652:
case 866:
case 3659:
case 2033:
case 1952:
case 1407:
case 238:
case 136:
case 115:
case 1824:
case 3892:
case 453:
case 3135:
case 2007:
case 1901:
case 779:
case 3646:
case 2435:
case 3049:
case 2772:
case 3042:
case 825:
case 757:
case 3269:
case 37:
case 3601:
case 2225:
case 3740:
case 2386:
case 930:
case 798:
case 1366:
case 2592:
case 1903:
case 3372:
case 2958:
case 1431:
case 2327:
case 817:
case 1276:
case 1092:
case 3024:
case 2340:
case 185:
case 1980:
case 2704:
case 3603:
case 3103:
case 2559:
case 70:
case 1514:
case 2403:
case 829:
case 1196:
case 1460:
case 2480:
case 384:
case 867:
case 309:
case 2648:
case 2717:
case 1768:
case 2537:
case 1935:
case 104:
case 2014:
case 189:
case 2933:
case 1656:
case 1059:
case 1052:
case 746:
case 2998:
case 126:
case 3635:
case 3186:
case 1398:
case 940:
case 1466:
case 859:
case 2486:
case 3515:
case 108:
case 1190:
case 2748:
case 765:
case 602:
case 1813:
case 24:
case 388:
case 2237:
case 3934:
case 2440:
case 1878:
case 3013:
case 2688:
case 1331:
case 3735:
case 3968:
case 630:
case 3479:
case 1634:
case 258:
case 156:
case 1811:
case 2672:
case 2679:
case 3746:
case 1134:
case 3825:
case 3627:
case 1360:
case 2862:
case 2869:
case 769:
case 19:
case 1889:
case 1150:
case 1523:
case 2188:
case 1168:
case 36:
case 3569:
case 1305:
case 3562:
case 727:
case 855:
case 2021:
case 1927:
case 2292:
case 2299:
case 147:
case 1986:
case 2966:
case 3417:
case 1690:
case 2117:
case 4067:
case 8:
case 1521:
case 4075:
case 2301:
case 3082:
case 2023:
case 510:
case 1189:
case 2169:
case 234:
case 2425:
case 3737:
case 1850:
case 3462:
case 198:
case 296:
case 1611:
case 692:
case 1834:
case 1678:
case 2888:
case 4019:
case 4012:
case 785:
case 3759:
case 876:
case 2615:
case 3068:
case 1421:
case 2337:
case 903:
case 3913:
case 1476:
case 3050:
case 620:
case 3034:
case 1749:
case 4065:
case 4077:
case 4083:
case 1260:
case 1113:
case 950:
case 2399:
case 1205:
case 737:
case 2976:
case 38:
case 3989:
case 2923:
case 318:
case 3579:
case 726:
case 2527:
case 2201:
case 3827:
case 3625:
case 1111:
case 2066:
case 3792:
case 2662:
case 1682:
case 25:
case 605:
case 762:
case 2432:
case 833:
case 1538:
case 2767:
case 881:
case 3139:
case 3697:
case 3895:
case 2806:
case 988:
case 2091:
case 3506:
case 1997:
case 2595:
case 2222:
case 449:
case 3265:
case 163:
case 2584:
case 2841:
case 1564:
case 67:
case 1620:
case 340:
case 3543:
case 2457:
case 3367:
case 2244:
case 3157:
case 3947:
case 2064:
case 1647:
case 3281:
case 2093:
case 3920:
case 2843:
case 2508:
case 445:
case 1553:
case 1316:
case 1957:
case 548:
case 2555:
case 2051:
case 260:
case 3657:
case 684:
case 3855:
case 3808:
case 476:
case 1008:
case 4048:
case 2497:
case 96:
case 712:
case 974:
case 3300:
case 1645:
case 2991:
case 823:
case 54:
case 1761:
case 1509:
case 2455:
case 2781:
case 558:
case 3108:
case 3155:
case 1453:
case 614:
case 597:
case 3377:
case 3383:
case 3945:
case 695:
case 2329:
case 303:
case 2344:
case 3275:
case 2641:
case 1984:
case 2964:
case 183:
case 3722:
case 3729:
case 2783:
case 2777:
case 3047:
case 782:
case 3684:
case 3695:
case 3381:
case 2765:
case 1785:
case 773:
case 1464:
case 1228:
case 699:
case 1493:
case 2495:
case 3406:
case 1438:
case 2532:
case 2539:
case 172:
case 3441:
case 678:
case 280:
case 664:
case 2712:
case 1730:
case 2719:
case 3608:
case 2143:
case 1636:
case 1032:
case 2010:
case 1039:
case 2557:
case 3443:
case 1145:
case 350:
case 3122:
case 1163:
case 429:
case 2183:
case 1528:
case 2429:
case 832:
case 3483:
case 763:
case 1353:
case 486:
case 4015:
case 162:
case 3400:
case 1161:
case 3708:
case 1351:
case 2619:
case 3481:
case 1630:
case 674:
case 3930:
case 2444:
case 721:
case 3954:
case 1736:
case 1338:
case 3644:
case 2743:
case 4062:
case 964:
case 853:
case 1202:
case 1393:
case 528:
case 1871:
case 2119:
case 2112:
case 2395:
case 425:
case 3306:
case 291:
case 1154:
case 2681:
case 2600:
case 2741:
case 417:
case 3575:
case 618:
case 3567:
case 2665:
case 1685:
case 1873:
case 2706:
case 3795:
case 978:
case 2875:
case 3026:
case 3784:
case 3629:
case 3622:
case 3512:
case 2208:
case 2255:
case 1310:
case 843:
case 4088:
case 3757:
case 1251:
case 905:
case 487:
case 3030:
case 2357:
case 3467:
case 890:
case 330:
case 97:
case 783:
case 2167:
case 3739:
case 3797:
case 2667:
case 4004:
case 1885:
case 3500:
case 2877:
case 772:
case 2295:
case 3206:
case 3583:
case 3577:
case 2800:
case 2522:
case 173:
case 3987:
case 3973:
case 1302:
case 416:
case 1293:
case 1309:
case 1416:
case 1861:
case 1720:
case 2544:
case 2397:
case 4079:
case 3581:
case 1618:
case 1626:
case 1747:
case 3971:
case 4001:
case 2157:
case 1041:
case 1545:
case 1387:
case 1373:
case 2543:
case 3902:
case 1006:
case 4046:
case 3843:
case 2920:
case 3093:
case 3064:
case 94:
case 2139:
case 2895:
case 3767:
case 2200:
case 1043:
case 3439:
case 1371:
case 2884:
case 574:
case 3584:
case 1326:
case 997:
case 3222:
case 1838:
case 851:
case 2283:
case 958:
case 3091:
case 1263:
case 419:
case 3595:
case 3910:
case 469:
case 143:
case 3053:
case 723:
case 122:
case 628:
case 742:
case 2036:
case 427:
case 1610:
case 415:
case 654:
case 494:
case 58:
case 1254:
case 4035:
case 1447:
case 518:
case 436:
case 3508:
case 2219:
case 2212:
case 2808:
case 360:
case 3993:
case 2267:
case 752:
case 2020:
case 1638:
case 3344:
case 3938:
case 3002:
case 2695:
case 3606:
case 62:
case 1151:
case 1664:
case 1941:
case 2722:
case 153:
case 1693:
case 3074:
case 1802:
case 2744:
case 1809:
case 1520:
case 171:
case 51:
case 907:
case 3408:
case 1394:
case 1363:
case 2155:
case 2377:
case 2945:
case 1547:
case 1691:
case 0:
case 1385:
case 1943:
case 644:
case 3455:
case 2365:
case 1191:
case 380:
case 2655:
case 3712:
case 2857:
case 781:
case 4037:
case 3557:
case 250:
case 437:
case 3143:
case 3953:
case 638:
case 2312:
case 1651:
case 1164:
case 1810:
case 2195:
case 3106:
case 1138:
case 4059:
case 489:
case 3539:
case 100:
case 3951:
case 1461:
case 3028:
case 3619:
case 2481:
case 607:
case 2755:
case 2708:
case 1753:
case 408:
case 111:
case 2144:
case 1919:
case 3444:
case 57:
case 3165:
case 3429:
case 1494:
case 3422:
case 634:
case 3355:
case 3177:
case 2129:
case 2122:
case 1816:
case 1828:
case 3232:
case 1336:
case 2985:
case 2343:
case 1587:
case 1965:
case 2963:
case 648:
case 2071:
case 1345:
case 142:
case 3600:
case 2994:
case 1900:
case 1764:
case 3875:
case 65:
case 2026:
case 49:
case 2784:
case 3706:
case 2795:
case 509:
case 3867:
case 123:
case 1220:
case 1075:
case 2341:
case 1981:
case 1067:
case 161:
case 1430:
case 831:
case 790:
case 3395:
case 3119:
case 3384:
case 883:
case 2030:
case 1616:
case 753:
case 479:
case 2739:
case 152:
case 1710:
case 2475:
case 658:
case 3916:
case 514:
case 2467:
case 1487:
case 3175:
case 1473:
case 595:
case 230:
case 457:
case 3255:
case 1426:
case 1554:
case 2512:
case 3208:
case 2757:
case 3812:
case 771:
case 93:
case 1236:
case 3339:
case 3332:
case 1245:
case 3881:
case 1000:
case 2243:
case 1083:
case 2581:
case 1702:
case 3675:
case 3883:
case 3877:
case 564:
case 4086:
case 3865:
case 1320:
case 301:
case 2241:
case 700:
case 3284:
case 2061:
case 1585:
case 2565:
case 1081:
case 1116:
case 3800:
case 821:
case 3522:
case 1594:
case 3529:
case 446:
case 1128:
case 2583:
case 2577:
case 2801:
case 3227:
case 2272:
case 2279:
case 463:
case 3060:
case 3546:
case 2725:
case 32:
case 502:
case 3437:
case 3240:
case 2692:
case 2137:
case 1723:
case 3769:
case 3501:
case 3580:
case 1776:
case 1858:
case 1290:
case 1805:
case 4084:
case 1114:
case 295:
case 3452:
case 1596:
case 214:
case 2369:
case 421:
case 2942:
case 2949:
case 1721:
case 3325:
case 2056:
case 879:
case 3715:
case 3098:
case 1614:
case 3914:
case 725:
case 857:
case 1107:
case 2217:
case 338:
case 2548:
case 1378:
case 2192:
case 2835:
case 2637:
case 2315:
case 2288:
case 3492:
case 1556:
case 717:
case 1048:
case 278:
case 1250:
case 3535:
case 413:
case 3031:
case 1898:
case 1131:
case 1870:
case 155:
case 610:
case 739:
case 3905:
case 2996:
case 3958:
case 592:
case 2680:
case 3148:
case 847:
case 1542:
case 2379:
case 2603:
case 3960:
case 1605:
case 1766:
case 2024:
case 1390:
case 2727:
case 2646:
case 1133:
case 3007:
case 205:
case 2135:
case 2899:
case 3386:
case 3599:
case 1524:
case 3592:
case 2601:
case 27:
case 3225:
case 1198:
case 2262:
case 1282:
case 1289:
case 431:
case 2304:
case 3401:
case 177:
case 1698:
case 4057:
case 2101:
case 3014:
case 3446:
case 2635:
case 3998:
case 1633:
case 159:
case 735:
case 2317:
case 3931:
case 2215:
case 1158:
case 1213:
case 4039:
case 2103:
case 3559:
case 856:
case 1496:
case 3552:
case 3717:
case 3648:
case 2180:
case 1160:
case 284:
case 1814:
case 1350:
case 3480:
case 2950:
case 3688:
case 21:
case 2934:
case 1511:
case 3237:
case 3172:
case 749:
case 2479:
case 1988:
case 2968:
case 2515:
case 2011:
case 3104:
case 324:
case 3486:
case 1513:
case 2186:
case 3259:
case 670:
case 3748:
case 2078:
case 889:
case 3617:
case 3815:
case 3117:
case 1904:
case 1821:
case 2417:
case 745:
case 1249:
case 1666:
case 2686:
case 2089:
case 2082:
case 1876:
case 1434:
case 1823:
case 3862:
case 2746:
case 3076:
case 2825:
case 3380:
case 3679:
case 3292:
case 3303:
case 3299:
case 1979:
case 3525:
case 26:
case 1582:
case 2569:
case 117:
case 307:
case 3337:
case 1088:
case 593:
case 3615:
case 3817:
case 869:
case 1121:
case 755:
case 1915:
case 2248:
case 2125:
case 2462:
case 836:
case 1482:
case 396:
case 1489:
case 3425:
case 1123:
case 1568:
case 894:
case 815:
case 334:
case 3169:
case 187:
case 7:
case 1550:
case 166:
case 2911:
case 1017:
case 3527:
case 1342:
case 2840:
case 1478:
case 2989:
case 3246:
case 1962:
case 348:
case 35:
case 2799:
case 2792:
case 1623:
case 1004:
case 3201:
case 2625:
case 777:
case 1707:
case 4029:
case 4022:
case 2886:
case 1676:
case 3921:
case 3976:
case 1413:
case 691:
case 1770:
case 3203:
case 1324:
case 3399:
case 2415:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758279602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,];
var gg_b = "1758279602/";

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
