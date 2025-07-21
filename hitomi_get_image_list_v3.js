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
case 542:
case 2528:
case 1078:
case 2511:
case 1444:
case 1835:
case 1372:
case 2306:
case 2718:
case 653:
case 610:
case 3340:
case 1999:
case 2772:
case 1321:
case 2560:
case 1318:
case 1144:
case 1043:
case 106:
case 1220:
case 512:
case 3241:
case 1908:
case 1574:
case 3898:
case 1268:
case 2989:
case 25:
case 1826:
case 3729:
case 3854:
case 3890:
case 1900:
case 3652:
case 1633:
case 3114:
case 2187:
case 3373:
case 102:
case 478:
case 2163:
case 1549:
case 3445:
case 2710:
case 1361:
case 546:
case 3348:
case 609:
case 244:
case 2463:
case 1310:
case 2487:
case 1197:
case 3042:
case 3276:
case 1679:
case 1199:
case 2687:
case 2663:
case 690:
case 2080:
case 4062:
case 1408:
case 3181:
case 3152:
case 1547:
case 2116:
case 2258:
case 158:
case 2331:
case 401:
case 1813:
case 1090:
case 2294:
case 1915:
case 6:
case 3783:
case 2963:
case 2250:
case 3727:
case 3132:
case 3502:
case 3359:
case 982:
case 2987:
case 3517:
case 43:
case 1098:
case 3914:
case 3945:
case 3843:
case 520:
case 1100:
case 2203:
case 1530:
case 2247:
case 3304:
case 622:
case 3807:
case 1558:
case 970:
case 3812:
case 1453:
case 1400:
case 1644:
case 2382:
case 2238:
case 2088:
case 2623:
case 562:
case 87:
case 421:
case 1896:
case 2058:
case 3906:
case 3255:
case 2352:
case 110:
case 3860:
case 2381:
case 153:
case 627:
case 1483:
case 3431:
case 4021:
case 2940:
case 2673:
case 225:
case 3828:
case 567:
case 2094:
case 3266:
case 1752:
case 1467:
case 1669:
case 3733:
case 1929:
case 2439:
case 79:
case 2886:
case 3076:
case 436:
case 2554:
case 2030:
case 1234:
case 2957:
case 3708:
case 2791:
case 1167:
case 3316:
case 3389:
case 2493:
case 59:
case 606:
case 549:
case 3501:
case 2598:
case 2280:
case 797:
case 387:
case 208:
case 98:
case 602:
case 3482:
case 1209:
case 2746:
case 223:
case 2159:
case 2288:
case 2590:
case 3085:
case 2875:
case 1346:
case 432:
case 597:
case 4061:
case 3226:
case 62:
case 2937:
case 1427:
case 1629:
case 56:
case 2104:
case 500:
case 2459:
case 2948:
case 2657:
case 1841:
case 4005:
case 2895:
case 2224:
case 2659:
case 3041:
case 1243:
case 126:
case 2993:
case 54:
case 2140:
case 1627:
case 2939:
case 190:
case 389:
case 3106:
case 3536:
case 1:
case 3715:
case 1983:
case 131:
case 3931:
case 51:
case 475:
case 1967:
case 1278:
case 1885:
case 934:
case 2049:
case 3651:
case 3406:
case 1564:
case 1207:
case 3682:
case 271:
case 71:
case 3323:
case 252:
case 1212:
case 517:
case 569:
case 3387:
case 2543:
case 3363:
case 1745:
case 2959:
case 754:
case 2802:
case 4092:
case 629:
case 2314:
case 717:
case 3565:
case 2817:
case 160:
case 1322:
case 1667:
case 2904:
case 2473:
case 3631:
case 1683:
case 1028:
case 1371:
case 2137:
case 747:
case 989:
case 1060:
case 3951:
case 473:
case 122:
case 3982:
case 4044:
case 1585:
case 4015:
case 578:
case 1671:
case 1191:
case 3923:
case 1383:
case 778:
case 3116:
case 1622:
case 688:
case 1367:
case 739:
case 130:
case 1491:
case 3705:
case 446:
case 3080:
case 2870:
case 2595:
case 3836:
case 3663:
case 3687:
case 903:
case 539:
case 2285:
case 1971:
case 3351:
case 2432:
case 959:
case 161:
case 3247:
case 303:
case 905:
case 286:
case 1759:
case 1824:
case 3856:
case 2914:
case 1662:
case 1295:
case 3987:
case 4079:
case 3792:
case 2517:
case 868:
case 412:
case 2359:
case 394:
case 2132:
case 1576:
case 3916:
case 914:
case 2357:
case 848:
case 2519:
case 1065:
case 53:
case 3989:
case 111:
case 1991:
case 1462:
case 3123:
case 2898:
case 2241:
case 818:
case 3249:
case 3560:
case 1596:
case 3306:
case 1275:
case 3511:
case 2952:
case 2042:
case 1286:
case 3487:
case 3761:
case 3463:
case 344:
case 1036:
case 3568:
case 2348:
case 3274:
case 1880:
case 466:
case 2337:
case 3710:
case 2414:
case 1691:
case 2445:
case 1422:
case 2932:
case 3064:
case 4053:
case 537:
case 95:
case 357:
case 2373:
case 701:
case 501:
case 2145:
case 2890:
case 185:
case 1025:
case 850:
case 2323:
case 1344:
case 2682:
case 1847:
case 691:
case 2651:
case 3157:
case 2525:
case 4067:
case 2744:
case 1838:
case 3440:
case 732:
case 1418:
case 1692:
case 2536:
case 400:
case 1542:
case 3939:
case 46:
case 3140:
case 3993:
case 3224:
case 1905:
case 3570:
case 3895:
case 3512:
case 721:
case 2096:
case 2951:
case 1858:
case 661:
case 467:
case 3722:
case 1397:
case 1225:
case 2631:
case 3904:
case 1894:
case 521:
case 1110:
case 815:
case 3771:
case 1019:
case 449:
case 3314:
case 3437:
case 1787:
case 2779:
case 1461:
case 2242:
case 1086:
case 3959:
case 536:
case 1830:
case 3543:
case 234:
case 845:
case 3173:
case 2387:
case 2884:
case 3074:
case 2556:
case 2501:
case 3280:
case 3598:
case 2131:
case 3493:
case 3791:
case 2708:
case 454:
case 611:
case 3886:
case 1002:
case 2777:
case 1789:
case 3637:
case 3439:
case 1308:
case 469:
case 417:
case 893:
case 1017:
case 908:
case 1921:
case 3940:
case 3673:
case 3381:
case 3352:
case 2860:
case 3509:
case 3058:
case 804:
case 925:
case 3003:
case 3050:
case 44:
case 3937:
case 499:
case 1961:
case 1618:
case 685:
case 3404:
case 2235:
case 2085:
case 3875:
case 3332:
case 3288:
case 4069:
case 1353:
case 3047:
case 1300:
case 2606:
case 323:
case 3746:
case 1672:
case 41:
case 1555:
case 287:
case 3969:
case 1085:
case 846:
case 1700:
case 1235:
case 2555:
case 3732:
case 1753:
case 940:
case 187:
case 2849:
case 2300:
case 2672:
case 3580:
case 3298:
case 2201:
case 2910:
case 3841:
case 816:
case 2492:
case 2961:
case 1868:
case 3427:
case 3254:
case 953:
case 424:
case 309:
case 2918:
case 3588:
case 1828:
case 3483:
case 2921:
case 3669:
case 3752:
case 2535:
case 1266:
case 1255:
case 1799:
case 353:
case 2333:
case 1860:
case 468:
case 310:
case 2610:
case 1708:
case 955:
case 1131:
case 2308:
case 18:
case 3929:
case 2017:
case 340:
case 2661:
case 2002:
case 1777:
case 1779:
case 2461:
case 2787:
case 2086:
case 1242:
case 360:
case 907:
case 1565:
case 3927:
case 274:
case 686:
case 1884:
case 9:
case 4059:
case 3745:
case 2830:
case 3714:
case 2605:
case 134:
case 990:
case 1797:
case 2161:
case 1982:
case 1096:
case 820:
case 1951:
case 896:
case 3469:
case 3028:
case 1631:
case 3683:
case 2225:
case 3011:
case 4004:
case 892:
case 189:
case 780:
case 390:
case 670:
case 2850:
case 2542:
case 4039:
case 2692:
case 3068:
case 2172:
case 1106:
case 922:
case 1041:
case 3020:
case 2256:
case 2803:
case 2118:
case 326:
case 3243:
case 2344:
case 1682:
case 2472:
case 682:
case 1651:
case 772:
case 2847:
case 3129:
case 2838:
case 2513:
case 2421:
case 3983:
case 1931:
case 2418:
case 551:
case 572:
case 2075:
case 3967:
case 1296:
case 2946:
case 1373:
case 3699:
case 2422:
case 1932:
case 2369:
case 3260:
case 777:
case 577:
case 1575:
case 1890:
case 3211:
case 285:
case 3228:
case 2773:
case 1769:
case 2471:
case 1013:
case 1145:
case 1348:
case 2219:
case 413:
case 3479:
case 3197:
case 450:
case 1834:
case 2748:
case 3070:
case 2541:
case 3012:
case 327:
case 3653:
case 849:
case 283:
case 3318:
case 3007:
case 89:
case 1340:
case 2275:
case 2162:
case 3600:
case 2740:
case 902:
case 4089:
case 1519:
case 2065:
case 1586:
case 77:
case 1729:
case 3826:
case 1357:
case 306:
case 3043:
case 415:
case 1898:
case 2329:
case 2462:
case 3908:
case 2991:
case 3574:
case 2056:
case 2824:
case 2759:
case 1945:
case 2001:
case 3098:
case 1914:
case 2295:
case 3530:
case 3100:
case 186:
case 1843:
case 1359:
case 3153:
case 1502:
case 1132:
case 3979:
case 1517:
case 847:
case 465:
case 3400:
case 3615:
case 2704:
case 3594:
case 2446:
case 3997:
case 3009:
case 1807:
case 1304:
case 869:
case 3453:
case 3558:
case 1870:
case 1595:
case 3284:
case 3034:
case 3503:
case 1339:
case 2491:
case 3199:
case 2202:
case 1393:
case 3679:
case 2217:
case 170:
case 1452:
case 3813:
case 738:
case 1066:
case 1481:
case 4023:
case 3433:
case 1767:
case 2191:
case 1783:
case 3915:
case 929:
case 2367:
case 3547:
case 2622:
case 2383:
case 84:
case 3177:
case 3697:
case 3499:
case 1055:
case 463:
case 3894:
case 433:
case 1578:
case 1904:
case 2683:
case 1473:
case 1771:
case 3858:
case 1512:
case 4082:
case 884:
case 2371:
case 2169:
case 3605:
case 1543:
case 156:
case 3410:
case 3830:
case 1959:
case 1448:
case 1074:
case 3763:
case 1817:
case 694:
case 260:
case 3019:
case 3992:
case 1802:
case 3787:
case 2885:
case 3418:
case 1604:
case 1440:
case 3513:
case 4031:
case 3421:
case 2129:
case 2212:
case 3847:
case 2207:
case 435:
case 3118:
case 1993:
case 1140:
case 3121:
case 3905:
case 1762:
case 1457:
case 2020:
case 878:
case 2068:
case 3172:
case 2627:
case 1939:
case 290:
case 664:
case 209:
case 644:
case 1937:
case 2629:
case 2254:
case 1050:
case 3961:
case 2841:
case 1459:
case 1948:
case 1657:
case 3095:
case 3201:
case 2580:
case 2298:
case 3910:
case 1534:
case 1003:
case 2209:
case 3672:
case 1746:
case 472:
case 3849:
case 3300:
case 451:
case 108:
case 2127:
case 3555:
case 3621:
case 3566:
case 1038:
case 1640:
case 1973:
case 1404:
case 1159:
case 2969:
case 1332:
case 1875:
case 3526:
case 1554:
case 3017:
case 240:
case 718:
case 3308:
case 3716:
case 1439:
case 1493:
case 1280:
case 3874:
case 1030:
case 3610:
case 3405:
case 1791:
case 2167:
case 210:
case 3333:
case 1139:
case 1058:
case 4006:
case 3535:
case 2752:
case 2467:
case 2669:
case 1940:
case 3399:
case 125:
case 83:
case 3921:
case 2483:
case 3918:
case 548:
case 2290:
case 2558:
case 545:
case 836:
case 2453:
case 103:
case 2751:
case 1247:
case 2009:
case 2997:
case 3971:
case 1351:
case 3704:
case 1382:
case 1792:
case 2979:
case 991:
case 2054:
case 515:
case 47:
case 1963:
case 1250:
case 229:
case 2392:
case 2530:
case 1203:
case 3295:
case 3662:
case 2098:
case 3824:
case 656:
case 4045:
case 3759:
case 1258:
case 743:
case 671:
case 3383:
case 2697:
case 2177:
case 3367:
case 1116:
case 3864:
case 1294:
case 2915:
case 3585:
case 1825:
case 105:
case 2944:
case 2731:
case 2433:
case 1923:
case 3191:
case 2108:
case 2305:
case 1663:
case 3739:
case 3217:
case 713:
case 2842:
case 1489:
case 961:
case 2477:
case 3202:
case 2199:
case 750:
case 550:
case 2133:
case 1705:
case 3491:
case 3962:
case 2034:
case 1230:
case 2503:
case 832:
case 513:
case 2284:
case 3793:
case 3541:
case 1520:
case 1274:
case 3748:
case 1710:
case 1761:
case 2197:
case 2479:
case 941:
case 3286:
case 3219:
case 2310:
case 22:
case 144:
case 2866:
case 563:
case 2633:
case 3025:
case 385:
case 3773:
case 2260:
case 2953:
case 1064:
case 3422:
case 1163:
case 114:
case 595:
case 3369:
case 623:
case 157:
case 2855:
case 3757:
case 3991:
case 2115:
case 2043:
case 206:
case 2826:
case 311:
case 2977:
case 2268:
case 3740:
case 2835:
case 2444:
case 1721:
case 1718:
case 2415:
case 2600:
case 4052:
case 593:
case 4081:
case 3888:
case 1560:
case 3646:
case 2999:
case 793:
case 2318:
case 2012:
case 2785:
case 2678:
case 3531:
case 4013:
case 2000:
case 3738:
case 2154:
case 698:
case 292:
case 2607:
case 2970:
case 1188:
case 1795:
case 3401:
case 2498:
case 339:
case 2593:
case 150:
case 3665:
case 2109:
case 3750:
case 2227:
case 3936:
case 624:
case 1180:
case 528:
case 2283:
case 3625:
case 2267:
case 2978:
case 2033:
case 2134:
case 3758:
case 703:
case 2099:
case 668:
case 1664:
case 2912:
case 3956:
case 2317:
case 1924:
case 2943:
case 2190:
case 1480:
case 594:
case 115:
case 794:
case 3636:
case 978:
case 1717:
case 2776:
case 1527:
case 3384:
case 3887:
case 1702:
case 2077:
case 3965:
case 1089:
case 1087:
case 901:
case 3261:
case 2079:
case 3889:
case 75:
case 1786:
case 212:
case 1164:
case 3436:
case 4026:
case 1719:
case 618:
case 1237:
case 2954:
case 2557:
case 2386:
case 486:
case 55:
case 1891:
case 3210:
case 2998:
case 3136:
case 3022:
case 648:
case 3328:
case 2909:
case 2097:
case 242:
case 3311:
case 3360:
case 1988:
case 2881:
case 165:
case 1273:
case 2690:
case 1396:
case 2229:
case 2934:
case 1424:
case 1257:
case 2698:
case 3601:
case 2178:
case 3368:
case 2443:
case 1980:
case 3165:
case 757:
case 2609:
case 1846:
case 163:
case 3749:
case 714:
case 2832:
case 3221:
case 514:
case 216:
case 1775:
case 1688:
case 936:
case 1947:
case 3186:
case 2297:
case 3222:
case 198:
case 1174:
case 332:
case 830:
case 1938:
case 4085:
case 2069:
case 1515:
case 24:
case 891:
case 3419:
case 3617:
case 2160:
case 299:
case 3486:
case 613:
case 2279:
case 3602:
case 1805:
case 3010:
case 1048:
case 2336:
case 1342:
case 1903:
case 3893:
case 2128:
case 3378:
case 1597:
case 3475:
case 3312:
case 645:
case 1994:
case 1638:
case 1040:
case 254:
case 2563:
case 336:
case 2468:
case 1892:
case 556:
case 2029:
case 861:
case 217:
case 2587:
case 615:
case 932:
case 3514:
case 2365:
case 756:
case 3262:
case 1930:
case 1057:
case 1059:
case 3857:
case 3354:
case 3495:
case 975:
case 1138:
case 118:
case 604:
case 249:
case 2589:
case 3398:
case 2668:
case 3986:
case 1103:
case 2735:
case 725:
case 2928:
case 3552:
case 2911:
case 1533:
case 665:
case 1818:
case 3675:
case 3195:
case 693:
case 1335:
case 1872:
case 3246:
case 1447:
case 1649:
case 2806:
case 1599:
case 148:
case 267:
case 525:
case 2484:
case 1674:
case 1194:
case 3780:
case 1430:
case 2920:
case 3848:
case 4041:
case 3005:
case 2208:
case 3291:
case 2277:
case 3402:
case 2968:
case 1861:
case 3686:
case 973:
case 1158:
case 200:
case 3417:
case 1039:
case 523:
case 1130:
case 3975:
case 1500:
case 2233:
case 2628:
case 3873:
case 2083:
case 375:
case 695:
case 1494:
case 2611:
case 2660:
case 708:
case 2299:
case 3102:
case 1553:
case 1458:
case 2755:
case 723:
case 1711:
case 946:
case 3170:
case 1728:
case 1935:
case 2425:
case 3269:
case 3881:
case 2071:
case 1413:
case 840:
case 1142:
case 1655:
case 2311:
case 2328:
case 2506:
case 1572:
case 1760:
case 1808:
case 2210:
case 3998:
case 2901:
case 1113:
case 3557:
case 2816:
case 3954:
case 1926:
case 2436:
case 1374:
case 312:
case 853:
case 3478:
case 3573:
case 237:
case 1966:
case 316:
case 1349:
case 2221:
case 1635:
case 3044:
case 405:
case 3375:
case 177:
case 3412:
case 912:
case 1955:
case 2749:
case 3407:
case 2165:
case 201:
case 346:
case 3443:
case 4080:
case 855:
case 2368:
case 3178:
case 2062:
case 2601:
case 2456:
case 3698:
case 3741:
case 3934:
case 3537:
case 2465:
case 3229:
case 3654:
case 464:
case 1561:
case 1426:
case 2936:
case 179:
case 3395:
case 3227:
case 680:
case 3109:
case 1303:
case 1942:
case 3539:
case 239:
case 8:
case 2656:
case 1350:
case 3970:
case 570:
case 1282:
case 1338:
case 2046:
case 890:
case 782:
case 278:
case 4064:
case 3612:
case 1126:
case 920:
case 3154:
case 2738:
case 1435:
case 3000:
case 1913:
case 138:
case 3678:
case 3198:
case 2887:
case 3077:
case 1879:
case 992:
case 45:
case 1642:
case 2384:
case 822:
case 1330:
case 2863:
case 676:
case 396:
case 786:
case 3670:
case 3943:
case 2730:
case 3317:
case 4024:
case 2091:
case 2956:
case 3814:
case 2582:
case 80:
case 3099:
case 1897:
case 1455:
case 1052:
case 3267:
case 3978:
case 3504:
case 3033:
case 1081:
case 1231:
case 3283:
case 3490:
case 2794:
case 96:
case 1232:
case 3253:
case 3960:
case 900:
case 1996:
case 1051:
case 3806:
case 273:
case 2246:
case 1709:
case 2675:
case 806:
case 2309:
case 2552:
case 3928:
case 3668:
case 2092:
case 2398:
case 3301:
case 1829:
case 39:
case 3027:
case 3589:
case 349:
case 58:
case 3620:
case 2857:
case 3755:
case 2390:
case 1696:
case 4049:
case 2102:
case 3299:
case 471:
case 677:
case 452:
case 397:
case 787:
case 3660:
case 1546:
case 1790:
case 2873:
case 1031:
case 275:
case 2975:
case 3233:
case 1281:
case 2837:
case 967:
case 919:
case 300:
case 2619:
case 2686:
case 3968:
case 1941:
case 3484:
case 1562:
case 1770:
case 3684:
case 1245:
case 3336:
case 2010:
case 3279:
case 2061:
case 2486:
case 2419:
case 2617:
case 789:
case 4050:
case 34:
case 2839:
case 1364:
case 2271:
case 1883:
case 4038:
case 969:
case 2222:
case 3297:
case 1496:
case 2186:
case 954:
case 172:
case 2859:
case 4030:
case 1441:
case 2695:
case 2262:
case 2175:
case 2545:
case 1743:
case 2514:
case 369:
case 3587:
case 2917:
case 3029:
case 91:
case 3468:
case 1976:
case 2021:
case 2307:
case 425:
case 1571:
case 3120:
case 1141:
case 2475:
case 1778:
case 3168:
case 829:
case 1522:
case 999:
case 1712:
case 2141:
case 1475:
case 2778:
case 1018:
case 1804:
case 2712:
case 453:
case 1378:
case 1072:
case 2006:
case 3958:
case 2522:
case 574:
case 1514:
case 1724:
case 3057:
case 3930:
case 1695:
case 3892:
case 3765:
case 3149:
case 136:
case 2976:
case 1343:
case 684:
case 3938:
case 1271:
case 3658:
case 251:
case 398:
case 1764:
case 788:
case 1119:
case 859:
case 1222:
case 3630:
case 2245:
case 1995:
case 3805:
case 1893:
case 3903:
case 2770:
case 968:
case 1419:
case 1839:
case 324:
case 1061:
case 3287:
case 1370:
case 1686:
case 814:
case 1837:
case 3039:
case 1619:
case 1334:
case 490:
case 1780:
case 426:
case 3093:
case 1291:
case 3810:
case 2734:
case 1848:
case 3430:
case 407:
case 2176:
case 3458:
case 1390:
case 3949:
case 601:
case 844:
case 2869:
case 1975:
case 3130:
case 4:
case 2790:
case 175:
case 2754:
case 2829:
case 40:
case 460:
case 1919:
case 3577:
case 3147:
case 1092:
case 3701:
case 1495:
case 1354:
case 2185:
case 3059:
case 3974:
case 3508:
case 3403:
case 422:
case 173:
case 3447:
case 1246:
case 2082:
case 3335:
case 2232:
case 2388:
case 4060:
case 348:
case 85:
case 3599:
case 3818:
case 3004:
case 233:
case 1552:
case 1840:
case 1675:
case 1788:
case 950:
case 2897:
case 761:
case 621:
case 2394:
case 913:
case 4012:
case 1582:
case 1551:
case 345:
case 1625:
case 856:
case 1794:
case 2466:
case 2613:
case 2081:
case 561:
case 3871:
case 4078:
case 2592:
case 1636:
case 184:
case 3016:
case 3239:
case 2879:
case 3089:
case 636:
case 3702:
case 981:
case 2166:
case 1730:
case 1091:
case 1205:
case 315:
case 3293:
case 3480:
case 2784:
case 3964:
case 3385:
case 2032:
case 1046:
case 381:
case 2338:
case 343:
case 1747:
case 2913:
case 238:
case 3583:
case 1101:
case 3488:
case 1738:
case 632:
case 915:
case 3567:
case 3204:
case 852:
case 1665:
case 350:
case 530:
case 279:
case 1936:
case 1750:
case 2135:
case 3624:
case 139:
case 2350:
case 3795:
case 3188:
case 3424:
case 3257:
case 2720:
case 2510:
case 1368:
case 823:
case 1320:
case 2626:
case 2561:
case 3341:
case 808:
case 2768:
case 3569:
case 1218:
case 4090:
case 2349:
case 395:
case 3240:
case 785:
case 2635:
case 3775:
case 1272:
case 277:
case 1774:
case 3680:
case 995:
case 2808:
case 2374:
case 3786:
case 963:
case 3529:
case 711:
case 1261:
case 3087:
case 3237:
case 4054:
case 27:
case 429:
case 1071:
case 2521:
case 2728:
case 1425:
case 3273:
case 1506:
case 2760:
case 3464:
case 1136:
case 783:
case 741:
case 673:
case 616:
case 1628:
case 3031:
case 1083:
case 1184:
case 2355:
case 1766:
case 3281:
case 2500:
case 2949:
case 555:
case 488:
case 197:
case 3941:
case 1920:
case 2674:
case 933:
case 2194:
case 1484:
case 16:
case 1277:
case 1968:
case 3476:
case 2158:
case 3485:
case 1928:
case 553:
case 2821:
case 2818:
case 510:
case 2004:
case 1911:
case 167:
case 1960:
case 710:
case 2599:
case 248:
case 3232:
case 2150:
case 3709:
case 642:
case 2335:
case 2872:
case 1806:
case 3051:
case 2403:
case 540:
case 3591:
case 2974:
case 2326:
case 3641:
case 3185:
case 935:
case 4086:
case 2147:
case 2577:
case 218:
case 1726:
case 4019:
case 474:
case 19:
case 2650:
case 1029:
case 4017:
case 3324:
case 951:
case 1587:
case 169:
case 3976:
case 2149:
case 1563:
case 972:
case 1468:
case 2756:
case 2057:
case 560:
case 376:
case 2603:
case 696:
case 2958:
case 3522:
case 2647:
case 3006:
case 722:
case 1851:
case 3707:
case 3712:
case 980:
case 147:
case 2994:
case 1215:
case 2638:
case 3141:
case 522:
case 3196:
case 1279:
case 224:
case 2263:
case 1160:
case 199:
case 526:
case 882:
case 380:
case 2736:
case 2342:
case 726:
case 1128:
case 666:
case 2903:
case 4095:
case 2805:
case 2630:
case 3245:
case 531:
case 11:
case 351:
case 1460:
case 3496:
case 870:
case 1297:
case 2515:
case 3867:
case 3985:
case 3364:
case 1713:
case 2544:
case 976:
case 507:
case 7:
case 2725:
case 2938:
case 1428:
case 3883:
case 1412:
case 3853:
case 377:
case 697:
case 1375:
case 491:
case 1407:
case 702:
case 263:
case 502:
case 1573:
case 2023:
case 2775:
case 1990:
case 3349:
case 1107:
case 887:
case 3626:
case 66:
case 600:
case 1654:
case 1229:
case 72:
case 1548:
case 2980:
case 3510:
case 2424:
case 1741:
case 3720:
case 1178:
case 1909:
case 461:
case 88:
case 293:
case 3655:
case 3142:
case 727:
case 667:
case 619:
case 3935:
case 265:
case 2273:
case 2396:
case 1690:
case 3666:
case 1881:
case 506:
case 2164:
case 3926:
case 1954:
case 204:
case 1079:
case 2087:
case 3877:
case 2248:
case 1998:
case 1557:
case 1470:
case 2480:
case 2376:
case 1943:
case 3784:
case 1190:
case 1302:
case 1008:
case 1434:
case 2924:
case 3166:
case 938:
case 1845:
case 3642:
case 654:
case 411:
case 3879:
case 4065:
case 2239:
case 3592:
case 2871:
case 1267:
case 3052:
case 1134:
case 245:
case 1283:
case 1912:
case 979:
case 3394:
case 162:
case 441:
case 3897:
case 1907:
case 1498:
case 3505:
case 3135:
case 1227:
case 1395:
case 379:
case 64:
case 3426:
case 3942:
case 250:
case 1000:
case 3347:
case 2567:
case 4025:
case 3435:
case 3844:
case 1678:
case 3913:
case 2583:
case 243:
case 1409:
case 1607:
case 281:
case 758:
case 3282:
case 1154:
case 2385:
case 61:
case 1053:
case 2964:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753138802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,];
var gg_b = "1753138802/";

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
