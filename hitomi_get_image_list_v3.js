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
case 3850:
case 4035:
case 3096:
case 3534:
case 2668:
case 3611:
case 2552:
case 633:
case 1695:
case 991:
case 1248:
case 1174:
case 1317:
case 558:
case 1642:
case 343:
case 3660:
case 1975:
case 475:
case 2858:
case 2930:
case 3383:
case 4003:
case 3546:
case 3163:
case 1679:
case 3932:
case 427:
case 2954:
case 1242:
case 1759:
case 3354:
case 2662:
case 3260:
case 1707:
case 940:
case 3063:
case 2204:
case 2271:
case 3846:
case 838:
case 262:
case 36:
case 198:
case 1999:
case 1648:
case 1306:
case 2109:
case 626:
case 2852:
case 982:
case 2157:
case 1074:
case 1780:
case 1020:
case 1222:
case 1156:
case 411:
case 2853:
case 919:
case 1019:
case 731:
case 3255:
case 2305:
case 3209:
case 2988:
case 2307:
case 3907:
case 3388:
case 2584:
case 3905:
case 2111:
case 769:
case 698:
case 2333:
case 4064:
case 302:
case 2839:
case 378:
case 1394:
case 1628:
case 560:
case 3062:
case 248:
case 2499:
case 1040:
case 2380:
case 1531:
case 984:
case 797:
case 155:
case 3980:
case 1643:
case 3865:
case 312:
case 893:
case 78:
case 4002:
case 1140:
case 520:
case 2715:
case 185:
case 3162:
case 1831:
case 1119:
case 3655:
case 3657:
case 3916:
case 401:
case 1622:
case 3775:
case 2316:
case 21:
case 3526:
case 1351:
case 133:
case 3609:
case 2477:
case 2383:
case 1866:
case 322:
case 3751:
case 3604:
case 1416:
case 2163:
case 3671:
case 510:
case 2451:
case 95:
case 1581:
case 3930:
case 3858:
case 1022:
case 1219:
case 3057:
case 3055:
case 2391:
case 1917:
case 969:
case 1915:
case 439:
case 2938:
case 3338:
case 2534:
case 1527:
case 106:
case 931:
case 719:
case 22:
case 1619:
case 4041:
case 3157:
case 1122:
case 421:
case 2550:
case 1893:
case 1825:
case 3794:
case 1827:
case 3852:
case 3109:
case 3204:
case 2063:
case 3271:
case 2589:
case 1788:
case 754:
case 362:
case 3332:
case 2932:
case 1640:
case 3954:
case 2354:
case 1881:
case 2062:
case 2406:
case 348:
case 3499:
case 737:
case 3380:
case 3333:
case 2567:
case 3706:
case 1598:
case 2799:
case 3839:
case 3663:
case 1847:
case 3296:
case 2209:
case 1432:
case 2388:
case 2907:
case 4087:
case 2905:
case 364:
case 3111:
case 1123:
case 1048:
case 638:
case 30:
case 1601:
case 1620:
case 1674:
case 791:
case 2959:
case 3359:
case 1754:
case 2526:
case 1097:
case 1095:
case 1023:
case 1148:
case 2068:
case 3696:
case 2609:
case 3475:
case 549:
case 606:
case 885:
case 2655:
case 2657:
case 1274:
case 2777:
case 2382:
case 1179:
case 3982:
case 3715:
case 2162:
case 2071:
case 2865:
case 535:
case 3263:
case 866:
case 3539:
case 2417:
case 833:
case 1545:
case 2115:
case 1740:
case 3901:
case 960:
case 3974:
case 2301:
case 2320:
case 308:
case 1138:
case 2812:
case 710:
case 1535:
case 3328:
case 2928:
case 2570:
case 692:
case 27:
case 3177:
case 651:
case 1282:
case 3314:
case 2518:
case 1719:
case 1276:
case 1835:
case 3294:
case 3768:
case 250:
case 3343:
case 1497:
case 1495:
case 3075:
case 1756:
case 1682:
case 3861:
case 646:
case 2471:
case 554:
case 2404:
case 4:
case 2017:
case 1355:
case 3878:
case 1357:
case 296:
case 1996:
case 3771:
case 3810:
case 1803:
case 700:
case 1309:
case 363:
case 2106:
case 3395:
case 3206:
case 1968:
case 3829:
case 2997:
case 1159:
case 3617:
case 3956:
case 2356:
case 3409:
case 1180:
case 2496:
case 1630:
case 887:
case 2757:
case 552:
case 2942:
case 3573:
case 591:
case 1904:
case 1508:
case 3796:
case 2836:
case 753:
case 2194:
case 3940:
case 857:
case 2340:
case 749:
case 1962:
case 3379:
case 2275:
case 1080:
case 3873:
case 1720:
case 1230:
case 783:
case 2094:
case 1283:
case 2536:
case 3529:
case 1007:
case 1864:
case 2544:
case 2699:
case 213:
case 832:
case 540:
case 1414:
case 1428:
case 1502:
case 1116:
case 1291:
case 2813:
case 1059:
case 3217:
case 735:
case 3215:
case 953:
case 2175:
case 1841:
case 1130:
case 1680:
case 3914:
case 2314:
case 1054:
case 24:
case 894:
case 2328:
case 4025:
case 2886:
case 4093:
case 380:
case 758:
case 2694:
case 1748:
case 632:
case 2549:
case 1633:
case 1419:
case 69:
case 2510:
case 3462:
case 2251:
case 272:
case 3006:
case 1440:
case 134:
case 2762:
case 342:
case 657:
case 3115:
case 3117:
case 1216:
case 3374:
case 2578:
case 2901:
case 2974:
case 425:
case 396:
case 2810:
case 1207:
case 1205:
case 1396:
case 3512:
case 3106:
case 2460:
case 2199:
case 218:
case 3471:
case 687:
case 1616:
case 465:
case 3404:
case 1259:
case 3015:
case 477:
case 1742:
case 1955:
case 1091:
case 1030:
case 2075:
case 1280:
case 2861:
case 3824:
case 1797:
case 2294:
case 1795:
case 788:
case 3870:
case 1233:
case 1569:
case 2849:
case 441:
case 1456:
case 2343:
case 676:
case 2572:
case 2796:
case 3709:
case 176:
case 2457:
case 3677:
case 1082:
case 1722:
case 3496:
case 2342:
case 1960:
case 881:
case 2615:
case 55:
case 2956:
case 3513:
case 846:
case 1521:
case 2206:
case 3299:
case 2829:
case 1911:
case 2323:
case 1188:
case 760:
case 3463:
case 851:
case 58:
case 157:
case 1800:
case 3813:
case 3319:
case 720:
case 2763:
case 1238:
case 3151:
case 368:
case 19:
case 132:
case 83:
case 1885:
case 3094:
case 274:
case 1474:
case 3340:
case 3275:
case 2379:
case 1632:
case 3979:
case 4030:
case 8:
case 1378:
case 3855:
case 3857:
case 2436:
case 1822:
case 1690:
case 141:
case 1193:
case 254:
case 1127:
case 2134:
case 2684:
case 2903:
case 3226:
case 3809:
case 3152:
case 1310:
case 1843:
case 3744:
case 704:
case 2146:
case 2937:
case 209:
case 1924:
case 2729:
case 1402:
case 3337:
case 2239:
case 3335:
case 2563:
case 76:
case 3058:
case 1361:
case 1918:
case 924:
case 2444:
case 91:
case 1372:
case 434:
case 1543:
case 2639:
case 2189:
case 219:
case 1386:
case 714:
case 3267:
case 1828:
case 3969:
case 1081:
case 1231:
case 90:
case 1721:
case 125:
case 1464:
case 57:
case 964:
case 2341:
case 2773:
case 3557:
case 3555:
case 1522:
case 1912:
case 3473:
case 3626:
case 830:
case 3052:
case 284:
case 542:
case 156:
case 1027:
case 2034:
case 2596:
case 1025:
case 1787:
case 656:
case 3634:
case 3184:
case 3250:
case 1769:
case 3511:
case 2652:
case 1597:
case 2026:
case 2964:
case 815:
case 3921:
case 962:
case 240:
case 3486:
case 1741:
case 568:
case 1373:
case 2258:
case 625:
case 2167:
case 1047:
case 49:
case 3712:
case 1198:
case 3039:
case 3987:
case 2908:
case 2571:
case 544:
case 2385:
case 331:
case 677:
case 1098:
case 2804:
case 1147:
case 2065:
case 252:
case 1936:
case 2418:
case 3461:
case 35:
case 3650:
case 2749:
case 641:
case 3770:
case 3234:
case 476:
case 3724:
case 2761:
case 1192:
case 528:
case 2470:
case 973:
case 922:
case 3302:
case 2424:
case 2058:
case 1318:
case 1961:
case 1702:
case 2429:
case 2667:
case 2744:
case 147:
case 886:
case 1698:
case 1247:
case 1370:
case 3935:
case 3146:
case 3089:
case 3937:
case 2337:
case 3729:
case 1324:
case 841:
case 3134:
case 3903:
case 3050:
case 3253:
case 1520:
case 1978:
case 2855:
case 1574:
case 3436:
case 563:
case 2626:
case 3150:
case 2052:
case 1312:
case 773:
case 3284:
case 1692:
case 1820:
case 3773:
case 523:
case 2555:
case 3653:
case 4032:
case 1485:
case 1487:
case 2941:
case 3341:
case 3413:
case 1400:
case 1972:
case 130:
case 3369:
case 54:
case 2267:
case 1647:
case 43:
case 2646:
case 2308:
case 4005:
case 2039:
case 1266:
case 71:
case 2289:
case 229:
case 4059:
case 2560:
case 96:
case 1681:
case 1131:
case 4080:
case 2053:
case 3321:
case 451:
case 2486:
case 1469:
case 340:
case 28:
case 1693:
case 3772:
case 1625:
case 2184:
case 2634:
case 1627:
case 2250:
case 3652:
case 2511:
case 2364:
case 270:
case 3026:
case 492:
case 297:
case 1519:
case 2718:
case 1856:
case 1090:
case 481:
case 2449:
case 671:
case 748:
case 2153:
case 446:
case 989:
case 3424:
case 2302:
case 2650:
case 3126:
case 1344:
case 3749:
case 2084:
case 1293:
case 1929:
case 2811:
case 3868:
case 1735:
case 1225:
case 1737:
case 1666:
case 2689:
case 269:
case 3804:
case 1703:
case 3067:
case 647:
case 352:
case 105:
case 6:
case 4016:
case 3778:
case 391:
case 1540:
case 3562:
case 914:
case 944:
case 1952:
case 3229:
case 4028:
case 2899:
case 1334:
case 3806:
case 3927:
case 3925:
case 617:
case 1591:
case 3515:
case 2178:
case 2439:
case 2613:
case 968:
case 2381:
case 2577:
case 3981:
case 3753:
case 121:
case 562:
case 3673:
case 1792:
case 3426:
case 3124:
case 416:
case 3170:
case 763:
case 1608:
case 736:
case 300:
case 1069:
case 2086:
case 2726:
case 1583:
case 2236:
case 2061:
case 1141:
case 1554:
case 1958:
case 161:
case 4022:
case 310:
case 1169:
case 2186:
case 1490:
case 2049:
case 1389:
case 3784:
case 2172:
case 1883:
case 772:
case 723:
case 3966:
case 1431:
case 4043:
case 2599:
case 1798:
case 3112:
case 2765:
case 1891:
case 74:
case 1602:
case 3815:
case 2078:
case 3465:
case 607:
case 3758:
case 3390:
case 1121:
case 3678:
case 524:
case 3489:
case 1100:
case 3113:
case 950:
case 2458:
case 2212:
case 774:
case 3851:
case 645:
case 1588:
case 383:
case 279:
case 2789:
case 1984:
case 1637:
case 1187:
case 2624:
case 493:
case 4095:
case 3594:
case 3036:
case 4023:
case 3998:
case 220:
case 1365:
case 3331:
case 2931:
case 1876:
case 661:
case 996:
case 2173:
case 1882:
case 2618:
case 3661:
case 2347:
case 260:
case 3686:
case 1235:
case 2734:
case 3894:
case 942:
case 2224:
case 1085:
case 1793:
case 1939:
case 2270:
case 1087:
case 2073:
case 2218:
case 2452:
case 1576:
case 621:
case 1582:
case 811:
case 1953:
case 3278:
case 1021:
case 3446:
case 3992:
case 2129:
case 1888:
case 353:
case 3144:
case 1137:
case 3453:
case 3086:
case 200:
case 3726:
case 796:
case 4074:
case 3575:
case 559:
case 4020:
case 611:
case 2426:
case 3161:
case 127:
case 1447:
case 56:
case 3439:
case 504:
case 1103:
case 3110:
case 2229:
case 2806:
case 1934:
case 2927:
case 2925:
case 1200:
case 1731:
case 514:
case 2815:
case 3078:
case 2467:
case 1950:
case 1838:
case 780:
case 3644:
case 2112:
case 3765:
case 3010:
case 1003:
case 3636:
case 210:
case 3049:
case 1287:
case 2070:
case 1035:
case 3172:
case 2966:
case 2024:
case 1989:
case 1037:
case 3877:
case 1358:
case 2273:
case 3484:
case 2331:
case 1580:
case 395:
case 807:
case 1241:
case 2661:
case 3618:
case 3624:
case 699:
case 768:
case 713:
case 3670:
case 2272:
case 3398:
case 3750:
case 2998:
case 1533:
case 2610:
case 2044:
case 2851:
case 3789:
case 379:
case 1507:
case 1505:
case 3990:
case 2758:
case 667:
case 1816:
case 675:
case 2113:
case 2489:
case 1002:
case 1481:
case 3746:
case 94:
case 1064:
case 1926:
case 2210:
case 3612:
case 2278:
case 1859:
case 2013:
case 1353:
case 627:
case 3392:
case 578:
case 1641:
case 4019:
case 502:
case 1427:
case 972:
case 1493:
case 3345:
case 2249:
case 2686:
case 2945:
case 360:
case 2947:
case 1339:
case 426:
case 1008:
case 3224:
case 728:
case 1546:
case 2416:
case 1163:
case 2043:
case 2128:
case 458:
case 1383:
case 2866:
case 189:
case 4010:
case 756:
case 612:
case 599:
case 3716:
case 2581:
case 3279:
case 2375:
case 4078:
case 2114:
case 2240:
case 1660:
case 4061:
case 725:
case 3315:
case 2776:
case 2917:
case 3101:
case 3120:
case 2656:
case 2022:
case 3174:
case 905:
case 3476:
case 567:
case 790:
case 2593:
case 2527:
case 3020:
case 765:
case 2619:
case 4072:
case 2480:
case 1196:
case 216:
case 3223:
case 16:
case 3733:
case 4086:
case 1211:
case 2825:
case 3648:
case 915:
case 238:
case 3295:
case 3306:
case 678:
case 488:
case 1589:
case 2788:
case 2640:
case 3242:
case 3759:
case 2014:
case 1260:
case 2407:
case 1932:
case 3488:
case 2079:
case 1980:
case 1406:
case 3040:
case 511:
case 3243:
case 2847:
case 1171:
case 1565:
case 80:
case 2994:
case 1567:
case 1799:
case 178:
case 1933:
case 2195:
case 3454:
case 1209:
case 1388:
case 1905:
case 3590:
case 4073:
case 3019:
case 1257:
case 2754:
case 3222:
case 2892:
case 3156:
case 1609:
case 614:
case 1526:
case 293:
case 2097:
case 3351:
case 333:
case 420:
case 2220:
case 3890:
case 3622:
case 947:
case 3056:
case 2274:
case 495:
case 1777:
case 3119:
case 1655:
case 1376:
case 3214:
case 643:
case 2042:
case 1382:
case 2438:
case 1417:
case 1415:
case 971:
case 81:
case 2545:
case 112:
case 3643:
case 824:
case 4029:
case 3738:
case 889:
case 61:
case 410:
case 2695:
case 2697:
case 2248:
case 1009:
case 1338:
case 4024:
case 3525:
case 2315:
case 1057:
case 3219:
case 4018:
case 843:
case 1991:
case 3776:
case 2317:
case 1055:
case 3915:
case 2101:
case 3022:
case 545:
case 2975:
case 539:
case 1858:
case 3375:
case 1930:
case 3114:
case 2642:
case 1262:
case 3416:
case 3128:
case 1671:
case 3866:
case 1751:
case 122:
case 2242:
case 2759:
case 771:
case 3014:
case 1332:
case 2679:
case 2488:
case 4012:
case 3028:
case 2707:
case 521:
case 2705:
case 804:
case 1271:
case 3788:
case 3566:
case 316:
case 747:
case 859:
case 664:
case 298:
case 2223:
case 400:
case 3893:
case 2733:
case 60:
case 3825:
case 2306:
case 3827:
case 1794:
case 338:
case 2074:
case 3433:
case 1157:
case 2590:
case 1359:
case 3601:
case 2222:
case 3620:
case 878:
case 925:
case 1305:
case 1307:
case 3432:
case 2243:
case 3845:
case 1333:
case 3994:
case 3598:
case 1706:
case 662:
case 1380:
case 2531:
case 4013:
case 255:
case 956:
case 1499:
case 1160:
case 2040:
case 4044:
case 622:
case 3547:
case 673:
case 2643:
case 2738:
case 3898:
case 941:
case 1715:
case 2214:
case 285:
case 3791:
case 1976:
case 986:
case 449:
case 3438:
case 1982:
case 435:
case 3201:
case 715:
case 2483:
case 1696:
case 977:
case 1477:
case 507:
case 3951:
case 3095:
case 233:
case 1884:
case 530:
case 1561:
case 1314:
case 2054:
case 3032:
case 1175:
case 2841:
case 3282:
case 2748:
case 1549:
case 2183:
case 745:
case 2419:
case 1872:
case 4034:
case 3537:
case 1886:
case 880:
case 3138:
case 3688:
case 419:
case 394:
case 4046:
case 3503:
case 911:
case 108:
case 1920:
case 1578:
case 1974:
case 2191:
case 1762:
case 2659:
case 3740:
case 1651:
case 850:
case 163:
case 1199:
case 3442:
case 1771:
case 409:
case 3803:
case 3288:
case 2207:
case 721:
case 1878:
case 3355:
case 2259:
case 3357:
case 2957:
case 2955:
case 2030:
case 3132:
case 3756:
case 3682:
case 1077:
case 1861:
case 2154:
case 3497:
case 2541:
case 3423:
case 5:
case 454:
case 1343:
case 3837:
case 3835:
case 2083:
case 2569:
case 1457:
case 828:
case 967:
case 2371:
case 1796:
case 3422:
case 2304:
case 3254:
case 2076:
case 1342:
case 437:
case 2960:
case 1573:
case 3630:
case 717:
case 346:
case 2232:
case 1956:
case 2521:
case 3016:
case 491:
case 3691:
case 3802:
case 3159:
case 1617:
case 2638:
case 3105:
case 636:
case 2743:
case 3107:
case 663:
case 1206:
case 618:
case 1395:
case 2911:
case 2368:
case 4065:
case 4067:
case 257:
case 3291:
case 1217:
case 3059:
case 2714:
case 3502:
case 3116:
case 672:
case 623:
case 33:
case 3007:
case 1529:
case 2238:
case 2088:
case 515:
case 174:
case 813:
case 3283:
case 3808:
case 392:
case 3774:
case 3080:
case 707:
case 2182:
case 3230:
case 3654:
case 2362:
case 440:
case 64:
case 3962:
case 3216:
case 1301:
case 1320:
case 3191:
case 1115:
case 2740:
case 2138:
case 1812:
case 3605:
case 2503:
case 799:
case 1006:
case 3440:
case 808:
case 4052:
case 3183:
case 17:
case 872:
case 3363:
case 2535:
case 917:
case 1524:
case 1928:
case 590:
case 1518:
case 775:
case 2032:
case 644:
case 767:
case 3130:
case 3797:
case 2837:
case 577:
case 3795:
case 3083:
case 2835:
case 150:
case 3233:
case 863:
case 3030:
case 2682:
case 3280:
case 3541:
case 3154:
case 2355:
case 1760:
case 1015:
case 2357:
case 1922:
case 1404:
case 1512:
case 628:
case 2442:
case 196:
case 3909:
case 2288:
case 2803:
case 3396:
case 2038:
case 2309:
case 3188:
case 469:
case 2107:
case 3743:
case 1299:
case 2968:
case 3911:
case 2564:
case 3368:
case 1051:
case 431:
case 1513:
case 3521:
case 1356:
case 2443:
case 2691:
case 2802:
case 711:
case 3076:
case 1942:
case 1677:
case 1675:
case 1496:
case 2630:
case 3232:
case 1194:
case 2133:
case 4084:
case 3585:
case 3371:
case 2904:
case 1709:
case 2971:
case 144:
case 1275:
case 2774:
case 4053:
case 3182:
case 3632:
case 3362:
case 2654:
case 1340:
case 48:
case 3401:
case 470:
case 2033:
case 67:
case 2808:
case 39:
case 113:
case 3728:
case 2007:
case 3238:
case 4039:
case 2005:
case 874:
case 3088:
case 642:
case 2291:
case 2428:
case 2502:
case 993:
case 631:
case 1429:
case 3181:
case 3514:
case 2318:
case 3361:
case 2961:
case 2370:
case 854:
case 496:
case 3066:
case 3924:
case 798:
case 3843:
case 1152:
case 450:
case 3310:
case 341:
case 3125:
case 809:
case 3127:
case 697:
case 2978:
case 1855:
case 2574:
case 3378:
case 819:
case 1509:
case 2708:
case 68:
case 3093:
case 1052:
case 47:
case 2312:
case 3408:
case 2485:
case 1555:
case 2874:
case 1158:
case 1713:
case 3721:
case 325:
case 230:
case 4006:
case 2298:
case 1969:
case 3828:
case 3372:
case 3543:
case 629:
case 2400:
case 2421:
case 1308:
case 1987:
case 1289:
case 2840:
case 2131:
case 3373:
case 3879:
case 532:
case 840:
case 1486:
case 2190:
case 2556:
case 1900:
case 785:
case 1053:
case 2313:
case 1250:
case 3523:
case 3769:
case 170:
case 3597:
case 4094:
case 18:
case 3848:
case 1634:
case 2627:
case 1302:
case 3437:
case 755:
case 2519:
case 1718:
case 3192:
case 2090:
case 1084:
case 2929:
case 1811:
case 3823:
case 1770:
case 2735:
case 2227:
case 3329:
case 587:
case 3897:
case 3944:
case 15:
case 3548:
case 3098:
case 403:
case 3147:
case 726:
case 3145:
case 1246:
case 2666:
case 2540:
case 3403:
case 1410:
case 131:
case 3842:
case 2031:
case 205:
case 2281:
case 3579:
case 3292:
case 2822:
case 1436:
case 2690:
case 637:
case 3520:
case 1253:
case 371:
case 3501:
case 3978:
case 2378:
case 4075:
case 1903:
case 286:
case 241:
case 2125:
case 1146:
case 109:
case 2970:
case 436:
case 418:
case 3245:
case 652:
case 716:
case 3247:
case 265:
case 3702:
case 2631:
case 2181:
case 3:
case 3318:
case 277:
case 330:
case 3764:
case 423:
case 472:
case 706:
case 3298:
case 408:
case 290:
case 2828:
case 1639:
case 119:
case 3972:
case 3421:
case 1046:
case 682:
case 2081:
case 2231:
case 225:
case 2721:
case 2522:
case 640:
case 2290:
case 3820:
case 3874:
case 256:
case 2027:
case 1034:
case 2025:
case 2785:
case 1284:
case 2912:
case 1150:
case 2769:
case 1786:
case 1026:
case 1772:
case 829:
case 3625:
case 3627:
case 53:
case 140:
case 3190:
case 2913:
case 3819:
case 1300:
case 998:
case 3840:
case 315:
case 3131:
case 3681:
case 2542:
case 1258:
case 1412:
case 2879:
case 3973:
case 1504:
case 1908:
case 1387:
case 88:
case 1571:
case 1385:
case 619:
case 2045:
case 3540:
case 897:
case 1562:
case 305:
case 3281:
case 2098:
case 2147:
case 1710:
case 152:
case 2145:
case 85:
case 3666:
case 1868:
case 3929:
case 869:
case 2895:
case 3735:
case 2329:
case 1418:
case 1252:
case 1902:
case 1470:
case 2435:
case 1424:
case 3856:
case 100:
case 2492:
case 3608:
case 1426:
case 3792:
case 1673:
case 1118:
case 1753:
case 1981:
case 3530:
case 321:
case 2447:
case 3591:
case 1517:
case 1993:
case 1229:
case 3334:
case 1739:
case 2934:
case 1927:
case 1925:
case 2103:
case 1012:
case 462:
case 3664:
case 267:
case 506:
case 2200:
case 2731:
case 3602:
case 1815:
case 1817:
case 2950:
case 3798:
case 3264:
case 473:
case 683:
case 3431:
case 1629:
case 3389:
case 2287:
case 4009:
case 3883:
case 299:
case 2037:
case 794:
case 858:
case 3169:
case 110:
case 361:
case 4057:
case 1018:
case 3554:
case 3830:
case 1273:
case 1450:
case 3876:
case 2965:
case 1594:
case 1998:
case 1286:
case 610:
case 2269:
case 3365:
case 3637:
case 3635:
case 73:
case 879:
case 2108:
case 792:
case 3766:
case 3588:
case 3984:
case 2507:
case 2505:
case 820:
case 1610:
case 2164:
case 1678:
case 2466:
case 3100:
case 1113:
case 149:
case 2816:
case 4060:
case 307:
case 2926:
case 860:
case 1210:
case 153:
case 3888:
case 1144:
case 1551:
case 2805:
case 746:
case 3953:
case 2516:
case 781:
case 1446:
case 3021:
case 2353:
case 211:
case 934:
case 2641:
case 1261:
case 3576:
case 3235:
case 3727:
case 2008:
case 3725:
case 3237:
case 2833:
case 3793:
case 464:
case 3087:
case 600:
case 1249:
case 1752:
case 1945:
case 2669:
case 40:
case 1325:
case 188:
case 4063:
case 1327:
case 3934:
case 1393:
case 459:
case 1244:
case 2747:
case 951:
case 3352:
case 327:
case 2792:
case 3832:
case 1161:
case 1575:
case 2854:
case 1577:
case 93:
case 221:
case 46:
case 3492:
case 2583:
case 1236:
case 660:
case 3687:
case 404:
case 3946:
case 2346:
case 1484:
case 695:
case 1875:
case 2554:
case 3790:
case 239:
case 2389:
case 3285:
case 2208:
case 2883:
case 3035:
case 3989:
case 42:
case 1636:
case 620:
case 1186:
case 2490:
case 1599:
case 2798:
case 3838:
case 3950:
case 1010:
case 1767:
case 679:
case 245:
case 981:
case 443:
case 2891:
case 3731:
case 1213:
case 3200:
case 375:
case 2602:
case 1078:
case 2121:
case 566:
case 3559:
case 1990:
case 533:
case 3816:
case 3384:
case 1789:
case 1029:
case 2984:
case 4004:
case 3505:
case 1458:
case 1212:
case 2603:
case 3164:
case 3965:
case 3967:
case 2367:
case 120:
case 2365:
case 3533:
case 2637:
case 1624:
case 79:
case 3241:
case 1173:
case 2882:
case 301:
case 1931:
case 757:
case 3580:
case 849:
case 1734:
case 2237:
case 555:
case 3833:
case 2939:
case 1347:
case 160:
case 3427:
case 311:
case 3493:
case 2582:
case 1073:
case 2576:
case 4062:
case 217:
case 3859:
case 3102:
case 2000:
case 3353:
case 2021:
case 3926:
case 402:
case 1612:
case 478:
case 2326:
case 3807:
case 3481:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1772301601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,];
var gg_b = "1772301601/";

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
