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
case 1583:
case 1907:
case 3417:
case 766:
case 553:
case 3723:
case 1119:
case 1868:
case 1426:
case 2771:
case 954:
case 185:
case 3712:
case 15:
case 659:
case 753:
case 2049:
case 2446:
case 3461:
case 3588:
case 3957:
case 3419:
case 4019:
case 507:
case 2257:
case 362:
case 2970:
case 2618:
case 770:
case 2001:
case 1346:
case 2852:
case 1978:
case 969:
case 3016:
case 2430:
case 2464:
case 1244:
case 1438:
case 3445:
case 1133:
case 2889:
case 3998:
case 862:
case 1032:
case 257:
case 3004:
case 1364:
case 2338:
case 880:
case 128:
case 1054:
case 3325:
case 1736:
case 4033:
case 3982:
case 1145:
case 1993:
case 3924:
case 2887:
case 3831:
case 1611:
case 1476:
case 2721:
case 1053:
case 1152:
case 3271:
case 335:
case 422:
case 590:
case 4034:
case 1940:
case 645:
case 1707:
case 2223:
case 2302:
case 3773:
case 3923:
case 691:
case 121:
case 240:
case 1667:
case 1134:
case 215:
case 3846:
case 2861:
case 2770:
case 790:
case 1928:
case 1778:
case 306:
case 2819:
case 3058:
case 928:
case 511:
case 1363:
case 3102:
case 2656:
case 130:
case 3452:
case 1077:
case 1741:
case 1539:
case 2688:
case 3864:
case 252:
case 3086:
case 2845:
case 3489:
case 678:
case 3097:
case 806:
case 1196:
case 2542:
case 1584:
case 3974:
case 66:
case 1793:
case 3496:
case 3375:
case 1189:
case 95:
case 4087:
case 1513:
case 835:
case 154:
case 3099:
case 3487:
case 2431:
case 3105:
case 1254:
case 418:
case 2561:
case 847:
case 4055:
case 1388:
case 2114:
case 3455:
case 21:
case 3689:
case 2082:
case 1839:
case 2519:
case 239:
case 2024:
case 33:
case 1044:
case 2492:
case 2631:
case 2517:
case 2098:
case 2786:
case 0:
case 2904:
case 3915:
case 2215:
case 912:
case 1405:
case 276:
case 2758:
case 1469:
case 3372:
case 2249:
case 819:
case 2311:
case 665:
case 2695:
case 3634:
case 184:
case 955:
case 1602:
case 527:
case 2369:
case 1676:
case 2916:
case 2201:
case 83:
case 3070:
case 3901:
case 2367:
case 3818:
case 2059:
case 3111:
case 2456:
case 1951:
case 282:
case 3564:
case 3700:
case 1467:
case 2247:
case 727:
case 1229:
case 347:
case 2663:
case 1356:
case 3339:
case 2074:
case 2855:
case 689:
case 3645:
case 2552:
case 842:
case 1091:
case 2664:
case 2630:
case 1638:
case 2986:
case 1481:
case 2704:
case 3286:
case 917:
case 3297:
case 583:
case 2997:
case 3633:
case 18:
case 2381:
case 3595:
case 2560:
case 984:
case 522:
case 334:
case 1142:
case 3985:
case 1626:
case 112:
case 326:
case 3258:
case 3322:
case 644:
case 2587:
case 1950:
case 1806:
case 746:
case 2200:
case 3747:
case 2418:
case 1410:
case 1253:
case 1208:
case 3900:
case 949:
case 3071:
case 2012:
case 873:
case 342:
case 1318:
case 2310:
case 2646:
case 2184:
case 1035:
case 287:
case 411:
case 3442:
case 546:
case 713:
case 2155:
case 34:
case 3414:
case 40:
case 4014:
case 1904:
case 1797:
case 3675:
case 2405:
case 3526:
case 1215:
case 2837:
case 3881:
case 599:
case 1492:
case 1631:
case 2044:
case 63:
case 2090:
case 987:
case 837:
case 1488:
case 1024:
case 139:
case 1519:
case 3192:
case 52:
case 3355:
case 693:
case 2254:
case 799:
case 3954:
case 11:
case 3708:
case 1247:
case 758:
case 647:
case 1663:
case 3929:
case 1842:
case 3810:
case 1367:
case 1059:
case 3007:
case 3251:
case 1172:
case 1073:
case 3538:
case 2602:
case 284:
case 4072:
case 2813:
case 1369:
case 3472:
case 1057:
case 1916:
case 4006:
case 558:
case 1201:
case 2411:
case 3078:
case 3406:
case 1533:
case 2822:
case 481:
case 2469:
case 3777:
case 2066:
case 1695:
case 2884:
case 1311:
case 84:
case 3668:
case 28:
case 2814:
case 579:
case 488:
case 3805:
case 2568:
case 1534:
case 255:
case 3437:
case 2481:
case 1704:
case 1986:
case 3502:
case 4037:
case 3576:
case 2883:
case 3625:
case 976:
case 3754:
case 960:
case 2091:
case 779:
case 3439:
case 3880:
case 1664:
case 389:
case 650:
case 1855:
case 1310:
case 1646:
case 187:
case 2035:
case 1023:
case 2962:
case 705:
case 3094:
case 332:
case 524:
case 1122:
case 1589:
case 2253:
case 2208:
case 1200:
case 1418:
case 3979:
case 3729:
case 114:
case 3342:
case 212:
case 3250:
case 404:
case 4013:
case 1903:
case 1587:
case 626:
case 196:
case 1596:
case 4:
case 3727:
case 3422:
case 2142:
case 3869:
case 201:
case 3484:
case 3028:
case 1716:
case 371:
case 2909:
case 2610:
case 2346:
case 1852:
case 1001:
case 2728:
case 1720:
case 1618:
case 1970:
case 3278:
case 3361:
case 359:
case 1049:
case 1555:
case 1446:
case 781:
case 2266:
case 2027:
case 3966:
case 3241:
case 458:
case 1771:
case 285:
case 3505:
case 3146:
case 3317:
case 2426:
case 2514:
case 3622:
case 25:
case 2029:
case 2907:
case 2740:
case 1326:
case 3735:
case 3051:
case 364:
case 3511:
case 4025:
case 864:
case 1224:
case 2993:
case 3130:
case 3637:
case 1887:
case 2572:
case 103:
case 2875:
case 3791:
case 3333:
case 3569:
case 157:
case 1338:
case 2330:
case 2364:
case 3345:
case 228:
case 70:
case 3944:
case 1464:
case 1430:
case 940:
case 2133:
case 871:
case 3990:
case 2032:
case 2290:
case 1819:
case 3050:
case 230:
case 2363:
case 1656:
case 3766:
case 2077:
case 704:
case 2539:
case 2741:
case 957:
case 391:
case 2709:
case 436:
case 1463:
case 3352:
case 2160:
case 3195:
case 2940:
case 405:
case 5:
case 3240:
case 2235:
case 3163:
case 725:
case 2669:
case 3062:
case 2395:
case 2053:
case 635:
case 1000:
case 2611:
case 3360:
case 3606:
case 1817:
case 2402:
case 2537:
case 903:
case 588:
case 2513:
case 254:
case 3236:
case 1692:
case 1431:
case 2936:
case 3475:
case 2584:
case 3396:
case 4075:
case 36:
case 2522:
case 269:
case 788:
case 891:
case 1175:
case 2680:
case 3131:
case 152:
case 1845:
case 3510:
case 2196:
case 378:
case 3539:
case 595:
case 2766:
case 3077:
case 1452:
case 330:
case 1102:
case 3363:
case 1058:
case 1003:
case 106:
case 3778:
case 3928:
case 1846:
case 3134:
case 1757:
case 3243:
case 321:
case 167:
case 2943:
case 291:
case 2935:
case 1923:
case 1773:
case 1434:
case 3707:
case 245:
case 1460:
case 2240:
case 1248:
case 2468:
case 2672:
case 1912:
case 4002:
case 541:
case 416:
case 2581:
case 3537:
case 4076:
case 3152:
case 1368:
case 2606:
case 3008:
case 3476:
case 354:
case 2236:
case 3291:
case 2683:
case 1496:
case 2387:
case 3793:
case 3522:
case 2396:
case 3584:
case 1798:
case 2790:
case 3765:
case 1655:
case 2744:
case 369:
case 1097:
case 47:
case 1830:
case 3680:
case 652:
case 3187:
case 1016:
case 2278:
case 1270:
case 2361:
case 3978:
case 3346:
case 3728:
case 3909:
case 1419:
case 1957:
case 2209:
case 2966:
case 3027:
case 2241:
case 1461:
case 3266:
case 1126:
case 180:
case 828:
case 35:
case 3029:
case 2146:
case 2317:
case 3868:
case 2684:
case 4026:
case 3794:
case 3119:
case 1723:
case 2735:
case 2613:
case 775:
case 264:
case 2207:
case 1959:
case 2876:
case 1831:
case 1774:
case 2293:
case 2130:
case 3681:
case 2164:
case 1138:
case 3145:
case 1982:
case 1433:
case 433:
case 885:
case 935:
case 3736:
case 85:
case 2791:
case 709:
case 328:
case 906:
case 298:
case 2345:
case 3330:
case 657:
case 49:
case 1004:
case 3965:
case 1998:
case 2990:
case 1556:
case 509:
case 2732:
case 2805:
case 355:
case 3814:
case 77:
case 1633:
case 812:
case 1715:
case 2576:
case 1297:
case 568:
case 4081:
case 1286:
case 2437:
case 3481:
case 2502:
case 1299:
case 2880:
case 3091:
case 947:
case 1563:
case 2094:
case 687:
case 2262:
case 594:
case 3035:
case 3751:
case 2040:
case 1048:
case 495:
case 1661:
case 2867:
case 2342:
case 614:
case 993:
case 2729:
case 1071:
case 2953:
case 1900:
case 3410:
case 1747:
case 2977:
case 2118:
case 1617:
case 794:
case 919:
case 3950:
case 1203:
case 2250:
case 696:
case 2413:
case 244:
case 93:
case 3626:
case 2028:
case 2484:
case 301:
case 441:
case 3142:
case 516:
case 855:
case 308:
case 2526:
case 926:
case 1383:
case 448:
case 1915:
case 3392:
case 119:
case 1204:
case 3232:
case 934:
case 3090:
case 2065:
case 1180:
case 1687:
case 3044:
case 2188:
case 1314:
case 13:
case 639:
case 2355:
case 2093:
case 4080:
case 59:
case 2192:
case 3480:
case 1455:
case 3388:
case 193:
case 3254:
case 973:
case 3356:
case 2779:
case 147:
case 660:
case 1169:
case 849:
case 2753:
case 1530:
case 3951:
case 2538:
case 682:
case 2251:
case 2007:
case 1111:
case 2810:
case 1652:
case 1818:
case 475:
case 950:
case 4011:
case 2078:
case 1070:
case 3411:
case 3676:
case 2472:
case 561:
case 2156:
case 1660:
case 1634:
case 3227:
case 2041:
case 1306:
case 2668:
case 3884:
case 2927:
case 1372:
case 317:
case 3074:
case 2563:
case 189:
case 2339:
case 937:
case 456:
case 2181:
case 3664:
case 3630:
case 2299:
case 3552:
case 2645:
case 2715:
case 3997:
case 896:
case 3139:
case 1502:
case 3986:
case 1437:
case 3534:
case 1732:
case 1805:
case 655:
case 68:
case 2337:
case 3381:
case 3716:
case 700:
case 2020:
case 2701:
case 1028:
case 577:
case 3285:
case 601:
case 420:
case 2313:
case 234:
case 1422:
case 2985:
case 94:
case 2110:
case 1118:
case 1727:
case 1977:
case 1811:
case 3587:
case 2531:
case 3903:
case 3958:
case 1413:
case 1250:
case 431:
case 2322:
case 2258:
case 2856:
case 1342:
case 314:
case 242:
case 3113:
case 500:
case 3012:
case 2619:
case 792:
case 2900:
case 777:
case 2071:
case 1908:
case 2747:
case 3200:
case 3122:
case 1094:
case 387:
case 3310:
case 3646:
case 3799:
case 649:
case 2455:
case 31:
case 3114:
case 293:
case 1954:
case 1355:
case 1093:
case 339:
case 3183:
case 2689:
case 3082:
case 3098:
case 3305:
case 3517:
case 2696:
case 1065:
case 1188:
case 3492:
case 23:
case 1881:
case 944:
case 1526:
case 2915:
case 1675:
case 3797:
case 3786:
case 2204:
case 1668:
case 2306:
case 2634:
case 2167:
case 2660:
case 3695:
case 2372:
case 376:
case 617:
case 3703:
case 2070:
case 2901:
case 3916:
case 3057:
case 3369:
case 2785:
case 1009:
case 597:
case 572:
case 1538:
case 2530:
case 382:
case 137:
case 1251:
case 989:
case 3367:
case 3106:
case 823:
case 360:
case 2169:
case 247:
case 772:
case 797:
case 1708:
case 2912:
case 492:
case 477:
case 1672:
case 2368:
case 1334:
case 1360:
case 3000:
case 3721:
case 1062:
case 2773:
case 1935:
case 110:
case 531:
case 3302:
case 4095:
case 2434:
case 3376:
case 3920:
case 3861:
case 1195:
case 720:
case 2220:
case 2846:
case 1352:
case 1228:
case 3463:
case 3085:
case 1943:
case 191:
case 400:
case 267:
case 4063:
case 2176:
case 731:
case 1766:
case 2452:
case 2102:
case 998:
case 2058:
case 178:
case 1510:
case 2097:
case 2518:
case 2086:
case 352:
case 1838:
case 1131:
case 3175:
case 2798:
case 971:
case 1389:
case 840:
case 763:
case 669:
case 3542:
case 1387:
case 1614:
case 16:
case 2724:
case 2974:
case 2099:
case 654:
case 2487:
case 1236:
case 756:
case 2496:
case 2375:
case 1683:
case 3273:
case 164:
case 1051:
case 1802:
case 2973:
case 2723:
case 3748:
case 2417:
case 1207:
case 65:
case 2712:
case 472:
case 1622:
case 1317:
case 1505:
case 1146:
case 3047:
case 2895:
case 1241:
case 4046:
case 857:
case 1966:
case 2126:
case 2642:
case 2863:
case 3049:
case 159:
case 978:
case 1319:
case 2270:
case 1361:
case 3970:
case 3618:
case 3720:
case 3001:
case 1743:
case 486:
case 2588:
case 2419:
case 3298:
case 3889:
case 3125:
case 2998:
case 3430:
case 3464:
case 2556:
case 738:
case 1944:
case 4064:
case 3015:
case 1345:
case 443:
case 1333:
case 538:
case 2774:
case 2138:
case 1637:
case 1130:
case 1425:
case 2433:
case 1511:
case 2377:
case 1706:
case 734:
case 636:
case 99:
case 3801:
case 1477:
case 2816:
case 726:
case 346:
case 1536:
case 3403:
case 3179:
case 3458:
case 4003:
case 1913:
case 624:
case 406:
case 1385:
case 277:
case 1002:
case 1158:
case 1103:
case 322:
case 116:
case 2657:
case 742:
case 1076:
case 1408:
case 1210:
case 3670:
case 3918:
case 3177:
case 3756:
case 2379:
case 526:
case 3847:
case 2353:
case 605:
case 3060:
case 3788:
case 1528:
case 1644:
case 3087:
case 2031:
case 1939:
case 3096:
case 822:
case 3497:
case 974:
case 17:
case 1199:
case 1281:
case 4086:
case 2624:
case 550:
case 3486:
case 1540:
case 573:
case 3815:
case 3523:
case 3792:
case 3648:
case 1427:
case 1713:
case 480:
case 1635:
case 3129:
case 2449:
case 1269:
case 1906:
case 3582:
case 3671:
case 286:
case 3524:
case 2803:
case 1972:
case 3019:
case 547:
case 1349:
case 2329:
case 3800:
case 3598:
case 3017:
case 1429:
case 1862:
case 3127:
case 2447:
case 1026:
case 747:
case 2955:
case 53:
case 3255:
case 916:
case 1454:
case 1739:
case 2288:
case 519:
case 1509:
case 3132:
case 1578:
case 2570:
case 3045:
case 593:
case 3559:
case 1507:
case 1432:
case 73:
case 3992:
case 3573:
case 1038:
case 2521:
case 613:
case 3154:
case 1205:
case 19:
case 2674:
case 1865:
case 3898:
case 1081:
case 2136:
case 2745:
case 263:
case 1654:
case 890:
case 3764:
case 1562:
case 975:
case 3585:
case 2615:
case 1725:
case 2733:
case 811:
case 2987:
case 3931:
case 256:
case 3296:
case 3882:
case 802:
case 2996:
case 1632:
case 2412:
case 442:
case 735:
case 1202:
case 302:
case 1010:
case 1807:
case 1312:
case 311:
case 2423:
case 3042:
case 1968:
case 2934:
case 2295:
case 3448:
case 3260:
case 3234:
case 1627:
case 2647:
case 3420:
case 2140:
case 1841:
case 4020:
case 2194:
case 1629:
case 390:
case 1443:
case 141:
case 220:
case 3252:
case 3746:
case 706:
case 948:
case 604:
case 231:
case 3857:
case 870:
case 2945:
case 2193:
case 1444:
case 1238:
case 3365:
case 3547:
case 2390:
case 148:
case 2344:
case 1324:
case 2787:
case 3731:
case 3874:
case 3055:
case 2796:
case 1836:
case 2424:
case 995:
case 3501:
case 3190:
case 2516:
case 866:
case 2165:
case 3812:
case 580:
case 3603:
case 2056:
case 2473:
case 2109:
case 2917:
case 3795:
case 1170:
case 1677:
case 2760:
case 447:
case 1373:
case 2685:
case 1359:
case 2141:
case 780:
case 2820:
case 1466:
case 2246:
case 2752:
case 3261:
case 681:
case 1069:
case 762:
case 2107:
case 1011:
case 4070:
case 3763:
case 2457:
case 156:
case 1558:
case 2893:
case 1996:
case 489:
case 3275:
case 578:
case 2975:
case 1615:
case 2654:
case 1745:
case 388:
case 3738:
case 2865:
case 3890:
case 2081:
case 778:
case 1136:
case 56:
case 8:
case 3320:
case 3:
case 545:
case 2878:
case 1870:
case 1761:
case 3651:
case 1599:
case 444:
case 510:
case 3112:
case 3866:
case 3084:
case 2148:
case 1647:
case 791:
case 3022:
case 938:
case 888:
case 1194:
case 241:
case 2312:
case 4094:
case 432:
case 611:
case 3494:
case 1960:
case 4040:
case 2120:
case 710:
case 3440:
case 1717:
case 2323:
case 1412:
case 3902:
case 1601:
case 2010:
case 1597:
case 3726:
case 1088:
case 1424:
case 2080:
case 4093:
case 3493:
case 1482:
case 2775:
case 3198:
case 3225:
case 1165:
case 1516:
case 1787:
case 2382:
case 618:
case 3527:
case 1789:
case 248:
case 2398:
case 1390:
case 3529:
case 30:
case 1344:
case 3083:
case 3465:
case 4065:
case 1498:
case 138:
case 2490:
case 1193:
case 2551:
case 2444:
case 1230:
case 1107:
case 2011:
case 4078:
case 3159:
case 3478:
case 3006:
case 670:
case 3409:
case 3173:
case 4009:
case 1919:
case 963:
case 3072:
case 4041:
case 2466:
case 2828:
case 465:
case 3441:
case 80:
case 653:
case 2357:
case 3662:
case 381:
case 571:
case 1685:
case 2894:
case 2373:
case 1141:
case 3926:
case 3776:
case 2359:
case 956:
case 2840:
case 1848:
case 2226:
case 1109:
case 666:
case 1056:
case 4007:
case 1459:
case 764:
case 3532:
case 2768:
case 4062:
case 3185:
case 1942:
case 3829:
case 544:
case 410:
case 3462:
case 1379:
case 1308:
case 2666:
case 851:
case 1095:
case 1353:
case 2300:
case 445:
case 305:
case 622:
case 2002:
case 1150:
case 216:
case 2103:
case 2479:
case 2408:
case 2453:
case 1218:
case 879:
case 3910:
case 3678:
case 3607:
case 2536:
case 324:
case 646:
case 3711:
case 2984:
case 3827:
case 2706:
case 3303:
case 1162:
case 3358:
case 2772:
case 1485:
case 2783:
case 3397:
case 1548:
case 2540:
case 3386:
case 478:
case 3705:
case 824:
case 2281:
case 3237:
case 2199:
case 1624:
case 2714:
case 3693:
case 589:
case 379:
case 1755:
case 3239:
case 2690:
case 2197:
case 805:
case 46:
case 351:
case 3543:
case 3399:
case 3075:
case 1520:
case 2429:
case 3149:
case 627:
case 172:
case 2643:
case 899:
case 3710:
case 3628:
case 2267:
case 358:
case 464:
case 3544:
case 1256:
case 1742:
case 3879:
case 4051:
case 2565:
case 3590:
case 3101:
case 2784:
case 1327:
case 471:
case 1803:
case 1858:
case 2722:
case 186:
case 1612:
case 3272:
case 1151:
case 2301:
case 3316:
case 3640:
case 82:
case 3969:
case 813:
case 765:
case 459:
case 2269:
case 3694:
case 537:
case 74:
case 1332:
case 2737:
case 1674:
case 29:
case 3283:
case 2983:
case 2432:
case 2038:
case 1064:
case 1886:
case 1288:
case 2509:
case 2280:
case 54:
case 3980:
case 233:
case 3025:
case 2578:
case 229:
case 1955:
case 143:
case 2454:
case 3566:
case 977:
case 2739:
case 2967:
case 2628:
case 485:
case 1620:
case 1718:
case 4029:
case 584:
case 3862:
case 45:
case 1351:
case 672:
case 127:
case 1017:
case 2853:
case 3565:
case 2808:
case 1800:
case 3116:
case 3347:
case 833:
case 983:
case 2879:
case 1524:
case 2206:
case 3784:
case 1582:
case 3906:
case 3211:
case 1885:
case 2694:
case 1129:
case 3635:
case 2969:
case 374:
case 3713:
case 3427:
case 2640:
case 2147:
case 1648:
case 3301:
case 89:
case 3914:
case 708:
case 3205:
case 946:
case 874:
case 428:
case 3038:
case 1573:
case 2636:
case 3432:
case 3315:
case 3507:
case 1559:
case 2283:
case 4032:
case 1045:
case 1033:
case 2025:
case 3578:
case 1132:
case 3509:
case 3280:
case 3541:
case 643:
case 749:
case 4054:
case 3739:
case 2566:
case 1255:
case 329:
case 1034:
case 2641:
case 1847:
case 512:
case 2462:
case 2185:
case 4008:
case 1670:
case 1918:
case 3210:
case 3076:
case 2767:
case 122:
case 677:
case 1362:
case 3479:
case 3002:
case 4079:
case 3385:
case 1458:
case 3536:
case 224:
case 146:
case 2450:
case 2213:
case 712:
case 2100:
case 1108:
case 4077:
case 2591:
case 1801:
case 3772:
case 1574:
case 1350:
case 2827:
case 701:
case 2711:
case 1792:
case 469:
case 3594:
case 1523:
case 2535:
case 78:
case 2397:
case 3783:
case 2693:
case 2981:
case 1486:
case 3199:
case 3714:
case 2705:
case 1089:
case 894:
case 927:
case 2239:
case 1087:
case 1499:
case 454:
case 3644:
case 3186:
case 279:
case 2854:
case 183:
case 3528:
case 2543:
case 1788:
case 2225:
case 3925:
case 2198:
case 528:
case 2493:
case 1144:
case 875:
case 902:
case 1874:
case 1731:
case 309:
case 3324:
case 2014:
case 728:
case 348:
case 3398:
case 1547:
case 408:
case 3238:
case 2124:
case 4044:
case 2938:
case 1964:
case 990:
case 3490:
case 638:
case 2083:
case 4090:
case 1245:
case 2072:
case 484:
case 1763:
case 2409:
case 2478:
case 2159:
case 2006:
case 3653:
case 3608:
case 3357:
case 2662:
case 2843:
case 848:
case 1309:
case 1946:
case 1261:
case 2441:
case 2370:
case 4066:
case 153:
case 2554:
case 3840:
case 809:
case 1307:
case 1515:
case 3226:
case 3359:
case 2926:
case 2776:
case 2835:
case 107:
case 2702:
case 785:
case 1217:
case 3677:
case 3170:
case 1795:
case 1658:
case 2157:
case 1812:
case 166:
case 3491:
case 4091:
case 2577:
case 3374:
case 1287:
case 3550:
case 1931:
case 2436:
case 3725:
case 3975:
case 895:
case 1585:
case 2738:
case 1730:
case 1764:
case 663:
case 288:
case 769:
case 3654:
case 455:
case 953:
case 1898:
case 2890:
case 1500:
case 2508:
case 2553:
case 3865:
case 2112:
case 412:
case 631:
case 204:
case 1746:
case 1328:
case 3171:
case 2320:
case 341:
case 3443:
case 190:
case 4043:
case 1963:
case 3629:
case 2428:
case 721:
case 1420:
case 2371:
case 3627:
case 2440:
case 1234:
case 2268:
case 1448:
case 395:
case 3968:
case 2494:
case 4035:
case 1143:
case 3312:
case 1340:
case 3807:
case 2976:
case 102:
case 1873:
case 2902:
case 521:
case 3202:
case 2699:
case 3230:
case 3264:
case 3092:
case 2964:
case 2930:
case 1938:
case 503:
case 1182:
case 3945:
case 338:
case 3498:
case 2245:
case 1465:
case 9:
case 3344:
case 1014:
case 10:
case 1529:
case 904:
case 757:
case 3789:
case 2365:
case 2547:
case 1527:
case 218:
case 3796:
case 703:
case 609:
case 2393:
case 3787:
case 41:
case 3516:
case 4082:
case 1891:
case 3165:
case 1225:
case 2233:
case 1198:
case 2190:
case 439:
case 4024:
case 1493:
case 557:
case 3088:
case 2217:
case 3871:
case 3734:
case 1407:
case 3760:
case 3459:
case 2795:
case 3056:
case 3109:
case 3473:
case 266:
case 1650:
case 1157:
case 2603:
case 2307:
case 3141:
case 207:
case 1835:
case 2823:
case 1702:
case 1662:
case 181:
case 1843:
case 2309:
case 2261:
case 1370:
case 2378:
case 3820:
case 3752:
case 2763:
case 3457:
case 270:
case 1072:
case 1173:
case 2341:
case 1006:
case 2470:
case 1159:
case 3600:
case 3107:
case 3366:
case 1579:
case 3136:
case 1508:
case 2191:
case 1553:
case 2500:
case 752:
case 2764:
case 1738:
case 363:
case 3391:
case 3733:
case 1275:
case 2336:
case 3996:
case 1577:
case 2287:
case 3231:
case 1436:
case 3558:
case 2824:
case 2931:
case 1976:
case 1348:
case 1726:
case 2471:
case 2616:
case 515:
case 3597:
case 3601:
case 2873:
case 202:
case 4012:
case 540:
case 1268:
case 3717:
case 1440:
case 1371:
case 125:
case 695:
case 2995:
case 2234:
case 4023:
case 2042:
case 1494:
case 3649:
case 211:
case 3263:
case 1123:
case 2135:
case 863:
case 715:
case 2963:
case 290:
case 740:
case 3647:
case 2420:
case 1428:
case 1084:
case 1866:
case 331:
case 1112:
case 1013:
case 104:
case 1651:
case 90:
case 3761:
case 3870:
case 2328:
case 2746:
case 674:
case 2885:
case 3449:
case 582:
case 1969:
case 2648:
case 2061:
case 1147:
case 1640:
case 3046:
case 3151:
case 1272:
case 386:
case 2524:
case 3858:
case 4001:
case 3327:
case 2671:
case 1877:
case 1101:
case 2017:
case 1853:
case 951:
case 1879:
case 3742:
case 3256:
case 1544:
case 3329:
case 1451:
case 158:
case 979:
case 4047:
case 2718:
case 2127:
case 760:
case 1710:
case 843:
case 372:
case 397:
case 661:
case 629:
case 739:
case 2033:
case 1025:
case 633:
case 2132:
case 3354:
case 3899:
case 905:
case 3288:
case 3886:
case 2573:
case 1636:
case 1304:
case 936:
case 523:
case 886:
case 2045:
case 539:
case 3674:
case 457:
case 69:
case 1214:
case 2154:
case 3521:
case 4015:
case 1905:
case 3063:
case 300:
case 3162:
case 415:
case 1284:
case 3673:
case 694:
case 1213:
case 1450:
case 246:
case 2403:
case 2108:
case 2153:
case 1591:
case 1100:
case 3659:
case 2177:
case 4000:
case 1678:
case 714:
case 1767:
case 2362:
case 3657:
case 1609:
case 616:
case 392:
case 787:
case 1641:
case 1068:
case 2060:
case 2034:
case 2847:
case 3353:
case 1462:
case 2756:
case 2242:
case 1829:
case 3942:
case 1185:
case 596:
case 3520:
case 668:
case 1399:
case 1543:
case 151:
case 1780:
case 2788:
case 1239:
case 3698:
case 2096:
case 2499:
case 3031:
case 179:
case 2486:
case 1981:
case 3624:
case 452:
case 1237:
case 1705:
case 3682:
case 1386:
case 1535:
case 2523:
case 3804:
case 2815:
case 1397:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750204802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,];
var gg_b = "1750201201/";

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
