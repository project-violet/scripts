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
case 2267:
case 2226:
case 2705:
case 1129:
case 1346:
case 1961:
case 3486:
case 536:
case 838:
case 3946:
case 3531:
case 3875:
case 4024:
case 859:
case 1301:
case 3082:
case 2609:
case 2061:
case 246:
case 3228:
case 3889:
case 70:
case 1145:
case 2948:
case 3884:
case 1798:
case 3494:
case 99:
case 2100:
case 773:
case 1262:
case 2218:
case 69:
case 1638:
case 1090:
case 10:
case 169:
case 1137:
case 1525:
case 2250:
case 3865:
case 2743:
case 1620:
case 3987:
case 1421:
case 947:
case 2551:
case 983:
case 692:
case 2990:
case 683:
case 992:
case 537:
case 2277:
case 1740:
case 2623:
case 3583:
case 2764:
case 3282:
case 1248:
case 3030:
case 3197:
case 2328:
case 1439:
case 1183:
case 2422:
case 2519:
case 2769:
case 2180:
case 486:
case 2758:
case 1434:
case 2067:
case 2696:
case 3503:
case 897:
case 3149:
case 3537:
case 3823:
case 1836:
case 1967:
case 1885:
case 1072:
case 842:
case 1926:
case 3028:
case 3144:
case 2261:
case 3002:
case 1810:
case 3640:
case 965:
case 3545:
case 12:
case 2271:
case 304:
case 1495:
case 1062:
case 934:
case 830:
case 2018:
case 1950:
case 1573:
case 634:
case 1427:
case 2785:
case 665:
case 2316:
case 544:
case 896:
case 2115:
case 2962:
case 443:
case 1918:
case 1131:
case 3804:
case 379:
case 1053:
case 4031:
case 2779:
case 3524:
case 3016:
case 2684:
case 2302:
case 1858:
case 2408:
case 2689:
case 122:
case 3412:
case 265:
case 4095:
case 459:
case 772:
case 1195:
case 68:
case 2998:
case 438:
case 3141:
case 2005:
case 1166:
case 514:
case 250:
case 1628:
case 1127:
case 2542:
case 2269:
case 282:
case 1871:
case 693:
case 2511:
case 103:
case 1098:
case 1630:
case 1365:
case 2415:
case 650:
case 3887:
case 3112:
case 3256:
case 1586:
case 1396:
case 1893:
case 1905:
case 2108:
case 3846:
case 81:
case 2940:
case 1547:
case 2122:
case 1139:
case 1616:
case 2771:
case 17:
case 1790:
case 2285:
case 3801:
case 3425:
case 2681:
case 703:
case 1943:
case 1861:
case 3521:
case 2848:
case 3449:
case 1389:
case 1176:
case 381:
case 1599:
case 1602:
case 3984:
case 4076:
case 2274:
case 2043:
case 3444:
case 812:
case 3989:
case 55:
case 395:
case 2069:
case 3194:
case 3310:
case 3881:
case 1910:
case 217:
case 1437:
case 3463:
case 2517:
case 2646:
case 661:
case 3199:
case 3534:
case 1969:
case 4021:
case 3728:
case 3056:
case 1818:
case 3147:
case 3369:
case 3648:
case 3904:
case 497:
case 1309:
case 3358:
case 2010:
case 1429:
case 496:
case 239:
case 1974:
case 3186:
case 2338:
case 2568:
case 1512:
case 3020:
case 616:
case 362:
case 2872:
case 430:
case 1424:
case 1979:
case 2554:
case 1323:
case 3336:
case 639:
case 3527:
case 2188:
case 3566:
case 1826:
case 2687:
case 3833:
case 216:
case 2750:
case 549:
case 2243:
case 2074:
case 658:
case 3473:
case 1240:
case 3690:
case 3595:
case 1753:
case 887:
case 939:
case 2320:
case 1936:
case 3923:
case 2079:
case 3385:
case 2273:
case 1886:
case 2128:
case 2666:
case 3755:
case 652:
case 3397:
case 1571:
case 25:
case 2695:
case 2049:
case 1270:
case 3325:
case 980:
case 884:
case 1835:
case 2842:
case 3349:
case 145:
case 3126:
case 3668:
case 1944:
case 4007:
case 252:
case 1608:
case 95:
case 2025:
case 368:
case 3080:
case 3659:
case 65:
case 2799:
case 377:
case 2097:
case 3654:
case 914:
case 3150:
case 2634:
case 2992:
case 1214:
case 1181:
case 58:
case 1622:
case 494:
case 2116:
case 1219:
case 3177:
case 351:
case 3:
case 3501:
case 1561:
case 1465:
case 1331:
case 593:
case 3200:
case 3931:
case 1847:
case 3617:
case 1711:
case 582:
case 214:
case 2263:
case 2102:
case 2332:
case 516:
case 1518:
case 2562:
case 2091:
case 3479:
case 3924:
case 766:
case 1101:
case 178:
case 3834:
case 4001:
case 2244:
case 2712:
case 3161:
case 3474:
case 3929:
case 2182:
case 1423:
case 2297:
case 871:
case 2970:
case 111:
case 3876:
case 539:
case 3373:
case 2553:
case 2957:
case 1973:
case 3280:
case 3032:
case 1655:
case 1550:
case 2420:
case 3581:
case 1345:
case 3485:
case 2621:
case 833:
case 988:
case 2300:
case 3903:
case 3895:
case 3866:
case 1337:
case 2960:
case 1526:
case 43:
case 3533:
case 561:
case 3363:
case 1567:
case 711:
case 1303:
case 1778:
case 1952:
case 2063:
case 432:
case 2854:
case 360:
case 805:
case 3000:
case 1812:
case 3469:
case 1688:
case 2914:
case 517:
case 166:
case 3110:
case 3394:
case 1254:
case 2624:
case 2047:
case 1999:
case 3399:
case 2212:
case 1268:
case 741:
case 2892:
case 1259:
case 237:
case 59:
case 3055:
case 4004:
case 3831:
case 2099:
case 592:
case 2645:
case 937:
case 3471:
case 3164:
case 3575:
case 2355:
case 821:
case 307:
case 3158:
case 4009:
case 3657:
case 547:
case 3169:
case 3921:
case 2206:
case 1487:
case 2725:
case 3347:
case 653:
case 3596:
case 2603:
case 636:
case 3715:
case 3386:
case 2911:
case 3335:
case 3174:
case 1825:
case 3565:
case 306:
case 1505:
case 1600:
case 3088:
case 410:
case 1042:
case 936:
case 2598:
case 1011:
case 141:
case 3222:
case 236:
case 1849:
case 4023:
case 1278:
case 2482:
case 919:
case 2120:
case 3614:
case 418:
case 3255:
case 1481:
case 2860:
case 108:
case 1585:
case 1059:
case 1395:
case 3651:
case 1757:
case 1068:
case 2247:
case 3306:
case 998:
case 3803:
case 3477:
case 1863:
case 3523:
case 1327:
case 1536:
case 2416:
case 2683:
case 534:
case 1165:
case 2006:
case 456:
case 298:
case 2294:
case 3105:
case 327:
case 801:
case 1852:
case 2308:
case 244:
case 720:
case 2954:
case 471:
case 3418:
case 2299:
case 3312:
case 3288:
case 3692:
case 3509:
case 2428:
case 1339:
case 83:
case 3829:
case 1569:
case 1719:
case 3939:
case 1334:
case 2752:
case 1017:
case 2286:
case 1873:
case 2857:
case 115:
case 1760:
case 405:
case 2513:
case 3467:
case 832:
case 2631:
case 1078:
case 1615:
case 1510:
case 1891:
case 3022:
case 2870:
case 4084:
case 2235:
case 3419:
case 739:
case 2818:
case 758:
case 3802:
case 2309:
case 3414:
case 2958:
case 2304:
case 1517:
case 3296:
case 3313:
case 407:
case 117:
case 3816:
case 1356:
case 3004:
case 2403:
case 2877:
case 716:
case 1601:
case 2850:
case 3956:
case 1400:
case 3733:
case 1058:
case 1726:
case 1913:
case 1767:
case 3661:
case 3009:
case 3470:
case 1777:
case 2240:
case 1079:
case 3830:
case 2445:
case 3275:
case 1320:
case 578:
case 1687:
case 3920:
case 2867:
case 1188:
case 717:
case 3457:
case 406:
case 1243:
case 2506:
case 2424:
case 3023:
case 1036:
case 399:
case 3938:
case 3284:
case 2762:
case 1718:
case 2512:
case 3828:
case 1338:
case 511:
case 2429:
case 1432:
case 158:
case 761:
case 1085:
case 3508:
case 325:
case 1872:
case 3289:
case 3626:
case 3168:
case 2905:
case 318:
case 2213:
case 3159:
case 1890:
case 2871:
case 18:
case 2431:
case 1415:
case 2535:
case 2630:
case 203:
case 3588:
case 1542:
case 2127:
case 903:
case 1258:
case 150:
case 1005:
case 2166:
case 3065:
case 356:
case 182:
case 333:
case 1269:
case 3398:
case 3204:
case 193:
case 371:
case 3096:
case 1264:
case 427:
case 2748:
case 1043:
case 97:
case 272:
case 1274:
case 3618:
case 2389:
case 235:
case 67:
case 264:
case 2040:
case 2602:
case 2176:
case 2599:
case 672:
case 860:
case 964:
case 1793:
case 1285:
case 935:
case 3340:
case 2943:
case 3787:
case 3084:
case 2139:
case 2483:
case 3223:
case 1771:
case 664:
case 3178:
case 2926:
case 1560:
case 2885:
case 3201:
case 1330:
case 1261:
case 3605:
case 520:
case 3930:
case 2836:
case 1710:
case 468:
case 3928:
case 3007:
case 1769:
case 3709:
case 1514:
case 1067:
case 3151:
case 3033:
case 3478:
case 515:
case 3838:
case 1519:
case 3704:
case 321:
case 807:
case 1422:
case 1328:
case 806:
case 3081:
case 165:
case 92:
case 3468:
case 1689:
case 476:
case 3532:
case 2869:
case 3454:
case 1077:
case 62:
case 2918:
case 2131:
case 1115:
case 3902:
case 1684:
case 2864:
case 1779:
case 1557:
case 2573:
case 3353:
case 3643:
case 2466:
case 622:
case 1316:
case 2427:
case 1813:
case 1271:
case 3723:
case 2290:
case 2810:
case 3916:
case 1018:
case 2062:
case 1953:
case 2977:
case 2495:
case 3982:
case 1604:
case 500:
case 792:
case 2798:
case 3664:
case 3170:
case 3658:
case 1609:
case 3348:
case 747:
case 2272:
case 301:
case 3515:
case 931:
case 2301:
case 2124:
case 673:
case 3796:
case 1705:
case 973:
case 541:
case 2961:
case 2843:
case 3765:
case 4032:
case 19:
case 1990:
case 2387:
case 2253:
case 3119:
case 1277:
case 3636:
case 669:
case 60:
case 3580:
case 202:
case 969:
case 1743:
case 2993:
case 1455:
case 3390:
case 1551:
case 746:
case 1898:
case 2262:
case 2137:
case 1071:
case 3674:
case 1093:
case 3789:
case 602:
case 192:
case 3087:
case 1100:
case 338:
case 3359:
case 2196:
case 2852:
case 1041:
case 908:
case 3538:
case 1954:
case 359:
case 1819:
case 2574:
case 3066:
case 1294:
case 1959:
case 198:
case 3027:
case 3198:
case 3453:
case 522:
case 2770:
case 3697:
case 891:
case 2941:
case 1683:
case 1416:
case 2366:
case 2327:
case 2585:
case 2680:
case 2059:
case 208:
case 3625:
case 2481:
case 1012:
case 2906:
case 885:
case 3221:
case 2757:
case 2615:
case 2510:
case 1917:
case 824:
case 920:
case 2891:
case 3039:
case 620:
case 2376:
case 1857:
case 1286:
case 2407:
case 3317:
case 2760:
case 3076:
case 429:
case 3140:
case 481:
case 2719:
case 1978:
case 2334:
case 2175:
case 220:
case 495:
case 2569:
case 3832:
case 3673:
case 2109:
case 3955:
case 569:
case 50:
case 628:
case 1645:
case 863:
case 3783:
case 928:
case 1797:
case 3691:
case 1241:
case 3490:
case 34:
case 3021:
case 2268:
case 1744:
case 753:
case 342:
case 2994:
case 2259:
case 1629:
case 228:
case 790:
case 1749:
case 3234:
case 1120:
case 3988:
case 1086:
case 600:
case 2844:
case 3239:
case 1598:
case 3342:
case 737:
case 2123:
case 1482:
case 2278:
case 2849:
case 2825:
case 573:
case 2986:
case 2042:
case 2505:
case 2600:
case 200:
case 2897:
case 1603:
case 3663:
case 1138:
case 2935:
case 3276:
case 4038:
case 2655:
case 1225:
case 2550:
case 3370:
case 3029:
case 2973:
case 678:
case 3727:
case 1621:
case 2251:
case 1420:
case 3766:
case 3516:
case 1741:
case 3647:
case 2423:
case 2991:
case 3283:
case 211:
case 1970:
case 2759:
case 1073:
case 2057:
case 3694:
case 1562:
case 2518:
case 2754:
case 1438:
case 2146:
case 491:
case 354:
case 1249:
case 3699:
case 1878:
case 3502:
case 3319:
case 2292:
case 3808:
case 266:
case 2060:
case 2409:
case 3190:
case 3739:
case 3003:
case 3686:
case 2337:
case 523:
case 2806:
case 3900:
case 1456:
case 666:
case 966:
case 3776:
case 3360:
case 2841:
case 2717:
case 3530:
case 3635:
case 2484:
case 3083:
case 1130:
case 1097:
case 4030:
case 57:
case 2133:
case 2489:
case 180:
case 3612:
case 3888:
case 1025:
case 2997:
case 3245:
case 3351:
case 2571:
case 2835:
case 1380:
case 1291:
case 3641:
case 2270:
case 2383:
case 1044:
case 1273:
case 3721:
case 2257:
case 3606:
case 714:
case 1735:
case 874:
case 970:
case 2847:
case 3162:
case 3237:
case 1676:
case 1102:
case 404:
case 1263:
case 2496:
case 4002:
case 2260:
case 3855:
case 862:
case 1315:
case 2465:
case 1786:
case 2561:
case 2092:
case 809:
case 780:
case 4016:
case 2622:
case 1639:
case 1252:
case 387:
case 479:
case 2219:
case 3392:
case 343:
case 503:
case 1634:
case 2894:
case 2742:
case 1443:
case 2721:
case 3593:
case 1755:
case 2606:
case 3997:
case 7:
case 3571:
case 2245:
case 3835:
case 2440:
case 1983:
case 3270:
case 2641:
case 1126:
case 1349:
case 4067:
case 3489:
case 3133:
case 1668:
case 2888:
case 3051:
case 168:
case 1659:
case 3944:
case 3608:
case 817:
case 505:
case 1654:
case 2224:
case 3949:
case 465:
case 176:
case 1150:
case 816:
case 370:
case 3181:
case 3894:
case 3214:
case 777:
case 518:
case 287:
case 151:
case 2031:
case 1678:
case 1015:
case 4077:
case 1177:
case 839:
case 1:
case 943:
case 3331:
case 1200:
case 3561:
case 858:
case 571:
case 1546:
case 2203:
case 1617:
case 556:
case 533:
case 3847:
case 2915:
case 2237:
case 3496:
case 643:
case 3070:
case 3518:
case 367:
case 1839:
case 88:
case 1924:
case 2502:
case 1834:
case 1708:
case 3759:
case 1929:
case 4061:
case 2647:
case 2148:
case 1436:
case 1373:
case 2795:
case 654:
case 2357:
case 2283:
case 1391:
case 599:
case 3655:
case 3550:
case 2370:
case 1280:
case 1485:
case 2766:
case 1895:
case 3019:
case 2360:
case 2530:
case 2635:
case 3963:
case 1611:
case 1363:
case 3014:
case 3567:
case 1827:
case 3337:
case 212:
case 91:
case 3806:
case 21:
case 1464:
case 447:
case 483:
case 3404:
case 2003:
case 492:
case 2319:
case 2528:
case 3812:
case 1000:
case 3060:
case 1193:
case 1458:
case 2734:
case 612:
case 366:
case 4010:
case 1394:
case 1110:
case 3999:
case 3254:
case 1399:
case 242:
case 94:
case 3268:
case 3994:
case 155:
case 1589:
case 1055:
case 3632:
case 3259:
case 3104:
case 2295:
case 706:
case 2815:
case 3947:
case 697:
case 2783:
case 1831:
case 1670:
case 4064:
case 107:
case 24:
case 942:
case 417:
case 1164:
case 2490:
case 2227:
case 3751:
case 1657:
case 4058:
case 2955:
case 3543:
case 997:
case 532:
case 3897:
case 1596:
case 540:
case 3446:
case 1386:
case 630:
case 1883:
case 1565:
case 4074:
case 3986:
case 2880:
case 834:
case 2311:
case 1335:
case 1088:
case 707:
case 3401:
case 300:
case 3505:
case 3600:
case 865:
case 341:
case 2239:
case 2652:
case 3123:
case 755:
case 1136:
case 2342:
case 3849:
case 4036:
case 458:
case 4085:
case 2234:
case 3844:
case 308:
case 3680:
case 3059:
case 846:
case 1008:
case 594:
case 2520:
case 2800:
case 3068:
case 3395:
case 2221:
case 1651:
case 2198:
case 638:
case 1995:
case 213:
case 1477:
case 1306:
case 548:
case 3366:
case 1837:
case 48:
case 2745:
case 659:
case 1732:
case 3574:
case 2354:
case 482:
case 3165:
case 2644:
case 2027:
case 450:
case 3196:
case 2724:
case 3852:
case 1418:
case 2462:
case 1312:
case 259:
case 2538:
case 726:
case 2378:
case 1934:
case 1692:
case 1288:
case 1509:
case 3714:
case 1829:
case 126:
case 3339:
case 2922:
case 1939:
case 89:
case 2140:
case 3017:
case 3334:
case 2556:
case 1700:
case 3407:
case 1467:
case 2317:
case 892:
case 3615:
case 3078:
case 1845:
case 2703:
case 3211:
case 2039:
case 3184:
case 847:
case 2233:
case 898:
case 3129:
case 640:
case 2765:
case 2515:
case 1531:
case 2411:
case 844:
case 596:
case 1361:
case 1435:
case 1946:
case 3124:
case 1082:
case 1875:
case 1228:
case 2157:
case 2348:
case 2001:
case 2669:
case 185:
case 3272:
case 724:
case 601:
case 2664:
case 2046:
case 1884:
case 1191:
case 449:
case 2674:
case 488:
case 2789:
case 2087:
case 3544:
case 3103:
case 2679:
case 232:
case 2784:
case 3137:
case 785:
case 3090:
case 3638:
case 369:
case 2580:
case 3421:
case 2685:
case 3620:
case 1865:
case 675:
case 302:
case 1371:
case 597:
case 23:
case 2390:
case 932:
case 1896:
case 3971:
case 3597:
case 1152:
case 3387:
case 1447:
case 975:
case 542:
case 3253:
case 2478:
case 3552:
case 1197:
case 163:
case 3248:
case 289:
case 2704:
case 3183:
case 221:
case 1125:
case 779:
case 2928:
case 480:
case 2709:
case 3434:
case 2033:
case 3307:
case 1503:
case 1823:
case 2417:
case 3836:
case 689:
case 621:
case 1537:
case 1933:
case 3926:
case 704:
case 2820:
case 989:
case 921:
case 3713:
case 3967:
case 3885:
case 1907:
case 4044:
case 837:
case 1144:
case 3290:
case 1640:
case 1545:
case 1441:
case 836:
case 3381:
case 414:
case 3810:
case 2916:
case 3062:
case 948:
case 3591:
case 1350:
case 3977:
case 648:
case 2192:
case 3950:
case 994:
case 559:
case 3466:
case 1720:
case 2643:
case 3427:
case 1804:
case 3131:
case 2902:
case 294:
case 2459:
case 248:
case 513:
case 1412:
case 3869:
case 3195:
case 2204:
case 918:
case 1141:
case 444:
case 1782:
case 3748:
case 795:
case 2209:
case 3127:
case 3628:
case 1672:
case 256:
case 729:
case 2065:
case 2398:
case 618:
case 233:
case 849:
case 1996:
case 956:
case 933:
case 3365:
case 3630:
case 2667:
case 4012:
case 3586:
case 2168:
case 1887:
case 543:
case 1256:
case 3893:
case 3905:
case 2159:
case 3396:
case 2701:
case 1343:
case 3547:
case 657:
case 2084:
case 3616:
case 37:
case 3790:
case 2223:
case 1497:
case 1220:
case 3134:
case 1801:
case 1521:
case 957:
case 2340:
case 888:
case 2787:
case 3943:
case 257:
case 1449:
case 1662:
case 2075:
case 3389:
case 2882:
case 2117:
case 3040:
case 129:
case 181:
case 1984:
case 372:
case 3384:
case 1989:
case 3594:
case 709:
case 3850:
case 852:
case 1194:
case 51:
case 2733:
case 1881:
case 2460:
case 2009:
case 4094:
case 1463:
case 2313:
case 3910:
case 3437:
case 1199:
case 1576:
case 2004:
case 684:
case 3877:
case 3403:
case 1909:
case 1364:
case 3013:
case 437:
case 2414:
case 3772:
case 1728:
case 1056:
case 3121:
case 1369:
case 2419:
case 85:
case 512:
case 4047:
case 1648:
case 1904:
case 3818:
case 2522:
case 1147:
case 1358:
case 2802:
case 3964:
case 284:
case 762:
case 610:
case 3512:
case 3429:
case 1379:
case 490:
case 1020:
case 2289:
case 225:
case 1702:
case 3424:
case 3979:
case 2023:
case 1135:
case 1374:
case 299:
case 436:
case 453:
case 3762:
case 1566:
case 3826:
case 2920:
case 3323:
case 1336:
case 2142:
case 1473:
case 1807:
case 625:
case 3506:
case 1491:
case 2470:
case 419:
case 3240:
case 1690:
case 1038:
case 1595:
case 109:
case 2830:
case 3936:
case 1385:
case 1716:
case 227:
case 138:
case 1724:
case 344:
case 1538:
case 1095:
case 3819:
case 1462:
case 1649:
case 3299:
case 2312:
case 1368:
case 3006:
case 1354:
case 2732:
case 1027:
case 3294:
case 1644:
case 504:
case 2306:
case 3791:
case 2995:
case 1453:
case 873:
case 2523:
case 2837:
case 2966:
case 2341:
case 1221:
case 2651:
case 3773:
case 579:
case 3012:
case 3917:
case 2845:
case 47:
case 3631:
case 1703:
case 869:
case 3235:
case 3857:
case 3286:
case 713:
case 1556:
case 563:
case 626:
case 1317:
case 3513:
case 1140:
case 1076:
case 3978:
case 3752:
case 2824:
case 2934:
case 802:
case 3322:
case 759:
case 3428:
case 2143:
case 1832:
case 2158:
case 2493:
case 3094:
case 524:
case 1227:
case 2657:
case 2347:
case 655:
case 3725:
case 1783:
case 3099:
case 1815:
case 1295:
case 3645:
case 2164:
case 2471:
case 1691:
case 3241:
case 2575:
case 3355:
case 2670:
case 2399:
case 3212:
case 3156:
case 3892:
case 907:
case 730:
case 3629:
case 1113:
case 2055:
case 337:
case 4013:
case 2394:
case 2110:
case 796:
case 607:
case 3047:
case 2584:
case 797:
case 2185:
case 1988:
case 3942:
case 3120:
case 1234:
case 390:
case 606:
case 82:
case 353:
case 3035:
case 3598:
case 2222:
case 1239:
case 336:
case 130:
case 2619:
case 2136:
case 3388:
case 1448:
case 1880:
case 206:
case 2660:
case 822:
case 74:
case 3851:
case 3603:
case 1731:
case 1276:
case 2883:
case 2715:
case 1663:
case 3138:
case 319:
case 2280:
case 2032:
case 2581:
case 574:
case 1766:
case 1727:
case 2945:
case 2436:
case 1148:
case 562:
case 1516:
case 3741:
case 1647:
case 1283:
case 3970:
case 2876:
case 1357:
case 1795:
case 3553:
case 71:
case 3712:
case 1694:
case 56:
case 2474:
case 2161:
case 349:
case 3562:
case 3091:
case 1822:
case 3249:
case 1699:
case 3878:
case 1502:
case 1045:
case 154:
case 2924:
case 260:
case 3868:
case 2642:
case 2469:
case 388:
case 1808:
case 1734:
case 4090:
case 469:
case 40:
case 3063:
case 1003:
case 2722:
case 2533:
case 2866:
case 872:
case 3960:
case 1413:
case 1686:
case 2363:
case 402:
case 112:
case 1776:
case 3300:
case 835:
case 2895:
case 864:
case 1530:
case 1635:
case 1360:
case 3052:
case 2344:
case 3799:
case 1083:
case 277:
case 3097:
case 2654:
case 1888:
case 3842:
case 2668:
case 2126:
case 3025:
case 352:
case 2080:
case 2232:
case 3590:
case 823:
case 3049:
case 968:
case 677:
case 3747:
case 2983:
case 3811:
case 3273:
case 1980:
case 977:
case 1721:
case 3627:
case 3666:
case 2443:
case 3128:
case 1172:
case 2397:
case 2755:
case 668:
case 1915:
case 1162:
case 3735:
case 976:
case 3263:
case 314:
case 1237:
case 3676:
case 651:
case 676:
case 2:
case 1855:
case 2501:
case 2821:
case 187:
case 3252:
case 3639:
case 1582:
case 1392:
case 143:
case 786:
case 1498:
case 2015:
case 2678:
case 4053:
case 1031:
case 2150:
case 3634:
case 6:
case 276:
case 422:
case 2539:
case 3862:
case 1522:
case 2648:
case 725:
case 184:
case 2452:
case 361:
case 3578:
case 3155:
case 2364:
case 2909:
case 1816:
case 1296:
case 2463:
case 3064:
case 1004:
case 3853:
case 2199:
case 2576:
case 1265:
case 3400:
case 1707:
case 3913:
case 2310:
case 2194:
case 1460:
case 3058:
case 209:
case 1671:
case 26:
case 1470:
case 3320:
case 1275:
case 2923:
case 1142:
case 3188:
case 400:
case 3687:
case 110:
case 2833:
case 3750:
case 974:
case 3243:
case 1457:
case 3074:
case 3036:
case 274:
case 609:
case 2702:
case 3718:
case 3554:
case 2135:
case 1111:
case 2186:
case 3338:
case 3432:
case 339:
case 1828:
case 3568:
case 1508:
case 3872:
case 125:
case 784:
case 2020:
case 909:
case 2379:
case 2965:
case 1626:
case 3633:
case 878:
case 551:
case 3761:
case 1667:
case 1159:
case 4059:
case 3210:
case 3890:
case 2996:
case 1154:
case 3542:
case 1588:
case 1209:
case 3269:
case 1398:
case 2106:
case 1065:
case 156:
case 2672:
case 171:
case 393:
case 1096:
case 5:
case 3264:
case 811:
case 3274:
case 771:
case 3043:
case 1117:
case 1075:
case 2449:
case 157:
case 2984:
case 281:
case 577:
case 415:
case 1451:
case 3285:
case 1650:
case 929:
case 1089:
case 3793:
case 1555:
case 866:
case 2425:
case 1787:
case 2521:
case 2846:
case 3122:
case 2343:
case 2975:
case 681:
case 1178:
case 1223:
case 2653:
case 1677:
case 4078:
case 1820:
case 3560:
case 963:
case 1605:
case 2756:
case 2907:
case 828:
case 3696:
case 526:
case 3710:
case 2326:
case 2367:
case 1930:
case 1007:
case 3769:
case 3180:
case 1928:
case 2125:
case 3758:
case 3972:
case 4051:
case 3067:
case 1151:
case 2282:
case 3764:
case 2030:
case 2698:
case 748:
case 2197:
case 3422:
case 3328:
case 1838:
case 189:
case 3408:
case 1081:
case 2809:
case 470:
case 721:
case 3774:
case 365:
case 1362:
case 789:
case 2318:
case 1468:
case 3689:
case 3050:
case 904:
case 3077:
case 279:
case 604:
case 2524:
case 194:
case 1902:
case 4092:
case 2406:
case 1856:
case 2377:
case 3557:
case 1192:
case 1353:
case 527:
case 979:
case 3293:
case 2981:
case 3316:
case 1916:
case 841:
case 2441:
case 679:
case 3736:
case 3271:
case 2640:
case 1723:
case 2545:
case 1982:
case 3604:
case 291:
case 506:
case 3592:
case 3609:
case 1658:
case 2228:
case 2889:
case 285:
case 1669:
case 3382:
case 1001:
case 3840:
case 411:
case 985:
case 1411:
case 2531:
case 1610:
case 1515:
case 2875:
case 2082:
case 2230:
case 3226:
case 3705:
case 1233:
case 685:
case 3132:
case 2152:
case 1775:
case 3990:
case 2896:
case 3623:
case 1636:
case 3277:
case 1119:
case 624:
case 2583:
case 4019:
case 2987:
case 3250:
case 2865:
case 1580:
case 1685:
case 3551:
case 4014:
case 1281:
case 3455:
case 3218:
case 132:
case 1679:
case 3898:
case 740:
case 2163:
case 3093:
case 4060:
case 507:
case 1674:
case 392:
case 1087:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744560001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,];
var gg_b = "1744560001/";

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
