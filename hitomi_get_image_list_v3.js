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
case 1670:
case 2285:
case 2403:
case 2889:
case 2975:
case 1653:
case 3799:
case 1772:
case 1946:
case 4010:
case 4032:
case 1823:
case 1714:
case 1949:
case 3204:
case 107:
case 2582:
case 1197:
case 473:
case 1153:
case 2952:
case 2465:
case 1134:
case 545:
case 290:
case 461:
case 687:
case 3322:
case 3177:
case 989:
case 2745:
case 2578:
case 3329:
case 2143:
case 2258:
case 1220:
case 1779:
case 901:
case 657:
case 2681:
case 2586:
case 381:
case 2956:
case 430:
case 3326:
case 1043:
case 2517:
case 1969:
case 3924:
case 2445:
case 3492:
case 2315:
case 1966:
case 839:
case 2105:
case 2663:
case 1472:
case 3499:
case 3684:
case 575:
case 3184:
case 2034:
case 2070:
case 2765:
case 1962:
case 2163:
case 1455:
case 2605:
case 2182:
case 3032:
case 92:
case 3359:
case 2929:
case 311:
case 3356:
case 3890:
case 3791:
case 2843:
case 451:
case 3877:
case 373:
case 148:
case 2682:
case 2186:
case 1853:
case 2494:
case 1834:
case 2689:
case 1623:
case 2437:
case 2178:
case 3321:
case 2922:
case 1725:
case 2189:
case 667:
case 2686:
case 845:
case 2543:
case 3257:
case 3884:
case 1086:
case 2617:
case 800:
case 875:
case 2908:
case 2117:
case 2209:
case 572:
case 2260:
case 3584:
case 1082:
case 779:
case 343:
case 2480:
case 3491:
case 539:
case 3756:
case 3391:
case 1067:
case 2380:
case 1827:
case 4001:
case 2407:
case 2424:
case 456:
case 3650:
case 912:
case 3673:
case 3721:
case 370:
case 2996:
case 2647:
case 121:
case 985:
case 3775:
case 2999:
case 2298:
case 962:
case 3150:
case 2535:
case 340:
case 3421:
case 3965:
case 2513:
case 2337:
case 4085:
case 1047:
case 3903:
case 2938:
case 1911:
case 2093:
case 3568:
case 314:
case 1495:
case 2835:
case 454:
case 2707:
case 693:
case 2724:
case 25:
case 3459:
case 4009:
case 3751:
case 3722:
case 4:
case 2847:
case 3408:
case 433:
case 3120:
case 1372:
case 1314:
case 3001:
case 3399:
case 302:
case 2991:
case 3270:
case 1388:
case 2547:
case 3392:
case 65:
case 466:
case 3297:
case 1104:
case 1127:
case 1604:
case 1376:
case 2454:
case 4002:
case 2345:
case 1035:
case 2715:
case 2004:
case 2027:
case 3338:
case 2635:
case 1974:
case 3426:
case 440:
case 1912:
case 2113:
case 3429:
case 384:
case 1464:
case 904:
case 2754:
case 4028:
case 503:
case 832:
case 4040:
case 3451:
case 1744:
case 21:
case 3668:
case 229:
case 3937:
case 26:
case 2567:
case 2303:
case 1919:
case 775:
case 354:
case 3994:
case 2428:
case 1450:
case 1905:
case 3844:
case 2336:
case 146:
case 2600:
case 2075:
case 1808:
case 2760:
case 2021:
case 1049:
case 2339:
case 197:
case 567:
case 1042:
case 2169:
case 2332:
case 2666:
case 2059:
case 2706:
case 3544:
case 522:
case 857:
case 2166:
case 1522:
case 1656:
case 131:
case 2142:
case 3007:
case 1066:
case 3195:
case 3757:
case 2642:
case 144:
case 2841:
case 2402:
case 590:
case 176:
case 97:
case 2146:
case 2649:
case 1750:
case 1822:
case 1000:
case 4015:
case 2583:
case 2997:
case 2646:
case 1152:
case 1529:
case 1675:
case 3564:
case 2970:
case 110:
case 2866:
case 239:
case 1083:
case 2562:
case 2331:
case 3427:
case 557:
case 1448:
case 2026:
case 525:
case 817:
case 2862:
case 2800:
case 2701:
case 78:
case 2661:
case 3936:
case 1420:
case 1108:
case 645:
case 867:
case 2022:
case 2051:
case 3238:
case 4007:
case 4024:
case 2758:
case 2849:
case 1622:
case 1651:
case 2401:
case 3353:
case 1978:
case 675:
case 3370:
case 1151:
case 1122:
case 1989:
case 1875:
case 3397:
case 1214:
case 3054:
case 2141:
case 150:
case 1521:
case 1129:
case 1629:
case 3296:
case 1748:
case 1575:
case 2842:
case 3015:
case 2546:
case 2519:
case 2111:
case 1244:
case 2092:
case 2874:
case 1490:
case 725:
case 2812:
case 2516:
case 757:
case 2611:
case 3906:
case 1784:
case 4080:
case 3453:
case 2096:
case 86:
case 829:
case 58:
case 2215:
case 787:
case 81:
case 358:
case 2816:
case 2254:
case 1368:
case 3960:
case 232:
case 2887:
case 3614:
case 3155:
case 3753:
case 3226:
case 3734:
case 1484:
case 635:
case 420:
case 3065:
case 3825:
case 1947:
case 1696:
case 3003:
case 1591:
case 1199:
case 1264:
case 2358:
case 153:
case 3571:
case 3304:
case 1011:
case 1348:
case 2038:
case 2587:
case 3940:
case 893:
case 249:
case 183:
case 3688:
case 2385:
case 1891:
case 1790:
case 3176:
case 3679:
case 2619:
case 717:
case 56:
case 19:
case 1087:
case 2616:
case 3901:
case 488:
case 2302:
case 392:
case 2360:
case 2207:
case 2736:
case 85:
case 318:
case 203:
case 2091:
case 2174:
case 2130:
case 1913:
case 2309:
case 2112:
case 2630:
case 2612:
case 1935:
case 495:
case 2306:
case 2674:
case 1838:
case 458:
case 2710:
case 368:
case 1191:
case 4065:
case 1030:
case 2340:
case 1012:
case 3357:
case 2904:
case 2927:
case 3572:
case 3888:
case 593:
case 2798:
case 2410:
case 163:
case 2432:
case 1892:
case 3879:
case 1596:
case 994:
case 2439:
case 1295:
case 136:
case 1373:
case 93:
case 3579:
case 3171:
case 3625:
case 2436:
case 2187:
case 1592:
case 3037:
case 3259:
case 3588:
case 3855:
case 2270:
case 1685:
case 3991:
case 2253:
case 2234:
case 664:
case 2550:
case 1528:
case 2573:
case 1783:
case 3433:
case 520:
case 1185:
case 2729:
case 2648:
case 3345:
case 286:
case 2722:
case 723:
case 2850:
case 2408:
case 2620:
case 1281:
case 2120:
case 1971:
case 1243:
case 202:
case 2399:
case 640:
case 185:
case 1761:
case 1802:
case 616:
case 921:
case 2422:
case 2451:
case 162:
case 592:
case 2668:
case 31:
case 858:
case 605:
case 1101:
case 36:
case 329:
case 670:
case 3303:
case 666:
case 2994:
case 254:
case 888:
case 3715:
case 3027:
case 1806:
case 568:
case 3004:
case 2426:
case 1560:
case 1502:
case 2338:
case 3113:
case 284:
case 3613:
case 2429:
case 2085:
case 3733:
case 48:
case 1441:
case 3867:
case 3754:
case 1809:
case 633:
case 799:
case 1205:
case 1483:
case 654:
case 1955:
case 2673:
case 266:
case 1585:
case 2820:
case 270:
case 205:
case 3999:
case 2775:
case 3298:
case 2173:
case 1746:
case 216:
case 1282:
case 2150:
case 104:
case 1979:
case 1885:
case 1558:
case 1289:
case 1988:
case 2223:
case 2759:
case 820:
case 2848:
case 1469:
case 1286:
case 1606:
case 3938:
case 588:
case 868:
case 2568:
case 3093:
case 1330:
case 214:
case 1766:
case 3239:
case 3724:
case 3236:
case 818:
case 1609:
case 2459:
case 602:
case 240:
case 595:
case 1316:
case 2965:
case 165:
case 2452:
case 1700:
case 1762:
case 4004:
case 1449:
case 892:
case 90:
case 106:
case 38:
case 1446:
case 1050:
case 3210:
case 3232:
case 3337:
case 115:
case 2475:
case 1160:
case 686:
case 1346:
case 2036:
case 3186:
case 1419:
case 1787:
case 3678:
case 2375:
case 1416:
case 2321:
case 3178:
case 3922:
case 3951:
case 3189:
case 1349:
case 2039:
case 3543:
case 3686:
case 2590:
case 3228:
case 2032:
case 2010:
case 3182:
case 1198:
case 1964:
case 1247:
case 3843:
case 2890:
case 1430:
case 2791:
case 2356:
case 3926:
case 1474:
case 3780:
case 3881:
case 2877:
case 1698:
case 3682:
case 1132:
case 1369:
case 681:
case 1110:
case 3324:
case 3563:
case 2915:
case 1610:
case 609:
case 1774:
case 4034:
case 1730:
case 4053:
case 2818:
case 387:
case 3863:
case 907:
case 1719:
case 422:
case 1136:
case 3794:
case 1300:
case 2518:
case 1531:
case 3908:
case 3117:
case 1944:
case 159:
case 2329:
case 3578:
case 3745:
case 978:
case 3143:
case 643:
case 1383:
case 3589:
case 1018:
case 2031:
case 281:
case 3643:
case 3586:
case 3956:
case 1411:
case 2438:
case 3285:
case 3975:
case 523:
case 2204:
case 3465:
case 3921:
case 3952:
case 2796:
case 390:
case 367:
case 3663:
case 1235:
case 630:
case 3703:
case 2684:
case 3034:
case 1213:
case 2184:
case 3765:
case 2308:
case 1532:
case 1510:
case 3517:
case 1090:
case 2924:
case 3445:
case 322:
case 768:
case 487:
case 119:
case 2492:
case 926:
case 169:
case 4023:
case 1810:
case 1711:
case 2618:
case 1536:
case 1200:
case 584:
case 1367:
case 3130:
case 432:
case 814:
case 3674:
case 3732:
case 3811:
case 3498:
case 1482:
case 1694:
case 3739:
case 1266:
case 1489:
case 1717:
case 1803:
case 953:
case 4092:
case 3619:
case 1968:
case 335:
case 3360:
case 3302:
case 3511:
case 840:
case 1194:
case 1865:
case 1486:
case 2723:
case 2814:
case 4038:
case 1789:
case 2576:
case 3439:
case 1920:
case 3436:
case 2094:
case 2625:
case 3328:
case 1347:
case 3187:
case 2855:
case 2588:
case 2259:
case 2876:
case 1948:
case 1180:
case 2221:
case 781:
case 3340:
case 2572:
case 1249:
case 3904:
case 1845:
case 2555:
case 1782:
case 3798:
case 2879:
case 833:
case 2985:
case 13:
case 3096:
case 936:
case 2453:
case 4091:
case 2497:
case 3819:
case 1705:
case 3816:
case 1014:
case 258:
case 3233:
case 1665:
case 3301:
case 540:
case 3530:
case 332:
case 3574:
case 2902:
case 1103:
case 3099:
case 1088:
case 2909:
case 1537:
case 3092:
case 743:
case 971:
case 1594:
case 1079:
case 3874:
case 514:
case 1076:
case 3812:
case 1443:
case 3830:
case 288:
case 379:
case 620:
case 2906:
case 1335:
case 668:
case 2571:
case 941:
case 2676:
case 2188:
case 1645:
case 773:
case 3038:
case 2222:
case 3993:
case 2940:
case 3587:
case 349:
case 856:
case 1743:
case 533:
case 3431:
case 618:
case 711:
case 2525:
case 5:
case 516:
case 147:
case 730:
case 2672:
case 2797:
case 1463:
case 802:
case 2734:
case 505:
case 2753:
case 2065:
case 2770:
case 1580:
case 2229:
case 570:
case 2003:
case 2172:
case 886:
case 2655:
case 2114:
case 1283:
case 2928:
case 3800:
case 2644:
case 2936:
case 1305:
case 3661:
case 623:
case 3458:
case 740:
case 3161:
case 960:
case 2144:
case 3051:
case 1211:
case 3022:
case 3203:
case 4075:
case 1064:
case 3029:
case 764:
case 1133:
case 2932:
case 2910:
case 543:
case 3500:
case 2404:
case 714:
case 3265:
case 1713:
case 1824:
case 1807:
case 1343:
case 2033:
case 3141:
case 2998:
case 3549:
case 2299:
case 561:
case 2895:
case 1435:
case 974:
case 1413:
case 733:
case 7:
case 2664:
case 2015:
case 2727:
case 2704:
case 3683:
case 809:
case 3758:
case 705:
case 2595:
case 928:
case 997:
case 14:
case 1044:
case 3008:
case 3332:
case 3561:
case 3310:
case 3294:
case 1124:
case 2931:
case 1107:
case 3059:
case 472:
case 1815:
case 2493:
case 1833:
case 4022:
case 3440:
case 1607:
case 1095:
case 950:
case 3336:
case 3428:
case 3600:
case 439:
case 375:
case 4029:
case 1447:
case 754:
case 4026:
case 3021:
case 1984:
case 1274:
case 3339:
case 1317:
case 1554:
case 551:
case 830:
case 3149:
case 3583:
case 223:
case 3934:
case 1378:
case 2323:
case 2291:
case 2564:
case 1287:
case 861:
case 581:
case 2024:
case 2007:
case 2695:
case 2864:
case 3642:
case 811:
case 756:
case 3841:
case 3740:
case 1467:
case 1253:
case 1726:
case 1234:
case 2685:
case 3388:
case 421:
case 1729:
case 3857:
case 2741:
case 3376:
case 2783:
case 508:
case 3355:
case 606:
case 1408:
case 2461:
case 30:
case 1850:
case 3444:
case 1396:
case 1722:
case 4067:
case 1873:
case 98:
case 186:
case 3593:
case 3987:
case 3314:
case 1120:
case 2601:
case 1668:
case 1422:
case 1708:
case 2761:
case 438:
case 154:
case 1994:
case 1058:
case 2020:
case 212:
case 3284:
case 255:
case 1426:
case 2311:
case 2263:
case 298:
case 604:
case 2483:
case 2205:
case 2441:
case 4047:
case 3464:
case 184:
case 1429:
case 894:
case 170:
case 2585:
case 4013:
case 2858:
case 1752:
case 1820:
case 1721:
case 166:
case 929:
case 2462:
case 74:
case 547:
case 2282:
case 685:
case 3371:
case 3504:
case 662:
case 1775:
case 1548:
case 3193:
case 1756:
case 1391:
case 3067:
case 2558:
case 2885:
case 1:
case 2466:
case 133:
case 3795:
case 2979:
case 3157:
case 2469:
case 3657:
case 698:
case 791:
case 2742:
case 1848:
case 627:
case 3827:
case 1006:
case 3693:
case 655:
case 2217:
case 2109:
case 1040:
case 2330:
case 1459:
case 2106:
case 2769:
case 594:
case 77:
case 2801:
case 2700:
case 2316:
case 1421:
case 2660:
case 140:
case 737:
case 2102:
case 1475:
case 2050:
case 2073:
case 3897:
case 1375:
case 796:
case 54:
case 2419:
case 1036:
case 3834:
case 2346:
case 3853:
case 3017:
case 1590:
case 1039:
case 2349:
case 3123:
case 747:
case 130:
case 967:
case 2416:
case 1352:
case 1321:
case 669:
case 111:
case 2247:
case 62:
case 1359:
case 326:
case 4005:
case 3273:
case 2198:
case 1032:
case 2342:
case 1010:
case 3983:
case 348:
case 4063:
case 173:
case 591:
case 2474:
case 619:
case 2412:
case 1890:
case 1098:
case 2110:
case 2712:
case 1818:
case 1491:
case 794:
case 378:
case 2366:
case 4043:
case 2639:
case 3471:
case 3086:
case 2487:
case 2267:
case 2944:
case 777:
case 324:
case 3089:
case 2300:
case 2362:
case 1518:
case 2139:
case 3220:
case 1031:
case 689:
case 3776:
case 1190:
case 109:
case 3523:
case 3364:
case 1677:
case 1326:
case 1792:
case 2898:
case 1438:
case 2411:
case 3788:
case 708:
case 181:
case 1690:
case 891:
case 925:
case 4017:
case 3714:
case 3823:
case 3772:
case 3005:
case 84:
case 3653:
case 1351:
case 3248:
case 1322:
case 1796:
case 151:
case 3153:
case 3197:
case 1204:
case 3063:
case 448:
case 2598:
case 1227:
case 1684:
case 1499:
case 837:
case 3472:
case 478:
case 1496:
case 3344:
case 3268:
case 3476:
case 3081:
case 2131:
case 4086:
case 3043:
case 3969:
case 2090:
case 3479:
case 2631:
case 3966:
case 3488:
case 4078:
case 269:
case 2832:
case 1492:
case 2711:
case 2367:
case 2262:
case 2200:
case 334:
case 769:
case 2482:
case 852:
case 598:
case 341:
case 39:
case 806:
case 1423:
case 2717:
case 2489:
case 2803:
case 2865:
case 2486:
case 647:
case 882:
case 3538:
case 2968:
case 1901:
case 3087:
case 3295:
case 2789:
case 1125:
case 3016:
case 4011:
case 1872:
case 2545:
case 1588:
case 483:
case 3019:
case 3592:
case 2347:
case 63:
case 1094:
case 677:
case 3896:
case 2242:
case 1579:
case 1171:
case 3373:
case 2786:
case 1572:
case 1514:
case 1357:
case 208:
case 2180:
case 3012:
case 1393:
case 3074:
case 120:
case 1876:
case 2948:
case 1985:
case 371:
case 3596:
case 1275:
case 804:
case 1879:
case 363:
case 694:
case 2782:
case 2055:
case 434:
case 812:
case 2165:
case 1434:
case 2894:
case 1453:
case 3784:
case 1470:
case 565:
case 3368:
case 885:
case 195:
case 2014:
case 2705:
case 862:
case 2594:
case 294:
case 2261:
case 1909:
case 789:
case 2088:
case 49:
case 3477:
case 1906:
case 3638:
case 552:
case 898:
case 188:
case 855:
case 2443:
case 701:
case 3718:
case 2481:
case 4016:
case 1188:
case 3011:
case 1251:
case 1571:
case 2880:
case 1679:
case 504:
case 1176:
case 3418:
case 3891:
case 1688:
case 383:
case 4074:
case 3196:
case 1770:
case 1871:
case 4012:
case 1734:
case 1155:
case 2405:
case 353:
case 2950:
case 1114:
case 2283:
case 2241:
case 2973:
case 3320:
case 3591:
case 1003:
case 3947:
case 3696:
case 1229:
case 471:
case 2580:
case 1825:
case 4042:
case 1936:
case 3608:
case 706:
case 27:
case 1238:
case 3108:
case 2524:
case 945:
case 2507:
case 4046:
case 589:
case 3318:
case 2615:
case 1932:
case 869:
case 1910:
case 446:
case 2735:
case 3448:
case 2633:
case 497:
case 4049:
case 2654:
case 819:
case 291:
case 460:
case 3521:
case 3626:
case 350:
case 2381:
case 1998:
case 476:
case 3214:
case 3390:
case 1054:
case 4000:
case 1704:
case 3859:
case 3255:
case 1015:
case 3126:
case 1664:
case 1296:
case 3629:
case 704:
case 3575:
case 3556:
case 3622:
case 431:
case 4069:
case 380:
case 1595:
case 900:
case 3986:
case 3852:
case 3821:
case 3720:
case 3875:
case 975:
case 3559:
case 2044:
case 1292:
case 3978:
case 1544:
case 52:
case 2815:
case 2124:
case 2918:
case 1931:
case 3508:
case 801:
case 2095:
case 2607:
case 798:
case 2767:
case 2447:
case 2515:
case 712:
case 3046:
case 1844:
case 859:
case 4041:
case 942:
case 3049:
case 3963:
case 785:
case 637:
case 3750:
case 3851:
case 3822:
case 2386:
case 450:
case 3652:
case 2747:
case 1323:
case 2378:
case 3121:
case 123:
case 3000:
case 972:
case 3062:
case 3981:
case 3069:
case 2382:
case 2990:
case 480:
case 2287:
case 3656:
case 3551:
case 3659:
case 3156:
case 344:
case 3225:
case 3829:
case 939:
case 1195:
case 2714:
case 624:
case 1878:
case 2946:
case 2653:
case 510:
case 2634:
case 1285:
case 2670:
case 2248:
case 1921:
case 1886:
case 2755:
case 2197:
case 3598:
case 576:
case 207:
case 771:
case 678:
case 1258:
case 544:
case 2776:
case 1143:
case 1578:
case 2364:
case 943:
case 3411:
case 1882:
case 1643:
case 3995:
case 1681:
case 850:
case 1201:
case 3077:
case 3539:
case 2476:
case 741:
case 3090:
case 1354:
case 1517:
case 2043:
case 3536:
case 2966:
case 3631:
case 1315:
case 3711:
case 32:
case 3832:
case 1703:
case 1817:
case 3235:
case 401:
case 528:
case 930:
case 597:
case 79:
case 3532:
case 2962:
case 1163:
case 2455:
case 1070:
case 1765:
case 3213:
case 2344:
case 3836:
case 844:
case 3964:
case 2570:
case 2273:
case 783:
case 1182:
case 1228:
case 2597:
case 831:
case 248:
case 2395:
case 1780:
case 3430:
case 550:
case 1843:
case 3412:
case 1678:
case 753:
case 2897:
case 2623:
case 1689:
case 1686:
case 860:
case 1922:
case 2123:
case 1951:
case 876:
case 1240:
case 607:
case 951:
case 2086:
case 1617:
case 3487:
case 4077:
case 1863:
case 897:
case 419:
case 187:
case 42:
case 2425:
case 2961:
case 1908:
case 3636:
case 3362:
case 3139:
case 3531:
case 2089:
case 1307:
case 1563:
case 157:
case 3110:
case 874:
case 1260:
case 981:
case 3730:
case 3774:
case 389:
case 1505:
case 3632:
case 3140:
case 863:
case 3278:
case 2193:
case 1380:
case 583:
case 3988:
case 3289:
case 3466:
case 984:
case 304:
case 2657:
case 1424:
case 3976:
case 3742:
case 750:
case 2804:
case 4068:
case 813:
case 2693:
case 1647:
case 3858:
case 3585:
case 954:
case 3462:
case 3955:
case 2371:
case 3128:
case 3282:
case 3914:
case 2504:
case 2527:
case 3972:
case 3387:
case 3449:
case 427:
case 3801:
case 902:
case 3660:
case 3102:
case 3160:
case 315:
case 60:
case 89:
case 986:
case 1232:
case 18:
case 3446:
case 3050:
case 2495:
case 3330:
case 3312:
case 3109:
case 462:
case 2911:
case 1938:
case 1167:
case 3606:
case 352:
case 3106:
case 956:
case 412:
case 15:
case 3609:
case 4020:
case 1813:
case 3769:
case 2355:
case 404:
case 536:
case 3461:
case 2444:
case 20:
case 2277:
case 3068:
case 940:
case 2314:
case 2290:
case 3158:
case 2104:
case 563:
case 2127:
case 883:
case 744:
case 1547:
case 571:
case 2013:
case 964:
case 3685:
case 914:
case 2857:
case 1454:
case 3783:
case 2604:
case 2930:
case 2284:
case 2912:
case 1113:
case 3502:
case 398:
case 3205:
case 406:
case 4073:
case 1754:
case 534:
case 2464:
case 1135:
case 415:
case 9:
case 1613:
case 916:
case 728:
case 11:
case 452:
case 3601:
case 1365:
case 2744:
case 362:
case 3802:
case 3860:
case 3761:
case 1231:
case 1567:
case 59:
case 966:
case 129:
case 3101:
case 1075:
case 4064:
case 1861:
case 1760:
case 2808:
case 175:
case 246:
case 1662:
case 2473:
case 1428:
case 2046:
case 3554:
case 2963:
case 1162:
case 680:
case 2049:
case 1100:
case 100:
case 3274:
case 1052:
case 3212:
case 1237:
case 878:
case 3918:
case 1666:
case 1294:
case 1561:
case 2042:
case 437:
case 3624:
case 650:
case 1056:
case 3854:
case 3767:
case 3990:
case 1142:
case 2271:
case 848:
case 3977:
case 2159:
case 1740:
case 2659:
case 4044:
case 1409:
case 2225:
case 1642:
case 2066:
case 2773:
case 1146:
case 507:
case 2175:
case 2621:
case 1402:
case 260:
case 491:
case 3747:
case 1970:
case 210:
case 1280:
case 2675:
case 2529:
case 3378:
case 1934:
case 70:
case 1997:
case 1646:
case 1149:
case 2062:
case 1541:
case 3389:
case 3615:
case 2041:
case 1562:
case 2318:
case 1500:
case 2083:
case 578:
case 644:
case 3735:
case 1029:
case 3064:
case 1203:
case 3807:
case 3713:
case 1265:
case 1869:
case 738:
case 2420:
case 1458:
case 3305:
case 172:
case 1862:
case 610:
case 923:
case 1701:
case 2768:
case 37:
case 3211:
case 676:
case 2917:
case 2108:
case 3507:
case 2556:
case 1401:
case 2468:
case 1849:
case 807:
case 2651:
case 2622:
case 280:
case 697:
case 2852:
case 2986:
case 628:
case 2875:
case 1008:
case 2279:
case 2061:
case 1542:
case 646:
case 2989:
case 1923:
case 2559:
case 2151:
case 2978:
case 1846:
case 2521:
case 391:
case 1785:
case 250:
case 2377:
case 2626:
case 1141:
case 548:
case 1549:
case 674:
case 3381:
case 2856:
case 2982:
case 3343:
case 1683:
case 1546:
case 2255:
case 1641:
case 999:
case 2126:
case 2575:
case 2629:
case 3413:
case 3261:
case 3079:
case 394:
case 663:
case 3594:
case 2244:
case 3537:
case 1519:
case 671:
case 3335:
case 1516:
case 920:
case 4071:
case 1874:
case 1819:
case 636:
case 1215:
case 3763:
case 377:
case 3837:
case 33:
case 3894:
case 3165:
case 1096:
case 2784:
case 3103:
case 132:
case 3665:
case 1512:
case 1233:
case 1254:
case 3705:
case 3072:
case 2484:
case 2196:
case 2699:
case 521:
case 408:
case 3463:
case 347:
case 1887:
case 3283:
case 3950:
case 253:
case 3973:
case 3580:
case 2947:
case 69:
case 2011:
case 2348:
case 1431:
case 2891:
case 2790:
case 3743:
case 726:
case 3145:
case 283:
case 2777:
case 3478:
case 3637:
case 29:
case 1116:
case 1619:
case 4079:
case 3717:
case 1739:
case 3025:
case 653:
case 3694:
case 3071:
case 1224:
case 1736:
case 1207:
case 1119:
case 1302:
case 1511:
case 2087:
case 3968:
case 3137:
case 1309:
case 1091:
case 3367:
case 477:
case 4072:
case 1710:
case 1732:
case 1674:
case 1630:
case 3565:
case 1904:
case 3249:
case 308:
case 213:
case 3180:
case 2191:
case 2599:
case 2596:
case 496:
case 1798:
case 1432:
case 263:
case 3782:
case 995:
case 2295:
case 3789:
case 1687:
case 958:
case 3545:
case 2019:
case 2592:
case 1436:
case 3920:
case 3786:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760724001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,];
var gg_b = "1760724001/";

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
