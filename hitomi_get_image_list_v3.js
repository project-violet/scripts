// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 3373:
case 3952:
case 2519:
case 3790:
case 3181:
case 3768:
case 42:
case 3757:
case 1667:
case 2002:
case 2157:
case 761:
case 1411:
case 3229:
case 2366:
case 2683:
case 1015:
case 1901:
case 1615:
case 1518:
case 1460:
case 3636:
case 3897:
case 3310:
case 3694:
case 1174:
case 2261:
case 2617:
case 675:
case 3976:
case 2671:
case 815:
case 3324:
case 1182:
case 257:
case 170:
case 686:
case 942:
case 2632:
case 483:
case 392:
case 810:
case 385:
case 1354:
case 3686:
case 274:
case 1782:
case 1475:
case 1251:
case 0:
case 795:
case 1140:
case 1689:
case 575:
case 4020:
case 3423:
case 211:
case 3411:
case 3939:
case 3767:
case 1810:
case 2960:
case 738:
case 3979:
case 1513:
case 1071:
case 73:
case 2406:
case 1520:
case 1945:
case 1891:
case 2148:
case 186:
case 2149:
case 3477:
case 2957:
case 1091:
case 2326:
case 351:
case 2208:
case 407:
case 3159:
case 3834:
case 1752:
case 568:
case 3077:
case 984:
case 625:
case 451:
case 2844:
case 1246:
case 4057:
case 3680:
case 1523:
case 1385:
case 2483:
case 1494:
case 2543:
case 2335:
case 1446:
case 3438:
case 1560:
case 1189:
case 3198:
case 2314:
case 3234:
case 442:
case 1500:
case 2316:
case 3800:
case 1036:
case 737:
case 3496:
case 763:
case 153:
case 3364:
case 328:
case 732:
case 907:
case 1533:
case 2454:
case 2855:
case 3371:
case 2989:
case 3434:
case 3679:
case 20:
case 357:
case 1201:
case 111:
case 3168:
case 2545:
case 2829:
case 3531:
case 2839:
case 726:
case 3442:
case 1257:
case 4021:
case 3995:
case 1352:
case 2780:
case 3381:
case 2890:
case 1065:
case 2825:
case 2427:
case 2242:
case 916:
case 3714:
case 3882:
case 595:
case 1497:
case 234:
case 905:
case 147:
case 1733:
case 1927:
case 210:
case 821:
case 1470:
case 587:
case 2752:
case 3836:
case 136:
case 629:
case 584:
case 340:
case 3453:
case 1792:
case 2300:
case 3850:
case 2439:
case 2925:
case 2796:
case 865:
case 811:
case 2267:
case 1505:
case 3207:
case 1178:
case 1962:
case 3580:
case 1860:
case 3148:
case 1143:
case 2456:
case 1078:
case 2308:
case 2393:
case 3677:
case 3111:
case 1305:
case 3377:
case 2365:
case 2892:
case 1183:
case 590:
case 1889:
case 3342:
case 1959:
case 2772:
case 2888:
case 1781:
case 3149:
case 3488:
case 3465:
case 846:
case 1992:
case 11:
case 3908:
case 4074:
case 539:
case 2188:
case 827:
case 474:
case 2572:
case 1731:
case 2136:
case 3124:
case 2644:
case 321:
case 1749:
case 555:
case 3825:
case 2569:
case 2924:
case 672:
case 467:
case 2127:
case 1192:
case 3803:
case 3443:
case 690:
case 3968:
case 2211:
case 2792:
case 3539:
case 3432:
case 707:
case 888:
case 2689:
case 30:
case 3572:
case 1971:
case 2324:
case 2044:
case 3027:
case 48:
case 775:
case 402:
case 1126:
case 876:
case 2495:
case 3533:
case 2965:
case 3101:
case 2452:
case 1776:
case 798:
case 1624:
case 570:
case 3264:
case 1347:
case 3281:
case 740:
case 500:
case 457:
case 2554:
case 4005:
case 3532:
case 2712:
case 2575:
case 1563:
case 3812:
case 2207:
case 1898:
case 2490:
case 2786:
case 3410:
case 3154:
case 341:
case 3788:
case 2050:
case 1577:
case 1044:
case 2319:
case 574:
case 135:
case 2086:
case 149:
case 899:
case 2414:
case 2005:
case 4009:
case 2602:
case 1637:
case 3831:
case 2129:
case 249:
case 1299:
case 3167:
case 3918:
case 3385:
case 3403:
case 4080:
case 204:
case 4011:
case 2771:
case 2889:
case 4081:
case 1991:
case 1001:
case 1083:
case 4085:
case 3299:
case 318:
case 415:
case 1862:
case 2264:
case 1026:
case 755:
case 1374:
case 217:
case 2200:
case 494:
case 34:
case 1970:
case 601:
case 1814:
case 2165:
case 460:
case 181:
case 2014:
case 2984:
case 1544:
case 3955:
case 2636:
case 752:
case 224:
case 3912:
case 3021:
case 1227:
case 199:
case 559:
case 1742:
case 2038:
case 3047:
case 3799:
case 3272:
case 3557:
case 454:
case 3291:
case 2166:
case 1222:
case 3188:
case 2194:
case 2660:
case 3102:
case 2816:
case 986:
case 4037:
case 1413:
case 3062:
case 3709:
case 592:
case 813:
case 3262:
case 3045:
case 3513:
case 1278:
case 3297:
case 563:
case 3951:
case 2161:
case 1051:
case 1292:
case 348:
case 689:
case 3806:
case 3180:
case 1391:
case 2916:
case 1345:
case 312:
case 2880:
case 3139:
case 1349:
case 640:
case 1302:
case 3451:
case 420:
case 1587:
case 843:
case 2471:
case 849:
case 3578:
case 2018:
case 3888:
case 700:
case 349:
case 3942:
case 3172:
case 992:
case 1199:
case 1213:
case 504:
case 329:
case 222:
case 3145:
case 2082:
case 3361:
case 3498:
case 191:
case 871:
case 1572:
case 3668:
case 1761:
case 1313:
case 1398:
case 146:
case 1462:
case 2216:
case 2262:
case 2094:
case 2804:
case 1481:
case 327:
case 1621:
case 2568:
case 2562:
case 3275:
case 1754:
case 3695:
case 2622:
case 859:
case 3848:
case 2080:
case 1509:
case 3651:
case 1196:
case 410:
case 904:
case 2278:
case 394:
case 1423:
case 1161:
case 3576:
case 64:
case 3424:
case 3247:
case 2682:
case 1147:
case 2507:
case 443:
case 1549:
case 716:
case 680:
case 2173:
case 2360:
case 2433:
case 2517:
case 2078:
case 1735:
case 3222:
case 1164:
case 2707:
case 3746:
case 8:
case 4031:
case 275:
case 3147:
case 1524:
case 3902:
case 174:
case 1535:
case 3755:
case 1060:
case 395:
case 1600:
case 356:
case 3153:
case 2685:
case 3185:
case 2323:
case 2540:
case 1012:
case 1268:
case 699:
case 1380:
case 878:
case 2488:
case 636:
case 2588:
case 1336:
case 3003:
case 624:
case 2879:
case 2177:
case 3678:
case 3844:
case 3847:
case 2174:
case 2219:
case 895:
case 3758:
case 1586:
case 472:
case 1372:
case 844:
case 1999:
case 3158:
case 2597:
case 1122:
case 479:
case 2428:
case 419:
case 316:
case 1433:
case 3824:
case 3643:
case 3701:
case 2691:
case 802:
case 2098:
case 256:
case 3577:
case 1480:
case 3879:
case 2019:
case 2411:
case 4025:
case 2946:
case 2206:
case 436:
case 2016:
case 2868:
case 3833:
case 712:
case 412:
case 1724:
case 156:
case 3186:
case 3366:
case 2978:
case 4047:
case 2954:
case 1266:
case 267:
case 2415:
case 1417:
case 4093:
case 3633:
case 2937:
case 3558:
case 3166:
case 2902:
case 1812:
case 2449:
case 3311:
case 1136:
case 2423:
case 22:
case 943:
case 1817:
case 764:
case 1777:
case 1399:
case 3200:
case 2150:
case 1980:
case 1526:
case 4034:
case 2337:
case 2981:
case 3431:
case 703:
case 253:
case 3585:
case 2283:
case 2087:
case 547:
case 3705:
case 4015:
case 1308:
case 3482:
case 2453:
case 1759:
case 1895:
case 1025:
case 788:
case 866:
case 3109:
case 2352:
case 796:
case 2966:
case 3621:
case 2987:
case 3455:
case 3415:
case 2351:
case 1444:
case 2311:
case 190:
case 1569:
case 1501:
case 3590:
case 4090:
case 3861:
case 1819:
case 1451:
case 3957:
case 2701:
case 2793:
case 656:
case 894:
case 1098:
case 3659:
case 2726:
case 553:
case 485:
case 26:
case 2992:
case 2613:
case 429:
case 2417:
case 2983:
case 893:
case 3028:
case 160:
case 3544:
case 1503:
case 952:
case 1392:
case 971:
case 2725:
case 2376:
case 1450:
case 3416:
case 2431:
case 3721:
case 4018:
case 184:
case 3795:
case 2239:
case 2790:
case 896:
case 1052:
case 3649:
case 1849:
case 722:
case 3138:
case 562:
case 3863:
case 2722:
case 3037:
case 646:
case 3980:
case 2000:
case 1068:
case 3601:
case 1294:
case 3253:
case 2678:
case 2363:
case 3270:
case 1467:
case 2969:
case 3857:
case 3066:
case 2805:
case 1152:
case 3134:
case 3370:
case 993:
case 1069:
case 1224:
case 2347:
case 293:
case 3505:
case 345:
case 3474:
case 2706:
case 978:
case 837:
case 603:
case 4022:
case 2760:
case 2225:
case 1173:
case 409:
case 139:
case 913:
case 628:
case 1825:
case 3380:
case 1902:
case 980:
case 1272:
case 1384:
case 2089:
case 2321:
case 3673:
case 2611:
case 24:
case 828:
case 1371:
case 3246:
case 3050:
case 1042:
case 3773:
case 3971:
case 4055:
case 23:
case 339:
case 2755:
case 2307:
case 2027:
case 1101:
case 3491:
case 1798:
case 3082:
case 1830:
case 3525:
case 3128:
case 3667:
case 414:
case 4039:
case 1234:
case 2906:
case 536:
case 461:
case 447:
case 2857:
case 1340:
case 1431:
case 3867:
case 1676:
case 1057:
case 1157:
case 2759:
case 2656:
case 2865:
case 2204:
case 2943:
case 2813:
case 3273:
case 41:
case 3529:
case 1127:
case 1440:
case 2131:
case 1954:
case 1102:
case 9:
case 2585:
case 1922:
case 1993:
case 3287:
case 2802:
case 3509:
case 724:
case 1840:
case 2849:
case 2770:
case 2254:
case 3095:
case 389:
case 1097:
case 365:
case 3534:
case 661:
case 3778:
case 1095:
case 1634:
case 3259:
case 1682:
case 269:
case 258:
case 2111:
case 2927:
case 2932:
case 1469:
case 425:
case 2350:
case 2045:
case 3780:
case 1000:
case 3420:
case 2137:
case 3644:
case 2375:
case 2936:
case 466:
case 319:
case 99:
case 3439:
case 2852:
case 3696:
case 1568:
case 2135:
case 2930:
case 3517:
case 1214:
case 3707:
case 1307:
case 3789:
case 2734:
case 386:
case 3538:
case 3421:
case 4013:
case 2546:
case 765:
case 3156:
case 3664:
case 967:
case 3504:
case 3710:
case 3014:
case 1815:
case 1704:
case 2386:
case 226:
case 3763:
case 782:
case 2003:
case 2230:
case 1043:
case 2485:
case 1547:
case 119:
case 573:
case 734:
case 1924:
case 3344:
case 2684:
case 423:
case 674:
case 1799:
case 3283:
case 3913:
case 3760:
case 1575:
case 1357:
case 3394:
case 1111:
case 3555:
case 1373:
case 3898:
case 957:
case 3365:
case 3386:
case 512:
case 3837:
case 2466:
case 979:
case 4044:
case 840:
case 2963:
case 619:
case 3205:
case 2093:
case 3098:
case 2015:
case 3464:
case 3638:
case 3988:
case 335:
case 375:
case 697:
case 1896:
case 754:
case 3802:
case 167:
case 260:
case 3152:
case 2791:
case 176:
case 1626:
case 1631:
case 2848:
case 2076:
case 4016:
case 3331:
case 2819:
case 3004:
case 919:
case 2240:
case 2587:
case 2292:
case 3133:
case 1822:
case 333:
case 2797:
case 1938:
case 2758:
case 106:
case 527:
case 3987:
case 1808:
case 1582:
case 581:
case 2594:
case 4024:
case 1807:
case 2958:
case 3762:
case 1576:
case 1640:
case 2971:
case 3011:
case 2956:
case 4054:
case 1642:
case 3114:
case 1007:
case 1785:
case 3346:
case 3994:
case 1346:
case 1884:
case 3286:
case 956:
case 548:
case 1408:
case 2353:
case 2315:
case 486:
case 756:
case 1432:
case 3129:
case 1414:
case 1585:
case 1861:
case 1332:
case 445:
case 408:
case 62:
case 350:
case 4070:
case 1402:
case 2973:
case 57:
case 3687:
case 3113:
case 3219:
case 1514:
case 2859:
case 1303:
case 3945:
case 3258:
case 3880:
case 1581:
case 7:
case 2626:
case 863:
case 1265:
case 4003:
case 2379:
case 1818:
case 2400:
case 1253:
case 2580:
case 2657:
case 3042:
case 2055:
case 3737:
case 1256:
case 4040:
case 2008:
case 1397:
case 983:
case 2991:
case 3637:
case 3169:
case 2551:
case 2322:
case 1879:
case 1635:
case 3911:
case 2570:
case 673:
case 1914:
case 2659:
case 2368:
case 1030:
case 3923:
case 945:
case 2776:
case 525:
case 1288:
case 2367:
case 669:
case 3396:
case 4000:
case 3761:
case 1233:
case 1415:
case 286:
case 240:
case 317:
case 2099:
case 1271:
case 363:
case 1298:
case 2010:
case 2231:
case 759:
case 3998:
case 2781:
case 1591:
case 3938:
case 285:
case 1976:
case 1506:
case 2915:
case 268:
case 208:
case 1873:
case 742:
case 1184:
case 3401:
case 404:
case 2662:
case 1473:
case 784:
case 366:
case 371:
case 508:
case 3650:
case 1242:
case 3959:
case 2743:
case 2291:
case 2567:
case 2653:
case 2643:
case 3516:
case 1941:
case 1274:
case 2209:
case 2435:
case 3475:
case 2282:
case 2672:
case 1965:
case 221:
case 6:
case 1316:
case 3606:
case 2284:
case 273:
case 2995:
case 3856:
case 3665:
case 1606:
case 361:
case 2735:
case 1058:
case 3774:
case 1692:
case 3333:
case 2928:
case 3782:
case 2994:
case 1639:
case 2473:
case 455:
case 2249:
case 1584:
case 2893:
case 3743:
case 2358:
case 247:
case 2724:
case 1106:
case 3049:
case 3588:
case 3550:
case 3503:
case 2205:
case 3936:
case 3630:
case 678:
case 432:
case 3613:
case 2275:
case 171:
case 2201:
case 1011:
case 2033:
case 1998:
case 2035:
case 3899:
case 630:
case 1802:
case 2026:
case 2986:
case 2052:
case 2130:
case 2670:
case 3869:
case 3121:
case 2176:
case 2909:
case 1177:
case 2697:
case 3666:
case 2180:
case 3144:
case 2013:
case 1829:
case 1338:
case 1419:
case 1437:
case 793:
case 2241:
case 3704:
case 478:
case 1880:
case 854:
case 1714:
case 797:
case 1:
case 54:
case 2799:
case 1574:
case 1664:
case 4041:
case 3450:
case 2993:
case 701:
case 513:
case 3575:
case 1636:
case 1016:
case 143:
case 216:
case 2113:
case 3235:
case 2901:
case 296:
case 3073:
case 3514:
case 1720:
case 1803:
case 125:
case 3318:
case 97:
case 2955:
case 4010:
case 3096:
case 3819:
case 3204:
case 2399:
case 1279:
case 1014:
case 1155:
case 251:
case 1231:
case 187:
case 1562:
case 236:
case 3623:
case 2887:
case 2910:
case 3383:
case 1383:
case 2541:
case 1836:
case 1438:
case 2504:
case 3480:
case 2058:
case 2421:
case 2156:
case 2070:
case 4028:
case 741:
case 2961:
case 1306:
case 1489:
case 1418:
case 1421:
case 3469:
case 151:
case 2101:
case 3542:
case 822:
case 710:
case 3184:
case 2460:
case 558:
case 927:
case 917:
case 2586:
case 3289:
case 2011:
case 1270:
case 1875:
case 2810:
case 330:
case 2795:
case 2708:
case 3766:
case 1355:
case 3628:
case 2290:
case 1023:
case 441:
case 786:
case 3245:
case 2269:
case 3574:
case 2248:
case 1609:
case 3039:
case 3070:
case 1972:
case 1425:
case 1080:
case 3772:
case 1261:
case 3940:
case 3312:
case 1154:
case 1646:
case 2608:
case 21:
case 322:
case 1633:
case 12:
case 1599:
case 100:
case 3357:
case 3729:
case 817:
case 1866:
case 2977:
case 3744:
case 1405:
case 929:
case 3122:
case 1751:
case 1698:
case 2345:
case 2074:
case 1948:
case 816:
case 2972:
case 3556:
case 3460:
case 3448:
case 3209:
case 3573:
case 1561:
case 2677:
case 2122:
case 1823:
case 2344:
case 3858:
case 616:
case 1881:
case 3486:
case 2584:
case 768:
case 2001:
case 572:
case 556:
case 2196:
case 1826:
case 3243:
case 406:
case 1093:
case 2301:
case 2235:
case 2391:
case 2838:
case 4068:
case 2420:
case 1067:
case 950:
case 3483:
case 246:
case 72:
case 3970:
case 3670:
case 2063:
case 301:
case 1675:
case 2621:
case 839:
case 3655:
case 685:
case 1997:
case 2496:
case 4092:
case 963:
case 2183:
case 3336:
case 2824:
case 39:
case 87:
case 4017:
case 824:
case 102:
case 3564:
case 2847:
case 3375:
case 879:
case 1128:
case 4043:
case 3071:
case 114:
case 2429:
case 2573:
case 3335:
case 1351:
case 4058:
case 2385:
case 585:
case 1429:
case 1209:
case 2493:
case 3810:
case 2227:
case 1844:
case 3731:
case 1917:
case 2513:
case 615:
case 3595:
case 1515:
case 3360:
case 875:
case 1337:
case 2741:
case 3993:
case 497:
case 2384:
case 650:
case 973:
case 1734:
case 68:
case 1033:
case 3174:
case 3891:
case 3563:
case 3313:
case 1706:
case 4:
case 2009:
case 3473:
case 1376:
case 635:
case 853:
case 75:
case 166:
case 1713:
case 3402:
case 3895:
case 2582:
case 2097:
case 1565:
case 3756:
case 1282:
case 1595:
case 2866:
case 3298:
case 3924:
case 295:
case 3693:
case 2286:
case 449:
case 2:
case 1775:
case 832:
case 771:
case 2818:
case 2145:
case 1650:
case 3962:
case 3067:
case 1827:
case 1219:
case 1996:
case 2885:
case 3839:
case 3930:
case 2481:
case 2486:
case 3433:
case 2807:
case 3625:
case 2217:
case 1887:
case 496:
case 121:
case 1774:
case 3747:
case 354:
case 3059:
case 1205:
case 3182:
case 266:
case 2739:
case 4094:
case 1472:
case 667:
case 1671:
case 3692:
case 3363:
case 399:
case 789:
case 1103:
case 2558:
case 599:
case 3112:
case 3440:
case 2596:
case 3390:
case 2029:
case 1263:
case 1956:
case 586:
case 1543:
case 552:
case 2556:
case 1112:
case 2396:
case 874:
case 1597:
case 2837:
case 3058:
case 193:
case 799:
case 2075:
case 975:
case 773:
case 938:
case 3674:
case 600:
case 3048:
case 2175:
case 1247:
case 1521:
case 2638:
case 1769:
case 2258:
case 1223:
case 2738:
case 422:
case 873:
case 3085:
case 3406:
case 1363:
case 1918:
case 3528:
case 1613:
case 245:
case 3069:
case 1947:
case 2464:
case 3907:
case 1717:
case 347:
case 3343:
case 3569:
case 2162:
case 1916:
case 3832:
case 2815:
case 428:
case 2447:
case 1507:
case 4036:
case 1816:
case 1957:
case 1139:
case 1070:
case 3511:
case 4050:
case 3524:
case 941:
case 1130:
case 1216:
case 360:
case 3183:
case 2480:
case 1672:
case 3332:
case 2779:
case 3009:
case 77:
case 621:
case 1038:
case 2312:
case 50:
case 1780:
case 516:
case 2589:
case 1172:
case 519:
case 3854:
case 1323:
case 373:
case 3660:
case 906:
case 3303:
case 2720:
case 2462:
case 2663:
case 2565:
case 280:
case 2389:
case 3228:
case 1610:
case 3237:
case 1967:
case 994:
case 1366:
case 3325:
case 753:
case 723:
case 2775:
case 823:
case 232:
case 2357:
case 2021:
case 107:
case 2305:
case 1877:
case 3017:
case 2931:
case 1666:
case 3754:
case 387:
case 116:
case 2186:
case 1786:
case 1643:
case 2124:
case 218:
case 1618:
case 308:
case 337:
case 1110:
case 2860:
case 3732:
case 780:
case 3586:
case 3953:
case 86:
case 243:
case 2299:
case 2356:
case 3661:
case 3830:
case 489:
case 3816:
case 3599:
case 1072:
case 2535:
case 65:
case 1416:
case 3676:
case 2115:
case 2182:
case 3820:
case 1702:
case 3367:
case 867:
case 2831:
case 2398:
case 1949:
case 1919:
case 1309:
case 2667:
case 718:
case 60:
case 2436:
case 15:
case 1377:
case 1370:
case 3223:
case 1458:
case 2051:
case 56:
case 2069:
case 2511:
case 1932:
case 3061:
case 2120:
case 1683:
case 1832:
case 362:
case 663:
case 3193:
case 3878:
case 2951:
case 671:
case 3308:
case 1320:
case 2869:
case 1179:
case 209:
case 3581:
case 1678:
case 1010:
case 2876:
case 3489:
case 2298:
case 2974:
case 128:
case 998:
case 4048:
case 750:
case 3933:
case 1653:
case 1974:
case 800:
case 3849:
case 1063:
case 1457:
case 1456:
case 564:
case 2709:
case 53:
case 2184:
case 3605:
case 2272:
case 3220:
case 3889:
case 3582:
case 766:
case 3652:
case 2668:
case 3997:
case 1162:
case 1341:
case 325:
case 3268:
case 2639:
case 83:
case 2191:
case 1950:
case 964:
case 1593:
case 1230:
case 1557:
case 382:
case 1075:
case 14:
case 3718:
case 3986:
case 66:
case 2808:
case 3118:
case 1703:
case 1145:
case 2935:
case 1795:
case 3141:
case 3770:
case 2814:
case 3038:
case 1912:
case 2328:
case 169:
case 2229:
case 2803:
case 2342:
case 3568:
case 1939:
case 3338:
case 2256:
case 384:
case 3388:
case 2615:
case 1797:
case 2139:
case 2811:
case 1466:
case 2499:
case 1218:
case 450:
case 1930:
case 2833:
case 1208:
case 521:
case 4042:
case 3218:
case 935:
case 3309:
case 607:
case 227:
case 2332:
case 838:
case 954:
case 1567:
case 3627:
case 1017:
case 1359:
case 1536:
case 2437:
case 2273:
case 3278:
case 2923:
case 3984:
case 3691:
case 622:
case 2382:
case 612:
case 1281:
case 1745:
case 2190:
case 1548:
case 4089:
case 297:
case 3943:
case 219:
case 652:
case 3006:
case 3961:
case 1727:
case 1740:
case 1314:
case 103:
case 3352:
case 3551:
case 3616:
case 3751:
case 3267:
case 2336:
case 33:
case 310:
case 2378:
case 1369:
case 1133:
case 1661:
case 2945:
case 3554:
case 1144:
case 3631:
case 1806:
case 487:
case 1250:
case 1691:
case 1389:
case 2395:
case 825:
case 1420:
case 3458:
case 1428:
case 2006:
case 1124:
case 608:
case 138:
case 2834:
case 1747:
case 1259:
case 1693:
case 1312:
case 580:
case 3339:
case 772:
case 3040:
case 3639:
case 1668:
case 4086:
case 1134:
case 649:
case 492:
case 1541:
case 80:
case 2377:
case 3669:
case 3359:
case 634:
case 2023:
case 598:
case 3967:
case 2794:
case 3470:
case 3010:
case 2302:
case 751:
case 3132:
case 2595:
case 3917:
case 2346:
case 1649:
case 2518:
case 2140:
case 252:
case 514:
case 1710:
case 1835:
case 2832:
case 3404:
case 1191:
case 3225:
case 847:
case 2333:
case 1553:
case 426:
case 1077:
case 71:
case 3354:
case 3610:
case 2037:
case 1228:
case 2736:
case 2783:
case 1838:
case 974:
case 3977:
case 76:
case 2750:
case 2245:
case 1870:
case 1344:
case 2032:
case 702:
case 2642:
case 2042:
case 860:
case 3319:
case 2031:
case 1659:
case 618:
case 1471:
case 1022:
case 3461:
case 1151:
case 3626:
case 3337:
case 3478:
case 2650:
case 2631:
case 3941:
case 1035:
case 1973:
case 1859:
case 3000:
case 1951:
case 3769:
case 961:
case 1248:
case 1046:
case 499:
case 3117:
case 1831:
case 1925:
case 3553:
case 794:
case 2409:
case 606:
case 1908:
case 131:
case 2607:
case 1195:
case 2715:
case 2822:
case 3068:
case 1684:
case 1673:
case 2949:
case 613:
case 1193:
case 359:
case 3683:
case 2479:
case 3842:
case 3786:
case 3103:
case 2976:
case 3536:
case 792:
case 3877:
case 331:
case 1167:
case 1748:
case 1608:
case 1088:
case 259:
case 743:
case 3255:
case 901:
case 3157:
case 3266:
case 762:
case 3142:
case 3163:
case 3107:
case 2559:
case 1630:
case 271:
case 1426:
case 3948:
case 421:
case 27:
case 3080:
case 2325:
case 926:
case 1789:
case 565:
case 3685:
case 2004:
case 1403:
case 3549:
case 1655:
case 902:
case 1883:
case 3413:
case 4004:
case 3632:
case 3823:
case 3441:
case 4079:
case 3191:
case 305:
case 1203:
case 2199:
case 594:
case 490:
case 511:
case 3029:
case 2243:
case 2675:
case 2516:
case 589:
case 3841:
case 3409:
case 277:
case 3052:
case 1107:
case 2304:
case 1987:
case 1869:
case 1254:
case 3927:
case 3199:
case 1787:
case 2294:
case 3195:
case 850:
case 1627:
case 4078:
case 2547:
case 2117:
case 2036:
case 3777:
case 3227:
case 471:
case 1847:
case 1989:
case 2064:
case 1090:
case 2095:
case 3675:
case 1550:
case 545:
case 4002:
case 1129:
case 1137:
case 544:
case 3734:
case 1318:
case 3263:
case 3873:
case 4083:
case 2213:
case 3727:
case 2840:
case 120:
case 2369:
case 713:
case 1811:
case 2474:
case 3239:
case 3807:
case 1578:
case 3700:
case 110:
case 1857:
case 1904:
case 791:
case 537:
case 2047:
case 3561:
case 1464:
case 3890:
case 2503:
case 1510:
case 3178:
case 59:
case 28:
case 2527:
case 2141:
case 2234:
case 1488:
case 3026:
case 1249:
case 2521:
case 2875:
case 2510:
case 37:
case 1657:
case 1289:
case 921:
case 3972:
case 3120:
case 3305:
case 393:
case 4075:
case 3044:
case 1455:
case 2054:
case 2801:
case 691:
case 1217:
case 2476:
case 1839:
case 2066:
case 3510:
case 3518:
case 1368:
case 3294:
case 1765:
case 632:
case 18:
case 188:
case 2418:
case 3164:
case 3407:
case 400:
case 1388:
case 1361:
case 1146:
case 3378:
case 1809:
case 591:
case 687:
case 1138:
case 3022:
case 2025:
case 3057:
case 231:
case 3992:
case 1148:
case 540:
case 3723:
case 2147:
case 2143:
case 3075:
case 889:
case 3252:
case 1757:
case 4008:
case 2252:
case 2578:
case 2397:
case 43:
case 1459:
case 733:
case 3974:
case 2034:
case 1436:
case 94:
case 1893:
case 1625:
case 1929:
case 2109:
case 1994:
case 1723:
case 719:
case 1888:
case 1909:
case 627:
case 4077:
case 1490:
case 3143:
case 1493:
case 1021:
case 3285:
case 3937:
case 2255:
case 16:
case 105:
case 779:
case 1039:
case 2853:
case 2457:
case 4062:
case 939:
case 2665:
case 2327:
case 2049:
case 3445:
case 1851:
case 657:
case 2850:
case 818:
case 220:
case 2295:
case 3919:
case 3231:
case 3043:
case 2390:
case 35:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1729670402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,];
var gg_b = "1729670402/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      subdomainx = String.fromCharCode(97 + gg_m[x]);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
