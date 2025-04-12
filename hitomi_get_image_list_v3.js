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
case 361:
case 1971:
case 4070:
case 3908:
case 2690:
case 151:
case 767:
case 2865:
case 800:
case 3922:
case 2925:
case 3547:
case 1647:
case 2561:
case 1062:
case 2068:
case 2482:
case 1488:
case 3751:
case 3237:
case 3108:
case 3385:
case 2233:
case 1535:
case 1638:
case 50:
case 700:
case 2125:
case 3122:
case 39:
case 2644:
case 3772:
case 2158:
case 1152:
case 59:
case 1277:
case 2855:
case 3131:
case 3678:
case 1601:
case 2492:
case 1398:
case 1675:
case 3501:
case 1578:
case 3495:
case 2572:
case 2968:
case 1614:
case 1962:
case 724:
case 2551:
case 3514:
case 3805:
case 2738:
case 1808:
case 2802:
case 3871:
case 2274:
case 2330:
case 51:
case 710:
case 3931:
case 2058:
case 2747:
case 1052:
case 3743:
case 824:
case 254:
case 2680:
case 1790:
case 1162:
case 1005:
case 561:
case 3212:
case 944:
case 2215:
case 890:
case 76:
case 1503:
case 1015:
case 383:
case 2607:
case 3689:
case 891:
case 3934:
case 1589:
case 1133:
case 711:
case 1873:
case 608:
case 2523:
case 2252:
case 1627:
case 1258:
case 1225:
case 317:
case 3942:
case 3228:
case 2945:
case 266:
case 103:
case 4076:
case 3874:
case 2624:
case 2145:
case 3511:
case 2554:
case 86:
case 3142:
case 2077:
case 3073:
case 397:
case 1724:
case 701:
case 1842:
case 2711:
case 1174:
case 3973:
case 307:
case 2977:
case 2436:
case 1567:
case 2704:
case 1115:
case 3265:
case 193:
case 1033:
case 1268:
case 2262:
case 2686:
case 1379:
case 2727:
case 252:
case 822:
case 187:
case 1599:
case 3042:
case 1915:
case 2564:
case 942:
case 1707:
case 932:
case 2837:
case 3833:
case 801:
case 3034:
case 609:
case 113:
case 452:
case 3079:
case 2726:
case 4045:
case 2448:
case 1342:
case 2794:
case 1939:
case 3584:
case 667:
case 1334:
case 2659:
case 996:
case 147:
case 369:
case 2529:
case 973:
case 3683:
case 1139:
case 543:
case 982:
case 1566:
case 3433:
case 2337:
case 3609:
case 2437:
case 3333:
case 3540:
case 158:
case 915:
case 333:
case 1759:
case 2295:
case 690:
case 906:
case 3729:
case 1373:
case 1710:
case 3693:
case 1593:
case 569:
case 1418:
case 1318:
case 1039:
case 3315:
case 2784:
case 2669:
case 1556:
case 3374:
case 1626:
case 1898:
case 2428:
case 3895:
case 2355:
case 2455:
case 4058:
case 2781:
case 3660:
case 454:
case 1560:
case 3452:
case 3591:
case 2970:
case 3188:
case 3371:
case 2402:
case 1691:
case 66:
case 2302:
case 2616:
case 899:
case 2830:
case 1985:
case 3988:
case 2170:
case 423:
case 719:
case 2465:
case 4068:
case 1085:
case 3650:
case 3362:
case 3088:
case 898:
case 809:
case 601:
case 2070:
case 2791:
case 1716:
case 1888:
case 818:
case 3885:
case 1646:
case 1331:
case 3546:
case 3581:
case 1681:
case 396:
case 498:
case 506:
case 3238:
case 2533:
case 3086:
case 373:
case 4066:
case 1637:
case 3864:
case 3924:
case 3996:
case 1359:
case 1954:
case 3329:
case 2157:
case 382:
case 409:
case 3715:
case 1064:
case 200:
case 418:
case 3907:
case 2484:
case 316:
case 1886:
case 1718:
case 2712:
case 1841:
case 1863:
case 1923:
case 102:
case 2243:
case 3247:
case 3953:
case 3645:
case 305:
case 3548:
case 1545:
case 192:
case 854:
case 4056:
case 2811:
case 3854:
case 2999:
case 395:
case 2426:
case 2748:
case 2326:
case 419:
case 2494:
case 3141:
case 1964:
case 2003:
case 2167:
case 3163:
case 3512:
case 2804:
case 2089:
case 1278:
case 2272:
case 3201:
case 112:
case 3275:
case 1054:
case 3677:
case 177:
case 3823:
case 499:
case 1577:
case 1164:
case 210:
case 408:
case 2251:
case 3733:
case 2737:
case 1807:
case 211:
case 2765:
case 3190:
case 1051:
case 2935:
case 26:
case 2254:
case 1880:
case 384:
case 1143:
case 1289:
case 1821:
case 2013:
case 3017:
case 2608:
case 3132:
case 3625:
case 2801:
case 3872:
case 3528:
case 1257:
case 1628:
case 766:
case 1943:
case 1655:
case 3080:
case 2552:
case 1558:
case 1961:
case 3658:
case 3144:
case 2223:
case 2728:
case 1722:
case 2631:
case 1:
case 1844:
case 3980:
case 1172:
case 3752:
case 194:
case 1299:
case 222:
case 1061:
case 852:
case 2481:
case 2381:
case 3771:
case 3090:
case 1708:
case 1832:
case 2913:
case 3705:
case 2264:
case 2978:
case 1665:
case 752:
case 1568:
case 3668:
case 3565:
case 3032:
case 3921:
case 1267:
case 4019:
case 129:
case 2229:
case 1444:
case 1798:
case 2792:
case 1266:
case 99:
case 2585:
case 2688:
case 3582:
case 1209:
case 3116:
case 1332:
case 2438:
case 2338:
case 1149:
case 534:
case 544:
case 2447:
case 3343:
case 422:
case 2347:
case 3670:
case 3284:
case 4013:
case 2119:
case 3016:
case 3226:
case 1630:
case 623:
case 1256:
case 3100:
case 1480:
case 334:
case 3849:
case 3785:
case 2782:
case 1816:
case 1788:
case 1321:
case 1421:
case 128:
case 2919:
case 654:
case 46:
case 1293:
case 3372:
case 2301:
case 2698:
case 2475:
case 1324:
case 1396:
case 1929:
case 3910:
case 2311:
case 3454:
case 3354:
case 2411:
case 299:
case 1806:
case 146:
case 136:
case 2983:
case 2404:
case 410:
case 453:
case 2966:
case 532:
case 983:
case 3423:
case 3159:
case 424:
case 2427:
case 2539:
case 2183:
case 1407:
case 972:
case 1307:
case 2840:
case 4089:
case 3291:
case 917:
case 2109:
case 3006:
case 218:
case 3739:
case 3364:
case 3906:
case 1810:
case 3829:
case 3246:
case 2193:
case 1859:
case 1441:
case 4067:
case 1219:
case 1363:
case 3536:
case 1463:
case 3087:
case 2083:
case 2884:
case 1250:
case 2009:
case 2066:
case 3169:
case 1386:
case 3059:
case 2156:
case 1029:
case 467:
case 3010:
case 3997:
case 209:
case 2993:
case 948:
case 2759:
case 3298:
case 3597:
case 379:
case 3477:
case 2373:
case 2473:
case 2710:
case 1697:
case 686:
case 828:
case 3783:
case 578:
case 2640:
case 3766:
case 3709:
case 3876:
case 475:
case 1784:
case 2418:
case 1312:
case 2939:
case 2270:
case 2434:
case 2706:
case 2769:
case 2442:
case 2342:
case 1794:
case 3345:
case 2583:
case 1740:
case 1687:
case 949:
case 1337:
case 1285:
case 957:
case 2509:
case 3288:
case 493:
case 4033:
case 3559:
case 3629:
case 829:
case 1610:
case 2797:
case 3510:
case 3130:
case 981:
case 3992:
case 2995:
case 620:
case 3368:
case 2550:
case 1465:
case 2085:
case 694:
case 2519:
case 2646:
case 2331:
case 2431:
case 835:
case 3760:
case 2195:
case 3279:
case 451:
case 67:
case 1070:
case 1791:
case 2716:
case 1882:
case 2308:
case 2691:
case 4005:
case 1302:
case 2408:
case 1970:
case 1616:
case 2322:
case 1428:
case 3030:
case 2422:
case 1328:
case 736:
case 3425:
case 2560:
case 3358:
case 4052:
case 1355:
case 48:
case 1455:
case 3750:
case 1170:
case 604:
case 3719:
case 1720:
case 836:
case 3649:
case 1549:
case 2276:
case 2095:
case 1830:
case 3651:
case 2962:
case 792:
case 2808:
case 1802:
case 3735:
case 1621:
case 1738:
case 2732:
case 527:
case 3858:
case 3273:
case 2277:
case 1855:
case 786:
case 2822:
case 1572:
case 3672:
case 812:
case 1492:
case 2398:
case 1168:
case 2005:
case 2513:
case 2790:
case 3002:
case 777:
case 1430:
case 1274:
case 3028:
case 892:
case 1058:
case 1747:
case 2052:
case 28:
case 3580:
case 154:
case 3242:
case 941:
case 3643:
case 3955:
case 2647:
case 802:
case 2952:
case 1958:
case 3661:
case 2780:
case 564:
case 1543:
case 2717:
case 785:
case 3234:
case 2905:
case 3470:
case 3902:
case 3590:
case 3868:
case 327:
case 1125:
case 1158:
case 2152:
case 1775:
case 2831:
case 3155:
case 885:
case 3544:
case 721:
case 1714:
case 3102:
case 1233:
case 1068:
case 2105:
case 2388:
case 1482:
case 2488:
case 2535:
case 2721:
case 1632:
case 2638:
case 3532:
case 556:
case 1663:
case 3541:
case 3112:
case 1436:
case 1336:
case 2567:
case 1704:
case 2268:
case 1262:
case 1686:
case 3586:
case 635:
case 645:
case 293:
case 2842:
case 3845:
case 1977:
case 437:
case 87:
case 447:
case 1711:
case 3912:
case 3664:
case 1837:
case 77:
case 989:
case 820:
case 2915:
case 1564:
case 3703:
case 714:
case 2599:
case 894:
case 1727:
case 940:
case 2974:
case 165:
case 1177:
case 3757:
case 3231:
case 2627:
case 3623:
case 2258:
case 3799:
case 636:
case 3877:
case 562:
case 1945:
case 1653:
case 988:
case 2225:
case 3948:
case 275:
case 2015:
case 3507:
case 370:
case 4039:
case 2589:
case 2133:
case 1205:
case 3376:
case 1624:
case 1696:
case 2611:
case 1554:
case 32:
case 458:
case 2741:
case 3767:
case 356:
case 2818:
case 2933:
case 2786:
case 704:
case 203:
case 3946:
case 758:
case 971:
case 2256:
case 541:
case 3313:
case 3206:
case 1119:
case 964:
case 2049:
case 3297:
case 2293:
case 1375:
case 3598:
case 4072:
case 3695:
case 3478:
case 1401:
case 1301:
case 4051:
case 1782:
case 1950:
case 1414:
case 1314:
case 1891:
case 68:
case 1919:
case 2421:
case 858:
case 2209:
case 3685:
case 3191:
case 2682:
case 1019:
case 2332:
case 1438:
case 2432:
case 2283:
case 3435:
case 3287:
case 1229:
case 1881:
case 837:
case 47:
case 2949:
case 229:
case 651:
case 859:
case 2344:
case 3259:
case 414:
case 1160:
case 331:
case 341:
case 1820:
case 759:
case 737:
case 1730:
case 3046:
case 2149:
case 2800:
case 1447:
case 4061:
case 1347:
case 1960:
case 494:
case 3081:
case 676:
case 3579:
case 389:
case 3499:
case 3399:
case 245:
case 3926:
case 2859:
case 1193:
case 4064:
case 118:
case 962:
case 588:
case 421:
case 650:
case 485:
case 3200:
case 3776:
case 1993:
case 109:
case 3194:
case 613:
case 2363:
case 2463:
case 1083:
case 2636:
case 1066:
case 1884:
case 2250:
case 1009:
case 246:
case 1983:
case 108:
case 1304:
case 1404:
case 3040:
case 2806:
case 3184:
case 956:
case 2324:
case 2496:
case 2396:
case 2576:
case 1826:
case 1249:
case 1411:
case 84:
case 477:
case 4054:
case 2929:
case 3856:
case 3216:
case 2407:
case 3639:
case 3403:
case 73:
case 1539:
case 1183:
case 1840:
case 1166:
case 3389:
case 1056:
case 1327:
case 970:
case 3893:
case 2260:
case 2129:
case 3357:
case 2453:
case 2353:
case 3457:
case 3094:
case 603:
case 119:
case 3615:
case 3518:
case 1618:
case 190:
case 2469:
case 286:
case 1089:
case 3217:
case 2213:
case 2734:
case 2306:
case 2406:
case 3280:
case 124:
case 88:
case 1811:
case 1999:
case 2023:
case 3027:
case 3745:
case 2896:
case 1574:
case 1426:
case 2742:
case 1748:
case 1326:
case 1394:
case 2164:
case 446:
case 110:
case 3889:
case 348:
case 3004:
case 1440:
case 3803:
case 2807:
case 153:
case 1251:
case 580:
case 78:
case 212:
case 1272:
case 549:
case 277:
case 539:
case 1827:
case 3573:
case 2054:
case 557:
case 3393:
case 2123:
case 2359:
case 751:
case 285:
case 3777:
case 1157:
case 2773:
case 2310:
case 357:
case 4029:
case 349:
case 1103:
case 2235:
case 2487:
case 3309:
case 3633:
case 3366:
case 563:
case 3466:
case 1533:
case 202:
case 1261:
case 2648:
case 3111:
case 1957:
case 2718:
case 2886:
case 3104:
case 1384:
case 1903:
case 647:
case 637:
case 3290:
case 2863:
case 1989:
case 1634:
case 659:
case 221:
case 2841:
case 1913:
case 1264:
case 325:
case 3531:
case 1728:
case 2722:
case 887:
case 122:
case 2061:
case 1755:
case 1381:
case 294:
case 2043:
case 3101:
case 3914:
case 893:
case 3662:
case 3286:
case 1113:
case 1562:
case 3350:
case 3263:
case 876:
case 3419:
case 3241:
case 3319:
case 3038:
case 526:
case 1320:
case 27:
case 1978:
case 3901:
case 2400:
case 3975:
case 1254:
case 35:
case 3147:
case 1078:
case 2143:
case 3075:
case 2161:
case 803:
case 2051:
case 3768:
case 111:
case 326:
case 581:
case 2817:
case 3813:
case 3938:
case 1622:
case 2257:
case 3253:
case 2628:
case 1875:
case 2731:
case 1801:
case 2655:
case 2943:
case 703:
case 3947:
case 1552:
case 3360:
case 3460:
case 2558:
case 191:
case 1505:
case 1608:
case 1391:
case 63:
case 1491:
case 3508:
case 2289:
case 2821:
case 1571:
case 3605:
case 3138:
case 1135:
case 860:
case 2705:
case 301:
case 2917:
case 3702:
case 2771:
case 2090:
case 1114:
case 3381:
case 1101:
case 2980:
case 1758:
case 125:
case 3631:
case 3035:
case 3320:
case 1038:
case 1241:
case 2565:
case 511:
case 1914:
case 1662:
case 3562:
case 1450:
case 2117:
case 3113:
case 1901:
case 2180:
case 1975:
case 2044:
case 760:
case 56:
case 807:
case 2861:
case 1296:
case 1001:
case 1075:
case 2944:
case 36:
case 2204:
case 2190:
case 1014:
case 772:
case 1768:
case 2762:
case 872:
case 2555:
case 444:
case 434:
case 1460:
case 522:
case 1360:
case 1947:
case 2080:
case 3875:
case 1253:
case 1878:
case 1522:
case 3801:
case 1207:
case 1138:
case 3814:
case 3135:
case 883:
case 3491:
case 3608:
case 3013:
case 2990:
case 2502:
case 3089:
case 2186:
case 4006:
case 3804:
case 70:
case 2163:
case 3167:
case 3515:
case 2141:
case 3574:
case 643:
case 3394:
case 3494:
case 633:
case 3748:
case 3326:
case 3426:
case 295:
case 1674:
case 668:
case 3811:
case 324:
case 1280:
case 1803:
case 3737:
case 2214:
case 3251:
case 310:
case 3967:
case 1221:
case 3827:
case 1573:
case 567:
case 1393:
case 1011:
case 2677:
case 1857:
case 2275:
case 2201:
case 3199:
case 157:
case 282:
case 2329:
case 2429:
case 2153:
case 4010:
case 1899:
case 367:
case 1911:
case 1244:
case 2996:
case 1409:
case 1633:
case 2864:
case 273:
case 2086:
case 1466:
case 1366:
case 2537:
case 2238:
case 1232:
case 2041:
case 1483:
case 1383:
case 71:
case 510:
case 296:
case 2063:
case 3067:
case 1111:
case 81:
case 2774:
case 1542:
case 2548:
case 2953:
case 874:
case 432:
case 442:
case 524:
case 3634:
case 1290:
case 1534:
case 216:
case 590:
case 3903:
case 2715:
case 1994:
case 1926:
case 519:
case 3193:
case 1579:
case 242:
case 232:
case 1399:
case 189:
case 965:
case 607:
case 1084:
case 130:
case 952:
case 2364:
case 1809:
case 1140:
case 2739:
case 3993:
case 2010:
case 1194:
case 599:
case 1126:
case 660:
case 1776:
case 3156:
case 3066:
case 2169:
case 2106:
case 3009:
case 2087:
case 1940:
case 1367:
case 1467:
case 496:
case 617:
case 3966:
case 3909:
case 1040:
case 3404:
case 3736:
case 672:
case 406:
case 598:
case 399:
case 415:
case 3249:
case 2910:
case 509:
case 3894:
case 4024:
case 2959:
case 3109:
case 2291:
case 1489:
case 3166:
case 188:
case 1303:
case 1984:
case 518:
case 4007:
case 1357:
case 1026:
case 4053:
case 3427:
case 2323:
case 3327:
case 2849:
case 234:
case 743:
case 244:
case 1981:
case 2100:
case 4080:
case 2294:
case 954:
case 2016:
case 1091:
case 60:
case 1206:
case 1413:
case 3375:
case 1598:
case 2592:
case 2900:
case 3475:
case 3698:
case 2472:
case 1378:
case 3595:
case 484:
case 1297:
case 1860:
case 3919:
case 4021:
case 3891:
case 2240:
case 3950:
case 3782:
case 2785:
case 3338:
case 674:
case 2116:
case 1435:
case 1287:
case 4032:
case 1335:
case 1685:
case 3792:
case 2000:
case 1259:
case 2795:
case 3846:
case 869:
case 661:
case 2284:
case 2916:
case 1819:
case 1991:
case 3820:
case 131:
case 3960:
case 3347:
case 2343:
case 1081:
case 2361:
case 2461:
case 1046:
case 3730:
case 3686:
case 3262:
case 1037:
case 2265:
case 909:
case 1541:
case 3336:
case 566:
case 3641:
case 642:
case 2118:
case 632:
case 3977:
case 2973:
case 469:
case 3711:
case 2754:
case 3848:
case 1789:
case 260:
case 1664:
case 3837:
case 1703:
case 365:
case 1231:
case 2173:
case 1048:
case 3177:
case 2042:
case 2699:
case 3727:
case 3653:
case 2228:
case 2942:
case 1948:
case 552:
case 2527:
case 2255:
case 3205:
case 2934:
case 2339:
case 1012:
case 283:
case 784:
case 170:
case 1507:
case 2073:
case 3077:
case 3554:
case 12:
case 2511:
case 3145:
case 884:
case 3696:
case 1376:
case 1524:
case 433:
case 2815:
case 443:
case 999:
case 366:
case 468:
case 2504:
case 2871:
case 1735:
case 1521:
case 2805:
case 644:
case 323:
case 3551:
case 1651:
case 2501:
case 3492:
case 3392:
case 2852:
case 20:
case 3855:
case 815:
case 1273:
case 3215:
case 2008:
case 1002:
case 2613:
case 1165:
case 3617:
case 164:
case 2761:
case 3747:
case 3058:
case 706:
case 3430:
case 3274:
case 1643:
case 554:
case 2547:
case 773:
case 805:
case 1242:
case 1928:
case 2922:
case 2862:
case 3865:
case 816:
case 1713:
case 1902:
case 2908:
case 1778:
case 3158:
case 2772:
case 3775:
case 29:
case 1128:
case 127:
case 3632:
case 705:
case 2385:
case 1102:
case 2751:
case 1065:
case 873:
case 3382:
case 3482:
case 3068:
case 1992:
case 49:
case 2749:
case 1130:
case 2236:
case 2619:
case 2088:
case 2362:
case 2462:
case 3365:
case 832:
case 2198:
case 2581:
case 2546:
case 1930:
case 41:
case 901:
case 922:
case 3616:
case 1516:
case 3302:
case 2371:
case 2188:
case 2405:
case 1358:
case 1458:
case 3781:
case 2660:
case 3455:
case 3328:
case 3428:
case 1030:
case 991:
case 1425:
case 1750:
case 96:
case 1092:
case 3830:
case 911:
case 1649:
case 3549:
case 179:
case 953:
case 2693:
case 3697:
case 1477:
case 2729:
case 2292:
case 2179:
case 3076:
case 233:
case 1709:
case 1936:
case 1783:
case 2540:
case 2526:
case 1876:
case 2594:
case 2474:
case 417:
case 2230:
case 2979:
case 990:
case 844:
case 2656:
case 3669:
case 615:
case 3784:
case 2415:
case 2315:
case 1136:
case 3312:
case 4034:
case 682:
case 3836:
case 2584:
case 673:
case 3348:
case 2079:
case 3285:
case 2333:
case 3437:
case 605:
case 2282:
case 3740:
case 178:
case 1587:
case 3687:
case 3610:
case 1793:
case 3976:
case 3929:
case 1454:
case 3576:
case 1959:
case 3396:
case 3496:
case 3324:
case 1676:
case 3424:
case 2184:
case 1987:
case 535:
case 2094:
case 2357:
case 3129:
case 3453:
case 2026:
case 3260:
case 4027:
case 656:
case 1323:
case 3779:
case 1159:
case 1423:
case 2489:
case 2389:
case 1069:
case 288:
case 62:
case 1291:
case 1187:
case 2639:
case 3407:
case 2303:
case 2984:
case 1969:
case 2084:
case 1197:
case 1246:
case 913:
case 3859:
case 345:
case 2926:
case 335:
case 2399:
case 2499:
case 1829:
case 1281:
case 950:
case 3810:
case 142:
case 1106:
case 3250:
case 3386:
case 480:
case 3636:
case 1220:
case 536:
case 3341:
case 3219:
case 3441:
case 1087:
case 3463:
case 2467:
case 2194:
case 449:
case 2126:
case 2200:
case 1059:
case 976:
case 1795:
case 2259:
case 1000:
case 2210:
case 2287:
case 4038:
case 481:
case 2335:
case 3283:
case 878:
case 3432:
case 3332:
case 2020:
case 1116:
case 3266:
case 2685:
case 3209:
case 2081:
case 4047:
case 1361:
case 1443:
case 951:
case 425:
case 2046:
case 3149:
case 778:
case 2850:
case 241:
case 3570:
case 231:
case 627:
case 3390:
case 2313:
case 3317:
case 2413:
case 3256:
case 1100:
case 3480:
case 3380:
case 1294:
case 3630:
case 2946:
case 1240:
case 664:
case 3421:
case 2920:
case 426:
case 1785:
case 1451:
case 3788:
case 2478:
case 4001:
case 2695:
case 2181:
case 1592:
case 1900:
case 3293:
case 671:
case 3049:
case 2860:
case 2813:
case 1204:
case 226:
case 2768:
case 1762:
case 3051:
case 2014:
case 1190:
case 1944:
case 2001:
case 2224:
case 3143:
case 2147:
case 184:
case 25:
case 1211:
case 82:
case 1349:
case 72:
case 1132:
case 2207:
case 3203:
case 2138:
case 870:
case 2605:
case 4091:
case 1502:
case 2508:
case 2671:
case 2460:
case 3558:
case 2360:
case 1080:
case 3943:
case 1555:
case 1144:
case 2652:
case 1227:
case 5:
case 1872:
case 1528:
case 2878:
case 756:
case 3731:
case 3628:
case 2253:
case 3257:
case 3299:
case 4081:
case 862:
case 3043:
case 1752:
case 3172:
case 2047:
case 3844:
case 855:
case 2725:
case 3:
case 1121:
case 431:
case 1771:
case 441:
case 2114:
case 1090:
case 1917:
case 3832:
case 1044:
case 3972:
case 37:
case 281:
case 2241:
case 755:
case 3890:
case 1921:
case 2350:
case 3568:
case 3665:
case 1117:
case 2286:
case 2662:
case 1668:
case 959:
case 2466:
case 1537:
case 2366:
case 3637:
case 937:
case 2309:
case 280:
case 2904:
case 2383:
case 3235:
case 3487:
case 239:
case 2899:
case 3954:
case 257:
case 827:
case 182:
case 3410:
case 3773:
case 1429:
case 1996:
case 512:
case 1924:
case 385:
case 3459:
case 2244:
case 321:
case 2867:
case 1907:
case 727:
case 1715:
case 3064:
case 440:
case 2104:
case 4084:
case 3718:
case 2542:
case 1548:
case 1953:
case 1645:
case 2111:
case 1774:
case 3923:
case 302:
case 2927:
case 1247:
case 1124:
case 1053:
case 195:
case 4094:
case 4026:
case 3896:
case 864:
case 2356:
case 392:
case 1854:
case 2280:
case 3406:
case 679:
case 3734:
case 871:
case 488:
case 2217:
case 1186:
case 386:
case 521:
case 3369:
case 1141:
case 3612:
case 1512:
case 1163:
case 3497:
case 2393:
case 1677:
case 3054:
case 1823:
case 2573:
case 958:
case 585:
case 3278:
case 1024:
case 3853:
case 1275:
case 312:
case 1986:
case 1733:
case 1214:
case 764:
case 2803:
case 2004:
case 248:
case 1963:
case 2889:
case 106:
case 1660:
case 626:
case 2358:
case 464:
case 4028:
case 3898:
case 3422:
case 2030:
case 904:
case 2182:
case 65:
case 1591:
case 3308:
case 888:
case 1371:
case 1471:
case 2092:
case 1098:
case 3700:
case 3276:
case 3985:
case 1988:
case 3620:
case 2870:
case 97:
case 1088:
case 1362:
case 2368:
case 3995:
case 2500:
case 2992:
case 1749:
case 427:
case 2130:
case 840:
case 830:
case 3716:
case 994:
case 1885:
case 9:
case 2192:
case 2279:
case 3195:
case 681:
case 3431:
case 3331:
case 1546:
case 2930:
case 455:
case 921:
case 3342:
case 3442:
case 462:
case 1079:
case 2756:
case 3769:
case 831:
case 3706:
case 639:
case 3434:
case 3939:
case 3684:
case 902:
case 169:
case 2510:
case 347:
case 2629:
case 359:
case 731:
case 2559:
case 741:
case 1282:
case 4037:
case 1666:
case 3509:
case 1433:
case 1609:
case 985:
case 3583:
case 2709:
case 2766:
case 2936:
case 2783:
case 3787:
case 1540:
case 1693:
case 559:
case 3710:
case 2377:
case 2477:
case 547:
case 2298:
case 1292:
case 1179:
case 2506:
case 470:
case 3039:
case 2136:
case 3318:
case 3418:
case 992:
case 1415:
case 4012:
case 3694:
case 1474:
case 1230:
case 2876:
case 1594:
case 3556:
case 1202:
case 2208:
case 3133:
case 3589:
case 270:
case 3015:
case 550:
case 1603:
case 75:
case 2012:
case 1018:
case 2553:
case 3557:
case 1942:
case 375:
case 3225:
case 117:
case 726:
case 3074:
case 2623:
case 587:
case 3786:
case 303:
case 2937:
case 1134:
case 593:
case 256:
case 3604:
case 1511:
case 479:
case 2148:
case 3611:
case 1142:
case 2524:
case 1874:
case 2596:
case 2476:
case 1754:
case 3724:
case 3842:
case 393:
case 2586:
case 3268:
case 1118:
case 725:
case 881:
case 3834:
case 689:
case 825:
case 1173:
case 781:
case 1042:
case 3974:
case 387:
case 3479:
case 3599:
case 262:
case 935:
case 1034:
case 313:
case 3707:
case 350:
case 3915:
case 739:
case 757:
case 2590:
case 1908:
case 161:
case 2661:
case 3952:
case 58:
case 2928:
case 1922:
case 1031:
case 1635:
case 1538:
case 2532:
case 3721:
case 880:
case 3105:
case 3388:
case 4082:
case 1108:
case 1385:
case 1485:
case 2102:
case 929:
case 2065:
case 2544:
case 2155:
case 1772:
case 227:
case 857:
case 19:
case 631:
case 3398:
case 3744:
case 2672:
case 1495:
case 4092:
case 3578:
case 3675:
case 1131:
case 2273:
case 2858:
case 3732:
case 1871:
case 2735:
case 2521:
case 848:
case 838:
case 3962:
case 863:
case 2651:
case 2965:
case 3052:
case 38:
case 763:
case 1761:
case 748:
case 738:
case 4030:
case 2218:
case 1212:
case 1008:
case 2002:
case 3071:
case 3790:
case 2165:
case 271:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744426801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,];
var gg_b = "1744426801/";

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
