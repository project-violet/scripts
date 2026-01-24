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
case 1107:
case 2229:
case 1023:
case 1113:
case 956:
case 3823:
case 1986:
case 1622:
case 1592:
case 337:
case 436:
case 3565:
case 3172:
case 2121:
case 2055:
case 2011:
case 1460:
case 1461:
case 2010:
case 2120:
case 324:
case 2352:
case 3124:
case 1899:
case 2736:
case 1814:
case 3099:
case 3014:
case 2235:
case 2782:
case 568:
case 735:
case 1276:
case 3442:
case 94:
case 1674:
case 1775:
case 1210:
case 1969:
case 1211:
case 795:
case 1255:
case 774:
case 615:
case 3829:
case 1194:
case 1119:
case 2223:
case 1946:
case 1805:
case 2087:
case 113:
case 564:
case 4015:
case 496:
case 1247:
case 4051:
case 3482:
case 3692:
case 1386:
case 1828:
case 397:
case 3835:
case 1377:
case 2742:
case 3093:
case 1893:
case 1224:
case 1057:
case 2128:
case 2512:
case 2018:
case 1596:
case 3360:
case 1626:
case 3891:
case 3906:
case 64:
case 147:
case 1091:
case 1090:
case 3890:
case 3187:
case 3207:
case 2777:
case 1342:
case 2285:
case 2732:
case 3845:
case 2786:
case 1045:
case 2763:
case 592:
case 2679:
case 984:
case 114:
case 2290:
case 3147:
case 2291:
case 2964:
case 46:
case 532:
case 1218:
case 550:
case 2257:
case 816:
case 1942:
case 2199:
case 2114:
case 600:
case 3477:
case 2375:
case 3432:
case 2673:
case 879:
case 1821:
case 2578:
case 2769:
case 3486:
case 3111:
case 3155:
case 3021:
case 2072:
case 1402:
case 3696:
case 4058:
case 1382:
case 3960:
case 915:
case 3219:
case 3294:
case 2807:
case 1336:
case 1085:
case 2212:
case 1296:
case 1795:
case 1619:
case 4069:
case 1717:
case 1703:
case 3079:
case 808:
case 2758:
case 3618:
case 1453:
case 360:
case 2826:
case 241:
case 2388:
case 3507:
case 461:
case 1951:
case 3327:
case 2331:
case 1165:
case 192:
case 1078:
case 2930:
case 2433:
case 3672:
case 4086:
case 353:
case 1397:
case 2931:
case 2590:
case 1873:
case 1315:
case 1351:
case 4063:
case 2096:
case 83:
case 1867:
case 3812:
case 445:
case 1012:
case 520:
case 2988:
case 2278:
case 3708:
case 470:
case 3594:
case 3624:
case 3725:
case 3519:
case 585:
case 746:
case 2750:
case 782:
case 3783:
case 2699:
case 2529:
case 880:
case 3384:
case 2309:
case 2941:
case 2797:
case 803:
case 2940:
case 3959:
case 2443:
case 2167:
case 1071:
case 149:
case 965:
case 2995:
case 1748:
case 1427:
case 1070:
case 2380:
case 2903:
case 1958:
case 1576:
case 2381:
case 3754:
case 3655:
case 358:
case 2449:
case 2865:
case 1511:
case 3450:
case 2981:
case 1555:
case 672:
case 3274:
case 2483:
case 1510:
case 3451:
case 1358:
case 877:
case 2938:
case 2466:
case 2628:
case 2598:
case 1016:
case 941:
case 1126:
case 3359:
case 513:
case 2909:
case 3700:
case 3222:
case 2454:
case 2638:
case 2490:
case 343:
case 935:
case 22:
case 74:
case 1182:
case 2928:
case 2491:
case 455:
case 3106:
case 3976:
case 3355:
case 2681:
case 140:
case 2457:
case 1418:
case 138:
case 3310:
case 1852:
case 2068:
case 3987:
case 3558:
case 3052:
case 2680:
case 2905:
case 2562:
case 2175:
case 2713:
case 2846:
case 2399:
case 175:
case 3277:
case 836:
case 1559:
case 501:
case 1720:
case 651:
case 3419:
case 811:
case 3790:
case 134:
case 802:
case 1268:
case 2640:
case 3947:
case 62:
case 3757:
case 10:
case 1584:
case 1142:
case 2999:
case 38:
case 3413:
case 2485:
case 3387:
case 3407:
case 2617:
case 3376:
case 2863:
case 3269:
case 2508:
case 1553:
case 3911:
case 3160:
case 2328:
case 1472:
case 3644:
case 2393:
case 3161:
case 2525:
case 2695:
case 2794:
case 2877:
case 1410:
case 1913:
case 1907:
case 295:
case 3515:
case 2583:
case 431:
case 1455:
case 330:
case 348:
case 2060:
case 1186:
case 3550:
case 1411:
case 951:
case 352:
case 2630:
case 3102:
case 2921:
case 2566:
case 1856:
case 4022:
case 3597:
case 3627:
case 3924:
case 1394:
case 1319:
case 3236:
case 2842:
case 1206:
case 2554:
case 1705:
case 3504:
case 2429:
case 674:
case 1169:
case 2543:
case 695:
case 1260:
case 3798:
case 3723:
case 1146:
case 344:
case 2648:
case 2320:
case 3075:
case 1527:
case 3168:
case 2435:
case 529:
case 3337:
case 1476:
case 317:
case 390:
case 3918:
case 1650:
case 2501:
case 907:
case 86:
case 2500:
case 1313:
case 1651:
case 1487:
case 3242:
case 1799:
case 92:
case 4065:
case 3716:
case 3843:
case 2034:
case 1043:
case 3474:
case 3215:
case 861:
case 533:
case 682:
case 2141:
case 3297:
case 2140:
case 3159:
case 49:
case 2765:
case 1888:
case 3660:
case 1326:
case 3088:
case 3801:
case 3661:
case 3536:
case 2973:
case 2470:
case 1831:
case 2117:
case 3031:
case 1506:
case 3030:
case 2254:
case 3422:
case 2471:
case 2416:
case 3866:
case 3204:
case 2774:
case 1083:
case 2289:
case 870:
case 2138:
case 1636:
case 3883:
case 1049:
case 1682:
case 1234:
case 3465:
case 2367:
case 129:
case 43:
case 1054:
case 593:
case 2200:
case 3048:
case 3184:
case 95:
case 3542:
case 404:
case 2722:
case 2201:
case 3839:
case 2233:
case 2148:
case 2084:
case 1773:
case 3258:
case 1809:
case 1374:
case 2262:
case 425:
case 765:
case 540:
case 538:
case 4019:
case 1669:
case 367:
case 1322:
case 2478:
case 3586:
case 1838:
case 3577:
case 575:
case 3038:
case 3825:
case 1880:
case 1197:
case 381:
case 1259:
case 1881:
case 726:
case 1502:
case 101:
case 3081:
case 319:
case 909:
case 4007:
case 2858:
case 2131:
case 3017:
case 3862:
case 3127:
case 3003:
case 1817:
case 50:
case 1284:
case 1895:
case 157:
case 527:
case 2188:
case 1686:
case 3392:
case 598:
case 3778:
case 2208:
case 1253:
case 646:
case 2059:
case 3041:
case 1841:
case 741:
case 376:
case 3134:
case 3669:
case 2154:
case 874:
case 3809:
case 2203:
case 3773:
case 1009:
case 2295:
case 543:
case 2884:
case 3039:
case 3767:
case 895:
case 1712:
case 1839:
case 2796:
case 1081:
case 2853:
case 3965:
case 3008:
case 3881:
case 181:
case 2240:
case 1426:
case 4018:
case 3197:
case 3880:
case 3115:
case 2183:
case 1577:
case 1038:
case 1825:
case 1532:
case 996:
case 3151:
case 2370:
case 2149:
case 2371:
case 1992:
case 1586:
case 3322:
case 483:
case 167:
case 3922:
case 3686:
case 2316:
case 3895:
case 1095:
case 3632:
case 4037:
case 3817:
case 878:
case 2209:
case 3779:
case 1862:
case 2058:
case 1127:
case 3803:
case 3062:
case 2467:
case 456:
case 3365:
case 3496:
case 989:
case 44:
case 2143:
case 26:
case 2238:
case 176:
case 3104:
case 3974:
case 4024:
case 1778:
case 2859:
case 3840:
case 755:
case 569:
case 122:
case 552:
case 1159:
case 611:
case 2004:
case 96:
case 1215:
case 807:
case 791:
case 1889:
case 2792:
case 3043:
case 696:
case 530:
case 1843:
case 1422:
case 2378:
case 1030:
case 3506:
case 415:
case 1031:
case 3000:
case 1536:
case 779:
case 1800:
case 236:
case 1144:
case 2912:
case 4010:
case 1582:
case 3326:
case 2312:
case 1849:
case 1465:
case 3234:
case 2050:
case 3561:
case 3636:
case 1883:
case 4076:
case 2015:
case 296:
case 2556:
case 1204:
case 3492:
case 873:
case 2978:
case 636:
case 517:
case 1048:
case 1770:
case 3227:
case 689:
case 2230:
case 2564:
case 3054:
case 329:
case 945:
case 333:
case 1056:
case 2391:
case 1102:
case 3163:
case 73:
case 169:
case 522:
case 1318:
case 2357:
case 2860:
case 704:
case 1729:
case 3177:
case 3907:
case 3410:
case 2985:
case 3705:
case 3604:
case 2275:
case 2499:
case 2787:
case 3864:
case 3206:
case 2776:
case 1064:
case 2345:
case 3728:
case 3447:
case 2643:
case 1282:
case 970:
case 21:
case 3394:
case 3319:
case 472:
case 1236:
case 1924:
case 2689:
case 708:
case 3919:
case 3994:
case 144:
case 1798:
case 2945:
case 2755:
case 2256:
case 2405:
case 3307:
case 3651:
case 2385:
case 2649:
case 1918:
case 3650:
case 2082:
case 117:
case 2588:
case 61:
case 2428:
case 2991:
case 2747:
case 79:
case 961:
case 359:
case 362:
case 1168:
case 393:
case 2493:
case 1075:
case 2868:
case 2517:
case 2503:
case 3852:
case 1311:
case 2608:
case 1653:
case 338:
case 1106:
case 261:
case 2935:
case 3136:
case 2595:
case 2323:
case 3720:
case 2772:
case 1347:
case 1263:
case 2069:
case 645:
case 2540:
case 1286:
case 2639:
case 2046:
case 1277:
case 1684:
case 3584:
case 30:
case 2718:
case 327:
case 1947:
case 1791:
case 519:
case 3268:
case 3424:
case 2252:
case 334:
case 2032:
case 576:
case 1246:
case 2421:
case 3472:
case 2086:
case 2802:
case 1911:
case 2063:
case 398:
case 1269:
case 465:
case 2581:
case 1955:
case 245:
case 3658:
case 1959:
case 1647:
case 796:
case 1766:
case 154:
case 2074:
case 691:
case 1384:
case 702:
case 711:
case 3292:
case 616:
case 231:
case 3576:
case 495:
case 368:
case 1610:
case 3587:
case 3958:
case 679:
case 2962:
case 1870:
case 2022:
case 3071:
case 2430:
case 2933:
case 2698:
case 2635:
case 2734:
case 1816:
case 2892:
case 1789:
case 955:
case 3358:
case 3510:
case 1676:
case 291:
case 435:
case 3555:
case 1953:
case 1450:
case 84:
case 3788:
case 2939:
case 1701:
case 1984:
case 1700:
case 2599:
case 2629:
case 3731:
case 631:
case 2448:
case 1359:
case 3730:
case 736:
case 3547:
case 979:
case 2954:
case 3484:
case 2273:
case 1079:
case 3879:
case 3717:
case 3304:
case 57:
case 2409:
case 1334:
case 3296:
case 2343:
case 1733:
case 42:
case 392:
case 3537:
case 3078:
case 76:
case 991:
case 2759:
case 2521:
case 3165:
case 3572:
case 2438:
case 2690:
case 407:
case 363:
case 3741:
case 1327:
case 916:
case 3951:
case 1513:
case 2983:
case 306:
case 3915:
case 2480:
case 255:
case 2657:
case 2301:
case 2949:
case 2026:
case 4068:
case 3012:
case 2896:
case 1739:
case 2171:
case 2349:
case 2901:
case 1812:
case 3350:
case 3122:
case 2685:
case 3613:
case 3351:
case 2403:
case 2170:
case 4002:
case 2417:
case 2366:
case 2279:
case 2495:
case 931:
case 655:
case 2440:
case 1226:
case 3459:
case 505:
case 2989:
case 1594:
case 1519:
case 3780:
case 3174:
case 171:
case 2354:
case 203:
case 2573:
case 872:
case 1890:
case 3091:
case 1176:
case 1906:
case 2678:
case 3982:
case 2135:
case 2567:
case 3057:
case 446:
case 266:
case 2452:
case 4053:
case 1361:
case 677:
case 314:
case 1446:
case 904:
case 3272:
case 560:
case 3045:
case 2129:
case 93:
case 4059:
case 680:
case 99:
case 761:
case 277:
case 599:
case 1147:
case 3752:
case 2579:
case 2768:
case 553:
case 123:
case 1885:
case 1219:
case 3336:
case 3085:
case 385:
case 1961:
case 1960:
case 2:
case 3402:
case 1306:
case 1155:
case 1021:
case 2872:
case 3821:
case 4044:
case 1477:
case 2810:
case 124:
case 604:
case 208:
case 1137:
case 2811:
case 1565:
case 3098:
case 3622:
case 3986:
case 4027:
case 1898:
case 2670:
case 2456:
case 3107:
case 3977:
case 3674:
case 2205:
case 3775:
case 2847:
case 3369:
case 977:
case 1099:
case 1014:
case 3814:
case 3029:
case 3946:
case 865:
case 3255:
case 128:
case 3210:
case 3756:
case 204:
case 3332:
case 966:
case 3893:
case 2475:
case 3377:
case 110:
case 3035:
case 3828:
case 1118:
case 1522:
case 71:
case 1482:
case 3764:
case 3665:
case 3247:
case 1005:
case 2887:
case 1436:
case 313:
case 3385:
case 3036:
case 2651:
case 2487:
case 3683:
case 1882:
case 876:
case 3588:
case 2650:
case 1501:
case 940:
case 3747:
case 3991:
case 3428:
case 3264:
case 3530:
case 3531:
case 1320:
case 3666:
case 1152:
case 2697:
case 2875:
case 1589:
case 2146:
case 1648:
case 2534:
case 3755:
case 633:
case 2169:
case 3711:
case 994:
case 3710:
case 819:
case 1429:
case 881:
case 3787:
case 3275:
case 2705:
case 2604:
case 662:
case 3776:
case 1554:
case 693:
case 509:
case 713:
case 927:
case 3643:
case 2447:
case 2728:
case 3548:
case 1842:
case 2394:
case 31:
case 1631:
case 1566:
case 2163:
case 1921:
case 998:
case 1498:
case 2455:
case 1688:
case 3357:
case 2411:
case 2186:
case 2410:
case 3600:
case 2132:
case 2177:
case 3861:
case 3538:
case 3077:
case 499:
case 1877:
case 1794:
case 1719:
case 1525:
case 2437:
case 675:
case 4073:
case 3633:
case 1328:
case 3421:
case 1863:
case 151:
case 1508:
case 694:
case 2553:
case 1485:
case 345:
case 933:
case 1156:
case 20:
case 1914:
case 471:
case 747:
case 370:
case 3718:
case 234:
case 3252:
case 638:
case 1641:
case 640:
case 3509:
case 546:
case 2720:
case 3541:
case 2559:
case 3540:
case 3737:
case 2202:
case 1869:
case 1314:
case 1399:
case 3929:
case 1068:
case 3503:
case 1175:
case 1562:
case 993:
case 1905:
case 962:
case 959:
case 1457:
case 634:
case 3608:
case 486:
case 2182:
case 1491:
case 2544:
case 107:
case 3398:
case 3323:
case 1993:
case 439:
case 3595:
case 3625:
case 3724:
case 12:
case 55:
case 423:
case 3143:
case 1726:
case 890:
case 36:
case 1225:
case 601:
case 3280:
case 3281:
case 551:
case 2840:
case 706:
case 3859:
case 1059:
case 2253:
case 2033:
case 1188:
case 4020:
case 1044:
case 257:
case 2686:
case 3844:
case 3971:
case 3101:
case 3473:
case 2062:
case 1131:
case 3552:
case 2803:
case 573:
case 2568:
case 2779:
case 2817:
case 2663:
case 2496:
case 2365:
case 3467:
case 2259:
case 2881:
case 3853:
case 3166:
case 3370:
case 3183:
case 2115:
case 2322:
case 3371:
case 929:
case 3154:
case 2669:
case 3203:
case 3217:
case 830:
case 1084:
case 3295:
case 3796:
case 2244:
case 507:
case 1233:
case 2767:
case 2039:
case 3139:
case 3288:
case 1722:
case 1200:
case 428:
case 2848:
case 749:
case 2227:
case 1979:
case 1109:
case 2054:
case 3564:
case 2682:
case 3050:
case 2049:
case 2560:
case 2234:
case 4005:
case 1850:
case 1289:
case 396:
case 3015:
case 2636:
case 3125:
case 2066:
case 1897:
case 410:
case 1416:
case 182:
case 578:
case 901:
case 1254:
case 3378:
case 109:
case 1471:
case 1973:
case 1103:
case 1027:
case 2158:
case 2831:
case 1117:
case 3827:
case 629:
case 336:
case 3248:
case 2001:
case 2888:
case 957:
case 764:
case 3912:
case 424:
case 3133:
case 1967:
case 1765:
case 1664:
case 4014:
case 1266:
case 1379:
case 595:
case 2089:
case 2642:
case 1034:
case 2043:
case 843:
case 3792:
case 3013:
case 285:
case 2336:
case 1807:
case 3123:
case 1813:
case 2402:
case 1667:
case 4017:
case 3:
case 1769:
case 2821:
case 3872:
case 4095:
case 1956:
case 1673:
case 1114:
case 2942:
case 738:
case 1024:
case 4040:
case 4041:
case 2218:
case 220:
case 1291:
case 476:
case 647:
case 858:
case 3579:
case 14:
case 2752:
case 3220:
case 214:
case 3702:
case 3221:
case 2237:
case 685:
case 1777:
case 325:
case 2342:
case 1285:
case 3019:
case 1105:
case 1975:
case 913:
case 3573:
case 303:
case 70:
case 4038:
case 854:
case 247:
case 4080:
case 1128:
case 2057:
case 734:
case 380:
case 3135:
case 2596:
case 620:
case 481:
case 4081:
case 366:
case 3475:
case 2893:
case 2332:
case 2828:
case 2386:
case 2035:
case 1571:
case 3616:
case 3157:
case 2247:
case 3191:
case 2665:
case 3876:
case 2363:
case 1087:
case 871:
case 1952:
case 3761:
case 2119:
case 33:
case 2029:
case 3145:
case 1298:
case 2211:
case 853:
case 914:
case 2210:
case 899:
case 2674:
case 839:
case 3847:
case 3706:
case 3464:
case 793:
case 920:
case 1235:
case 762:
case 1736:
case 39:
case 860:
case 2461:
case 1010:
case 1120:
case 1352:
case 1121:
case 188:
case 918:
case 3855:
case 3671:
case 2592:
case 2098:
case 4031:
case 4030:
case 2107:
case 3456:
case 3670:
case 2932:
case 805:
case 3939:
case 2788:
case 3514:
case 1909:
case 1179:
case 444:
case 1340:
case 3892:
case 1628:
case 2126:
case 1092:
case 3734:
case 3925:
case 1693:
case 1466:
case 1938:
case 1317:
case 1704:
case 963:
case 3362:
case 1483:
case 584:
case 2358:
case 3178:
case 823:
case 1449:
case 2555:
case 992:
case 1981:
case 932:
case 3488:
case 331:
case 1917:
case 1380:
case 3505:
case 3962:
case 1173:
case 2587:
case 2427:
case 1995:
case 3431:
case 3623:
case 1338:
case 3698:
case 4056:
case 3112:
case 3933:
case 1822:
case 3430:
case 2071:
case 3022:
case 588:
case 1941:
case 1309:
case 1874:
case 4064:
case 1750:
case 2292:
case 1216:
case 3339:
case 1545:
case 606:
case 712:
case 701:
case 126:
case 692:
case 2780:
case 3753:
case 48:
case 3354:
case 1096:
case 2122:
case 3901:
case 3349:
case 250:
case 1462:
case 3383:
case 2607:
case 3403:
case 2613:
case 3685:
case 3495:
case 54:
case 1931:
case 2873:
case 1621:
case 2444:
case 3521:
case 3759:
case 2078:
case 292:
case 1425:
case 3520:
case 3966:
case 3438:
case 3300:
case 2951:
case 2453:
case 3657:
case 1826:
case 632:
case 757:
case 583:
case 2703:
case 3273:
case 964:
case 1758:
case 2619:
case 1948:
case 2795:
case 3409:
case 837:
case 2296:
case 271:
case 813:
case 3278:
case 40:
case 954:
case 767:
case 1989:
case 1441:
case 2624:
case 2226:
case 1440:
case 686:
case 2637:
case 3433:
case 2672:
case 3621:
case 3590:
case 3931:
case 1279:
case 253:
case 2927:
case 1685:
case 1784:
case 1900:
case 1403:
case 498:
case 3462:
case 577:
case 3557:
case 1896:
case 1901:
case 1349:
case 341:
case 1949:
case 2513:
case 3585:
case 438:
case 1480:
case 440:
case 1983:
case 525:
case 2507:
case 1966:
case 1438:
case 2327:
case 671:
case 1759:
case 239:
case 1521:
case 1691:
case 958:
case 2878:
case 3330:
case 580:
case 1343:
case 566:
case 719:
case 2079:
case 1954:
case 653:
case 475:
case 2359:
case 3340:
case 3909:
case 1727:
case 2984:
case 1629:
case 1514:
case 2222:
case 1065:
case 3981:
case 2450:
case 2953:
case 3865:
case 3449:
case 258:
case 2451:
case 3303:
case 2415:
case 3483:
case 2274:
case 3704:
case 504:
case 3466:
case 986:
case 116:
case 2497:
case 722:
case 1635:
case 493:
case 2743:
case 1333:
case 2344:
case 2196:
case 1022:
case 433:
case 3535:
case 2944:
case 1528:
case 1112:
case 1623:
case 3338:
case 1431:
case 1325:
case 3995:
case 2610:
case 3400:
case 3173:
case 1505:
case 1962:
case 3917:
case 2754:
case 131:
case 999:
case 814:
case 3401:
case 1308:
case 1339:
case 3750:
case 3751:
case 3614:
case 2783:
case 2404:
case 1074:
case 254:
case 2766:
case 847:
case 3489:
case 3797:
case 3941:
case 3309:
case 508:
case 3443:
case 971:
case 3940:
case 2647:
case 2265:
case 1887:
case 2005:
case 2968:
case 3087:
case 2482:
case 1876:
case 3076:
case 2302:
case 1191:
case 1616:
case 2835:
case 297:
case 4066:
case 2692:
case 2522:
case 2118:
case 97:
case 1214:
case 748:
case 384:
case 730:
case 2574:
case 591:
case 624:
case 1760:
case 4054:
case 3223:
case 850:
case 769:
case 429:
case 1761:
case 1293:
case 2014:
case 3736:
case 19:
case 697:
case 2124:
case 3235:
case 1228:
case 1847:
case 1205:
case 717:
case 2442:
case 2823:
case 1185:
case 905:
case 237:
case 3516:
case 2898:
case 4000:
case 108:
case 1855:
case 388:
case 3055:
case 2565:
case 2172:
case 2902:
case 1811:
case 1810:
case 3673:
case 2110:
case 2020:
case 2477:
case 1837:
case 3578:
case 3769:
case 937:
case 205:
case 1123:
case 356:
case 2219:
case 2961:
case 3290:
case 1579:
case 34:
case 743:
case 3291:
case 3257:
case 3024:
case 1824:
case 3199:
case 3285:
case 1094:
case 1129:
case 3819:
case 125:
case 555:
case 3786:
case 2845:
case 605:
case 3763:
case 3364:
case 1702:
case 4039:
case 1220:
case 3679:
case 1452:
case 2361:
case 3018:
case 180:
case 1135:
case 997:
case 623:
case 2176:
case 1678:
case 2891:
case 2187:
case 2890:
case 1573:
case 383:
case 1564:
case 3109:
case 1231:
case 3722:
case 1288:
case 102:
case 1108:
case 111:
case 981:
case 3416:
case 834:
case 3180:
case 3675:
case 3897:
case 1097:
case 1125:
case 2883:
case 3815:
case 3851:
case 3138:
case 3289:
case 754:
case 80:
case 1050:
case 875:
case 1133:
case 2996:
case 2660:
case 2536:
case 2661:
case 1248:
case 3027:
case 3470:
case 3103:
case 1378:
case 4023:
case 3254:
case 189:
case 894:
case 2030:
case 2843:
case 2215:
case 2474:
case 2889:
case 2251:
case 3765:
case 222:
case 2159:
case 786:
case 2040:
case 3208:
case 2778:
case 922:
case 760:
case 667:
case 3225:
case 276:
case 3726:
case 1143:
case 485:
case 1209:
case 2003:
case 1058:
case 2862:
case 2017:
case 2095:
case 1970:
case 418:
case 2392:
case 1101:
case 3044:
case 3239:
case 1149:
case 1371:
case 2992:
case 1916:
case 267:
case 771:
case 1183:
case 1166:
case 2080:
case 346:
case 2808:
case 2081:
case 1853:
case 2563:
case 1240:
case 414:
case 2839:
case 587:
case 1479:
case 35:
case 3148:
case 1884:
case 1217:
case 4045:
case 2258:
case 1580:
case 4012:
case 1662:
case 2387:
case 829:
case 2910:
case 2911:
case 3508:
case 2269:
case 1063:
case 351:
case 3002:
case 952:
case 3863:
case 969:
case 1581:
case 1421:
case 2745:
case 2644:
case 948:
case 3886:
case 3328:
case 2160:
case 1335:
case 1086:
case 930:
case 3877:
case 3794:
case 56:
case 1538:
case 2246:
case 1923:
case 1420:
case 373:
case 3641:
case 1252:
case 2790:
case 2947:
case 2791:
case 3640:
case 77:
case 1718:
case 2757:
case 643:
case 3999:
case 3914:
case 1046:
case 1929:
case 3707:
case 3314:
case 3399:
case 2232:
case 2785:
case 3445:
case 2347:
case 1772:
case 1540:
case 1541:
case 2494:
case 2419:
case 4078:
case 1724:
case 1625:
case 1323:
case 3638:
case 1398:
case 463:
case 187:
case 723:
case 1935:
case 917:
case 1608:
case 3457:
case 161:
case 2976:
case 2106:
case 3562:
case 2052:
case 1517:
case 1868:
case 3152:
case 4016:
case 1493:
case 1990:
case 2075:
case 1531:
case 1666:
case 3321:
case 1530:
case 3006:
case 1991:
case 2372:
case 1428:
case 3501:
case 1082:
case 1649:
case 290:
case 1957:
case 943:
case 1405:
case 3836:
case 1385:
case 737:
case 1256:
case 669:
case 1710:
case 1711:
case 724:
case 464:
case 3543:
case 3648:
case 630:
case 3589:
case 596:
case 98:
case 11:
case 617:
case 690:
case 2924:
case 1689:
case 2282:
case 1643:
case 2735:
case 3554:
case 589:
case 710:
case 1414:
case 2729:
case 395:
case 468:
case 3061:
case 3060:
case 1601:
case 248:
case 644:
case 1357:
case 230:
case 1391:
case 3630:
case 4070:
case 449:
case 374:
case 3631:
case 3920:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1769277601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,];
var gg_b = "1769277601/";

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
