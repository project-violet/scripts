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
case 1844:
case 1022:
case 3938:
case 1607:
case 2250:
case 1283:
case 1491:
case 2081:
case 468:
case 3438:
case 3094:
case 668:
case 2220:
case 1719:
case 3574:
case 1763:
case 1025:
case 3057:
case 3174:
case 1202:
case 1055:
case 3136:
case 3027:
case 3089:
case 3816:
case 904:
case 3730:
case 3536:
case 173:
case 3777:
case 2372:
case 2163:
case 2575:
case 551:
case 1982:
case 614:
case 454:
case 779:
case 2951:
case 511:
case 3543:
case 3511:
case 2319:
case 1862:
case 1006:
case 1898:
case 281:
case 1482:
case 3831:
case 3111:
case 2618:
case 169:
case 2572:
case 2375:
case 943:
case 1403:
case 715:
case 1256:
case 2172:
case 869:
case 434:
case 2363:
case 3626:
case 755:
case 3343:
case 2604:
case 1903:
case 2519:
case 233:
case 1865:
case 2095:
case 2839:
case 1485:
case 1630:
case 1891:
case 1944:
case 401:
case 3118:
case 2590:
case 666:
case 2356:
case 504:
case 1444:
case 2428:
case 3041:
case 3663:
case 2326:
case 3013:
case 3416:
case 3619:
case 3104:
case 1272:
case 3916:
case 1783:
case 2720:
case 3707:
case 355:
case 2105:
case 1150:
case 2851:
case 593:
case 4058:
case 315:
case 1726:
case 2183:
case 352:
case 1076:
case 931:
case 1962:
case 291:
case 2583:
case 543:
case 312:
case 2305:
case 1596:
case 335:
case 1473:
case 3967:
case 3859:
case 2439:
case 1465:
case 2947:
case 983:
case 332:
case 951:
case 3829:
case 1965:
case 2939:
case 154:
case 2422:
case 3746:
case 1981:
case 780:
case 114:
case 1317:
case 3693:
case 1293:
case 3112:
case 4006:
case 2452:
case 2091:
case 834:
case 1481:
case 2160:
case 1861:
case 3512:
case 3315:
case 2766:
case 669:
case 1708:
case 1900:
case 1837:
case 2425:
case 3340:
case 3678:
case 1117:
case 2286:
case 1849:
case 2571:
case 854:
case 3515:
case 2360:
case 3954:
case 30:
case 328:
case 3424:
case 1771:
case 2717:
case 778:
case 2876:
case 3454:
case 3680:
case 1888:
case 1468:
case 1051:
case 168:
case 1201:
case 4025:
case 274:
case 868:
case 560:
case 3497:
case 3733:
case 2508:
case 1760:
case 1566:
case 1495:
case 2085:
case 673:
case 3997:
case 1461:
case 3432:
case 1881:
case 1058:
case 3109:
case 787:
case 1123:
case 3509:
case 2301:
case 790:
case 3064:
case 3932:
case 4076:
case 2822:
case 1214:
case 2044:
case 740:
case 1153:
case 3246:
case 2855:
case 1800:
case 1323:
case 3608:
case 1937:
case 397:
case 2501:
case 1353:
case 347:
case 1449:
case 1208:
case 2266:
case 2434:
case 1386:
case 3010:
case 2612:
case 1868:
case 2098:
case 1488:
case 101:
case 423:
case 2193:
case 3824:
case 2640:
case 326:
case 776:
case 623:
case 2476:
case 1988:
case 2217:
case 1780:
case 1271:
case 70:
case 728:
case 567:
case 1039:
case 2723:
case 2065:
case 3045:
case 801:
case 3897:
case 2393:
case 683:
case 2561:
case 2953:
case 611:
case 2423:
case 3692:
case 554:
case 1860:
case 2090:
case 1480:
case 3224:
case 651:
case 2370:
case 2648:
case 1292:
case 1268:
case 2923:
case 284:
case 2337:
case 3113:
case 1980:
case 2349:
case 3541:
case 3254:
case 398:
case 3513:
case 3297:
case 2361:
case 796:
case 1788:
case 3695:
case 631:
case 2570:
case 788:
case 3341:
case 2549:
case 1901:
case 3313:
case 1534:
case 1050:
case 2005:
case 305:
case 2188:
case 1134:
case 2588:
case 1814:
case 860:
case 727:
case 568:
case 1576:
case 377:
case 1737:
case 4053:
case 2083:
case 1096:
case 1808:
case 2486:
case 3600:
case 2689:
case 2627:
case 1761:
case 3732:
case 2225:
case 2388:
case 770:
case 2657:
case 1478:
case 1376:
case 320:
case 966:
case 1522:
case 2853:
case 3797:
case 1122:
case 396:
case 493:
case 2300:
case 2823:
case 294:
case 2276:
case 3389:
case 2581:
case 643:
case 3594:
case 388:
case 1460:
case 1525:
case 3074:
case 3557:
case 786:
case 1125:
case 1471:
case 3157:
case 2500:
case 1352:
case 1768:
case 1792:
case 954:
case 3527:
case 2381:
case 3394:
case 3036:
case 1801:
case 2917:
case 914:
case 3127:
case 3189:
case 1971:
case 501:
case 1893:
case 3148:
case 404:
case 2641:
case 1914:
case 2063:
case 2613:
case 2192:
case 867:
case 2168:
case 3661:
case 3043:
case 720:
case 2395:
case 2592:
case 1414:
case 1506:
case 1700:
case 2755:
case 3348:
case 1878:
case 2072:
case 4017:
case 167:
case 968:
case 3649:
case 2722:
case 3446:
case 2669:
case 777:
case 2466:
case 2886:
case 2392:
case 1306:
case 2752:
case 327:
case 1270:
case 1781:
case 2739:
case 3164:
case 1765:
case 1490:
case 349:
case 1158:
case 3564:
case 1773:
case 3767:
case 26:
case 1528:
case 1282:
case 3731:
case 1456:
case 3685:
case 1203:
case 460:
case 3364:
case 923:
case 1659:
case 789:
case 3:
case 2344:
case 1956:
case 3877:
case 2450:
case 183:
case 3110:
case 1638:
case 2162:
case 2198:
case 2373:
case 111:
case 3691:
case 2684:
case 73:
case 1983:
case 1339:
case 1905:
case 2420:
case 3345:
case 3542:
case 1875:
case 3407:
case 831:
case 1291:
case 3142:
case 2093:
case 2496:
case 1819:
case 1086:
case 71:
case 1402:
case 2165:
case 1139:
case 2699:
case 1147:
case 2362:
case 2398:
case 1539:
case 2758:
case 1902:
case 3545:
case 883:
case 2078:
case 851:
case 3145:
case 104:
case 221:
case 1298:
case 3729:
case 2642:
case 3787:
case 973:
case 3079:
case 1703:
case 3184:
case 3399:
case 389:
case 7:
case 1890:
case 3662:
case 2191:
case 1265:
case 2239:
case 749:
case 2721:
case 2645:
case 1667:
case 1826:
case 1782:
case 2751:
case 2391:
case 3599:
case 799:
case 804:
case 3015:
case 35:
case 2303:
case 3644:
case 3977:
case 1883:
case 2258:
case 31:
case 1463:
case 2182:
case 1975:
case 3430:
case 3477:
case 2850:
case 2582:
case 1963:
case 2014:
case 1551:
case 843:
case 1472:
case 33:
case 2503:
case 1919:
case 969:
case 2103:
case 3216:
case 2185:
case 1802:
case 2008:
case 1419:
case 1791:
case 1351:
case 1451:
case 113:
case 1921:
case 4091:
case 3177:
case 3130:
case 181:
case 2898:
case 1092:
case 2482:
case 3530:
case 3054:
case 1421:
case 1563:
case 3774:
case 34:
case 3842:
case 833:
case 78:
case 2485:
case 1095:
case 133:
case 1847:
case 2873:
case 3330:
case 3204:
case 3097:
case 1363:
case 813:
case 2256:
case 853:
case 707:
case 1220:
case 2719:
case 3864:
case 56:
case 3484:
case 1081:
case 772:
case 1858:
case 2283:
case 2052:
case 2205:
case 1250:
case 3984:
case 2991:
case 739:
case 162:
case 2844:
case 3620:
case 2022:
case 3743:
case 300:
case 3499:
case 921:
case 862:
case 3696:
case 2202:
case 674:
case 759:
case 3999:
case 865:
case 2763:
case 474:
case 4044:
case 2962:
case 2998:
case 3107:
case 141:
case 2462:
case 3410:
case 1105:
case 2150:
case 3704:
case 1851:
case 3942:
case 2756:
case 1505:
case 2550:
case 2034:
case 2965:
case 1383:
case 1939:
case 3307:
case 3445:
case 1674:
case 1947:
case 2885:
case 3274:
case 74:
case 1102:
case 2196:
case 891:
case 1447:
case 2350:
case 2790:
case 3964:
case 3243:
case 700:
case 223:
case 1428:
case 2444:
case 3464:
case 359:
case 1796:
case 1590:
case 521:
case 1356:
case 2702:
case 4062:
case 1928:
case 1611:
case 2944:
case 1458:
case 2891:
case 2219:
case 1049:
case 1720:
case 307:
case 1070:
case 375:
case 1390:
case 2705:
case 1556:
case 96:
case 4065:
case 465:
case 1609:
case 1253:
case 1406:
case 2468:
case 1514:
case 1082:
case 665:
case 1308:
case 3948:
case 1114:
case 2021:
case 2968:
case 1223:
case 1906:
case 3653:
case 2771:
case 2280:
case 662:
case 1717:
case 3059:
case 2166:
case 1314:
case 1508:
case 3712:
case 3087:
case 3740:
case 3546:
case 2995:
case 3779:
case 3146:
case 1003:
case 2201:
case 613:
case 1766:
case 453:
case 2708:
case 653:
case 1160:
case 2481:
case 1091:
case 3038:
case 4092:
case 4068:
case 1452:
case 316:
case 481:
case 3133:
case 1371:
case 3813:
case 738:
case 2981:
case 1952:
case 2278:
case 3489:
case 3427:
case 3957:
case 944:
case 3869:
case 1925:
case 4095:
case 2714:
case 1455:
case 1571:
case 2849:
case 1286:
case 2870:
case 3333:
case 2117:
case 758:
case 3927:
case 1955:
case 1425:
case 2837:
case 234:
case 2988:
case 503:
case 1476:
case 2633:
case 3848:
case 3212:
case 2260:
case 364:
case 2892:
case 3031:
case 2868:
case 2488:
case 1976:
case 1612:
case 266:
case 4061:
case 1434:
case 2386:
case 3279:
case 3617:
case 1178:
case 1393:
case 1753:
case 4070:
case 3067:
case 2039:
case 2895:
case 1065:
case 1723:
case 2186:
case 3413:
case 2153:
case 2778:
case 3441:
case 594:
case 1822:
case 2028:
case 2214:
case 2961:
case 736:
case 358:
case 3913:
case 1301:
case 1852:
case 441:
case 4088:
case 318:
case 2461:
case 2881:
case 2449:
case 716:
case 1266:
case 2353:
case 2793:
case 2470:
case 3969:
case 338:
case 1501:
case 2323:
case 1855:
case 2800:
case 2937:
case 984:
case 3889:
case 1083:
case 2493:
case 46:
case 2576:
case 2281:
case 3294:
case 2749:
case 3622:
case 66:
case 2020:
case 1222:
case 1188:
case 2534:
case 2050:
case 1005:
case 1255:
case 2376:
case 3227:
case 3289:
case 3713:
case 2478:
case 3741:
case 3625:
case 1986:
case 1388:
case 1225:
case 3257:
case 1627:
case 2334:
case 2808:
case 2096:
case 1866:
case 1002:
case 750:
case 3909:
case 3879:
case 1349:
case 4093:
case 2292:
case 1206:
case 337:
case 710:
case 184:
case 2624:
case 3840:
case 3409:
case 3812:
case 3132:
case 3606:
case 2480:
case 1161:
case 1090:
case 3532:
case 4078:
case 2901:
case 1137:
case 1026:
case 2871:
case 2295:
case 357:
case 1570:
case 1776:
case 2401:
case 3815:
case 1056:
case 1361:
case 974:
case 3154:
case 2700:
case 1755:
case 103:
case 4060:
case 3241:
case 1192:
case 1168:
case 3554:
case 3030:
case 2261:
case 3124:
case 1063:
case 1641:
case 421:
case 2914:
case 1725:
case 621:
case 1392:
case 1752:
case 1466:
case 1886:
case 1195:
case 2635:
case 3794:
case 1669:
case 3269:
case 1722:
case 2908:
case 1966:
case 3324:
case 2880:
case 2460:
case 1181:
case 3412:
case 3809:
case 3940:
case 1276:
case 330:
case 2552:
case 3634:
case 2795:
case 194:
case 3479:
case 3676:
case 3912:
case 3440:
case 144:
case 1853:
case 2522:
case 4008:
case 310:
case 1100:
case 1381:
case 844:
case 2352:
case 2555:
case 1500:
case 2768:
case 2792:
case 2471:
case 1417:
case 2125:
case 3748:
case 3915:
case 894:
case 2322:
case 484:
case 2291:
case 3367:
case 513:
case 684:
case 3284:
case 395:
case 1420:
case 251:
case 1365:
case 1562:
case 2339:
case 1684:
case 1162:
case 1198:
case 3131:
case 3811:
case 1920:
case 4090:
case 2347:
case 2405:
case 533:
case 1728:
case 3299:
case 785:
case 2872:
case 1078:
case 2902:
case 4026:
case 1996:
case 3167:
case 1398:
case 1758:
case 3331:
case 1165:
case 3764:
case 2819:
case 2086:
case 2547:
case 3918:
case 3745:
case 3621:
case 2990:
case 2282:
case 2528:
case 1544:
case 2053:
case 1251:
case 3651:
case 2773:
case 4005:
case 1747:
case 1080:
case 2490:
case 1739:
case 3316:
case 77:
case 1221:
case 2687:
case 3742:
case 2629:
case 2956:
case 2328:
case 761:
case 1344:
case 2285:
case 706:
case 1001:
case 2659:
case 2203:
case 3116:
case 4002:
case 2456:
case 2358:
case 2798:
case 171:
case 3516:
case 3710:
case 3404:
case 3799:
case 1664:
case 2551:
case 3359:
case 494:
case 1582:
case 1228:
case 243:
case 1850:
case 3411:
case 2151:
case 2975:
case 1182:
case 3329:
case 3387:
case 1258:
case 2463:
case 3911:
case 1820:
case 1303:
case 3628:
case 3264:
case 933:
case 3943:
case 382:
case 644:
case 742:
case 3559:
case 2351:
case 1585:
case 2802:
case 2419:
case 1185:
case 2972:
case 3046:
case 792:
case 981:
case 1503:
case 3187:
case 953:
case 2890:
case 403:
case 306:
case 3538:
case 603:
case 1591:
case 1642:
case 3033:
case 2298:
case 4063:
case 4019:
case 2856:
case 3639:
case 3245:
case 3436:
case 3338:
case 3804:
case 821:
case 1391:
case 962:
case 2782:
case 2017:
case 4072:
case 2273:
case 2667:
case 3936:
case 1721:
case 2265:
case 965:
case 3474:
case 2810:
case 369:
case 1111:
case 3482:
case 3862:
case 3898:
case 1511:
case 2054:
case 1543:
case 2736:
case 3290:
case 1048:
case 2218:
case 2024:
case 129:
case 2842:
case 24:
case 440:
case 1459:
case 3485:
case 3865:
case 640:
case 2377:
case 3903:
case 95:
case 1311:
case 1343:
case 2330:
case 1429:
case 2204:
case 3403:
case 690:
case 687:
case 3719:
case 222:
case 1094:
case 1336:
case 3491:
case 1683:
case 3205:
case 225:
case 3772:
case 2984:
case 549:
case 1938:
case 3844:
case 628:
case 1374:
case 373:
case 1777:
case 476:
case 5:
case 200:
case 1027:
case 1816:
case 723:
case 3055:
case 2696:
case 1136:
case 1602:
case 3202:
case 989:
case 3775:
case 2999:
case 3763:
case 3025:
case 1931:
case 2107:
case 3962:
case 3998:
case 3120:
case 3076:
case 2442:
case 3726:
case 3462:
case 3882:
case 1431:
case 2704:
case 3150:
case 2410:
case 55:
case 155:
case 3034:
case 3550:
case 51:
case 3756:
case 3965:
case 1887:
case 1829:
case 815:
case 2236:
case 2445:
case 647:
case 769:
case 3973:
case 3465:
case 2274:
case 3885:
case 1967:
case 812:
case 53:
case 2945:
case 179:
case 697:
case 3596:
case 852:
case 3350:
case 680:
case 4042:
case 1230:
case 2964:
case 1041:
case 3444:
case 773:
case 2464:
case 3275:
case 3702:
case 3677:
case 1118:
case 3263:
case 3944:
case 4010:
case 3891:
case 1304:
case 3630:
case 1838:
case 272:
case 4045:
case 949:
case 3783:
case 207:
case 1672:
case 863:
case 999:
case 2899:
case 2035:
case 1504:
case 1069:
case 502:
case 3468:
case 3888:
case 577:
case 1454:
case 2715:
case 2948:
case 4094:
case 505:
case 3992:
case 876:
case 128:
case 2448:
case 2209:
case 1954:
case 1997:
case 3166:
case 2059:
case 3760:
case 80:
case 2712:
case 520:
case 2087:
case 1497:
case 3995:
case 2146:
case 701:
case 2779:
case 766:
case 3708:
case 2494:
case 256:
case 3861:
case 887:
case 3481:
case 216:
case 2841:
case 1140:
case 314:
case 2813:
case 429:
case 2994:
case 4048:
case 548:
case 1540:
case 354:
case 1515:
case 3278:
case 2869:
case 1099:
case 140:
case 1835:
case 3400:
case 2686:
case 1379:
case 2927:
case 190:
case 1678:
case 334:
case 3837:
case 187:
case 3988:
case 126:
case 570:
case 1042:
case 2212:
case 3633:
case 878:
case 264:
case 3260:
case 3892:
case 463:
case 1233:
case 1010:
case 1854:
case 663:
case 3701:
case 2279:
case 3386:
case 2067:
case 768:
case 2215:
case 3895:
case 4069:
case 178:
case 2709:
case 902:
case 3780:
case 3271:
case 3586:
case 3047:
case 3778:
case 2413:
case 3214:
case 3553:
case 880:
case 652:
case 1932:
case 588:
case 258:
case 3123:
case 2941:
case 1109:
case 218:
case 415:
case 3523:
case 847:
case 3461:
case 596:
case 432:
case 3208:
case 3793:
case 3437:
case 3470:
case 2969:
case 1309:
case 479:
case 238:
case 435:
case 754:
case 197:
case 1608:
case 2827:
case 714:
case 2016:
case 1246:
case 2469:
case 3970:
case 177:
case 699:
case 3770:
case 3576:
case 499:
case 102:
case 2007:
case 3176:
case 767:
case 3814:
case 1735:
case 3134:
case 1681:
case 449:
case 4009:
case 105:
case 3050:
case 2652:
case 3534:
case 3200:
case 1846:
case 120:
case 4:
case 3478:
case 2713:
case 2625:
case 1732:
case 3761:
case 3978:
case 802:
case 2655:
case 3334:
case 1513:
case 1254:
case 2879:
case 3980:
case 1113:
case 3268:
case 1141:
case 3624:
case 997:
case 2812:
case 186:
case 148:
case 2248:
case 2606:
case 1668:
case 2532:
case 2335:
case 3697:
case 540:
case 3901:
case 1313:
case 848:
case 3871:
case 886:
case 257:
case 3295:
case 2815:
case 1169:
case 898:
case 587:
case 2135:
case 2332:
case 2789:
case 526:
case 170:
case 3506:
case 2154:
case 3414:
case 2241:
case 3106:
case 2213:
case 489:
case 3261:
case 760:
case 1232:
case 4040:
case 2524:
case 1946:
case 3270:
case 3306:
case 127:
case 3237:
case 90:
case 3408:
case 3249:
case 928:
case 2269:
case 2597:
case 1235:
case 870:
case 1637:
case 1670:
case 3878:
case 3880:
case 2809:
case 3152:
case 1327:
case 1389:
case 1933:
case 1194:
case 3552:
case 2676:
case 196:
case 61:
case 2440:
case 1433:
case 1797:
case 940:
case 41:
case 65:
case 1127:
case 1189:
case 3971:
case 1754:
case 1036:
case 3555:
case 846:
case 1157:
case 888:
case 3471:
case 597:
case 1724:
case 2748:
case 2915:
case 43:
case 3125:
case 1074:
case 63:
case 698:
case 1345:
case 498:
case 2284:
case 1542:
case 242:
case 1407:
case 3905:
case 935:
case 2531:
case 3339:
case 648:
case 1716:
case 4018:
case 448:
case 1907:
case 1691:
case 3638:
case 311:
case 3405:
case 3347:
case 1110:
case 932:
case 2811:
case 3744:
case 1145:
case 2567:
case 915:
case 3902:
case 331:
case 1310:
case 912:
case 3139:
case 3547:
case 3402:
case 952:
case 3086:
case 3819:
case 402:
case 2621:
case 2918:
case 2745:
case 3128:
case 3990:
case 3053:
case 602:
case 3282:
case 3528:
case 22:
case 405:
case 1009:
case 3158:
case 2418:
case 3490:
case 605:
case 8:
case 3558:
case 2316:
case 849:
case 3426:
case 3285:
case 1603:
case 2874:
case 3328:
case 1:
case 2904:
case 2836:
case 704:
case 3456:
case 1685:
case 899:
case 2116:
case 3798:
case 3358:
case 2404:
case 2710:
case 2516:
case 2359:
case 3244:
case 3963:
case 2411:
case 83:
case 3805:
case 512:
case 2658:
case 2443:
case 1430:
case 488:
case 3975:
case 2387:
case 3521:
case 3463:
case 393:
case 2911:
case 731:
case 1644:
case 1807:
case 3475:
case 282:
case 3351:
case 1738:
case 81:
case 3419:
case 85:
case 3066:
case 2784:
case 3972:
case 2587:
case 3321:
case 2046:
case 2187:
case 13:
case 3631:
case 261:
case 1662:
case 1012:
case 2242:
case 4043:
case 1584:
case 1759:
case 2538:
case 563:
case 1079:
case 2210:
case 1729:
case 1231:
case 304:
case 2639:
case 2245:
case 1015:
case 1384:
case 1267:
case 2804:
case 2647:
case 427:
case 3017:
case 889:
case 3265:
case 800:
case 3828:
case 362:
case 2938:
case 52:
case 125:
case 3250:
case 2683:
case 2605:
case 1650:
case 365:
case 2438:
case 3081:
case 1484:
case 122:
case 2574:
case 4029:
case 1999:
case 2057:
case 961:
case 906:
case 1696:
case 2136:
case 2602:
case 4059:
case 2089:
case 1499:
case 1743:
case 1711:
case 825:
case 2048:
case 1218:
case 1842:
case 3163:
case 3372:
case 1054:
case 1530:
case 616:
case 1736:
case 456:
case 2511:
case 2831:
case 3092:
case 1130:
case 656:
case 2690:
case 2143:
case 416:
case 542:
case 3618:
case 2111:
case 3451:
case 741:
case 985:
case 89:
case 2626:
case 3363:
case 3172:
case 1204:
case 1097:
case 3604:
case 436:
case 333:
case 3847:
case 3519:
case 791:
case 982:
case 2929:
case 3119:
case 2459:
case 807:
case 3061:
case 2838:
case 2304:
case 2118:
case 263:
case 119:
case 3928:
case 3611:
case 3590:
case 2518:
case 159:
case 3326:
case 875:
case 839:
case 2663:
case 464:
case 1243:
case 2230:
case 57:
case 2069:
case 2504:
case 2619:
case 3750:
case 3390:
case 2318:
case 762:
case 175:
case 4067:
case 3126:
case 819:
case 2672:
case 2916:
case 107:
case 908:
case 92:
case 3049:
case 765:
case 172:
case 255:
case 1942:
case 1704:
case 3851:
case 1410:
case 341:
case 658:
case 252:
case 18:
case 3183:
case 1910:
case 585:
case 733:
case 2931:
case 391:
case 995:
case 3305:
case 235:
case 279:
case 1945:
case 3636:
case 4016:
case 638:
case 1274:
case 945:
case 3947:
case 781:
case 3674:
case 1236:
case 753:
case 3383:
case 3952:
case 1533:
case 2540:
case 910:
case 1994:
case 2579:
case 3371:
case 1841:
case 3452:
case 116:
case 2112:
case 69:
case 3922:
case 3091:
case 2832:
case 2512:
case 4054:
case 3560:
case 3766:
case 930:
case 3955:
case 1927:
case 290:
case 2340:
case 2678:
case 2379:
case 3286:
case 3455:
case 3925:
case 1957:
case 2835:
case 2099:
case 136:
case 2515:
case 2312:
case 557:
case 2424:
case 228:
case 425:
case 1653:
case 3223:
case 3114:
case 2924:
case 3834:
case 1623:
case 3514:
case 3082:
case 3253:
case 3609:
case 3003:
case 1779:
case 2733:
case 1029:
case 1712:
case 276:
case 1059:
case 3108:
case 2432:
case 957:
case 118:
case 2109:
case 1941:
case 3580:
case 917:
case 2064:
case 3301:
case 1894:
case 68:
case 1413:
case 530:
case 2435:
case 1889:
case 1016:
case 1827:
case 280:
case 1469:
case 297:
case 1666:
case 3101:
case 2608:
case 3855:
case 138:
case 3501:
case 1857:
case 2935:
case 818:
case 247:
case 909:
case 3266:
case 858:
case 459:
case 2854:
case 3976:
case 3612:
case 4032:
case 2010:
case 3806:
case 3098:
case 3062:
case 1031:
case 2660:
case 164:
case 2042:
case 1212:
case 226:
case 3640:
case 3193:
case 1848:
case 3476:
case 3679:
case 3073:
case 475:
case 439:
case 1709:
case 864:
case 3615:
case 675:
case 3065:
case 3723:
case 639:
case 607:
case 472:
case 2045:
case 3753:
case 2671:
case 407:
case 3178:
case 1617:
case 3393:
case 3561:
case 645:
case 3953:
case 1606:
case 3161:
case 2692:
case 817:
case 286:
case 1248:
case 248:
case 2224:
case 109:
case 492:
case 1409:
case 2833:
case 556:
case 642:
case 2113:
case 137:
case 384:
case 3337:
case 695:
case 2541:
case 3349:
case 516:
case 938:
case 2513:
case 1909:
case 442:
case 2569:
case 2297:
case 2004:
case 1535:
case 837:
case 1332:
case 2169:
case 3734:
case 3056:
case 1815:
case 3149:
case 3570:
case 918:
case 809:
case 794:
case 3026:
case 958:
case 3817:
case 3005:
case 2681:
case 408:
case 3188:
case 3694:
case 62:
case 1622:
case 1294:
case 3083:
case 3252:
case 3866:
case 2600:
case 3689:
case 3388:
case 1741:
case 3657:
case 1713:
case 1289:
case 703:
case 682:
case 2357:
case 2433:
case 1440:
case 558:
case 2797:
case 296:
case 810:
case 482:
case 518:
case 3234:
case 394:
case 2194:
case 685:
case 1634:
case 130:
case 2933:
case 1940:
case 288:
case 2594:
case 3181:
case 1979:
case 2557:
case 916:
case 2724:
case 3417:
case 956:
case 3706:
case 3500:
case 3381:
case 2527:
case 2036:
case 2189:
case 3075:
case 1524:
case 1757:
case 1030:
case 2661:
case 2043:
case 1213:
case 1554:
case 461:
case 1241:
case 1077:
case 606:
case 564:
case 1154:
case 1727:
case 47:
case 3072:
case 2348:
case 2670:
case 1197:
case 2649:
case 1269:
case 1794:
case 1354:
case 3886:
case 3752:
case 3392:
case 907:
case 3221:
case 1316:
case 2164:
case 2682:
case 12:
case 1418:
case 2009:
case 3251:
case 522:
case 975:
case 1745:
case 1404:
case 2229:
case 2731:
case 1836:
case 3001:
case 2259:
case 1904:
case 2603:
case 808:
case 1811:
case 3920:
case 2907:
case 409:
case 2830:
case 3162:
case 145:
case 54:
case 2716:
case 1531:
case 3562:
case 195:
case 637:
case 2345:
case 2142:
case 437:
case 895:
case 98:
case 3573:
case 3758:
case 1331:
case 3996:
case 892:
case 2342:
case 417:
case 1567:
case 3728:
case 457:
case 900:
case 321:
case 1033:
case 2040:
case 2787:
case 3642:
case 2729:
case 519:
case 2399:
case 1538:
case 1818:
case 106:
case 1242:
case 4030:
case 2012:
case 3060:
case 4077:
case 3191:
case 1138:
case 161:
case 3239:
case 3645:
case 539:
case 17:
case 806:
case 1647:
case 1974:
case 2267:
case 2599:
case 1338:
case 3751:
case 2673:
case 1245:
case 507:
case 2199:
case 25:
case 182:
case 2930:
case 1911:
case 2644:
case 21:
case 3258:
case 1329:
case 3850:
case 630:
case 3228:
case 430:
case 1799:
case 3664:
case 1129:
case 885:
case 3503:
case 99:
case 1046:
case 2216:
case 1784:
case 3185:
case 94:
case 650:
case 450:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758751201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,];
var gg_b = "1758751201/";

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
