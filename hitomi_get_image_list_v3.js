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
case 1331:
case 2997:
case 1254:
case 1749:
case 903:
case 3681:
case 2053:
case 3712:
case 3259:
case 3182:
case 1785:
case 3271:
case 2565:
case 1115:
case 2957:
case 732:
case 224:
case 3290:
case 1441:
case 2531:
case 2617:
case 3569:
case 2641:
case 312:
case 3476:
case 1901:
case 2887:
case 3568:
case 646:
case 3796:
case 2255:
case 2711:
case 2812:
case 2181:
case 2633:
case 3415:
case 217:
case 4090:
case 1922:
case 683:
case 4022:
case 3201:
case 1433:
case 28:
case 1999:
case 2747:
case 2682:
case 1889:
case 1176:
case 2221:
case 3583:
case 2896:
case 408:
case 1618:
case 1845:
case 1959:
case 1971:
case 1343:
case 4071:
case 3141:
case 3406:
case 1430:
case 2540:
case 590:
case 2001:
case 359:
case 3434:
case 2585:
case 1438:
case 1057:
case 2384:
case 1439:
case 3072:
case 3661:
case 2549:
case 4093:
case 3356:
case 71:
case 2867:
case 950:
case 3312:
case 3588:
case 3635:
case 1097:
case 533:
case 1349:
case 3021:
case 721:
case 1953:
case 1832:
case 787:
case 692:
case 2059:
case 3095:
case 597:
case 2966:
case 1547:
case 2058:
case 462:
case 815:
case 3130:
case 1637:
case 1511:
case 3387:
case 3864:
case 2099:
case 2347:
case 957:
case 1086:
case 819:
case 3293:
case 2217:
case 1197:
case 190:
case 1825:
case 3486:
case 1800:
case 1694:
case 70:
case 2655:
case 3707:
case 2494:
case 3699:
case 3926:
case 144:
case 2336:
case 1808:
case 3622:
case 4014:
case 1914:
case 863:
case 3281:
case 1157:
case 1646:
case 2523:
case 2602:
case 2906:
case 3172:
case 8:
case 4042:
case 2446:
case 1402:
case 1536:
case 3671:
case 3918:
case 368:
case 1981:
case 1870:
case 2807:
case 809:
case 407:
case 197:
case 3242:
case 3874:
case 2199:
case 3573:
case 1752:
case 1878:
case 416:
case 2704:
case 3497:
case 734:
case 3777:
case 1879:
case 2198:
case 2976:
case 3724:
case 3102:
case 320:
case 1705:
case 1729:
case 3457:
case 2282:
case 3038:
case 431:
case 1226:
case 743:
case 3195:
case 1728:
case 788:
case 173:
case 1873:
case 647:
case 2193:
case 1213:
case 2327:
case 1375:
case 761:
case 2374:
case 3082:
case 2238:
case 2239:
case 1015:
case 3307:
case 799:
case 464:
case 3033:
case 3591:
case 3261:
case 913:
case 1723:
case 675:
case 471:
case 2552:
case 1328:
case 589:
case 418:
case 3525:
case 2516:
case 3693:
case 3017:
case 958:
case 1305:
case 1320:
case 3508:
case 2529:
case 1316:
case 2262:
case 216:
case 422:
case 2528:
case 2304:
case 774:
case 3653:
case 2081:
case 2505:
case 2520:
case 3913:
case 1237:
case 2054:
case 2046:
case 2363:
case 3462:
case 3511:
case 1387:
case 765:
case 2865:
case 3743:
case 514:
case 1767:
case 2094:
case 74:
case 1563:
case 618:
case 1293:
case 2113:
case 769:
case 104:
case 1864:
case 3086:
case 3860:
case 2831:
case 3438:
case 2380:
case 2634:
case 25:
case 2843:
case 1072:
case 703:
case 3439:
case 3993:
case 2137:
case 1661:
case 3430:
case 882:
case 845:
case 475:
case 1162:
case 126:
case 3765:
case 664:
case 2389:
case 2556:
case 1545:
case 3613:
case 3349:
case 2435:
case 3348:
case 568:
case 932:
case 2760:
case 849:
case 479:
case 155:
case 1344:
case 2769:
case 86:
case 1588:
case 1312:
case 3340:
case 3883:
case 2266:
case 3433:
case 1201:
case 2332:
case 3626:
case 2848:
case 2615:
case 2955:
case 2849:
case 3998:
case 4094:
case 160:
case 2885:
case 3990:
case 3845:
case 3618:
case 3959:
case 1884:
case 2414:
case 3619:
case 2995:
case 3880:
case 3066:
case 3971:
case 3343:
case 4054:
case 3889:
case 1642:
case 1787:
case 1954:
case 4046:
case 1946:
case 1117:
case 2297:
case 3176:
case 980:
case 2902:
case 342:
case 2763:
case 893:
case 3740:
case 279:
case 2368:
case 837:
case 1756:
case 2126:
case 2369:
case 1133:
case 3246:
case 3748:
case 167:
case 2360:
case 3254:
case 1250:
case 3749:
case 1847:
case 1681:
case 2119:
case 1569:
case 750:
case 3901:
case 3417:
case 112:
case 3863:
case 600:
case 2118:
case 1298:
case 1568:
case 2286:
case 3564:
case 2745:
case 45:
case 801:
case 1290:
case 3106:
case 987:
case 1560:
case 2676:
case 3076:
case 3961:
case 1509:
case 68:
case 1324:
case 3803:
case 617:
case 3328:
case 560:
case 3392:
case 2577:
case 3329:
case 3166:
case 1525:
case 2939:
case 662:
case 1836:
case 1913:
case 884:
case 1377:
case 3316:
case 351:
case 2823:
case 943:
case 3873:
case 3375:
case 2391:
case 2010:
case 57:
case 102:
case 2507:
case 1235:
case 90:
case 2019:
case 373:
case 610:
case 1261:
case 1033:
case 3527:
case 2351:
case 2234:
case 3723:
case 3015:
case 1307:
case 3878:
case 3752:
case 1573:
case 3421:
case 1777:
case 3879:
case 1155:
case 2709:
case 3981:
case 758:
case 1214:
case 2708:
case 114:
case 1242:
case 397:
case 2206:
case 3210:
case 2697:
case 1874:
case 2013:
case 1457:
case 1038:
case 1827:
case 1601:
case 3728:
case 1195:
case 504:
case 1102:
case 120:
case 1724:
case 2146:
case 0:
case 3705:
case 2657:
case 3720:
case 483:
case 1707:
case 3809:
case 4026:
case 1926:
case 1699:
case 1503:
case 3808:
case 1690:
case 526:
case 2422:
case 3323:
case 559:
case 2276:
case 3197:
case 876:
case 2498:
case 3800:
case 2816:
case 292:
case 2303:
case 1671:
case 4019:
case 1919:
case 2805:
case 3914:
case 2829:
case 2459:
case 1650:
case 999:
case 1281:
case 181:
case 2892:
case 2458:
case 2037:
case 2471:
case 3495:
case 3942:
case 4010:
case 127:
case 838:
case 713:
case 358:
case 864:
case 1355:
case 3559:
case 2595:
case 1932:
case 134:
case 2967:
case 2623:
case 1983:
case 2394:
case 853:
case 3603:
case 263:
case 677:
case 1395:
case 3269:
case 3599:
case 649:
case 1264:
case 580:
case 1302:
case 2231:
case 143:
case 2354:
case 790:
case 3040:
case 209:
case 1968:
case 1044:
case 1056:
case 3085:
case 902:
case 186:
case 10:
case 572:
case 49:
case 3964:
case 3048:
case 2572:
case 1960:
case 744:
case 3049:
case 3397:
case 3123:
case 1321:
case 2089:
case 205:
case 2103:
case 313:
case 2088:
case 1096:
case 521:
case 2521:
case 1372:
case 2080:
case 587:
case 2866:
case 1702:
case 2248:
case 2675:
case 1627:
case 4063:
case 1963:
case 454:
case 3105:
case 2240:
case 2427:
case 329:
case 3366:
case 3043:
case 637:
case 2285:
case 4:
case 3128:
case 2109:
case 3911:
case 3679:
case 2794:
case 3245:
case 2474:
case 3651:
case 2108:
case 3678:
case 1674:
case 2897:
case 325:
case 3152:
case 2100:
case 1177:
case 3947:
case 3786:
case 3670:
case 1755:
case 3288:
case 2032:
case 1211:
case 188:
case 4045:
case 241:
case 1492:
case 1429:
case 2620:
case 3757:
case 1871:
case 831:
case 1980:
case 1858:
case 4089:
case 1989:
case 2628:
case 405:
case 161:
case 2692:
case 2996:
case 1420:
case 3065:
case 1405:
case 1247:
case 1850:
case 1822:
case 2151:
case 816:
case 1721:
case 29:
case 1899:
case 3609:
case 3477:
case 2179:
case 532:
case 3263:
case 2616:
case 3894:
case 3625:
case 2170:
case 981:
case 1107:
case 199:
case 2912:
case 2068:
case 807:
case 2944:
case 2652:
case 927:
case 1604:
case 810:
case 3052:
case 3668:
case 223:
case 3203:
case 2541:
case 2025:
case 3669:
case 62:
case 2000:
case 2517:
case 2631:
case 1167:
case 678:
case 2008:
case 1341:
case 4073:
case 3029:
case 742:
case 1236:
case 3143:
case 3092:
case 574:
case 1739:
case 3837:
case 904:
case 3581:
case 636:
case 798:
case 3005:
case 3020:
case 1465:
case 3734:
case 2223:
case 1317:
case 588:
case 419:
case 2070:
case 252:
case 3467:
case 1519:
case 3273:
case 2326:
case 3936:
case 3315:
case 3813:
case 1382:
case 1518:
case 2168:
case 2078:
case 806:
case 1835:
case 3514:
case 959:
case 595:
case 2051:
case 1333:
case 561:
case 1510:
case 3542:
case 415:
case 2582:
case 2318:
case 1762:
case 2319:
case 1526:
case 2643:
case 93:
case 1903:
case 132:
case 2310:
case 684:
case 2533:
case 955:
case 599:
case 2091:
case 350:
case 3251:
case 2924:
case 1717:
case 3819:
case 3680:
case 676:
case 1684:
case 3496:
case 2163:
case 3645:
case 3279:
case 2484:
case 1741:
case 1338:
case 3810:
case 1842:
case 3689:
case 638:
case 1227:
case 1440:
case 2649:
case 3561:
case 2530:
case 3826:
case 2648:
case 2815:
case 3456:
case 1908:
case 3444:
case 2685:
case 1448:
case 423:
case 2640:
case 1449:
case 4025:
case 1900:
case 2977:
case 808:
case 2145:
case 3927:
case 1991:
case 928:
case 3208:
case 2710:
case 2180:
case 2252:
case 2719:
case 586:
case 967:
case 172:
case 2189:
case 2216:
case 303:
case 1362:
case 3148:
case 1733:
case 1978:
case 912:
case 4051:
case 1979:
case 3149:
case 1537:
case 2205:
case 2220:
case 1112:
case 2562:
case 452:
case 1647:
case 187:
case 1156:
case 1144:
case 2228:
case 3974:
case 1424:
case 2701:
case 395:
case 990:
case 3247:
case 1065:
case 883:
case 3420:
case 2393:
case 3211:
case 3859:
case 4084:
case 1984:
case 702:
case 3428:
case 1553:
case 3772:
case 2409:
case 1600:
case 2677:
case 550:
case 2940:
case 2408:
case 3604:
case 284:
case 933:
case 3452:
case 3822:
case 1797:
case 3899:
case 2948:
case 3721:
case 766:
case 2855:
case 1609:
case 2400:
case 1263:
case 1593:
case 1031:
case 3898:
case 129:
case 156:
case 2759:
case 2491:
case 278:
case 1043:
case 1129:
case 2758:
case 2872:
case 2256:
case 3795:
case 2244:
case 2771:
case 3124:
case 3702:
case 623:
case 3627:
case 1691:
case 125:
case 1152:
case 2821:
case 2799:
case 3674:
case 2722:
case 1289:
case 3755:
case 1670:
case 236:
case 2607:
case 3284:
case 1245:
case 1679:
case 1407:
case 4011:
case 374:
case 2790:
case 1280:
case 1678:
case 2557:
case 1048:
case 1964:
case 3960:
case 973:
case 3321:
case 1123:
case 2136:
case 3012:
case 3044:
case 2267:
case 2473:
case 2084:
case 2793:
case 781:
case 2301:
case 1232:
case 1673:
case 2965:
case 334:
case 565:
case 1550:
case 2398:
case 1386:
case 3355:
case 276:
case 2047:
case 1571:
case 3932:
case 3853:
case 1558:
case 3423:
case 714:
case 2322:
case 3594:
case 3087:
case 951:
case 2403:
case 411:
case 2358:
case 478:
case 1269:
case 3395:
case 720:
case 2943:
case 238:
case 1598:
case 1268:
case 2817:
case 372:
case 3204:
case 2277:
case 3196:
case 1225:
case 493:
case 759:
case 2975:
case 3991:
case 2714:
case 4027:
case 1706:
case 609:
case 2742:
case 2687:
case 2841:
case 1140:
case 3970:
case 3881:
case 2036:
case 3782:
case 3647:
case 3156:
case 387:
case 1715:
case 3978:
case 3733:
case 755:
case 270:
case 3951:
case 1023:
case 3537:
case 430:
case 1149:
case 3611:
case 605:
case 3979:
case 1535:
case 3339:
case 401:
case 2207:
case 989:
case 1688:
case 85:
case 2445:
case 3338:
case 3741:
case 2928:
case 1689:
case 1810:
case 1251:
case 245:
case 3187:
case 558:
case 1680:
case 2489:
case 1776:
case 3717:
case 2920:
case 1496:
case 835:
case 3684:
case 2905:
case 2361:
case 1818:
case 1279:
case 654:
case 3448:
case 2644:
case 2833:
case 3449:
case 169:
case 2916:
case 3900:
case 2335:
case 3925:
case 1561:
case 2882:
case 1291:
case 3227:
case 249:
case 3909:
case 26:
case 2534:
case 3485:
case 1826:
case 663:
case 3835:
case 728:
case 1514:
case 840:
case 470:
case 1683:
case 2923:
case 2432:
case 1542:
case 3510:
case 3007:
case 4036:
case 1315:
case 77:
case 2483:
case 641:
case 3518:
case 894:
case 2342:
case 712:
case 1306:
case 2838:
case 150:
case 2027:
case 2839:
case 3861:
case 1165:
case 332:
case 3903:
case 293:
case 3167:
case 529:
case 1660:
case 237:
case 46:
case 3664:
case 2468:
case 477:
case 2381:
case 2004:
case 1668:
case 1052:
case 2735:
case 3431:
case 1203:
case 3077:
case 1016:
case 3730:
case 2862:
case 445:
case 996:
case 2761:
case 157:
case 1734:
case 1143:
case 3236:
case 3738:
case 3973:
case 1837:
case 1389:
case 2434:
case 1556:
case 3585:
case 3638:
case 3001:
case 259:
case 226:
case 2162:
case 2396:
case 3639:
case 3549:
case 1137:
case 2661:
case 2072:
case 3630:
case 1380:
case 644:
case 3413:
case 428:
case 770:
case 2344:
case 2589:
case 633:
case 23:
case 2545:
case 84:
case 3764:
case 2021:
case 47:
case 592:
case 3437:
case 3071:
case 2095:
case 697:
case 782:
case 3059:
case 308:
case 803:
case 3050:
case 2387:
case 2002:
case 3161:
case 1054:
case 2130:
case 2055:
case 1732:
case 2864:
case 749:
case 3099:
case 3090:
case 3311:
case 460:
case 2563:
case 2293:
case 1113:
case 1094:
case 2767:
case 2681:
case 3053:
case 43:
case 2250:
case 2847:
case 673:
case 267:
case 1360:
case 3997:
case 3202:
case 2133:
case 1921:
case 3295:
case 730:
case 2271:
case 2744:
case 3565:
case 2258:
case 2811:
case 228:
case 2182:
case 1368:
case 455:
case 2712:
case 2259:
case 1676:
case 3531:
case 1780:
case 3142:
case 4072:
case 1110:
case 793:
case 1745:
case 3784:
case 919:
case 2298:
case 1118:
case 857:
case 2796:
case 2476:
case 212:
case 459:
case 426:
case 175:
case 2299:
case 194:
case 2415:
case 3426:
case 3272:
case 3633:
case 3844:
case 1840:
case 1257:
case 1383:
case 3812:
case 3181:
case 1849:
case 3747:
case 1955:
case 3986:
case 38:
case 3543:
case 737:
case 306:
case 1763:
case 3896:
case 3418:
case 2583:
case 2117:
case 1567:
case 1902:
case 2954:
case 701:
case 2532:
case 1442:
case 4095:
case 3410:
case 2884:
case 468:
case 1703:
case 1019:
case 2235:
case 1507:
case 1962:
case 427:
case 3042:
case 547:
case 2466:
case 3193:
case 1391:
case 481:
case 2551:
case 2578:
case 2307:
case 1370:
case 3736:
case 3238:
case 3374:
case 1378:
case 1234:
case 3153:
case 784:
case 1351:
case 2033:
case 146:
case 2261:
case 3575:
case 2591:
case 300:
case 3230:
case 575:
case 825:
case 594:
case 1577:
case 3516:
case 1773:
case 2324:
case 3934:
case 711:
case 4030:
case 2693:
case 778:
case 540:
case 3304:
case 954:
case 1453:
case 1823:
case 2377:
case 2913:
case 9:
case 3505:
case 3520:
case 1309:
case 414:
case 1524:
case 2836:
case 2653:
case 1816:
case 1498:
case 4033:
case 2121:
case 1933:
case 858:
case 2804:
case 364:
case 466:
case 2622:
case 2503:
case 3241:
case 1490:
case 2699:
case 3774:
case 3915:
case 3336:
case 55:
case 3494:
case 3655:
case 941:
case 4082:
case 1982:
case 227:
case 2910:
case 3906:
case 1828:
case 539:
case 281:
case 2281:
case 1892:
case 2650:
case 1791:
case 1829:
case 3727:
case 2918:
case 268:
case 1805:
case 1820:
case 3824:
case 2919:
case 3454:
case 2671:
case 3446:
case 3101:
case 2062:
case 192:
case 402:
case 1303:
case 3621:
case 2874:
case 3190:
case 1206:
case 1708:
case 2242:
case 214:
case 3807:
case 1709:
case 776:
case 2155:
case 2777:
case 1700:
case 3198:
case 3122:
case 322:
case 2497:
case 3199:
case 2573:
case 3035:
case 696:
case 3150:
case 813:
case 2030:
case 1154:
case 1146:
case 3233:
case 2102:
case 4017:
case 3976:
case 2724:
case 4041:
case 1941:
case 1373:
case 3171:
case 1215:
case 2038:
case 371:
case 3849:
case 2998:
case 1986:
case 3955:
case 1543:
case 3615:
case 945:
case 106:
case 2922:
case 982:
case 117:
case 1272:
case 3885:
case 723:
case 1633:
case 531:
case 1812:
case 289:
case 1181:
case 3840:
case 1711:
case 977:
case 2958:
case 1410:
case 2066:
case 96:
case 2343:
case 3995:
case 2880:
case 2618:
case 2950:
case 2888:
case 1221:
case 285:
case 3567:
case 516:
case 3297:
case 2176:
case 2610:
case 3606:
case 2889:
case 1295:
case 2115:
case 2785:
case 379:
case 602:
case 1053:
case 1364:
case 2254:
case 752:
case 2246:
case 1202:
case 1997:
case 1255:
case 2863:
case 3118:
case 500:
case 3789:
case 2417:
case 3119:
case 1641:
case 2365:
case 375:
case 3780:
case 1093:
case 1617:
case 3676:
case 3972:
case 3110:
case 124:
case 1114:
case 4057:
case 1784:
case 666:
case 1957:
case 1050:
case 3865:
case 2134:
case 2462:
case 442:
case 1161:
case 2511:
case 1437:
case 4066:
case 1966:
case 1059:
case 2743:
case 108:
case 498:
case 3113:
case 887:
case 489:
case 518:
case 3587:
case 571:
case 620:
case 3831:
case 2086:
case 1347:
case 1135:
case 296:
case 3345:
case 3137:
case 1630:
case 2439:
case 715:
case 1548:
case 3843:
case 3634:
case 3556:
case 3389:
case 3544:
case 1638:
case 930:
case 3461:
case 1540:
case 1639:
case 564:
case 2953:
case 993:
case 880:
case 719:
case 2584:
case 2613:
case 1764:
case 2097:
case 2349:
case 3768:
case 3596:
case 339:
case 681:
case 2340:
case 1867:
case 627:
case 3725:
case 3700:
case 2851:
case 451:
case 2421:
case 80:
case 2752:
case 886:
case 2219:
case 3013:
case 1621:
case 2210:
case 1190:
case 297:
case 911:
case 508:
case 1807:
case 3215:
case 3373:
case 2472:
case 754:
case 3875:
case 2792:
case 3657:
case 2720:
case 1150:
case 7:
case 3154:
case 1672:
case 3917:
case 1976:
case 4076:
case 3401:
case 3146:
case 153:
case 244:
case 1915:
case 1336:
case 1774:
case 1241:
case 1655:
case 2809:
case 3770:
case 1494:
case 3686:
case 834:
case 2455:
case 3816:
case 1877:
case 2694:
case 659:
case 1217:
case 290:
case 3933:
case 3778:
case 164:
case 3499:
case 3751:
case 473:
case 3820:
case 3450:
case 3805:
case 1695:
case 1454:
case 1824:
case 2402:
case 233:
case 1101:
case 2495:
case 1906:
case 655:
case 3828:
case 2646:
case 348:
case 2157:
case 3829:
case 1727:
case 3459:
case 3791:
case 705:
case 2775:
case 2803:
case 383:
case 1934:
case 4034:
case 976:
case 506:
case 2166:
case 2329:
case 888:
case 938:
case 2237:
case 562:
case 1520:
case 497:
case 1505:
case 899:
case 3308:
case 1081:
case 3823:
case 2352:
case 3453:
case 251:
case 116:
case 1529:
case 3300:
case 2316:
case 3391:
case 628:
case 1327:
case 1014:
case 2873:
case 2574:
case 667:
case 273:
case 3019:
case 741:
case 3507:
case 510:
case 2723:
case 612:
case 1153:
case 100:
case 490:
case 3379:
case 1230:
case 3026:
case 1374:
case 79:
case 1238:
case 1736:
case 2120:
case 2105:
case 1750:
case 3249:
case 922:
case 3987:
case 12:
case 3746:
case 3248:
case 2128:
case 1256:
case 2043:
case 537:
case 2129:
case 1759:
case 1212:
case 3427:
case 2678:
case 3474:
case 1790:
case 2911:
case 918:
case 501:
case 2679:
case 1470:
case 3794:
case 2407:
case 3109:
case 2786:
case 1479:
case 136:
case 1566:
case 3100:
case 2116:
case 1798:
case 3125:
case 1478:
case 1104:
case 1799:
case 3897:
case 1821:
case 953:
case 1895:
case 1624:
case 2757:
case 3191:
case 2175:
case 341:
case 1393:
case 2065:
case 3629:
case 3628:
case 2846:
case 964:
case 2424:
case 1949:
case 2031:
case 3179:
case 2593:
case 1400:
case 2609:
case 2477:
case 3886:
case 3178:
case 4048:
case 3151:
case 2608:
case 1353:
case 184:
case 3956:
case 4085:
case 1174:
case 1408:
case 3944:
case 3616:
case 3069:
case 2625:
case 1322:
case 2571:
case 2559:
case 2386:
case 258:
case 545:
case 3394:
case 2550:
case 931:
case 3623:
case 1390:
case 2598:
case 2268:
case 1359:
case 56:
case 1586:
case 881:
case 3173:
case 2599:
case 1358:
case 2603:
case 2522:
case 429:
case 3354:
case 2590:
case 3231:
case 3063:
case 2040:
case 1136:
case 3243:
case 2397:
case 2049:
case 1557:
case 1965:
case 2673:
case 1301:
case 900:
case 748:
case 820:
case 2283:
case 621:
case 3080:
case 1793:
case 1473:
case 1084:
case 3163:
case 2645:
case 457:
case 2496:
case 4020:
case 576:
case 3924:
case 2819:
case 2278:
case 98:
case 2334:
case 2680:
case 906:
case 1480:
case 1928:
case 4028:
case 4092:
case 1445:
case 291:
case 3484:
case 3073:
case 1696:
case 1929:
case 16:
case 1534:
case 1781:
case 3275:
case 2291:
case 1111:
case 3649:
case 1335:
case 4016:
case 83:
case 3640:
case 1644:
case 1952:
case 3538:
case 2904:
case 24:
case 1841:
case 3180:
case 1742:
case 3710:
case 2927:
case 2663:
case 3145:
case 3337:
case 1975:
case 4075:
case 2209:
case 3188:
case 2225:
case 3718:
case 1277:
case 3216:
case 2200:
case 3189:
case 2487:
case 315:
case 3252:
case 75:
case 3876:
case 3205:
case 739:
case 3447:
case 2023:
case 3228:
case 2715:
case 3726:
case 2974:
case 1036:
case 3907:
case 3292:
case 3411:
case 3541:
case 3025:
case 3000:
case 3132:
case 469:
case 794:
case 2203:
case 2052:
case 867:
case 2668:
case 1004:
case 87:
case 3008:
case 1468:
case 3183:
case 3713:
case 137:
case 3009:
case 1576:
case 3517:
case 2028:
case 491:
case 674:
case 2143:
case 3665:
case 2734:
case 2005:
case 2020:
case 1761:
case 812:
case 1862:
case 688:
case 1074:
case 1483:
case 3168:
case 3169:
case 3326:
case 3070:
case 352:
case 2467:
case 3160:
case 1506:
case 2131:
case 4023:
case 130:
case 2683:
case 779:
case 2514:
case 3078:
case 193:
case 403:
case 3319:
case 3643:
case 2165:
case 1515:
case 3318:
case 584:
case 1314:
case 250:
case 2075:
case 2321:
case 3931:
case 2960:
case 753:
case 3753:
case 20:
case 286:
case 3557:
case 515:
case 2968:
case 2012:
case 499:
case 2969:
case 1243:
case 1866:
case 3473:
case 1045:
case 3267:
case 519:
case 488:
case 3965:
case 2096:
case 3301:
case 461:
case 1103:
case 1089:
case 844:
case 2983:
case 691:
case 2546:
case 3011:
case 4067:
case 1623:
case 722:
case 234:
case 2853:
case 2932:
case 983:
case 3399:
case 2636:
case 376:
case 2355:
case 3398:
case 1354:
case 1346:
case 2302:
case 1231:
case 3403:
case 669:
case 771:
case 3350:
case 833:
case 2264:
case 1:
case 338:
case 3586:
case 1173:
case 3371:
case 3943:
case 2395:
case 163:
case 2247:
case 2850:
case 1996:
case 1692:
case 1628:
case 295:
case 3802:
case 2989:
case 2772:
case 2858:
case 3624:
case 2871:
case 2980:
case 1605:
case 2859:
case 3127:
case 3393:
case 2945:
case 2211:
case 2890:
case 2604:
case 1956:
case 4056:
case 1944:
case 4044:
case 1652:
case 1068:
case 3174:
case 299:
case 948:
case 3940:
case 1069:
case 1616:
case 700:
case 3949:
case 3425:
case 1886:
case 1060:
case 3400:
case 3855:
case 1404:
case 40:
case 851:
case 2822:
case 1151:
case 3256:
case 1427:
case 3212:
case 1857:
case 2627:
case 873:
case 443:
case 2963:
case 523:
case 1249:
case 1754:
case 4087:
case 2801:
case 2702:
case 1248:
case 2124:
case 3479:
case 3607:
case 707:
case 2755:
case 1125:
case 3798:
case 3296:
case 1100:
case 3722:
case 3478:
case 657:
case 1897:
case 3799:
case 3451:
case 1108:
case 1474:
case 3470:
case 2067:
case 2284:
case 1109:
case 434:
case 3506:
case 330:
case 3667:
case 2333:
case 1079:
case 41:
case 95:
case 2519:
case 1326:
case 1169:
case 541:
case 421:
case 3314:
case 1737:
case 3839:
case 3838:
case 1310:
case 898:
case 724:
case 393:
case 1834:
case 3515:
case 1643:
case 2762:
case 59:
case 1582:
case 2861:
case 629:
case 3468:
case 3381:
case 2664:
case 1009:
case 3469:
case 337:
case 78:
case 2167:
case 1541:
case 123:
case 480:
case 3735:
case 3004:
case 1223:
case 2317:
case 762:
case 2465:
case 2739:
case 2973:
case 2738:
case 1188:
case 1216:
case 2204:
case 1876:
case 115:
case 3841:
case 3975:
case 1145:
case 3714:
case 3184:
case 2144:
case 1228:
case 3036:
case 2782:
case 1411:
case 119:
case 1292:
case 4007:
case 221:
case 2881:
case 1562:
case 1205:
case 2611:
case 613:
case 2951:
case 2733:
case 21:
case 2842:
case 2274:
case 2741:
case 3992:
case 3445:
case 3207:
case 2814:
case 3696:
case 3929:
case 1484:
case 3361:
case 3488:
case 658:
case 2330:
case 708:
case 3489:
case 1924:
case 4077:
case 1977:
case 554:
case 1640:
case 3612:
case 280:
case 1538:
case 3952:
case 2908:
case 1815:
case 36:
case 1530:
case 3882:
case 563:
case 349:
case 2227:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1747814401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,];
var gg_b = "1747814401/";

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
