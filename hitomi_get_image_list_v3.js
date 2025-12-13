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
case 2716:
case 1683:
case 1326:
case 1908:
case 2664:
case 3300:
case 1655:
case 2162:
case 2171:
case 1130:
case 3402:
case 301:
case 2334:
case 3485:
case 2212:
case 2814:
case 3638:
case 3518:
case 2577:
case 2216:
case 2451:
case 3406:
case 3035:
case 2620:
case 1322:
case 1924:
case 2692:
case 1859:
case 2033:
case 580:
case 1390:
case 3224:
case 3822:
case 3555:
case 975:
case 148:
case 2389:
case 2553:
case 1298:
case 3157:
case 596:
case 3583:
case 1538:
case 268:
case 452:
case 3760:
case 542:
case 56:
case 1618:
case 925:
case 2581:
case 3044:
case 2506:
case 3551:
case 804:
case 284:
case 3826:
case 2418:
case 1800:
case 539:
case 1537:
case 3707:
case 2028:
case 1976:
case 910:
case 3305:
case 484:
case 1391:
case 1965:
case 1650:
case 501:
case 2188:
case 1739:
case 2303:
case 3509:
case 2954:
case 2621:
case 1961:
case 3478:
case 3623:
case 1395:
case 1867:
case 3301:
case 111:
case 2356:
case 1797:
case 4027:
case 1239:
case 126:
case 1919:
case 1131:
case 2004:
case 1617:
case 1972:
case 1425:
case 887:
case 2409:
case 3272:
case 67:
case 3939:
case 1144:
case 3895:
case 631:
case 3367:
case 3169:
case 92:
case 1886:
case 1907:
case 683:
case 565:
case 3550:
case 1010:
case 2893:
case 4033:
case 2580:
case 62:
case 1882:
case 772:
case 931:
case 1805:
case 983:
case 342:
case 3719:
case 36:
case 3265:
case 1523:
case 1057:
case 3517:
case 656:
case 3761:
case 1646:
case 2113:
case 704:
case 97:
case 2211:
case 3401:
case 2674:
case 259:
case 2931:
case 1727:
case 2317:
case 2837:
case 1047:
case 1529:
case 705:
case 3032:
case 1227:
case 2165:
case 2899:
case 2691:
case 406:
case 1321:
case 28:
case 2567:
case 1988:
case 3163:
case 3036:
case 1491:
case 2:
case 3405:
case 3933:
case 3482:
case 564:
case 2176:
case 3540:
case 3213:
case 790:
case 332:
case 597:
case 1233:
case 3288:
case 1880:
case 2258:
case 3770:
case 1016:
case 2501:
case 3629:
case 3821:
case 349:
case 3503:
case 2823:
case 1733:
case 3552:
case 3825:
case 140:
case 2505:
case 1079:
case 2582:
case 729:
case 2342:
case 641:
case 3467:
case 4084:
case 1878:
case 1640:
case 3788:
case 2944:
case 260:
case 2758:
case 3148:
case 3287:
case 2622:
case 2710:
case 2124:
case 2690:
case 924:
case 3306:
case 602:
case 618:
case 1514:
case 388:
case 805:
case 285:
case 460:
case 1490:
case 3545:
case 974:
case 70:
case 1132:
case 3400:
case 3787:
case 2757:
case 2210:
case 3353:
case 3904:
case 2626:
case 2355:
case 1396:
case 1962:
case 902:
case 624:
case 2160:
case 957:
case 1048:
case 3262:
case 2039:
case 1853:
case 3775:
case 3864:
case 397:
case 2441:
case 2773:
case 1802:
case 3179:
case 473:
case 3377:
case 3112:
case 879:
case 4:
case 2318:
case 1641:
case 3766:
case 549:
case 459:
case 2273:
case 2489:
case 3459:
case 2097:
case 2500:
case 3443:
case 3771:
case 491:
case 1228:
case 3266:
case 423:
case 1806:
case 1881:
case 829:
case 3257:
case 3622:
case 2287:
case 767:
case 3351:
case 2928:
case 3690:
case 3124:
case 385:
case 591:
case 615:
case 523:
case 1973:
case 947:
case 3930:
case 915:
case 2468:
case 3210:
case 1818:
case 2147:
case 3757:
case 1061:
case 2349:
case 2400:
case 647:
case 2787:
case 264:
case 3383:
case 3559:
case 1019:
case 1668:
case 843:
case 3434:
case 3355:
case 2864:
case 2262:
case 3039:
case 1855:
case 297:
case 3441:
case 2896:
case 1414:
case 2112:
case 1910:
case 2377:
case 2794:
case 1230:
case 3838:
case 3318:
case 2271:
case 2766:
case 2116:
case 2534:
case 2762:
case 3489:
case 2443:
case 2771:
case 2266:
case 2820:
case 560:
case 1957:
case 1526:
case 2294:
case 1851:
case 1659:
case 1244:
case 1842:
case 2378:
case 867:
case 3931:
case 999:
case 391:
case 585:
case 1323:
case 1601:
case 708:
case 2032:
case 3269:
case 3165:
case 2036:
case 3567:
case 651:
case 1024:
case 2482:
case 3:
case 1846:
case 3769:
case 2405:
case 2540:
case 699:
case 920:
case 232:
case 3346:
case 171:
case 1915:
case 169:
case 1574:
case 1850:
case 2288:
case 464:
case 2770:
case 2629:
case 2821:
case 249:
case 3586:
case 3107:
case 193:
case 1591:
case 2552:
case 488:
case 2270:
case 620:
case 1231:
case 116:
case 2148:
case 1817:
case 2788:
case 894:
case 2707:
case 1133:
case 2480:
case 3028:
case 766:
case 1094:
case 1680:
case 2305:
case 1963:
case 3954:
case 2158:
case 3621:
case 3748:
case 1075:
case 2984:
case 2301:
case 2386:
case 2478:
case 1071:
case 3625:
case 646:
case 1678:
case 1062:
case 465:
case 800:
case 3170:
case 2546:
case 352:
case 719:
case 2272:
case 2765:
case 3409:
case 2219:
case 3340:
case 307:
case 296:
case 2111:
case 213:
case 568:
case 2895:
case 3442:
case 1521:
case 1856:
case 3893:
case 2261:
case 3446:
case 3263:
case 242:
case 2265:
case 1803:
case 1127:
case 1329:
case 1087:
case 2517:
case 162:
case 14:
case 239:
case 1104:
case 2031:
case 3716:
case 134:
case 2449:
case 3696:
case 3162:
case 637:
case 2300:
case 3483:
case 795:
case 3814:
case 2485:
case 1947:
case 201:
case 1841:
case 3936:
case 3216:
case 496:
case 3577:
case 3779:
case 1681:
case 1889:
case 3033:
case 1128:
case 937:
case 3585:
case 1732:
case 3502:
case 2555:
case 2157:
case 2359:
case 2583:
case 1013:
case 2890:
case 3027:
case 2708:
case 368:
case 2760:
case 3345:
case 480:
case 2110:
case 1912:
case 1834:
case 1314:
case 928:
case 2724:
case 2551:
case 3506:
case 2260:
case 2477:
case 678:
case 3581:
case 1736:
case 2208:
case 117:
case 3418:
case 2348:
case 1611:
case 1819:
case 864:
case 3644:
case 1137:
case 1535:
case 1791:
case 3705:
case 4021:
case 3201:
case 3286:
case 3109:
case 1861:
case 3307:
case 1018:
case 2588:
case 50:
case 163:
case 11:
case 151:
case 2415:
case 3884:
case 2854:
case 888:
case 2929:
case 2203:
case 1774:
case 199:
case 1876:
case 1427:
case 2570:
case 212:
case 1795:
case 3786:
case 1531:
case 669:
case 2458:
case 3488:
case 1544:
case 1051:
case 3767:
case 353:
case 921:
case 1658:
case 1384:
case 3897:
case 1433:
case 3150:
case 2740:
case 993:
case 3470:
case 3995:
case 693:
case 3631:
case 2064:
case 3372:
case 969:
case 616:
case 2240:
case 3319:
case 386:
case 1083:
case 2096:
case 1055:
case 3974:
case 1824:
case 1959:
case 1046:
case 590:
case 1290:
case 764:
case 1530:
case 3700:
case 3487:
case 2836:
case 1726:
case 3768:
case 2316:
case 505:
case 147:
case 4020:
case 3118:
case 3573:
case 2312:
case 2832:
case 2234:
case 2177:
case 2379:
case 1226:
case 2594:
case 2410:
case 3037:
case 3200:
case 2566:
case 3360:
case 2102:
case 3155:
case 1017:
case 3308:
case 529:
case 3183:
case 294:
case 3743:
case 1968:
case 3759:
case 2347:
case 553:
case 3023:
case 2241:
case 935:
case 3630:
case 2025:
case 579:
case 3243:
case 1673:
case 1428:
case 3466:
case 635:
case 849:
case 2245:
case 3151:
case 3990:
case 586:
case 2181:
case 3259:
case 2289:
case 1264:
case 3285:
case 2412:
case 2479:
case 3804:
case 3141:
case 2751:
case 1792:
case 1114:
case 3249:
case 1720:
case 4090:
case 2310:
case 3785:
case 1796:
case 958:
case 3145:
case 3547:
case 1616:
case 295:
case 3753:
case 1220:
case 2159:
case 1866:
case 2508:
case 3387:
case 2251:
case 2560:
case 2416:
case 3281:
case 504:
case 1981:
case 1328:
case 2718:
case 481:
case 3920:
case 842:
case 3579:
case 3424:
case 572:
case 1003:
case 1498:
case 3460:
case 813:
case 3516:
case 3277:
case 2095:
case 3408:
case 3093:
case 765:
case 3371:
case 2218:
case 3362:
case 1985:
case 49:
case 387:
case 178:
case 896:
case 2168:
case 3964:
case 114:
case 2315:
case 4095:
case 219:
case 780:
case 2835:
case 2572:
case 192:
case 1089:
case 1497:
case 3833:
case 4074:
case 2561:
case 1327:
case 2697:
case 2999:
case 2448:
case 1439:
case 1225:
case 2369:
case 1041:
case 801:
case 2167:
case 1721:
case 3278:
case 2311:
case 1870:
case 3780:
case 3140:
case 2576:
case 3370:
case 2844:
case 94:
case 962:
case 2209:
case 76:
case 3472:
case 1193:
case 2923:
case 742:
case 2186:
case 2507:
case 3827:
case 1663:
case 3388:
case 3921:
case 2182:
case 3152:
case 2463:
case 64:
case 1484:
case 2022:
case 587:
case 2709:
case 662:
case 3548:
case 752:
case 3835:
case 3519:
case 2833:
case 1059:
case 1946:
case 3250:
case 676:
case 39:
case 3697:
case 976:
case 3565:
case 3448:
case 1584:
case 3369:
case 1607:
case 3167:
case 2014:
case 1909:
case 2563:
case 3937:
case 2278:
case 3639:
case 2140:
case 3576:
case 2407:
case 3844:
case 3242:
case 1672:
case 1917:
case 17:
case 630:
case 884:
case 1619:
case 1811:
case 1799:
case 498:
case 4029:
case 1237:
case 1597:
case 3186:
case 1661:
case 1869:
case 2103:
case 2654:
case 2476:
case 2921:
case 3507:
case 2827:
case 1191:
case 3742:
case 3105:
case 3182:
case 3022:
case 3246:
case 3090:
case 707:
case 156:
case 2548:
case 3479:
case 2202:
case 3255:
case 852:
case 3412:
case 1918:
case 59:
case 2706:
case 3751:
case 655:
case 3830:
case 1238:
case 2249:
case 3310:
case 2702:
case 1873:
case 2145:
case 3755:
case 2785:
case 2753:
case 533:
case 2029:
case 3783:
case 1738:
case 2387:
case 2189:
case 3159:
case 3357:
case 472:
case 2206:
case 3560:
case 2366:
case 3718:
case 1857:
case 1190:
case 1951:
case 1436:
case 784:
case 3698:
case 2579:
case 2424:
case 1082:
case 3091:
case 903:
case 3373:
case 1005:
case 2375:
case 2636:
case 2277:
case 3095:
case 2460:
case 1086:
case 1810:
case 807:
case 2996:
case 3447:
case 2362:
case 3074:
case 1608:
case 1126:
case 2964:
case 1432:
case 3734:
case 1989:
case 479:
case 873:
case 927:
case 2898:
case 3562:
case 461:
case 2700:
case 3571:
case 1945:
case 677:
case 2487:
case 2099:
case 486:
case 20:
case 3316:
case 174:
case 3836:
case 977:
case 508:
case 3234:
case 429:
case 3832:
case 2573:
case 2268:
case 367:
case 453:
case 124:
case 2200:
case 1528:
case 627:
case 3410:
case 512:
case 2037:
case 1196:
case 3102:
case 3745:
case 1078:
case 394:
case 3604:
case 2471:
case 3153:
case 3587:
case 2308:
case 860:
case 2183:
case 2023:
case 2462:
case 3347:
case 938:
case 1214:
case 1812:
case 1080:
case 2510:
case 1336:
case 3245:
case 3021:
case 2324:
case 1714:
case 3181:
case 1666:
case 1192:
case 2990:
case 2259:
case 2922:
case 706:
case 3703:
case 290:
case 3348:
case 1533:
case 3752:
case 1940:
case 3411:
case 2201:
case 1444:
case 1293:
case 2558:
case 3854:
case 2205:
case 2884:
case 3415:
case 2282:
case 567:
case 2786:
case 3570:
case 2146:
case 2488:
case 2635:
case 760:
case 3458:
case 2511:
case 594:
case 1903:
case 940:
case 1435:
case 3740:
case 1229:
case 3180:
case 2897:
case 2365:
case 1431:
case 2470:
case 3993:
case 640:
case 2361:
case 1527:
case 1049:
case 2038:
case 1956:
case 1848:
case 2117:
case 286:
case 1670:
case 2319:
case 3064:
case 3513:
case 3178:
case 40:
case 1556:
case 2595:
case 149:
case 23:
case 4019:
case 2429:
case 2915:
case 3233:
case 2235:
case 3913:
case 1788:
case 2337:
case 1148:
case 4065:
case 2231:
case 1270:
case 3878:
case 3640:
case 1825:
case 1552:
case 3012:
case 2969:
case 751:
case 1693:
case 1032:
case 908:
case 3047:
case 3474:
case 2686:
case 1713:
case 847:
case 3727:
case 2008:
case 2493:
case 643:
case 1378:
case 2244:
case 2842:
case 435:
case 3495:
case 4007:
case 3491:
case 943:
case 2846:
case 612:
case 250:
case 1933:
case 1482:
case 2184:
case 3988:
case 3321:
case 1036:
case 3603:
case 1163:
case 1380:
case 763:
case 3652:
case 2007:
case 1766:
case 3849:
case 3728:
case 1794:
case 1377:
case 450:
case 1112:
case 2910:
case 2855:
case 3204:
case 1896:
case 3048:
case 2590:
case 1864:
case 3853:
case 1262:
case 2526:
case 1294:
case 3806:
case 2851:
case 354:
case 3881:
case 2957:
case 1443:
case 1771:
case 1266:
case 1820:
case 2730:
case 994:
case 540:
case 1459:
case 1762:
case 1116:
case 338:
case 2643:
case 3704:
case 747:
case 3490:
case 2973:
case 188:
case 3063:
case 3136:
case 1054:
case 3975:
case 3422:
case 851:
case 3966:
case 421:
case 1381:
case 967:
case 3392:
case 493:
case 2198:
case 899:
case 43:
case 3396:
case 1302:
case 667:
case 3962:
case 2600:
case 1385:
case 3364:
case 582:
case 164:
case 2019:
case 2668:
case 327:
case 863:
case 1400:
case 2338:
case 1787:
case 2818:
case 469:
case 1468:
case 3426:
case 715:
case 3877:
case 3132:
case 2236:
case 1760:
case 2013:
case 3298:
case 4071:
case 1157:
case 2596:
case 1555:
case 778:
case 2520:
case 1208:
case 3011:
case 3868:
case 728:
case 3069:
case 2232:
case 4066:
case 3798:
case 1402:
case 101:
case 2649:
case 355:
case 258:
case 3464:
case 4087:
case 1453:
case 3130:
case 2438:
case 589:
case 2685:
case 234:
case 3908:
case 2653:
case 2104:
case 1031:
case 2128:
case 526:
case 3492:
case 2845:
case 1518:
case 695:
case 3420:
case 3843:
case 55:
case 1895:
case 2856:
case 1169:
case 3886:
case 3907:
case 814:
case 2948:
case 2754:
case 196:
case 3144:
case 548:
case 458:
case 24:
case 1115:
case 1517:
case 262:
case 3057:
case 1761:
case 2087:
case 2329:
case 1772:
case 3523:
case 1265:
case 2803:
case 3882:
case 1997:
case 3805:
case 1891:
case 434:
case 417:
case 555:
case 3297:
case 1984:
case 69:
case 3739:
case 746:
case 376:
case 2963:
case 2680:
case 1382:
case 389:
case 3421:
case 966:
case 3135:
case 1707:
case 2133:
case 3919:
case 3972:
case 2678:
case 3599:
case 99:
case 2071:
case 4013:
case 1386:
case 3961:
case 633:
case 35:
case 3395:
case 445:
case 3437:
case 1893:
case 3521:
case 72:
case 2609:
case 2801:
case 672:
case 3754:
case 922:
case 230:
case 1409:
case 4058:
case 2642:
case 545:
case 1340:
case 756:
case 455:
case 904:
case 77:
case 622:
case 3499:
case 3127:
case 2805:
case 3852:
case 3525:
case 3254:
case 2284:
case 276:
case 3963:
case 558:
case 1829:
case 2297:
case 2739:
case 3075:
case 2965:
case 2650:
case 2391:
case 1352:
case 3094:
case 2421:
case 3133:
case 3066:
case 1450:
case 2537:
case 152:
case 2972:
case 2919:
case 3678:
case 2374:
case 1417:
case 25:
case 4015:
case 211:
case 2961:
case 82:
case 1345:
case 3236:
case 1549:
case 1027:
case 2538:
case 1747:
case 856:
case 1553:
case 3013:
case 1187:
case 2298:
case 775:
case 3732:
case 3596:
case 2015:
case 345:
case 45:
case 687:
case 317:
case 54:
case 1418:
case 1506:
case 184:
case 4073:
case 87:
case 562:
case 3736:
case 725:
case 2069:
case 3232:
case 883:
case 3912:
case 1212:
case 358:
case 1279:
case 3841:
case 1455:
case 255:
case 1334:
case 1932:
case 4057:
case 2655:
case 2960:
case 1696:
case 3438:
case 1664:
case 3070:
case 1716:
case 2683:
case 334:
case 2326:
case 3889:
case 3128:
case 2859:
case 2651:
case 1033:
case 3606:
case 2322:
case 1194:
case 1451:
case 1577:
case 698:
case 3230:
case 2849:
case 2728:
case 1441:
case 2204:
case 2885:
case 3414:
case 3590:
case 571:
case 2853:
case 106:
case 2048:
case 2987:
case 3526:
case 3659:
case 254:
case 4047:
case 1500:
case 1097:
case 1489:
case 1273:
case 2704:
case 277:
case 3065:
case 60:
case 185:
case 2975:
case 2514:
case 2063:
case 2136:
case 2392:
case 1690:
case 3076:
case 1710:
case 3198:
case 1622:
case 1160:
case 1355:
case 1434:
case 1559:
case 1383:
case 1626:
case 1108:
case 3072:
case 2634:
case 1543:
case 774:
case 1930:
case 2132:
case 2877:
case 2426:
case 718:
case 2971:
case 1501:
case 3595:
case 979:
case 2593:
case 961:
case 2880:
case 427:
case 3915:
case 2233:
case 369:
case 3574:
case 3235:
case 371:
case 1346:
case 629:
case 160:
case 1944:
case 3817:
case 3139:
case 4063:
case 2640:
case 1342:
case 2079:
case 321:
case 2012:
case 3591:
case 679:
case 953:
case 240:
case 1309:
case 3969:
case 1823:
case 454:
case 1269:
case 3686:
case 3323:
case 1695:
case 2047:
case 2529:
case 3601:
case 1161:
case 3809:
case 2656:
case 1837:
case 690:
case 1172:
case 2970:
case 1931:
case 2727:
case 1317:
case 1456:
case 3842:
case 159:
case 2495:
case 3244:
case 1211:
case 3060:
case 1403:
case 173:
case 3024:
case 1215:
case 2491:
case 282:
case 1:
case 350:
case 3846:
case 3958:
case 2154:
case 3744:
case 818:
case 2603:
case 874:
case 3184:
case 2321:
case 18:
case 1165:
case 3605:
case 2652:
case 1375:
case 668:
case 3498:
case 328:
case 1512:
case 410:
case 2005:
case 703:
case 2082:
case 2122:
case 1920:
case 2436:
case 984:
case 2190:
case 3887:
case 2624:
case 1992:
case 2951:
case 2126:
case 3953:
case 1964:
case 275:
case 1362:
case 187:
case 4043:
case 968:
case 4059:
case 1093:
case 1632:
case 2086:
case 3949:
case 1134:
case 1516:
case 3647:
case 1249:
case 3679:
case 3977:
case 1706:
case 811:
case 3792:
case 1141:
case 85:
case 1781:
case 1285:
case 592:
case 3296:
case 1804:
case 1202:
case 337:
case 3264:
case 3862:
case 483:
case 209:
case 889:
case 431:
case 1828:
case 3220:
case 2738:
case 1189:
case 1547:
case 876:
case 1753:
case 3875:
case 4000:
case 3532:
case 3796:
case 1702:
case 2873:
case 4068:
case 3034:
case 1156:
case 231:
case 2661:
case 2869:
case 803:
case 283:
case 3193:
case 1472:
case 1419:
case 2799:
case 2174:
case 2237:
case 1461:
case 104:
case 2619:
case 2917:
case 3333:
case 907:
case 578:
case 1548:
case 514:
case 2539:
case 2454:
case 2335:
case 122:
case 3980:
case 22:
case 2191:
case 2950:
case 1827:
case 1654:
case 1103:
case 1921:
case 1388:
case 2737:
case 3045:
case 711:
case 2043:
case 3129:
case 2858:
case 3327:
case 392:
case 3497:
case 2059:
case 4001:
case 1407:
case 1780:
case 2942:
case 2344:
case 4082:
case 3648:
case 3721:
case 3870:
case 1278:
case 652:
case 3225:
case 2909:
case 1563:
case 2584:
case 855:
case 346:
case 3433:
case 1150:
case 2952:
case 2354:
case 838:
case 153:
case 2688:
case 370:
case 1569:
case 2903:
case 129:
case 2006:
case 3051:
case 1767:
case 960:
case 474:
case 2002:
case 1974:
case 2085:
case 2053:
case 1372:
case 186:
case 1319:
case 1038:
case 1995:
case 3123:
case 2956:
case 3986:
case 1361:
case 2049:
case 2527:
case 3807:
case 1470:
case 2125:
case 179:
case 1267:
case 2431:
case 3669:
case 515:
case 691:
case 363:
case 98:
case 2444:
case 3295:
case 623:
case 1286:
case 3791:
case 1142:
case 659:
case 2940:
case 973:
case 1705:
case 4080:
case 336:
case 3611:
case 190:
case 1644:
case 3274:
case 1146:
case 1701:
case 673:
case 3531:
case 1786:
case 2613:
case 3427:
case 3199:
case 3774:
case 3865:
case 3397:
case 31:
case 1884:
case 68:
case 923:
case 1205:
case 2332:
case 3404:
case 2671:
case 2879:
case 1630:
case 840:
case 2214:
case 2812:
case 1462:
case 3138:
case 1308:
case 1183:
case 2430:
case 1471:
case 2164:
case 3968:
case 1926:
case 1360:
case 2078:
case 2196:
case 3900:
case 1155:
case 257:
case 3398:
case 2666:
case 1151:
case 1990:
case 1324:
case 2714:
case 4077:
case 2336:
case 3050:
case 1510:
case 1243:
case 1466:
case 218:
case 4085:
case 563:
case 1768:
case 441:
case 685:
case 4002:
case 3943:
case 2945:
case 1487:
case 3290:
case 727:
case 3222:
case 2687:
case 2504:
case 882:
case 3657:
case 202:
case 1037:
case 2528:
case 3042:
case 599:
case 1268:
case 3860:
case 4081:
case 985:
case 3790:
case 51:
case 2847:
case 3812:
case 3214:
case 1241:
case 821:
case 735:
case 2404:
case 3879:
case 3671:
case 2138:
case 3934:
case 1149:
case 893:
case 2968:
case 2017:
case 3430:
case 3662:
case 3196:
case 1745:
case 41:
case 3078:
case 463:
case 3694:
case 357:
case 997:
case 1181:
case 3714:
case 1741:
case 1473:
case 871:
case 3336:
case 1245:
case 3816:
case 4055:
case 2943:
case 374:
case 215:
case 744:
case 688:
case 4083:
case 964:
case 1562:
case 3989:
case 2046:
case 1734:
case 302:
case 3504:
case 664:
case 2808:
case 1410:
case 167:
case 2860:
case 1594:
case 1177:
case 1234:
case 2610:
case 988:
case 1914:
case 1575:
case 247:
case 3941:
case 2905:
case 2433:
case 1180:
case 270:
case 4042:
case 3903:
case 835:
case 3435:
case 1363:
case 632:
case 1633:
case 3006:
case 716:
case 771:
case 932:
case 1178:
case 557:
case 2055:
case 1240:
case 3729:
case 1513:
case 1064:
case 3053:
case 3527:
case 3049:
case 3956:
case 949:
case 3431:
case 1993:
case 3125:
case 263:
case 2861:
case 3293:
case 518:
case 1411:
case 844:
case 1256:
case 2295:
case 3444:
case 1752:
case 2791:
case 3940:
case 750:
case 143:
case 2535:
case 2339:
case 502:
case 4050:
case 1348:
case 2795:
case 112:
case 2615:
case 2427:
case 3793:
case 299:
case 2199:
case 1203:
case 4017:
case 2291:
case 1252:
case 3863:
case 1929:
case 1415:
case 1186:
case 1101:
case 3869:
case 525:
case 2193:
case 3799:
case 2978:
case 3174:
case 817:
case 3000:
case 3331:
case 74:
case 3672:
case 3068:
case 37:
case 3619:
case 575:
case 2813:
case 3539:
case 1709:
case 3815:
case 2484:
case 996:
case 3454:
case 1742:
case 642:
case 32:
case 2980:
case 3299:
case 2663:
case 4040:
case 66:
case 1999:
case 414:
case 2045:
case 1717:
case 2129:
case 1561:
case 2327:
case 19:
case 2888:
case 2497:
case 292:
case 1572:
case 3723:
case 1315:
case 4056:
case 509:
case 1576:
case 3942:
case 4003:
case 680:
case 1937:
case 2721:
case 2870:
case 310:
case 834:
case 1639:
case 3344:
case 1369:
case 3584:
case 2041:
case 181:
case 858:
case 2439:
case 2498:
case 2003:
case 3082:
case 325:
case 3005:
case 1373:
case 3122:
case 84:
case 2328:
case 2981:
case 717:
case 3857:
case 1718:
case 2887:
case 3951:
case 3126:
case 4045:
case 3608:
case 1168:
case 2953:
case 214:
case 375:
case 2304:
case 556:
case 3955:
case 1218:
case 965:
case 3810:
case 3330:
case 2056:
case 1095:
case 1938:
case 3238:
case 1830:
case 2977:
case 2720:
case 2871:
case 1310:
case 3918:
case 2536:
case 2114:
case 2296:
case 100:
case 2862:
case 1283:
case 1416:
case 1560:
case 510:
case 3738:
case 2220:
case 1357:
case 1143:
case 2616:
case 2796:
case 1755:
case 3873:
case 901:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1765594801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,];
var gg_b = "1765594801/";

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
