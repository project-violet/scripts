// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

var window = 1;
var document = 1;
var name = 1;
var location = 1;
var customElements = 1;
var history = 1;
var locationbar = 1;
var menubar = 1;
var personalbar = 1;
var scrollbars = 1;
var statusbar = 1;
var toolbar = 1;
var status = 1;
var closed = 1;
var frames = 1;
var length = 1;
var top = 1;
var opener = 1;
var parent = 1;
var frameElement = 1;
var navigator = 1;
var origin = 1;
var external = 1;
var screen = 1;
var innerWidth = 1;
var innerHeight = 1;
var scrollX = 1;
var pageXOffset = 1;
var scrollY = 1;
var pageYOffset = 1;
var visualViewport = 1;
var screenX = 1;
var screenY = 1;
var outerWidth = 1;
var outerHeight = 1;
var devicePixelRatio = 1;
var clientInformation = 1;
var screenLeft = 1;
var screenTop = 1;
var defaultStatus = 1;
var defaultstatus = 1;
var styleMedia = 1;
var onsearch = 1;
var isSecureContext = 1;
var performance = 1;
var onappinstalled = 1;
var onbeforeinstallprompt = 1;
var crypto = 1;
var indexedDB = 1;
var webkitStorageInfo = 1;
var sessionStorage = 1;
var localStorage = 1;
var onbeforexrselect = 1;
var onabort = 1;
var onblur = 1;
var oncancel = 1;
var oncanplay = 1;
var oncanplaythrough = 1;
var onchange = 1;
var onclick = 1;
var onclose = 1;
var oncontextmenu = 1;
var oncuechange = 1;
var ondblclick = 1;
var ondrag = 1;
var ondragend = 1;
var ondragenter = 1;
var ondragleave = 1;
var ondragover = 1;
var ondragstart = 1;
var ondrop = 1;
var ondurationchange = 1;
var onemptied = 1;
var onended = 1;
var onerror = 1;
var onfocus = 1;
var onformdata = 1;
var oninput = 1;
var oninvalid = 1;
var onkeydown = 1;
var onkeypress = 1;
var onkeyup = 1;
var onload = 1;
var onloadeddata = 1;
var onloadedmetadata = 1;
var onloadstart = 1;
var onmousedown = 1;
var onmouseenter = 1;
var onmouseleave = 1;
var onmousemove = 1;
var onmouseout = 1;
var onmouseover = 1;
var onmouseup = 1;
var onmousewheel = 1;
var onpause = 1;
var onplay = 1;
var onplaying = 1;
var onprogress = 1;
var onratechange = 1;
var onreset = 1;
var onresize = 1;
var onscroll = 1;
var onseeked = 1;
var onseeking = 1;
var onselect = 1;
var onstalled = 1;
var onsubmit = 1;
var onsuspend = 1;
var ontimeupdate = 1;
var ontoggle = 1;
var onvolumechange = 1;
var onwaiting = 1;
var onwebkitanimationend = 1;
var onwebkitanimationiteration = 1;
var onwebkitanimationstart = 1;
var onwebkittransitionend = 1;
var onwheel = 1;
var onauxclick = 1;
var ongotpointercapture = 1;
var onlostpointercapture = 1;
var onpointerdown = 1;
var onpointermove = 1;
var onpointerup = 1;
var onpointercancel = 1;
var onpointerover = 1;
var onpointerout = 1;
var onpointerenter = 1;
var onpointerleave = 1;
var onselectstart = 1;
var onselectionchange = 1;
var onanimationend = 1;
var onanimationiteration = 1;
var onanimationstart = 1;
var ontransitionrun = 1;
var ontransitionstart = 1;
var ontransitionend = 1;
var ontransitioncancel = 1;
var onafterprint = 1;
var onbeforeprint = 1;
var onbeforeunload = 1;
var onhashchange = 1;
var onlanguagechange = 1;
var onmessage = 1;
var onmessageerror = 1;
var onoffline = 1;
var ononline = 1;
var onpagehide = 1;
var onpageshow = 1;
var onpopstate = 1;
var onrejectionhandled = 1;
var onstorage = 1;
var onunhandledrejection = 1;
var onunload = 1;
var alert = 1;
var atob = 1;
var blur = 1;
var btoa = 1;
var cancelAnimationFrame = 1;
var cancelIdleCallback = 1;
var captureEvents = 1;
var clearInterval = 1;
var clearTimeout = 1;
var close = 1;
var confirm = 1;
var createImageBitmap = 1;
var fetch = 1;
var find = 1;
var focus = 1;
var getComputedStyle = 1;
var getSelection = 1;
var matchMedia = 1;
var moveBy = 1;
var moveTo = 1;
var open = 1;
var postMessage = 1;
var print = 1;
var prompt = 1;
var queueMicrotask = 1;
var releaseEvents = 1;
var reportError = 1;
var requestAnimationFrame = 1;
var requestIdleCallback = 1;
var resizeBy = 1;
var resizeTo = 1;
var scroll = 1;
var scrollBy = 1;
var scrollTo = 1;
var setInterval = 1;
var setTimeout = 1;
var stop = 1;
var webkitCancelAnimationFrame = 1;
var webkitRequestAnimationFrame = 1;
var chrome = 1;
var caches = 1;
var cookieStore = 1;
var ondevicemotion = 1;
var ondeviceorientation = 1;
var ondeviceorientationabsolute = 1;
var showDirectoryPicker = 1;
var showOpenFilePicker = 1;
var showSaveFilePicker = 1;
var originAgentCluster = 1;
var trustedTypes = 1;
var speechSynthesis = 1;
var onpointerrawupdate = 1;
var crossOriginIsolated = 1;
var scheduler = 1;
var openDatabase = 1;
var webkitRequestFileSystem = 1;
var webkitResolveLocalFileSystemURL = 1;
var cr = 1;
var JSCompiler_renameProperty = 1;
var ShadyCSS = 1;

var gg = { m: function(g) {
var o = 0;
switch (g) {
case 1332:
case 3076:
case 1144:
case 3538:
case 2416:
case 1181:
case 1756:
case 797:
case 14:
case 3244:
case 356:
case 1037:
case 1450:
case 1988:
case 1073:
case 2043:
case 3454:
case 538:
case 372:
case 793:
case 2331:
case 3728:
case 1413:
case 3002:
case 3422:
case 1005:
case 2471:
case 3039:
case 281:
case 1809:
case 1925:
case 2580:
case 1304:
case 2640:
case 958:
case 1775:
case 122:
case 1704:
case 3419:
case 2870:
case 690:
case 2181:
case 2382:
case 3558:
case 1627:
case 1046:
case 2932:
case 3433:
case 713:
case 2845:
case 1477:
case 3741:
case 3885:
case 2242:
case 3286:
case 2430:
case 3056:
case 2914:
case 2562:
case 1498:
case 3661:
case 1272:
case 148:
case 3701:
case 23:
case 2862:
case 3559:
case 760:
case 3271:
case 199:
case 1163:
case 96:
case 1429:
case 2216:
case 1845:
case 3914:
case 1593:
case 1142:
case 3185:
case 2861:
case 113:
case 1090:
case 1482:
case 1183:
case 4093:
case 2191:
case 3775:
case 3526:
case 112:
case 718:
case 2900:
case 831:
case 2093:
case 560:
case 3508:
case 2042:
case 1186:
case 3211:
case 944:
case 2652:
case 40:
case 839:
case 604:
case 1377:
case 3791:
case 708:
case 2988:
case 1431:
case 3073:
case 3218:
case 903:
case 2268:
case 832:
case 1636:
case 2556:
case 2499:
case 1641:
case 798:
case 2787:
case 3721:
case 1582:
case 707:
case 1820:
case 3418:
case 2950:
case 2140:
case 2007:
case 4071:
case 1173:
case 3011:
case 2395:
case 3632:
case 3921:
case 401:
case 352:
case 2292:
case 1898:
case 1796:
case 3016:
case 1164:
case 711:
case 1723:
case 3897:
case 1247:
case 74:
case 202:
case 1877:
case 366:
case 2999:
case 178:
case 493:
case 3262:
case 3483:
case 69:
case 2733:
case 1362:
case 1956:
case 1729:
case 1546:
case 2636:
case 1489:
case 104:
case 154:
case 2488:
case 3618:
case 2066:
case 2151:
case 622:
case 1145:
case 3489:
case 2960:
case 2251:
case 1890:
case 876:
case 1585:
case 2053:
case 1937:
case 3394:
case 1643:
case 4066:
case 2688:
case 1557:
case 2892:
case 462:
case 2633:
case 1218:
case 835:
case 3075:
case 2452:
case 1253:
case 784:
case 327:
case 1308:
case 918:
case 2139:
case 1109:
case 2871:
case 1944:
case 1106:
case 2405:
case 55:
case 2418:
case 1738:
case 755:
case 1369:
case 2261:
case 3159:
case 3369:
case 500:
case 3984:
case 1118:
case 627:
case 3285:
case 1192:
case 2776:
case 2643:
case 1624:
case 2732:
case 2840:
case 2378:
case 217:
case 2408:
case 2445:
case 1474:
case 3050:
case 2852:
case 3500:
case 234:
case 3033:
case 333:
case 3254:
case 3621:
case 2743:
case 2912:
case 1511:
case 3273:
case 3008:
case 316:
case 400:
case 4024:
case 2166:
case 2462:
case 2464:
case 2661:
case 4062:
case 592:
case 662:
case 3456:
case 3012:
case 2230:
case 3448:
case 3246:
case 3472:
case 134:
case 1527:
case 1219:
case 3880:
case 20:
case 1266:
case 1760:
case 1327:
case 2275:
case 569:
case 510:
case 2731:
case 800:
case 4091:
case 457:
case 1798:
case 935:
case 426:
case 2056:
case 1476:
case 3397:
case 2277:
case 581:
case 3835:
case 275:
case 1711:
case 2480:
case 1895:
case 2810:
case 1110:
case 3263:
case 2459:
case 1509:
case 2426:
case 3844:
case 3544:
case 1838:
case 2669:
case 1580:
case 3026:
case 2937:
case 1328:
case 1645:
case 2364:
case 3363:
case 667:
case 2392:
case 3301:
case 1997:
case 2073:
case 2814:
case 4054:
case 2204:
case 3852:
case 2125:
case 3226:
case 1589:
case 3161:
case 461:
case 3431:
case 2333:
case 1485:
case 490:
case 1979:
case 853:
case 3892:
case 1459:
case 1036:
case 522:
case 2149:
case 2403:
case 2104:
case 506:
case 981:
case 1958:
case 470:
case 1065:
case 3609:
case 3636:
case 2472:
case 2004:
case 1446:
case 3368:
case 65:
case 676:
case 272:
case 78:
case 2653:
case 3810:
case 2349:
case 3499:
case 3549:
case 4017:
case 1657:
case 2515:
case 1852:
case 139:
case 1550:
case 1097:
case 2334:
case 2933:
case 12:
case 3306:
case 1839:
case 3748:
case 846:
case 3590:
case 1530:
case 4068:
case 2963:
case 3281:
case 591:
case 3015:
case 2377:
case 3520:
case 801:
case 3425:
case 3294:
case 2379:
case 1901:
case 123:
case 3112:
case 597:
case 745:
case 1282:
case 283:
case 1391:
case 1277:
case 863:
case 1035:
case 245:
case 415:
case 3144:
case 2244:
case 1209:
case 1020:
case 271:
case 2922:
case 1909:
case 2805:
case 3330:
case 46:
case 1432:
case 2540:
case 1273:
case 1679:
case 2565:
case 2057:
case 2176:
case 901:
case 1594:
case 3639:
case 3727:
case 1835:
case 2846:
case 13:
case 1058:
case 1394:
case 2474:
case 3954:
case 739:
case 2671:
case 2388:
case 663:
case 3593:
case 2944:
case 3588:
case 3734:
case 3823:
case 686:
case 1622:
case 111:
case 787:
case 977:
case 3913:
case 643:
case 521:
case 248:
case 3750:
case 923:
case 3098:
case 541:
case 4011:
case 434:
case 373:
case 1873:
case 637:
case 3583:
case 3659:
case 2072:
case 3255:
case 960:
case 3603:
case 1678:
case 834:
case 3299:
case 4018:
case 211:
case 1276:
case 2817:
case 2353:
case 864:
case 2106:
case 2627:
case 1836:
case 186:
case 1371:
case 558:
case 2946:
case 1443:
case 847:
case 1926:
case 35:
case 659:
case 433:
case 562:
case 2023:
case 2534:
case 3576:
case 3650:
case 108:
case 2567:
case 851:
case 169:
case 779:
case 3450:
case 448:
case 1843:
case 567:
case 2518:
case 2796:
case 3492:
case 3468:
case 1331:
case 1744:
case 1464:
case 1135:
case 3010:
case 765:
case 2446:
case 3143:
case 3180:
case 3356:
case 2014:
case 3090:
case 1681:
case 2067:
case 930:
case 1977:
case 146:
case 4072:
case 3445:
case 2604:
case 1923:
case 30:
case 1749:
case 1663:
case 3322:
case 1114:
case 3739:
case 3505:
case 3429:
case 2482:
case 815:
case 3224:
case 1310:
case 1853:
case 1819:
case 3891:
case 693:
case 138:
case 3442:
case 1375:
case 2645:
case 3459:
case 533:
case 471:
case 210:
case 1951:
case 1168:
case 3374:
case 1497:
case 3437:
case 761:
case 3168:
case 3717:
case 313:
case 1389:
case 4082:
case 585:
case 2199:
case 3608:
case 1178:
case 2635:
case 1400:
case 2454:
case 1318:
case 895:
case 1957:
case 757:
case 1336:
case 3682:
case 3779:
case 3243:
case 1523:
case 1739:
case 1989:
case 321:
case 2657:
case 2384:
case 1479:
case 1017:
case 2137:
case 3272:
case 2355:
case 107:
case 3740:
case 2897:
case 3372:
case 201:
case 530:
case 1615:
case 2351:
case 3517:
case 2893:
case 2966:
case 965:
case 1171:
case 820:
case 1423:
case 2207:
case 1198:
case 2698:
case 1481:
case 1653:
case 2024:
case 1264:
case 3732:
case 3264:
case 213:
case 524:
case 484:
case 4029:
case 2712:
case 3097:
case 155:
case 18:
case 605:
case 2339:
case 2114:
case 2951:
case 741:
case 475:
case 1689:
case 173:
case 2264:
case 1535:
case 2855:
case 3565:
case 3051:
case 738:
case 1750:
case 1405:
case 1129:
case 3393:
case 2890:
case 1767:
case 2774:
case 1125:
case 810:
case 3529:
case 3219:
case 1242:
case 1854:
case 2794:
case 3447:
case 3807:
case 2163:
case 2444:
case 1469:
case 2171:
case 2183:
case 3214:
case 3091:
case 1439:
case 2953:
case 2065:
case 1714:
case 1158:
case 2165:
case 1329:
case 3684:
case 4016:
case 3466:
case 2819:
case 3110:
case 3375:
case 1241:
case 2755:
case 3013:
case 1261:
case 1083:
case 99:
case 424:
case 2919:
case 4001:
case 2835:
case 551:
case 3138:
case 3666:
case 957:
case 996:
case 454:
case 3147:
case 119:
case 3548:
case 3513:
case 942:
case 3373:
case 1157:
case 1904:
case 3804:
case 3157:
case 2517:
case 773:
case 1912:
case 1882:
case 1542:
case 3705:
case 1049:
case 593:
case 1655:
case 1148:
case 3952:
case 2984:
case 3647:
case 3846:
case 2524:
case 2465:
case 1440:
case 2552:
case 3380:
case 3531:
case 3878:
case 2193:
case 1867:
case 3129:
case 1438:
case 4048:
case 2401:
case 396:
case 1491:
case 3504:
case 318:
case 2412:
case 137:
case 1871:
case 2281:
case 1295:
case 4033:
case 1204:
case 796:
case 3759:
case 110:
case 2511:
case 3518:
case 1917:
case 3247:
case 2213:
case 850:
case 56:
case 719:
case 3208:
case 483:
case 507:
case 224:
case 3182:
case 2563:
case 3378:
case 3902:
case 3355:
case 3123:
case 2319:
case 389:
case 2027:
case 2918:
case 2069:
case 2223:
case 2063:
case 666:
case 2521:
case 1803:
case 1860:
case 2107:
case 2825:
case 2572:
case 144:
case 2420:
case 3645:
case 3657:
case 3522:
case 145:
case 3813:
case 2202:
case 1626:
case 3172:
case 383:
case 986:
case 1456:
case 3068:
case 2234:
case 4002:
case 3061:
case 809:
case 1634:
case 3676:
case 456:
case 204:
case 3151:
case 3826:
case 469:
case 128:
case 673:
case 2493:
case 2559:
case 1561:
case 1875:
case 2215:
case 2837:
case 2715:
case 610:
case 535:
case 2205:
case 1520:
case 3099:
case 1816:
case 1374:
case 3560:
case 3501:
case 775:
case 4090:
case 3228:
case 3764:
case 227:
case 33:
case 2899:
case 3333:
case 350:
case 2385:
case 3749:
case 449:
case 2425:
case 309:
case 2910:
case 2700:
case 2013:
case 2986:
case 2492:
case 532:
case 1228:
case 1943:
case 1287:
case 1830:
case 2815:
case 3233:
case 3703:
case 3756:
case 276:
case 1785:
case 2238:
case 364:
case 1108:
case 1696:
case 715:
case 391:
case 2651:
case 2754:
case 2947:
case 571:
case 576:
case 332:
case 120:
case 1850:
case 3851:
case 3527:
case 1647:
case 3886:
case 3845:
case 196:
case 2442:
case 1617:
case 3708:
case 3474:
case 2317:
case 2225:
case 2182:
case 1324:
case 852:
case 2809:
case 3786:
case 3507:
case 545:
case 2544:
case 2990:
case 2100:
case 2231:
case 3021:
case 287:
case 774:
case 651:
case 3126:
case 1271:
case 3122:
case 1717:
case 435:
case 394:
case 2592:
case 3251:
case 3641:
case 2667:
case 1376:
case 3787:
case 966:
case 1098:
case 740:
case 3616:
case 2952:
case 1274:
case 3864:
case 2748:
case 1074:
case 243:
case 2575:
case 1007:
case 2605:
case 720:
case 2630:
case 1353:
case 44:
case 2858:
case 1907:
case 1933:
case 2200:
case 1812:
case 34:
case 3970:
case 2682:
case 63:
case 2304:
case 1547:
case 2169:
case 2616:
case 2437:
case 3402:
case 1305:
case 3731:
case 1493:
case 3018:
case 1587:
case 892:
case 94:
case 1549:
case 2276:
case 2704:
case 336:
case 3195:
case 3298:
case 2992:
case 2429:
case 2941:
case 2998:
case 1161:
case 4083:
case 3314:
case 2103:
case 370:
case 3789:
case 1976:
case 4084:
case 60:
case 849:
case 1504:
case 482:
case 997:
case 1978:
case 82:
case 9:
case 3929:
case 26:
case 553:
case 3335:
case 2440:
case 1932:
case 2035:
case 358:
case 2674:
case 2821:
case 544:
case 3416:
case 687:
case 1486:
case 1306:
case 2368:
case 1224:
case 3706:
case 3943:
case 2228:
case 3794:
case 1314:
case 2859:
case 698:
case 440:
case 2543:
case 3350:
case 2485:
case 2996:
case 2930:
case 1297:
case 2362:
case 73:
case 1291:
case 1038:
case 3643:
case 3862:
case 904:
case 1140:
case 1841:
case 212:
case 854:
case 3815:
case 2185:
case 3399:
case 2400:
case 3162:
case 734:
case 2925:
case 1802:
case 1813:
case 3307:
case 2600:
case 2585:
case 2070:
case 1584:
case 1565:
case 2883:
case 2801:
case 118:
case 3121:
case 278:
case 3451:
case 2535:
case 322:
case 2046:
case 2302:
case 2167:
case 3983:
case 2064:
case 1263:
case 1139:
case 2316:
case 4028:
case 3834:
case 411:
case 177:
case 3839:
case 1018:
case 3714:
case 1226:
case 1296:
case 556:
case 2901:
case 758:
case 261:
case 1044:
case 3189:
case 3694:
case 4079:
case 2179:
case 4015:
case 3221:
case 1915:
case 3406:
case 1015:
case 1625:
case 3689:
case 1280:
case 689:
case 1062:
case 3638:
case 683:
case 826:
case 812:
case 2015:
case 2451:
case 2010:
case 3874:
case 1028:
case 1517:
case 2788:
case 115:
case 51:
case 3801:
case 2945:
case 3367:
case 1199:
case 2422:
case 4012:
case 3423:
case 3963:
case 2033:
case 1385:
case 1735:
case 3101:
case 1093:
case 3201:
case 1407:
case 565:
case 1508:
case 328:
case 225:
case 3428:
case 2337:
case 2291:
case 979:
case 254:
case 910:
case 3584:
case 3163:
case 2596:
case 3530:
case 3042:
case 594:
case 2512:
case 2803:
case 43:
case 2811:
case 950:
case 106:
case 1060:
case 218:
case 209:
case 2718:
case 969:
case 2424:
case 410:
case 4064:
case 1252:
case 786:
case 2676:
case 1558:
case 3210:
case 3995:
case 2762:
case 2904:
case 3196:
case 752:
case 4:
case 599:
case 36:
case 367:
case 1146:
case 3956:
case 2913:
case 2413:
case 3979:
case 2252:
case 2532:
case 3918:
case 782:
case 1616:
case 1602:
case 130:
case 3044:
case 2725:
case 1563:
case 2397:
case 2489:
case 1650:
case 3828:
case 1844:
case 2949:
case 1490:
case 2296:
case 1342:
case 2832:
case 2219:
case 3145:
case 2752:
case 714:
case 2483:
case 2290:
case 2675:
case 3490:
case 1620:
case 2157:
case 1787:
case 3920:
case 3625:
case 3315:
case 3562:
case 1365:
case 3905:
case 2496:
case 1221:
case 344:
case 2495:
case 2928:
case 2366:
case 3802:
case 2782:
case 1975:
case 2354:
case 2851:
case 867:
case 1151:
case 3238:
case 3179:
case 3715:
case 3566:
case 936:
case 1961:
case 906:
case 3613:
case 3205:
case 2549:
case 1552:
case 575:
case 1818:
case 1421:
case 2105:
case 1014:
case 1217:
case 912:
case 452:
case 2685:
case 488:
case 1417:
case 3825:
case 473:
case 135:
case 198:
case 799:
case 3960:
case 636:
case 855:
case 1768:
case 252:
case 2148:
case 1669:
case 3424:
case 451:
case 2766:
case 1068:
case 3742:
case 1430:
case 3936:
case 2269:
case 623:
case 3312:
case 540:
case 3359:
case 450:
case 882:
case 3712:
case 3311:
case 1307:
case 2141:
case 1059:
case 988:
case 1461:
case 2110:
case 1382:
case 2513:
case 346:
case 49:
case 2367:
case 133:
case 2979:
case 2872:
case 334:
case 4019:
case 2558:
case 2078:
case 3863:
case 222:
case 2519:
case 1807:
case 233:
case 1784:
case 3534:
case 265:
case 1022:
case 1495:
case 3003:
case 3304:
case 523:
case 1967:
case 1383:
case 3796:
case 3127:
case 1120:
case 2360:
case 1233:
case 770:
case 1379:
case 1041:
case 527:
case 501:
case 804:
case 3094:
case 2691:
case 767:
case 280:
case 349:
case 259:
case 926:
case 2595:
case 3955:
case 1801:
case 1424:
case 759:
case 974:
case 702:
case 724:
case 3772:
case 3278:
case 3190:
case 3364:
case 3309:
case 2287:
case 3310:
case 3704:
case 3412:
case 2214:
case 2404:
case 1259:
case 2829:
case 2923:
case 2123:
case 2092:
case 368:
case 2961:
case 619:
case 828:
case 2209:
case 2298:
case 2581:
case 2665:
case 1045:
case 1629:
case 3811:
case 2394:
case 2012:
case 3186:
case 2421:
case 2484:
case 968:
case 2916:
case 754:
case 2723:
case 1848:
case 639:
case 1607:
case 4027:
case 2417:
case 1033:
case 2240:
case 2332:
case 1754:
case 598:
case 2848:
case 735:
case 2431:
case 1706:
case 3574:
case 2102:
case 1412:
case 2878:
case 2587:
case 2823:
case 1122:
case 2935:
case 32:
case 1499:
case 781:
case 2434:
case 3111:
case 3305:
case 1526:
case 2831:
case 2271:
case 2460:
case 3519:
case 3092:
case 1398:
case 2432:
case 1099:
case 3001:
case 3164:
case 4047:
case 1911:
case 819:
case 4023:
case 4013:
case 769:
case 1946:
case 2428:
case 2098:
case 3488:
case 3212:
case 3178:
case 830:
case 3351:
case 3859:
case 3947:
case 2195:
case 2328:
case 2121:
case 2186:
case 3612:
case 2478:
case 81:
case 342:
case 102:
case 2054:
case 1610:
case 2764:
case 3803:
case 2785:
case 2447:
case 2955:
case 3287:
case 1214:
case 180:
case 90:
case 3441:
case 520:
case 2514:
case 2522:
case 1680:
case 3649:
case 3079:
case 697:
case 7:
case 2836:
case 589:
case 2358:
case 3275:
case 2309:
case 1042:
case 2673:
case 710:
case 3677:
case 3644:
case 1800:
case 2797:
case 2347:
case 1309:
case 1257:
case 1855:
case 4005:
case 529:
case 1507:
case 534:
case 1996:
case 2494:
case 3890:
case 3241:
case 561:
case 2964:
case 3515:
case 1638:
case 2391:
case 1759:
case 841:
case 3982:
case 208:
case 422:
case 3809:
case 1846:
case 1206:
case 3561:
case 3577:
case 2970:
case 3170:
case 1965:
case 3348:
case 3686:
case 728:
case 976:
case 2248:
case 3024:
case 247:
case 1715:
case 330:
case 337:
case 685:
case 1683:
case 3497:
case 3637:
case 161:
case 3535:
case 3664:
case 732:
case 2411:
case 3337:
case 1662:
case 3782:
case 1255:
case 790:
case 1903:
case 2978:
case 3707:
case 3009:
case 2778:
case 2094:
case 3248:
case 664:
case 807:
case 2527:
case 1881:
case 3293:
case 3848:
case 922:
case 3965:
case 1763:
case 2189:
case 1248:
case 2224:
case 3242:
case 1710:
case 4032:
case 2692:
case 1618:
case 3668:
case 1154:
case 3317:
case 3631:
case 3463:
case 1268:
case 2976:
case 902:
case 1612:
case 1321:
case 2903:
case 3209:
case 3362:
case 3855:
case 3831:
case 2187:
case 105:
case 748:
case 1147:
case 205:
case 2016:
case 3898:
case 536:
case 1847:
case 1404:
case 3063:
case 311:
case 2196:
case 1334:
case 4094:
case 3141:
case 722:
case 691:
case 3134:
case 103:
case 1553:
case 1730:
case 2235:
case 2641:
case 2847:
case 630:
case 3485:
case 4078:
case 1337:
case 1834:
case 86:
case 941:
case 64:
case 2548:
case 4059:
case 2740:
case 1055:
case 1202:
case 1529:
case 3622:
case 921:
case 2602:
case 1170:
case 3620:
case 3927:
case 2338:
case 528:
case 641:
case 1515:
case 3478:
case 1524:
case 1941:
case 1347:
case 467:
case 578:
case 459:
case 762:
case 3654:
case 3236:
case 1054:
case 4060:
case 3137:
case 2551:
case 2299:
case 1330:
case 3722:
case 2843:
case 1905:
case 2765:
case 2615:
case 2991:
case 3156:
case 1569:
case 4087:
case 3184:
case 1502:
case 531:
case 3440:
case 2750:
case 3469:
case 764:
case 3049:
case 3230:
case 3521:
case 2631:
case 384:
case 628:
case 1718:
case 3130:
case 59:
case 2664:
case 2865:
case 420:
case 736:
case 445:
case 1380:
case 2853:
case 1786:
case 1761:
case 973:
case 1825:
case 2687:
case 3020:
case 317:
case 325:
case 2280:
case 3997:
case 1246:
case 868:
case 3345:
case 1747:
case 53:
case 3868:
case 2128:
case 183:
case 1868:
case 824:
case 3550:
case 21:
case 1555:
case 2824:
case 1597:
case 1455:
case 3370:
case 1384:
case 1302:
case 1505:
case 3155:
case 2029:
case 3124:
case 190:
case 299:
case 3873:
case 3276:
case 1810:
case 438:
case 2087:
case 2680:
case 2198:
case 2002:
case 1719:
case 2690:
case 2370:
case 3870:
case 2751:
case 4063:
case 945:
case 67:
case 620:
case 1386:
case 3120:
case 476:
case 1866:
case 374:
case 3564:
case 1577:
case 3776:
case 3300:
case 1134:
case 3047:
case 3403:
case 1654:
case 1649:
case 1865:
case 1236:
case 3985:
case 1628:
case 3511:
case 980:
case 2967:
case 1478:
case 2753:
case 361:
case 670:
case 893:
case 2503:
case 279:
case 266:
case 163:
case 3909:
case 3470:
case 573:
case 4065:
case 3681:
case 3746:
case 2938:
case 1079:
case 2344:
case 1994:
case 1132:
case 182:
case 4006:
case 1367:
case 3992:
case 2136:
case 1275:
case 268:
case 2192:
case 100:
case 2051:
case 1212:
case 3824:
case 3198:
case 1227:
case 2260:
case 3697:
case 2756:
case 982:
case 1652:
case 1889:
case 1604:
case 441:
case 255:
case 1611:
case 3027:
case 5:
case 3358:
case 1668:
case 315:
case 3699:
case 1707:
case 1851:
case 2734:
case 588:
case 331:
case 1859:
case 2284:
case 3480:
case 3837:
case 93:
case 2727:
case 2668:
case 3720:
case 430:
case 3245:
case 808:
case 498:
case 3476:
case 1468:
case 1720:
case 1193:
case 783:
case 1963:
case 517:
case 1023:
case 3036:
case 4000:
case 984:
case 1600:
case 2790:
case 3924:
case 2262:
case 1294:
case 3282:
case 1794:
case 2082:
case 3319:
case 1556:
case 3199:
case 290:
case 1619:
case 1215:
case 2975:
case 566:
case 3532:
case 3949:
case 1471:
case 3496:
case 1993:
case 3114:
case 3817:
case 3623:
case 2650:
case 2305:
case 3990:
case 2025:
case 2084:
case 2773:
case 1540:
case 3894:
case 1425:
case 3771:
case 684:
case 1712:
case 216:
case 256:
case 1043:
case 3605:
case 1545:
case 2977:
case 319:
case 3843:
case 3922:
case 2536:
case 746:
case 2466:
case 1832:
case 3602:
case 1343:
case 2523:
case 1586:
case 2547:
case 848:
case 1762:
case 1359:
case 2973:
case 2398:
case 4022:
case 2775:
case 2868:
case 1278:
case 1566:
case 288:
case 1200:
case 87:
case 3966:
case 2877:
case 2500:
case 2122:
case 823:
case 4046:
case 1878:
case 1408:
case 3432:
case 3877:
case 1473:
case 3256:
case 1096:
case 3217:
case 3461:
case 3074:
case 2461:
case 1000:
case 939:
case 2838:
case 109:
case 2279:
case 3065:
case 833:
case 505:
case 2681:
case 2119:
case 3658:
case 1874:
case 4020:
case 1973:
case 3690:
case 375:
case 2132:
case 2614:
case 3931:
case 369:
case 1210:
case 1700:
case 555:
case 1521:
case 539:
case 1842:
case 3216:
case 1363:
case 3546:
case 184:
case 1919:
case 3411:
case 3882:
case 2376:
case 2889:
case 3691:
case 1313:
case 1869:
case 2282:
case 953:
case 3385:
case 3223:
case 990:
case 2954:
case 2272:
case 1256:
case 3672:
case 574:
case 2324:
case 2438:
case 2956:
case 1475:
case 2079:
case 2030:
case 4041:
case 2227:
case 2806:
case 2265:
case 2307:
case 3673:
case 948:
case 1288:
case 2184:
case 3575:
case 3481:
case 792:
case 2826:
case 187:
case 1969:
case 1606:
case 2779:
case 1091:
case 3087:
case 1121:
case 1231:
case 1345:
case 2530:
case 2313:
case 3994:
case 3758:
case 2233:
case 499:
case 680:
case 2032:
case 4051:
case 125:
case 1315:
case 1637:
case 3349:
case 2266:
case 1393:
case 2813:
case 3153:
case 3070:
case 3709:
case 2574:
case 1948:
case 4040:
case 3830:
case 1494:
case 1764:
case 3716:
case 3729:
case 3755:
case 3267:
case 1940:
case 2554:
case 2884:
case 203:
case 1773:
case 4061:
case 3434:
case 1232:
case 1501:
case 908:
case 3557:
case 2857:
case 2380:
case 2335:
case 3460:
case 1757:
case 386:
case 943:
case 871:
case 3041:
case 3555:
case 1995:
case 2089:
case 66:
case 2006:
case 3280:
case 2062:
case 466:
case 4075:
case 1085:
case 951:
case 946:
case 3404:
case 3107:
case 3626:
case 395:
case 3713:
case 654:
case 742:
case 954:
case 1564:
case 294:
case 2666:
case 1666:
case 1126:
o =  1;break;
default: o = 0;
}
if (!/Hitomi\.la/.test(document.title)) { return 3; }
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1641184094/'
};


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
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg.m(x));
      else subdomainx = String.fromCharCode(97 + 0);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg.b + gg.s(hash)}/${hash}.${
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
    btresult.push(
      `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
    );
    stresult.push(
      `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
    );
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}
