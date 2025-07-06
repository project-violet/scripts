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
case 2576:
case 2778:
case 4069:
case 1433:
case 1663:
case 4010:
case 2758:
case 2556:
case 3211:
case 311:
case 1402:
case 967:
case 2375:
case 2355:
case 2543:
case 140:
case 3112:
case 1654:
case 2405:
case 135:
case 3158:
case 2008:
case 3178:
case 1160:
case 1323:
case 1993:
case 734:
case 2712:
case 11:
case 1521:
case 271:
case 1429:
case 1811:
case 3464:
case 3298:
case 1769:
case 1138:
case 333:
case 51:
case 3332:
case 4015:
case 2848:
case 3357:
case 2261:
case 430:
case 3501:
case 2350:
case 1921:
case 2956:
case 2976:
case 4004:
case 690:
case 3453:
case 1165:
case 3762:
case 3422:
case 445:
case 844:
case 447:
case 2746:
case 2334:
case 2677:
case 2548:
case 2707:
case 2657:
case 2632:
case 2462:
case 664:
case 3164:
case 3670:
case 54:
case 2773:
case 3700:
case 3650:
case 203:
case 814:
case 2077:
case 3107:
case 417:
case 1417:
case 312:
case 1328:
case 2032:
case 604:
case 3221:
case 43:
case 1068:
case 2003:
case 3173:
case 3153:
case 2424:
case 3050:
case 1635:
case 1465:
case 2876:
case 680:
case 1201:
case 2114:
case 2679:
case 3641:
case 1133:
case 3655:
case 1030:
case 2659:
case 3293:
case 1911:
case 14:
case 97:
case 622:
case 2105:
case 3458:
case 4025:
case 65:
case 3041:
case 1460:
case 1419:
case 3714:
case 1821:
case 1720:
case 26:
case 1309:
case 3284:
case 345:
case 2595:
case 347:
case 3452:
case 1540:
case 3437:
case 924:
case 3667:
case 442:
case 1266:
case 476:
case 2942:
case 3985:
case 3423:
case 2989:
case 543:
case 2154:
case 3615:
case 2619:
case 2660:
case 3004:
case 2396:
case 2320:
case 1945:
case 1951:
case 649:
case 3333:
case 1971:
case 3067:
case 1244:
case 3302:
case 3418:
case 506:
case 3327:
case 3997:
case 1479:
case 3774:
case 1459:
case 3754:
case 3015:
case 1592:
case 2163:
case 330:
case 1571:
case 106:
case 2987:
case 902:
case 3931:
case 1373:
case 1353:
case 1545:
case 2590:
case 886:
case 1884:
case 2617:
case 2038:
case 1992:
case 1734:
case 2665:
case 3610:
case 3439:
case 132:
case 1477:
case 2995:
case 2325:
case 411:
case 3329:
case 838:
case 1432:
case 1662:
case 2017:
case 3386:
case 2468:
case 1403:
case 2294:
case 988:
case 2728:
case 2526:
case 1024:
case 3585:
case 3010:
case 3069:
case 2065:
case 3113:
case 3491:
case 3844:
case 2890:
case 2791:
case 1600:
case 1584:
case 1851:
case 3139:
case 2086:
case 2135:
case 1770:
case 3566:
case 1871:
case 3428:
case 4055:
case 531:
case 625:
case 2916:
case 1103:
case 0:
case 1000:
case 3191:
case 779:
case 2842:
case 441:
case 2889:
case 3544:
case 1840:
case 4070:
case 3899:
case 1014:
case 2454:
case 513:
case 33:
case 2516:
case 2474:
case 1775:
case 3251:
case 4050:
case 2033:
case 3245:
case 2718:
case 2027:
case 315:
case 3172:
case 200:
case 3152:
case 317:
case 1378:
case 2181:
case 412:
case 2315:
case 3360:
case 3966:
case 3118:
case 3730:
case 1614:
case 2887:
case 1005:
case 3831:
case 1159:
case 896:
case 1312:
case 2633:
case 2463:
case 2737:
case 3880:
case 809:
case 2627:
case 3781:
case 2602:
case 2772:
case 3096:
case 901:
case 275:
case 1285:
case 2443:
case 3392:
case 3922:
case 1502:
case 3238:
case 1198:
case 339:
case 392:
case 2900:
case 381:
case 1016:
case 640:
case 590:
case 2269:
case 3094:
case 521:
case 1860:
case 1761:
case 2306:
case 1929:
case 3217:
case 1986:
case 1493:
case 1385:
case 1111:
case 1838:
case 3401:
case 2148:
case 3909:
case 2084:
case 121:
case 1902:
case 3748:
case 3219:
case 77:
case 1397:
case 3546:
case 3522:
case 3507:
case 1865:
case 2914:
case 2349:
case 3553:
case 2382:
case 550:
case 3371:
case 1933:
case 2500:
case 238:
case 3573:
case 1642:
case 1689:
case 164:
case 1736:
case 1344:
case 1538:
case 767:
case 1829:
case 1193:
case 19:
case 3082:
case 3049:
case 2562:
case 2045:
case 1886:
case 770:
case 2296:
case 1042:
case 1565:
case 2524:
case 1089:
case 884:
case 104:
case 1026:
case 382:
case 1517:
case 934:
case 2651:
case 2800:
case 1366:
case 1690:
case 3682:
case 2645:
case 3853:
case 3384:
case 580:
case 1209:
case 3047:
case 4036:
case 2692:
case 3006:
case 2924:
case 180:
case 2394:
case 1965:
case 2814:
case 1687:
case 3286:
case 2040:
case 828:
case 1833:
case 504:
case 351:
case 1917:
case 1264:
case 2225:
case 3647:
case 926:
case 122:
case 474:
case 64:
case 59:
case 1938:
case 3776:
case 2092:
case 1560:
case 1519:
case 3756:
case 1087:
case 2805:
case 2640:
case 2962:
case 2968:
case 2116:
case 3523:
case 3991:
case 553:
case 1977:
case 1440:
case 2495:
case 2854:
case 193:
case 3061:
case 3537:
case 452:
case 2098:
case 1932:
case 2874:
case 3572:
case 1492:
case 3480:
case 871:
case 3518:
case 3939:
case 149:
case 1579:
case 3716:
case 979:
case 659:
case 2487:
case 3431:
case 3661:
case 2234:
case 1808:
case 2863:
case 3497:
case 1979:
case 1959:
case 3688:
case 1184:
case 2490:
case 2744:
case 1451:
case 2011:
case 2336:
case 4094:
case 761:
case 2442:
case 481:
case 666:
case 643:
case 2489:
case 3923:
case 3591:
case 3088:
case 1503:
case 244:
case 2766:
case 2426:
case 1532:
case 1557:
case 1648:
case 1577:
case 701:
case 3937:
case 439:
case 153:
case 2093:
case 3839:
case 2388:
case 519:
case 374:
case 3466:
case 3726:
case 1237:
case 1252:
case 3528:
case 3197:
case 127:
case 872:
case 3:
case 125:
case 863:
case 2963:
case 3742:
case 3789:
case 2785:
case 1803:
case 3279:
case 2275:
case 1218:
case 1782:
case 3444:
case 1749:
case 1877:
case 2189:
case 4047:
case 2142:
case 183:
case 2797:
case 1832:
case 803:
case 4006:
case 1857:
case 3199:
case 2195:
case 3823:
case 1239:
case 2621:
case 2731:
case 2574:
case 2416:
case 3683:
case 387:
case 3852:
case 2780:
case 1076:
case 736:
case 2554:
case 2881:
case 3913:
case 1291:
case 2250:
case 527:
case 1859:
case 2021:
case 408:
case 2270:
case 1706:
case 420:
case 2361:
case 788:
case 1656:
case 1508:
case 3232:
case 1747:
case 689:
case 3928:
case 3277:
case 3738:
case 1124:
case 2165:
case 3335:
case 2117:
case 2339:
case 4012:
case 792:
case 739:
case 1943:
case 401:
case 571:
case 2486:
case 2710:
case 3425:
case 2429:
case 1350:
case 498:
case 2391:
case 3368:
case 116:
case 1370:
case 461:
case 2063:
case 2352:
case 2119:
case 3115:
case 2337:
case 3381:
case 1405:
case 2654:
case 2372:
case 235:
case 3167:
case 3330:
case 171:
case 3496:
case 1288:
case 2521:
case 21:
case 849:
case 458:
case 1758:
case 2663:
case 1608:
case 2433:
case 893:
case 1556:
case 3861:
case 3420:
case 1576:
case 3719:
case 1414:
case 2054:
case 72:
case 1778:
case 752:
case 37:
case 240:
case 2402:
case 2767:
case 473:
case 3374:
case 3467:
case 3637:
case 462:
case 3652:
case 3196:
case 911:
case 1948:
case 3702:
case 370:
case 2911:
case 24:
case 819:
case 708:
case 720:
case 488:
case 3415:
case 2821:
case 2419:
case 2630:
case 1079:
case 546:
case 696:
case 3623:
case 3018:
case 3733:
case 4046:
case 3037:
case 402:
case 669:
case 210:
case 3052:
case 3363:
case 307:
case 305:
case 2796:
case 1856:
case 768:
case 2127:
case 4022:
case 2133:
case 3404:
case 2030:
case 1659:
case 4053:
case 1679:
case 4073:
case 503:
case 3618:
case 1057:
case 2417:
case 1283:
case 1032:
case 3961:
case 103:
case 3836:
case 751:
case 1077:
case 878:
case 3091:
case 933:
case 1764:
case 3639:
case 2725:
case 1100:
case 3786:
case 2068:
case 1707:
case 3256:
case 1722:
case 2313:
case 825:
case 172:
case 976:
case 146:
case 424:
case 3276:
case 1548:
case 1773:
case 3039:
case 3243:
case 2186:
case 2035:
case 3125:
case 1753:
case 4009:
case 2438:
case 1603:
case 644:
case 2432:
case 757:
case 1325:
case 1995:
case 755:
case 2940:
case 266:
case 1065:
case 1589:
case 2024:
case 3906:
case 1638:
case 2403:
case 154:
case 3470:
case 1590:
case 2353:
case 2884:
case 3216:
case 2571:
case 2373:
case 358:
case 206:
case 1665:
case 1435:
case 2624:
case 299:
case 2307:
case 3612:
case 2971:
case 915:
case 2945:
case 3949:
case 1320:
case 361:
case 917:
case 3455:
case 2459:
case 1019:
case 3894:
case 3475:
case 3012:
case 2266:
case 3305:
case 2309:
case 797:
case 1660:
case 1430:
case 1174:
case 4013:
case 1396:
case 3547:
case 3678:
case 194:
case 3708:
case 1942:
case 3155:
case 2984:
case 2408:
case 4039:
case 3141:
case 774:
case 231:
case 3009:
case 2005:
case 1887:
case 2614:
case 85:
case 3175:
case 175:
case 945:
case 1772:
case 289:
case 324:
case 2892:
case 947:
case 3594:
case 1602:
case 1130:
case 2775:
case 1282:
case 3290:
case 584:
case 2840:
case 2605:
case 2014:
case 2297:
case 2378:
case 100:
case 1315:
case 1181:
case 1027:
case 880:
case 2358:
case 3847:
case 500:
case 2231:
case 1686:
case 3362:
case 3053:
case 1168:
case 2103:
case 1916:
case 3073:
case 3434:
case 3170:
case 4023:
case 302:
case 614:
case 3046:
case 407:
case 2280:
case 1826:
case 184:
case 2157:
case 4052:
case 2177:
case 4072:
case 405:
case 213:
case 3022:
case 575:
case 2770:
case 560:
case 3653:
case 2299:
case 388:
case 3295:
case 2845:
case 3849:
case 3882:
case 1890:
case 3673:
case 723:
case 3064:
case 577:
case 2851:
case 2600:
case 362:
case 1247:
case 3646:
case 3324:
case 3994:
case 467:
case 3777:
case 1369:
case 3607:
case 465:
case 2258:
case 3869:
case 290:
case 1824:
case 1215:
case 2902:
case 2927:
case 908:
case 1500:
case 2817:
case 2933:
case 843:
case 3188:
case 920:
case 1382:
case 1349:
case 1267:
case 3644:
case 1148:
case 334:
case 3326:
case 3996:
case 2385:
case 3389:
case 832:
case 2838:
case 3525:
case 1905:
case 2212:
case 2788:
case 2586:
case 1306:
case 2761:
case 2421:
case 859:
case 2860:
case 2819:
case 586:
case 1269:
case 1210:
case 3596:
case 951:
case 733:
case 671:
case 2986:
case 2616:
case 28:
case 2502:
case 3804:
case 742:
case 776:
case 1514:
case 3520:
case 326:
case 2533:
case 1456:
case 2016:
case 2331:
case 2207:
case 556:
case 109:
case 981:
case 3896:
case 2222:
case 3183:
case 2246:
case 3515:
case 889:
case 1092:
case 2938:
case 2273:
case 831:
case 4001:
case 25:
case 3200:
case 418:
case 1962:
case 3031:
case 1805:
case 3316:
case 2695:
case 2253:
case 169:
case 2965:
case 3969:
case 2783:
case 1394:
case 2802:
case 3504:
case 2917:
case 2833:
case 2264:
case 3461:
case 1143:
case 3820:
case 3721:
case 2687:
case 712:
case 2095:
case 2026:
case 3904:
case 3488:
case 479:
case 2089:
case 603:
case 3510:
case 2042:
case 3569:
case 741:
case 1671:
case 3793:
case 3205:
case 2366:
case 1800:
case 2690:
case 264:
case 2736:
case 3915:
case 2960:
case 2919:
case 596:
case 646:
case 663:
case 3685:
case 2689:
case 2642:
case 952:
case 509:
case 3967:
case 3214:
case 1220:
case 2193:
case 2411:
case 2503:
case 1930:
case 974:
case 426:
case 1766:
case 2301:
case 1489:
case 3784:
case 3550:
case 2648:
case 253:
case 2532:
case 3834:
case 747:
case 1611:
case 3941:
case 2184:
case 3254:
case 2048:
case 348:
case 2445:
case 1336:
case 2451:
case 3274:
case 3575:
case 249:
case 2579:
case 81:
case 2559:
case 3343:
case 2492:
case 4066:
case 1234:
case 1698:
case 3194:
case 3950:
case 3406:
case 1116:
case 66:
case 923:
case 2932:
case 1098:
case 4044:
case 2957:
case 544:
case 1383:
case 2794:
case 2228:
case 1270:
case 1021:
case 3855:
case 2859:
case 3494:
case 3268:
case 3740:
case 957:
case 2291:
case 2879:
case 1187:
case 2747:
case 660:
case 219:
case 84:
case 2676:
case 2656:
case 677:
case 1361:
case 2706:
case 1563:
case 1731:
case 1830:
case 1621:
case 514:
case 1554:
case 2076:
case 2056:
case 379:
case 1574:
case 810:
case 3850:
case 1275:
case 715:
case 2749:
case 3745:
case 2218:
case 1241:
case 1255:
case 717:
case 3771:
case 1693:
case 684:
case 2832:
case 1797:
case 1126:
case 1142:
case 2877:
case 1954:
case 995:
case 2171:
case 1388:
case 2223:
case 1190:
case 4031:
case 3230:
case 1093:
case 1785:
case 2908:
case 2237:
case 3281:
case 4080:
case 2252:
case 3142:
case 2185:
case 812:
case 3954:
case 469:
case 314:
case 1534:
case 579:
case 3868:
case 2259:
case 1771:
case 3255:
case 636:
case 1870:
case 1601:
case 2279:
case 2444:
case 1745:
case 2790:
case 2726:
case 2466:
case 1281:
case 4092:
case 2528:
case 409:
case 3785:
case 2742:
case 496:
case 789:
case 1230:
case 3093:
case 1001:
case 2839:
case 118:
case 624:
case 2928:
case 2398:
case 2818:
case 4051:
case 3187:
case 3250:
case 2131:
case 993:
case 3021:
case 3799:
case 1268:
case 1494:
case 4071:
case 949:
case 3574:
case 1147:
case 2872:
case 287:
case 3881:
case 2199:
case 713:
case 3731:
case 3621:
case 3830:
case 2661:
case 3487:
case 1356:
case 3698:
case 3234:
case 706:
case 1194:
case 3863:
case 1343:
case 1555:
case 732:
case 661:
case 2480:
case 2939:
case 2518:
case 4084:
case 2716:
case 548:
case 3495:
case 3383:
case 2499:
case 2552:
case 2537:
case 2061:
case 3854:
case 3098:
case 255:
case 3968:
case 919:
case 3116:
case 1950:
case 2321:
case 438:
case 2208:
case 1263:
case 1834:
case 295:
case 2972:
case 3611:
case 2952:
case 297:
case 3981:
case 2144:
case 2937:
case 1784:
case 2393:
case 3489:
case 2591:
case 842:
case 3568:
case 3930:
case 2088:
case 3426:
case 3490:
case 3011:
case 1254:
case 978:
case 148:
case 833:
case 2918:
case 3535:
case 1975:
case 759:
case 983:
case 2688:
case 1941:
case 3800:
case 268:
case 2912:
case 1205:
case 2384:
case 1793:
case 3296:
case 1085:
case 1136:
case 1569:
case 1510:
case 2807:
case 282:
case 2846:
case 990:
case 2864:
case 1825:
case 2049:
case 2233:
case 3562:
case 3045:
case 2082:
case 356:
case 1967:
case 208:
case 1214:
case 2978:
case 2202:
case 1915:
case 1031:
case 2809:
case 4093:
case 950:
case 3962:
case 2578:
case 2647:
case 1515:
case 665:
case 3092:
case 2776:
case 2756:
case 1896:
case 3143:
case 2286:
case 1099:
case 2512:
case 3040:
case 251:
case 3225:
case 2047:
case 1680:
case 3692:
case 605:
case 3176:
case 607:
case 1910:
case 815:
case 414:
case 3924:
case 2964:
case 2340:
case 1925:
case 1395:
case 1224:
case 3269:
case 2265:
case 2858:
case 4011:
case 1596:
case 3347:
case 830:
case 2878:
case 1815:
case 1262:
case 281:
case 3514:
case 2953:
case 67:
case 2812:
case 126:
case 2922:
case 1161:
case 2238:
case 239:
case 1804:
case 292:
case 3382:
case 1920:
case 3349:
case 964:
case 1666:
case 3500:
case 1188:
case 2573:
case 2219:
case 740:
case 252:
case 99:
case 1810:
case 526:
case 2507:
case 3824:
case 2909:
case 1066:
case 3084:
case 735:
case 3862:
case 1342:
case 1389:
case 71:
case 1644:
case 2401:
case 3148:
case 1996:
case 1326:
case 2885:
case 229:
case 2338:
case 882:
case 906:
case 1046:
case 3826:
case 2292:
case 999:
case 1170:
case 1664:
case 1434:
case 3629:
case 1150:
case 1053:
case 2191:
case 3206:
case 820:
case 173:
case 1324:
case 3369:
case 1777:
case 1849:
case 3791:
case 1673:
case 4079:
case 1882:
case 1064:
case 3029:
case 2566:
case 2139:
case 3086:
case 618:
case 3135:
case 2240:
case 1653:
case 1295:
case 188:
case 446:
case 124:
case 2781:
case 472:
case 2880:
case 3752:
case 377:
case 3602:
case 375:
case 2096:
case 1242:
case 3304:
case 1289:
case 588:
case 2118:
case 2831:
case 1009:
case 2730:
case 725:
case 3887:
case 562:
case 573:
case 3463:
case 403:
case 3027:
case 4077:
case 679:
case 215:
case 1847:
case 300:
case 2137:
case 3315:
case 4032:
case 778:
case 3895:
case 328:
case 1609:
case 2271:
case 3130:
case 3367:
case 959:
case 3718:
case 3249:
case 558:
case 2327:
case 2997:
case 3019:
case 3060:
case 2015:
case 1455:
case 3163:
case 230:
case 1894:
case 1078:
case 1949:
case 30:
case 2333:
case 1612:
case 3587:
case 2067:
case 2531:
case 198:
case 3989:
case 3154:
case 2615:
case 3619:
case 3174:
case 3926:
case 1547:
case 3816:
case 989:
case 1305:
case 101:
case 2472:
case 881:
case 2599:
case 2437:
case 501:
case 1947:
case 1134:
case 2010:
case 1450:
case 3542:
case 3065:
case 3589:
case 2844:
case 1906:
case 3325:
case 2386:
case 3713:
case 749:
case 561:
case 648:
case 3665:
case 4008:
case 2597:
case 598:
case 2128:
case 1300:
case 2866:
case 3987:
case 1582:
case 3590:
case 913:
case 3617:
case 471:
case 505:
case 3100:
case 2221:
case 2070:
case 1588:
case 1469:
case 1639:
case 1410:
case 303:
case 2122:
case 2107:
case 4002:
case 3057:
case 2146:
case 212:
case 1125:
case 2164:
case 2670:
case 3603:
case 1691:
case 3773:
case 2801:
case 1243:
case 1039:
case 567:
case 372:
case 75:
case 363:
case 3746:
case 346:
case 3548:
case 477:
case 3334:
case 1256:
case 3079:
case 2075:
case 1623:
case 764:
case 1733:
case 2478:
case 940:
case 165:
case 823:
case 170:
case 1354:
case 3236:
case 1727:
case 1637:
case 79:
case 1374:
case 1652:
case 167:
case 1702:
case 3948:
case 2675:
case 3679:
case 3843:
case 1618:
case 935:
case 3709:
case 1988:
case 241:
case 887:
case 3876:
case 91:
case 1561:
case 1037:
case 2412:
case 1052:
case 1363:
case 107:
case 3288:
case 3712:
case 1330:
case 371:
case 2409:
case 721:
case 2158:
case 1583:
case 2178:
case 3008:
case 790:
case 3375:
case 2359:
case 17:
case 626:
case 4017:
case 2112:
case 1420:
case 1248:
case 855:
case 1936:
case 3778:
case 3758:
case 46:
case 3943:
case 2446:
case 1888:
case 3956:
case 1628:
case 1013:
case 1738:
case 1169:
case 895:
case 1110:
case 316:
case 1368:
case 1717:
case 2501:
case 1765:
case 2298:
case 1983:
case 2724:
case 1425:
case 233:
case 1028:
case 1613:
case 634:
case 2357:
case 187:
case 4026:
case 3076:
case 1913:
case 2106:
case 615:
case 4089:
case 807:
case 2147:
case 2934:
case 4042:
case 1787:
case 3140:
case 2235:
case 865:
case 123:
case 1277:
case 3656:
case 1180:
case 3192:
case 3508:
case 1232:
case 867:
case 2740:
case 1795:
case 2268:
case 1131:
case 3643:
case 2875:
case 1:
case 3272:
case 3908:
case 3484:
case 2281:
case 1466:
case 1636:
case 174:
case 944:
case 422:
case 1726:
case 327:
case 3171:
case 777:
case 1839:
case 523:
case 2149:
case 3145:
case 760:
case 2230:
case 775:
case 3151:
case 3832:
case 2534:
case 2348:
case 728:
case 3857:
case 480:
case 1036:
case 1513:
case 1279:
case 2601:
case 2850:
case 1790:
case 3749:
case 2745:
case 1891:
case 378:
case 700:
case 4095:
case 585:
case 1259:
case 3048:
case 2254:
case 70:
case 248:
case 1828:
case 2955:
case 3184:
case 2941:
case 1539:
case 1166:
case 1918:
case 48:
case 2975:
case 3648:
case 197:
case 1952:
case 1937:
case 353:
case 2263:
case 3532:
case 1972:
case 2834:
case 1088:
case 3301:
case 555:
case 794:
case 2550:
case 1923:
case 1393:
case 2784:
case 4016:
case 1591:
case 3932:
case 155:
case 1572:
case 3957:
case 3977:
case 157:
case 393:
case 1061:
case 2950:
case 2406:
case 1321:
case 645:
case 3903:
case 87:
case 2970:
case 630:
case 3213:
case 1518:
case 1939:
case 349:
case 3579:
case 421:
case 1480:
case 2555:
case 2343:
case 3559:
case 2541:
case 3833:
case 3498:
case 3264:
case 703:
case 1229:
case 3687:
case 2631:
case 478:
case 1286:
case 2820:
case 2099:
case 3095:
case 1006:
case 3783:
case 3802:
case 2504:
case 641:
case 3827:
case 35:
case 2200:
case 772:
case 3121:
case 3087:
case 1809:
case 520:
case 3253:
case 3695:
case 1606:
case 3207:
case 425:
case 1558:
case 322:
case 1647:
case 1578:
case 2515:
case 3560:
case 108:
case 2967:
case 1101:
case 3886:
case 2825:
case 3411:
case 3829:
case 39:
case 1049:
case 888:
case 1978:
case 1227:
case 364:
case 3626:
case 2915:
case 3344:
case 3960:
case 1202:
case 938:
case 873:
case 120:
case 3642:
case 3689:
case 2793:
case 1384:
case 1912:
case 3517:
case 1873:
case 1682:
case 551:
case 3026:
case 2488:
case 1846:
case 2904:
case 986:
case 802:
case 4056:
case 2697:
case 1822:
case 1807:
case 3565:
case 2510:
case 2569:
case 3089:
case 2136:
case 2085:
case 2525:
case 321:
case 858:
case 449:
case 3788:
case 3586:
case 2326:
case 234:
case 3385:
case 3493:
case 771:
case 3111:
case 3933:
case 3817:
case 676:
case 2188:
case 539:
case 592:
case 2390:
case 1351:
case 1522:
case 3258:
case 2869:
case 2810:
case 1748:
case 1260:
case 581:
case 3927:
case 2520:
case 1953:
case 3533:
case 2262:
case 3331:
case 611:
case 3016:
case 52:
case 1694:
case 1946:
case 2804:
case 996:
case 3380:
case 1392:
case 1907:
case 1509:
case 2867:
case 3986:
case 2925:
case 3929:
case 2483:
case 1340:
case 1964:
case 3616:
case 1094:
case 4048:
case 2815:
case 3819:
case 1858:
case 1319:
case 687:
case 1360:
case 90:
case 1137:
case 685:
case 2847:
case 1251:
case 529:
case 3741:
case 2759:
case 3605:
case 13:
case 4068:
case 2609:
case 2289:
case 389:
case 623:
case 2242:
case 1880:
case 2226:
case 1781:
case 2594:
case 4035:
case 3984:
case 1118:
case 1966:
case 331:
case 994:
case 3179:
case 2175:
case 2009:
case 1620:
case 2777:
case 2994:
case 2607:
case 2757:
case 2732:
case 2622:
case 3871:
case 1768:
case 288:
case 1240:
case 2653:
case 1428:
case 2882:
case 3845:
case 2849:
case 3851:
case 1025:
case 3600:
case 3750:
case 2064:
case 2046:
case 202:
case 3132:
case 410:
case 3280:
case 3177:
case 53:
case 2022:
case 517:
case 1191:
case 2362:
case 2053:
case 4030:
case 1413:
case 236:
case 515:
case 3000:
case 1625:
case 2434:
case 2664:
case 437:
case 1439:
case 1610:
case 3734:
case 1128:
case 1980:
case 3307:
case 3545:
case 3353:
case 2549:
case 3062:
case 2582:
case 2216:
case 3884:
case 3551:
case 530:
case 3571:
case 306:
case 41:
case 1931:
case 3373:
case 258:
case 2450:
case 1010:
case 2906:
case 4074:
case 697:
case 3403:
case 4054:
case 2134:
case 2470:
case 545:
case 440:
case 3364:
case 3940:
case 1329:
case 366:
case 343:
case 1615:
case 655:
case 2678:
case 2547:
case 1423:
case 2506:
case 977:
case 3266:
case 2305:
case 3309:
case 826:
case 1472:
case 975:
case 960:
case 201:
case 145:
case 2455:
case 3459:
case 1580:
case 3592:
case 1604:
case 2441:
case 130:
case 3244:
case 1418:
case 1302:
case 1327:
case 1333:
case 3971:
case 1067:
case 1531:
case 3951:
case 3133:
case 512:
case 2988:
case 2404:
case 651:
case 3201:
case 1675:
case 4000:
case 879:
case 3081:
case 2363:
case 1412:
case 2072:
case 205:
case 141:
case 3102:
case 413:
case 3127:
case 3598:
case 2415:
case 1714:
case 3419:
case 3630:
case 3720:
case 1109:
case 1458:
case 2018:
case 270:
case 3911:
case 2672:
case 2883:
case 756:
case 1700:
case 1650:
case 3186:
case 3035:
case 1670:
case 3129:
case 2125:
case 3438:
case 3668:
case 4005:
case 796:
case 620:
case 2276:
case 3465:
case 2410:
case 541:
case 769:
case 691:
case 1173:
case 3328:
case 112:
case 1122:
case 2836:
case 3593:
case 2613:
case 2028:
case 3486:
case 1357:
case 3811:
case 2425:
case 2983:
case 1377:
case 1464:
case 1634:
case 459:
case 848:
case 2335:
case 3339:
case 62:
case 176:
case 1446:
case 1407:
case 2738:
case 1453:
case 2628:
case 2110:
case 2536:
case 511:
case 1473:
case 27:
case 3318:
case 3402:
case 3767:
case 1379:
case 443:
case 3433:
case 576:
case 3898:
case 542:
case 3074:
case 3054:
case 3715:
case 738:
case 2420:
case 2330:
case 1901:
case 3323:
case 3521:
case 3063:
case 337:
case 2583:
case 2381:
case 786:
case 3160:
case 2115:
case 432:
case 499:
case 3337:
case 3654:
case 1158:
case 3372:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751806802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,];
var gg_b = "1751806802/";

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
