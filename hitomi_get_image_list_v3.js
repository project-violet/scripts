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
case 869:
case 1842:
case 1516:
case 2349:
case 2218:
case 3411:
case 3003:
case 1643:
case 808:
case 1751:
case 3432:
case 2440:
case 2025:
case 3048:
case 3275:
case 2095:
case 301:
case 1679:
case 3314:
case 224:
case 45:
case 2497:
case 2373:
case 1111:
case 2507:
case 2685:
case 3669:
case 1711:
case 2033:
case 2402:
case 438:
case 3451:
case 1732:
case 1265:
case 198:
case 2258:
case 914:
case 174:
case 2922:
case 3696:
case 2514:
case 1563:
case 1916:
case 974:
case 4067:
case 114:
case 3418:
case 3573:
case 2010:
case 3789:
case 1758:
case 655:
case 3240:
case 3937:
case 3392:
case 2165:
case 1601:
case 2475:
case 1956:
case 3322:
case 1380:
case 2077:
case 480:
case 13:
case 2907:
case 958:
case 651:
case 3202:
case 2251:
case 158:
case 3458:
case 190:
case 430:
case 1215:
case 107:
case 3623:
case 2837:
case 98:
case 2605:
case 1161:
case 2587:
case 4004:
case 907:
case 3619:
case 1374:
case 493:
case 2190:
case 3822:
case 3171:
case 306:
case 1880:
case 1953:
case 2790:
case 3771:
case 422:
case 2720:
case 3659:
case 1688:
case 3635:
case 429:
case 3461:
case 2644:
case 4045:
case 2268:
case 1239:
case 3892:
case 897:
case 2964:
case 1098:
case 1471:
case 587:
case 3693:
case 1768:
case 2036:
case 1599:
case 1220:
case 488:
case 949:
case 453:
case 4070:
case 2672:
case 372:
case 1300:
case 1553:
case 3814:
case 1930:
case 4057:
case 312:
case 3778:
case 2115:
case 2261:
case 3976:
case 3709:
case 379:
case 2060:
case 1646:
case 857:
case 2715:
case 1290:
case 1478:
case 4017:
case 1342:
case 3854:
case 1091:
case 1966:
case 2849:
case 2158:
case 2601:
case 3652:
case 1765:
case 1010:
case 3899:
case 1211:
case 39:
case 687:
case 763:
case 214:
case 3853:
case 1514:
case 3175:
case 1251:
case 1992:
case 1050:
case 2718:
case 1907:
case 2118:
case 23:
case 4086:
case 1077:
case 2380:
case 2956:
case 2151:
case 3797:
case 3102:
case 2643:
case 2751:
case 3702:
case 3197:
case 2516:
case 1427:
case 1914:
case 3830:
case 835:
case 2842:
case 401:
case 1592:
case 2732:
case 4048:
case 3289:
case 1033:
case 1876:
case 1402:
case 3624:
case 4003:
case 1373:
case 2111:
case 1497:
case 3363:
case 2679:
case 3127:
case 831:
case 1954:
case 924:
case 2800:
case 3866:
case 3727:
case 2556:
case 2:
case 3863:
case 2247:
case 881:
case 3942:
case 2300:
case 3017:
case 1672:
case 3662:
case 591:
case 1376:
case 1987:
case 3415:
case 1739:
case 2599:
case 250:
case 2409:
case 2768:
case 1036:
case 2529:
case 1849:
case 3057:
case 3330:
case 885:
case 2513:
case 3271:
case 2290:
case 3070:
case 3574:
case 2646:
case 1261:
case 3455:
case 3447:
case 2530:
case 3542:
case 1190:
case 836:
case 2374:
case 2161:
case 4083:
case 1605:
case 1837:
case 3420:
case 3209:
case 28:
case 322:
case 3353:
case 3500:
case 2913:
case 1747:
case 1964:
case 3856:
case 76:
case 393:
case 2239:
case 3974:
case 3004:
case 1120:
case 3182:
case 1720:
case 330:
case 3377:
case 3493:
case 3503:
case 3350:
case 1671:
case 3941:
case 593:
case 3661:
case 3435:
case 1123:
case 355:
case 2977:
case 2386:
case 40:
case 2950:
case 766:
case 2533:
case 2341:
case 2092:
case 3272:
case 351:
case 3419:
case 1056:
case 794:
case 1735:
case 2595:
case 814:
case 2682:
case 4080:
case 529:
case 3188:
case 2293:
case 605:
case 898:
case 1678:
case 778:
case 3333:
case 962:
case 3541:
case 3948:
case 231:
case 2162:
case 3395:
case 3244:
case 2014:
case 8:
case 1481:
case 395:
case 1063:
case 1384:
case 908:
case 3325:
case 601:
case 108:
case 3860:
case 2806:
case 2348:
case 969:
case 2995:
case 1870:
case 754:
case 3205:
case 3781:
case 2054:
case 3746:
case 2223:
case 235:
case 3651:
case 2226:
case 3743:
case 4000:
case 1030:
case 1357:
case 3708:
case 2485:
case 1231:
case 157:
case 3360:
case 2194:
case 672:
case 1769:
case 281:
case 538:
case 1408:
case 2640:
case 1252:
case 2124:
case 55:
case 2724:
case 3179:
case 3076:
case 2296:
case 850:
case 3833:
case 849:
case 2960:
case 765:
case 3101:
case 2152:
case 1053:
case 2269:
case 396:
case 1238:
case 2752:
case 1796:
case 197:
case 1196:
case 1304:
case 403:
case 2841:
case 4074:
case 1591:
case 1998:
case 59:
case 580:
case 3877:
case 770:
case 890:
case 2560:
case 1294:
case 807:
case 710:
case 3506:
case 2481:
case 4049:
case 3288:
case 1235:
case 519:
case 1762:
case 65:
case 824:
case 2817:
case 491:
case 2446:
case 3172:
case 1925:
case 3772:
case 262:
case 2609:
case 135:
case 935:
case 3891:
case 1054:
case 3462:
case 2870:
case 1806:
case 1348:
case 1472:
case 1550:
case 572:
case 1303:
case 1577:
case 4073:
case 2016:
case 3705:
case 680:
case 3105:
case 1444:
case 3246:
case 3690:
case 2671:
case 2845:
case 3584:
case 455:
case 3967:
case 2159:
case 1405:
case 2262:
case 1595:
case 1092:
case 1883:
case 2804:
case 2793:
case 1007:
case 3647:
case 2193:
case 728:
case 1386:
case 1841:
case 2928:
case 2521:
case 1383:
case 2196:
case 3945:
case 297:
case 3279:
case 2099:
case 2934:
case 544:
case 2796:
case 200:
case 1886:
case 2238:
case 629:
case 3431:
case 3412:
case 2053:
case 1152:
case 3517:
case 2224:
case 2689:
case 3665:
case 3328:
case 1560:
case 2345:
case 3904:
case 630:
case 3243:
case 2726:
case 136:
case 2013:
case 693:
case 2591:
case 2998:
case 3208:
case 2126:
case 1064:
case 1306:
case 1087:
case 3545:
case 257:
case 1794:
case 1697:
case 2231:
case 2212:
case 1485:
case 985:
case 3391:
case 1602:
case 732:
case 1138:
case 2169:
case 3185:
case 3957:
case 2991:
case 1640:
case 2066:
case 2317:
case 1124:
case 2598:
case 2408:
case 2769:
case 3201:
case 685:
case 3036:
case 1662:
case 3139:
case 3987:
case 1366:
case 726:
case 4091:
case 2178:
case 3672:
case 212:
case 2814:
case 953:
case 2109:
case 3060:
case 1574:
case 4021:
case 3715:
case 279:
case 1439:
case 153:
case 2709:
case 3261:
case 681:
case 1271:
case 2854:
case 3564:
case 1057:
case 2623:
case 1209:
case 837:
case 929:
case 3837:
case 2822:
case 2171:
case 1542:
case 2364:
case 1816:
case 1329:
case 3790:
case 206:
case 1182:
case 2807:
case 490:
case 636:
case 2659:
case 3720:
case 48:
case 433:
case 1782:
case 1974:
case 4028:
case 193:
case 2892:
case 2083:
case 922:
case 1500:
case 1278:
case 1856:
case 1490:
case 3964:
case 3747:
case 2693:
case 2696:
case 725:
case 1175:
case 3514:
case 1980:
case 1899:
case 2789:
case 2307:
case 2418:
case 43:
case 483:
case 458:
case 2392:
case 980:
case 2240:
case 2937:
case 1813:
case 3554:
case 2864:
case 244:
case 500:
case 1829:
case 597:
case 2297:
case 887:
case 2626:
case 3251:
case 3050:
case 205:
case 3427:
case 1084:
case 2432:
case 938:
case 2411:
case 2973:
case 1197:
case 3218:
case 3025:
case 2887:
case 95:
case 631:
case 3440:
case 1866:
case 201:
case 3095:
case 2949:
case 324:
case 557:
case 1127:
case 635:
case 3592:
case 2451:
case 3402:
case 1624:
case 3876:
case 1140:
case 2447:
case 600:
case 3953:
case 106:
case 3880:
case 906:
case 1171:
case 2313:
case 2542:
case 747:
case 3161:
case 2045:
case 3215:
case 776:
case 1693:
case 896:
case 2500:
case 716:
case 3566:
case 3471:
case 3913:
case 2278:
case 2004:
case 1461:
case 2974:
case 293:
case 1892:
case 3688:
case 1659:
case 586:
case 3553:
case 768:
case 2863:
case 972:
case 657:
case 112:
case 912:
case 172:
case 2017:
case 2942:
case 3220:
case 2662:
case 4060:
case 535:
case 349:
case 3599:
case 1282:
case 2415:
case 342:
case 3290:
case 2070:
case 3966:
case 3478:
case 1709:
case 1468:
case 1976:
case 1006:
case 2574:
case 288:
case 3646:
case 179:
case 919:
case 2439:
case 253:
case 1109:
case 979:
case 119:
case 2102:
case 1887:
case 2797:
case 581:
case 25:
case 3751:
case 1432:
case 2084:
case 3643:
case 1003:
case 891:
case 2830:
case 662:
case 3963:
case 3516:
case 4095:
case 771:
case 1354:
case 2624:
case 4025:
case 3711:
case 398:
case 3265:
case 1451:
case 3732:
case 585:
case 1314:
case 901:
case 2363:
case 715:
case 2727:
case 3800:
case 2866:
case 608:
case 1240:
case 1041:
case 3601:
case 1392:
case 1573:
case 280:
case 4077:
case 1418:
case 1086:
case 1789:
case 1227:
case 2980:
case 2853:
case 314:
case 2356:
case 2175:
case 1696:
case 3718:
case 1458:
case 3489:
case 3874:
case 383:
case 1626:
case 33:
case 2612:
case 3380:
case 1549:
case 2316:
case 2067:
case 1864:
case 944:
case 1398:
case 4013:
case 2658:
case 2426:
case 3752:
case 4029:
case 3269:
case 2701:
case 893:
case 3536:
case 713:
case 773:
case 830:
case 3731:
case 3064:
case 3131:
case 2618:
case 1334:
case 497:
case 514:
case 400:
case 1074:
case 2506:
case 574:
case 2496:
case 2983:
case 2850:
case 4066:
case 1424:
case 1391:
case 2743:
case 2651:
case 598:
case 3226:
case 2708:
case 3485:
case 853:
case 3794:
case 3848:
case 2360:
case 3194:
case 3306:
case 1545:
case 3087:
case 3640:
case 1970:
case 381:
case 1785:
case 3724:
case 1185:
case 1957:
case 2179:
case 2779:
case 2906:
case 1494:
case 3296:
case 2583:
case 2903:
case 1984:
case 542:
case 3293:
case 1172:
case 2541:
case 2333:
case 3925:
case 331:
case 3162:
case 3259:
case 3014:
case 469:
case 3303:
case 462:
case 3577:
case 3933:
case 3550:
case 3054:
case 1891:
case 2146:
case 1462:
case 291:
case 1567:
case 2181:
case 2049:
case 4063:
case 1615:
case 549:
case 2503:
case 1834:
case 3910:
case 187:
case 1584:
case 2377:
case 2493:
case 2548:
case 1828:
case 2350:
case 3022:
case 1105:
case 3444:
case 734:
case 4056:
case 1246:
case 2459:
case 1281:
case 1080:
case 2310:
case 3007:
case 77:
case 3977:
case 3092:
case 880:
case 89:
case 3883:
case 1898:
case 1620:
case 1144:
case 2788:
case 3405:
case 3595:
case 1744:
case 1967:
case 507:
case 3921:
case 819:
case 3528:
case 1360:
case 3884:
case 3212:
case 3357:
case 1469:
case 650:
case 1143:
case 1108:
case 2917:
case 2391:
case 2504:
case 1076:
case 1583:
case 1779:
case 1906:
case 1336:
case 642:
case 3169:
case 2185:
case 1632:
case 1611:
case 485:
case 872:
case 2970:
case 792:
case 2785:
case 3598:
case 812:
case 2000:
case 3991:
case 3196:
case 964:
case 3521:
case 3928:
case 3934:
case 68:
case 3053:
case 1701:
case 690:
case 607:
case 1658:
case 1426:
case 4064:
case 3224:
case 633:
case 3345:
case 1850:
case 1983:
case 203:
case 1506:
case 1877:
case 237:
case 2243:
case 3029:
case 3867:
case 1618:
case 3126:
case 3998:
case 3013:
case 3591:
case 3123:
case 3719:
case 3367:
case 2281:
case 2246:
case 3119:
case 844:
case 955:
case 3671:
case 1548:
case 2828:
case 2690:
case 674:
case 20:
case 1503:
case 4007:
case 287:
case 63:
case 951:
case 1188:
case 2967:
case 3735:
case 1419:
case 2620:
case 2898:
case 658:
case 3759:
case 683:
case 3804:
case 1272:
case 2647:
case 3063:
case 435:
case 1395:
case 2655:
case 1668:
case 4054:
case 2821:
case 1948:
case 2172:
case 1586:
case 1073:
case 362:
case 1836:
case 2772:
case 369:
case 3857:
case 4014:
case 991:
case 1746:
case 2567:
case 3609:
case 431:
case 805:
case 698:
case 1781:
case 1325:
case 308:
case 748:
case 3384:
case 3787:
case 3309:
case 223:
case 3939:
case 1851:
case 3094:
case 461:
case 3187:
case 1142:
case 1625:
case 2571:
case 3213:
case 3400:
case 3590:
case 826:
case 2008:
case 292:
case 4069:
case 2043:
case 1582:
case 3299:
case 1832:
case 465:
case 2909:
case 320:
case 1811:
case 2339:
case 541:
case 2176:
case 3442:
case 3024:
case 1100:
case 627:
case 1085:
case 3547:
case 66:
case 343:
case 1858:
case 1276:
case 737:
case 2578:
case 3266:
case 2200:
case 1464:
case 3990:
case 2001:
case 252:
case 1610:
case 1774:
case 1818:
case 2509:
case 504:
case 1174:
case 470:
case 3920:
case 1650:
case 2242:
case 3371:
case 2390:
case 3012:
case 3764:
case 825:
case 1005:
case 3871:
case 3122:
case 2628:
case 1975:
case 1780:
case 1407:
case 1318:
case 3965:
case 2989:
case 17:
case 2137:
case 1422:
case 4019:
case 577:
case 2088:
case 494:
case 134:
case 4023:
case 517:
case 3792:
case 3192:
case 70:
case 2365:
case 663:
case 1454:
case 1575:
case 2621:
case 3256:
case 3062:
case 382:
case 2173:
case 1072:
case 248:
case 3617:
case 3154:
case 2749:
case 2046:
case 1660:
case 2280:
case 2815:
case 389:
case 3809:
case 22:
case 3670:
case 1237:
case 2691:
case 1347:
case 1429:
case 152:
case 4031:
case 3875:
case 1001:
case 3641:
case 3753:
case 1578:
case 1200:
case 1971:
case 677:
case 3096:
case 3799:
case 2858:
case 3382:
case 876:
case 2677:
case 3713:
case 3026:
case 1242:
case 2650:
case 1509:
case 2818:
case 2982:
case 273:
case 159:
case 192:
case 2742:
case 1008:
case 3648:
case 2625:
case 2142:
case 1978:
case 992:
case 3561:
case 3968:
case 123:
case 809:
case 420:
case 3897:
case 365:
case 1315:
case 923:
case 3069:
case 2700:
case 802:
case 756:
case 2633:
case 2100:
case 1176:
case 361:
case 1339:
case 4094:
case 2582:
case 439:
case 199:
case 1079:
case 1773:
case 3292:
case 1839:
case 3558:
case 1589:
case 2311:
case 489:
case 811:
case 527:
case 3163:
case 354:
case 2575:
case 871:
case 3763:
case 2237:
case 2940:
case 2351:
case 3518:
case 12:
case 3473:
case 3397:
case 1815:
case 1280:
case 2414:
case 1463:
case 875:
case 1081:
case 4062:
case 795:
case 815:
case 3222:
case 27:
case 1137:
case 2861:
case 2492:
case 44:
case 2318:
case 1737:
case 21:
case 2597:
case 366:
case 2180:
case 3023:
case 1634:
case 394:
case 3019:
case 2780:
case 2005:
case 2540:
case 1698:
case 2358:
case 3918:
case 3093:
case 3511:
case 3532:
case 3756:
case 3035:
case 1416:
case 234:
case 755:
case 3156:
case 2044:
case 2422:
case 3291:
case 3952:
case 2498:
case 722:
case 1819:
case 2508:
case 1326:
case 3090:
case 36:
case 2543:
case 2312:
case 2257:
case 3680:
case 1745:
case 793:
case 1622:
case 1145:
case 2352:
case 1859:
case 566:
case 1607:
case 1585:
case 2579:
case 1082:
case 594:
case 1893:
case 2656:
case 4061:
case 3020:
case 3445:
case 1104:
case 729:
case 2491:
case 1117:
case 3298:
case 2078:
case 2908:
case 3470:
case 2501:
case 2338:
case 1369:
case 3457:
case 2663:
case 753:
case 788:
case 1283:
case 3736:
case 3417:
case 926:
case 1757:
case 1170:
case 3846:
case 3938:
case 1770:
case 1985:
case 126:
case 3512:
case 632:
case 2706:
case 554:
case 2009:
case 2394:
case 2106:
case 3228:
case 3160:
case 2421:
case 1654:
case 2245:
case 682:
case 2103:
case 2630:
case 4032:
case 3725:
case 1784:
case 1972:
case 3642:
case 1687:
case 3962:
case 3808:
case 1495:
case 2267:
case 3733:
case 1286:
case 738:
case 4051:
case 75:
case 1425:
case 3600:
case 3133:
case 2666:
case 1040:
case 1544:
case 2824:
case 2362:
case 211:
case 441:
case 2838:
case 2981:
case 2588:
case 689:
case 2741:
case 1477:
case 4018:
case 1393:
case 2186:
case 2786:
case 2852:
case 1905:
case 628:
case 121:
case 3562:
case 3801:
case 1075:
case 260:
case 3388:
case 1359:
case 1410:
case 780:
case 1664:
case 79:
case 4058:
case 3150:
case 81:
case 925:
case 1767:
case 570:
case 1319:
case 363:
case 3674:
case 2831:
case 404:
case 1323:
case 64:
case 3596:
case 899:
case 2460:
case 4015:
case 2614:
case 427:
case 589:
case 3385:
case 2369:
case 665:
case 1338:
case 3673:
case 2717:
case 1908:
case 1491:
case 2654:
case 4055:
case 1394:
case 909:
case 1421:
case 109:
case 1706:
case 3969:
case 2157:
case 2985:
case 3526:
case 712:
case 168:
case 892:
case 4020:
case 2145:
case 859:
case 3734:
case 377:
case 2745:
case 1543:
case 1257:
case 2823:
case 1331:
case 2326:
case 916:
case 2819:
case 3637:
case 1071:
case 1498:
case 1183:
case 2104:
case 947:
case 2893:
case 2704:
case 3236:
case 1783:
case 1579:
case 2082:
case 2835:
case 2585:
case 3798:
case 2859:
case 3926:
case 706:
case 160:
case 666:
case 463:
case 960:
case 3233:
case 2896:
case 1141:
case 1089:
case 2572:
case 2477:
case 1653:
case 1741:
case 694:
case 2167:
case 2826:
case 867:
case 543:
case 1546:
case 2944:
case 3305:
case 3225:
case 1613:
case 2248:
case 3523:
case 115:
case 520:
case 3519:
case 175:
case 2687:
case 3250:
case 2002:
case 1894:
case 1148:
case 1630:
case 1103:
case 654:
case 3535:
case 3885:
case 2027:
case 911:
case 1981:
case 678:
case 3559:
case 345:
case 705:
case 3676:
case 618:
case 2425:
case 1666:
case 2040:
case 3593:
case 3011:
case 2286:
case 848:
case 3403:
case 3621:
case 2062:
case 769:
case 1763:
case 2878:
case 954:
case 1327:
case 1163:
case 282:
case 615:
case 3855:
case 1340:
case 3773:
case 2617:
case 3589:
case 2565:
case 1292:
case 1606:
case 1222:
case 841:
case 3280:
case 3081:
case 2754:
case 2216:
case 671:
case 1473:
case 32:
case 1911:
case 1518:
case 918:
case 1302:
case 3691:
case 978:
case 118:
case 762:
case 3890:
case 3634:
case 1023:
case 194:
case 2722:
case 1116:
case 3737:
case 660:
case 3137:
case 1958:
case 228:
case 966:
case 1156:
case 2604:
case 1683:
case 4005:
case 1214:
case 3847:
case 1035:
case 2480:
case 3416:
case 3088:
case 2263:
case 24:
case 1093:
case 41:
case 1918:
case 2792:
case 1882:
case 3698:
case 3365:
case 970:
case 525:
case 910:
case 1961:
case 243:
case 1799:
case 1641:
case 846:
case 2990:
case 2052:
case 3347:
case 1153:
case 3429:
case 3509:
case 2515:
case 1287:
case 797:
case 700:
case 521:
case 817:
case 1026:
case 3390:
case 2164:
case 1113:
case 1729:
case 2230:
case 2947:
case 3453:
case 2031:
case 647:
case 484:
case 165:
case 2309:
case 602:
case 1802:
case 965:
case 3274:
case 2939:
case 1648:
case 1730:
case 1264:
case 3571:
case 2400:
case 2213:
case 3978:
case 1603:
case 2684:
case 2229:
case 220:
case 961:
case 2915:
case 3176:
case 757:
case 1166:
case 2024:
case 3430:
case 2547:
case 1069:
case 1827:
case 232:
case 2958:
case 3492:
case 3502:
case 37:
case 3861:
case 928:
case 3407:
case 3597:
case 31:
case 294:
case 4088:
case 547:
case 863:
case 3180:
case 2716:
case 2254:
case 2019:
case 3780:
case 1707:
case 576:
case 1389:
case 1192:
case 2532:
case 625:
case 1792:
case 516:
case 14:
case 2093:
case 2918:
case 334:
case 2059:
case 2035:
case 2756:
case 1480:
case 1604:
case 2683:
case 2156:
case 1565:
case 3072:
case 3902:
case 3868:
case 2340:
case 3997:
case 3311:
case 42:
case 2449:
case 254:
case 3636:
case 4081:
case 509:
case 2327:
case 3454:
case 1878:
case 1256:
case 4046:
case 1062:
case 218:
case 448:
case 2932:
case 2473:
case 2911:
case 2397:
case 1809:
case 502:
case 731:
case 1216:
case 3927:
case 3742:
case 781:
case 2130:
case 3625:
case 3142:
case 2648:
case 2730:
case 2264:
case 1590:
case 1094:
case 1939:
case 2968:
case 2476:
case 139:
case 499:
case 265:
case 1309:
case 1787:
case 492:
case 3700:
case 2766:
case 1547:
case 3085:
case 4043:
case 2069:
case 1253:
case 3100:
case 932:
case 1442:
case 4008:
case 3695:
case 423:
case 261:
case 920:
case 3487:
case 3832:
case 1299:
case 120:
case 3610:
case 2875:
case 2641:
case 3858:
case 1889:
case 143:
case 270:
case 1555:
case 2199:
case 2382:
case 459:
case 440:
case 3677:
case 2713:
case 2129:
case 1230:
case 2729:
case 1371:
case 86:
case 3650:
case 2026:
case 1164:
case 1515:
case 3982:
case 1667:
case 3818:
case 758:
case 3186:
case 783:
case 2110:
case 3786:
case 73:
case 2710:
case 2065:
case 513:
case 1344:
case 1923:
case 2467:
case 2388:
case 360:
case 425:
case 1486:
case 2750:
case 3629:
case 3613:
case 866:
case 1441:
case 421:
case 263:
case 774:
case 1959:
case 3581:
case 2725:
case 798:
case 3103:
case 3748:
case 4040:
case 1250:
case 878:
case 1051:
case 2962:
case 141:
case 2808:
case 375:
case 1523:
case 941:
case 2843:
case 4027:
case 3267:
case 7:
case 1011:
case 2733:
case 1403:
case 2484:
case 1032:
case 2600:
case 2133:
case 3666:
case 1448:
case 2195:
case 3824:
case 945:
case 854:
case 371:
case 2795:
case 1559:
case 2470:
case 3501:
case 742:
case 2298:
case 3324:
case 2552:
case 3491:
case 426:
case 1673:
case 3338:
case 2136:
case 2379:
case 692:
case 1721:
case 3204:
case 2039:
case 1406:
case 2994:
case 368:
case 2846:
case 1526:
case 2924:
case 2417:
case 1969:
case 2343:
case 1791:
case 699:
case 2881:
case 1649:
case 2234:
case 2015:
case 3979:
case 749:
case 865:
case 3421:
case 3394:
case 2160:
case 3508:
case 3498:
case 2291:
case 2952:
case 1637:
case 3312:
case 316:
case 3543:
case 26:
case 3331:
case 534:
case 1134:
case 4082:
case 2680:
case 652:
case 1061:
case 2594:
case 1260:
case 1128:
case 1926:
case 946:
case 57:
case 3352:
case 3217:
case 1569:
case 2047:
case 2888:
case 659:
case 51:
case 3783:
case 1236:
case 733:
case 2445:
case 810:
case 707:
case 3656:
case 2523:
case 471:
case 1843:
case 3687:
case 3505:
case 1346:
case 1808:
case 1962:
case 2051:
case 2250:
case 1725:
case 3097:
case 2559:
case 245:
case 1795:
case 882:
case 475:
case 3544:
case 2448:
case 2210:
case 1879:
case 3359:
case 1467:
case 540:
case 3335:
case 559:
case 1801:
case 67:
case 1562:
case 1710:
case 3896:
case 1110:
case 3393:
case 3477:
case 325:
case 2959:
case 963:
case 3767:
case 3944:
case 3826:
case 3319:
case 1150:
case 634:
case 3203:
case 3410:
case 828:
case 1750:
case 2486:
case 2993:
case 3206:
case 1594:
case 2260:
case 2128:
case 1404:
case 2061:
case 2483:
case 2728:
case 447:
case 1680:
case 3745:
case 1952:
case 1291:
case 2805:
case 1221:
case 3082:
case 567:
case 3893:
case 3859:
case 1888:
case 3585:
case 1912:
case 2569:
case 1047:
case 1524:
case 2198:
case 4071:
case 613:
case 1301:
case 2121:
case 1039:
case 1994:
case 3460:
case 2596:
case 3283:
case 2068:
case 409:
case 1136:
case 4009:
case 2673:
case 52:
case 3369:
case 832:
case 1298:
case 3117:
case 1552:
case 1470:
case 1160:
case 1015:
case 1234:
case 127:
case 2649:
case 2791:
case 1881:
case 2969:
case 1512:
case 3157:
case 3770:
case 1846:
case 1308:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746345601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,];
var gg_b = "1746345601/";

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
