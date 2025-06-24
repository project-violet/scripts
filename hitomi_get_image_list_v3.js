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
case 2981:
case 3961:
case 2802:
case 1732:
case 1502:
case 645:
case 3389:
case 2514:
case 2600:
case 3655:
case 1159:
case 2895:
case 4:
case 1637:
case 1754:
case 1595:
case 2141:
case 1554:
case 1607:
case 260:
case 1795:
case 1969:
case 787:
case 3694:
case 2645:
case 1824:
case 1702:
case 2832:
case 2714:
case 1532:
case 2630:
case 1009:
case 2577:
case 760:
case 1190:
case 991:
case 1831:
case 4006:
case 1455:
case 3573:
case 3437:
case 3578:
case 3926:
case 3283:
case 3362:
case 2425:
case 1770:
case 524:
case 1296:
case 128:
case 659:
case 2073:
case 19:
case 3031:
case 3193:
case 679:
case 1186:
case 3839:
case 119:
case 3001:
case 1142:
case 3356:
case 2408:
case 1982:
case 1039:
case 1280:
case 2403:
case 992:
case 2731:
case 1801:
case 1494:
case 1946:
case 23:
case 177:
case 3407:
case 789:
case 2336:
case 1011:
case 3674:
case 2420:
case 2529:
case 1906:
case 546:
case 1841:
case 2448:
case 1417:
case 3447:
case 3699:
case 1964:
case 3029:
case 4046:
case 242:
case 1936:
case 4082:
case 1285:
case 3019:
case 3458:
case 1691:
case 2875:
case 3849:
case 2124:
case 1499:
case 2022:
case 2177:
case 2618:
case 117:
case 2692:
case 448:
case 3178:
case 2890:
case 597:
case 2797:
case 179:
case 1786:
case 2605:
case 3522:
case 3798:
case 3712:
case 3834:
case 3593:
case 1897:
case 3598:
case 628:
case 159:
case 1653:
case 1586:
case 3722:
case 3491:
case 1658:
case 1542:
case 69:
case 2093:
case 1004:
case 2628:
case 2012:
case 2101:
case 4069:
case 3097:
case 568:
case 3552:
case 3648:
case 63:
case 3643:
case 1613:
case 1177:
case 164:
case 58:
case 217:
case 2499:
case 2590:
case 3704:
case 745:
case 3822:
case 2052:
case 4081:
case 1605:
case 3090:
case 956:
case 279:
case 3109:
case 3812:
case 3893:
case 2170:
case 1597:
case 3898:
case 2653:
case 259:
case 189:
case 3610:
case 3504:
case 2790:
case 687:
case 362:
case 3042:
case 2066:
case 537:
case 1012:
case 1093:
case 1628:
case 3752:
case 2276:
case 2775:
case 3405:
case 2102:
case 1420:
case 1114:
case 1529:
case 94:
case 2829:
case 3059:
case 3144:
case 2011:
case 1719:
case 8:
case 1541:
case 3413:
case 2964:
case 466:
case 3984:
case 344:
case 3418:
case 141:
case 1448:
case 660:
case 2417:
case 2841:
case 1443:
case 3511:
case 2906:
case 2450:
case 2559:
case 3428:
case 825:
case 3711:
case 2759:
case 3265:
case 1051:
case 3423:
case 2154:
case 2049:
case 717:
case 663:
case 3521:
case 3075:
case 1741:
case 2427:
case 142:
case 1410:
case 1124:
case 1519:
case 3435:
case 1364:
case 1457:
case 2691:
case 1306:
case 1729:
case 2575:
case 2021:
case 3851:
case 3549:
case 779:
case 2819:
case 187:
case 2455:
case 2831:
case 2190:
case 2009:
case 3878:
case 257:
case 326:
case 1073:
case 1287:
case 1078:
case 916:
case 3509:
case 3400:
case 2770:
case 1425:
case 3134:
case 1268:
case 1346:
case 2142:
case 3166:
case 219:
case 3445:
case 3709:
case 2479:
case 3326:
case 2186:
case 3539:
case 3070:
case 1777:
case 277:
case 13:
case 3260:
case 2946:
case 1403:
case 2494:
case 2801:
case 2982:
case 2280:
case 719:
case 1369:
case 3095:
case 3625:
case 421:
case 1802:
case 2814:
case 80:
case 1724:
case 1141:
case 3002:
case 2671:
case 2595:
case 777:
case 3638:
case 163:
case 2637:
case 2044:
case 642:
case 3603:
case 3989:
case 3608:
case 1854:
case 2795:
case 641:
case 3361:
case 422:
case 1630:
case 3615:
case 1119:
case 79:
case 3744:
case 1714:
case 2702:
case 2824:
case 3054:
case 1645:
case 1185:
case 3908:
case 2669:
case 455:
case 2416:
case 0:
case 1254:
case 1232:
case 3915:
case 1930:
case 2224:
case 1371:
case 76:
case 3355:
case 482:
case 788:
case 4035:
case 1945:
case 1337:
case 1900:
case 1202:
case 811:
case 230:
case 1307:
case 4005:
case 2330:
case 3938:
case 193:
case 2345:
case 4018:
case 404:
case 4092:
case 4013:
case 618:
case 574:
case 1972:
case 3783:
case 730:
case 3767:
case 2787:
case 1796:
case 2880:
case 2646:
case 3662:
case 694:
case 3273:
case 2067:
case 2231:
case 1780:
case 3278:
case 3063:
case 2088:
case 127:
case 2277:
case 3068:
case 629:
case 2461:
case 26:
case 3656:
case 3583:
case 733:
case 2568:
case 2563:
case 1887:
case 1585:
case 2636:
case 2885:
case 1065:
case 2219:
case 573:
case 1275:
case 2991:
case 550:
case 851:
case 734:
case 496:
case 690:
case 1259:
case 1391:
case 1785:
case 1286:
case 2297:
case 1242:
case 3317:
case 1940:
case 3293:
case 4045:
case 1347:
case 2318:
case 2313:
case 606:
case 392:
case 627:
case 1576:
case 400:
case 1923:
case 2340:
case 391:
case 3943:
case 1776:
case 52:
case 1992:
case 335:
case 1290:
case 1918:
case 2947:
case 2335:
case 403:
case 2187:
case 3167:
case 2323:
case 2168:
case 1905:
case 3188:
case 3222:
case 2328:
case 2163:
case 3920:
case 678:
case 395:
case 688:
case 2935:
case 3204:
case 1953:
case 3266:
case 2242:
case 2940:
case 1297:
case 66:
case 3343:
case 940:
case 3160:
case 4007:
case 2576:
case 3320:
case 2928:
case 3436:
case 1876:
case 849:
case 3927:
case 4037:
case 294:
case 2918:
case 2484:
case 1947:
case 1335:
case 3310:
case 2992:
case 2290:
case 3464:
case 2913:
case 2776:
case 4071:
case 3406:
case 2358:
case 1340:
case 3917:
case 2353:
case 926:
case 1323:
case 2905:
case 907:
case 218:
case 1636:
case 794:
case 855:
case 2585:
case 1991:
case 580:
case 436:
case 583:
case 411:
case 2391:
case 2785:
case 3765:
case 3211:
case 875:
case 1664:
case 2796:
case 4091:
case 2060:
case 376:
case 1763:
case 2270:
case 793:
case 1682:
case 3469:
case 3616:
case 569:
case 1880:
case 800:
case 502:
case 790:
case 961:
case 1277:
case 308:
case 803:
case 2780:
case 206:
case 3626:
case 1563:
case 3209:
case 3867:
case 356:
case 16:
case 1587:
case 258:
case 727:
case 2254:
case 1416:
case 1907:
case 290:
case 1669:
case 706:
case 815:
case 1300:
case 3994:
case 2185:
case 3325:
case 471:
case 2337:
case 133:
case 2371:
case 4058:
case 452:
case 3338:
case 2232:
case 3244:
case 2681:
case 2307:
case 34:
case 472:
case 3303:
case 3308:
case 2456:
case 1214:
case 3955:
case 1426:
case 1345:
case 1937:
case 1330:
case 3315:
case 2339:
case 984:
case 1826:
case 1762:
case 3931:
case 3370:
case 2978:
case 38:
case 1556:
case 1683:
case 625:
case 1667:
case 3026:
case 863:
case 561:
case 3696:
case 902:
case 1046:
case 969:
case 337:
case 6:
case 1939:
case 562:
case 1756:
case 3016:
case 1373:
case 1562:
case 445:
case 2516:
case 3882:
case 3354:
case 3581:
case 3467:
case 4034:
case 2487:
case 3914:
case 544:
case 2468:
case 3483:
case 2225:
case 3061:
case 2081:
case 479:
case 3271:
case 3332:
case 2238:
case 2344:
case 3869:
case 2203:
case 459:
case 1480:
case 83:
case 2215:
case 4066:
case 2761:
case 3395:
case 1312:
case 2304:
case 1393:
case 2366:
case 3342:
case 2248:
case 221:
case 1250:
case 967:
case 2243:
case 1934:
case 2220:
case 1156:
case 543:
case 1904:
case 2912:
case 125:
case 3258:
case 2352:
case 842:
case 3997:
case 540:
case 1966:
case 2334:
case 938:
case 222:
case 3181:
case 4009:
case 3375:
case 1351:
case 3806:
case 49:
case 3941:
case 419:
case 1189:
case 889:
case 1476:
case 721:
case 3291:
case 4039:
case 1949:
case 648:
case 2311:
case 1036:
case 3919:
case 2951:
case 3084:
case 2006:
case 1321:
case 725:
case 879:
case 3736:
case 2299:
case 4078:
case 953:
case 1349:
case 3959:
case 3706:
case 3329:
case 1665:
case 3169:
case 2784:
case 859:
case 43:
case 3341:
case 1311:
case 2949:
case 7:
case 3397:
case 914:
case 2217:
case 1248:
case 2393:
case 324:
case 2312:
case 3292:
case 1922:
case 92:
case 998:
case 3205:
case 3240:
case 1352:
case 666:
case 1257:
case 225:
case 1912:
case 1993:
case 1116:
case 3223:
case 2485:
case 845:
case 3465:
case 1225:
case 3902:
case 2944:
case 1487:
case 248:
case 1561:
case 2496:
case 4022:
case 346:
case 464:
case 1238:
case 1233:
case 2184:
case 913:
case 2255:
case 3769:
case 2789:
case 3106:
case 2480:
case 3314:
case 2589:
case 70:
case 2294:
case 1203:
case 3954:
case 489:
case 320:
case 1889:
case 2069:
case 1761:
case 3932:
case 3089:
case 3230:
case 3245:
case 877:
case 2279:
case 4012:
case 954:
case 1526:
case 20:
case 1716:
case 3056:
case 1339:
case 3301:
case 3687:
case 2667:
case 3668:
case 2556:
case 3663:
case 3272:
case 3970:
case 4051:
case 3377:
case 37:
case 748:
case 1516:
case 2562:
case 1309:
case 1660:
case 1726:
case 2110:
case 2424:
case 115:
case 1432:
case 2157:
case 236:
case 2216:
case 4065:
case 531:
case 1072:
case 1388:
case 681:
case 1960:
case 1262:
case 532:
case 2148:
case 1678:
case 2143:
case 830:
case 2226:
case 682:
case 3147:
case 1495:
case 196:
case 2609:
case 2414:
case 3380:
case 655:
case 3963:
case 1256:
case 1402:
case 1755:
case 1594:
case 1803:
case 2733:
case 2879:
case 2515:
case 1470:
case 1579:
case 1779:
case 2071:
case 2525:
case 1825:
case 2261:
case 103:
case 2037:
case 2855:
case 3571:
case 3025:
case 888:
case 2538:
case 3707:
case 383:
case 2477:
case 3695:
case 3537:
case 2708:
case 1794:
case 1833:
case 285:
case 3558:
case 2666:
case 696:
case 1475:
case 1810:
case 2510:
case 490:
case 1023:
case 1698:
case 1693:
case 2604:
case 1040:
case 3747:
case 3828:
case 3057:
case 576:
case 1750:
case 271:
case 1035:
case 1517:
case 3818:
case 2543:
case 1459:
case 1550:
case 2850:
case 1843:
case 1005:
case 3690:
case 1848:
case 1820:
case 175:
case 3805:
case 301:
case 1018:
case 3753:
case 2634:
case 968:
case 1013:
case 2429:
case 615:
case 3376:
case 2520:
case 1194:
case 1965:
case 4060:
case 2621:
case 2091:
case 478:
case 3498:
case 3493:
case 1774:
case 1442:
case 3591:
case 1486:
case 2649:
case 2497:
case 3675:
case 3422:
case 406:
case 785:
case 2874:
case 2125:
case 3385:
case 427:
case 1574:
case 1284:
case 3171:
case 752:
case 1599:
case 771:
case 3137:
case 2899:
case 54:
case 3659:
case 1155:
case 2611:
case 1091:
case 781:
case 829:
case 1621:
case 1108:
case 920:
case 249:
case 2179:
case 704:
case 2486:
case 2442:
case 3466:
case 775:
case 3891:
case 1115:
case 2651:
case 4083:
case 1125:
case 894:
case 946:
case 1365:
case 2155:
case 1611:
case 3074:
case 782:
case 1899:
case 313:
case 2599:
case 3264:
case 923:
case 46:
case 3641:
case 1604:
case 1557:
case 2028:
case 3858:
case 2612:
case 3853:
case 2023:
case 3535:
case 1510:
case 3540:
case 3705:
case 3449:
case 2475:
case 1720:
case 1666:
case 97:
case 3172:
case 3027:
case 2857:
case 2035:
case 1748:
case 433:
case 2750:
case 1827:
case 1743:
case 1058:
case 3792:
case 1053:
case 2040:
case 430:
case 2848:
case 354:
case 3518:
case 3513:
case 1441:
case 172:
case 2843:
case 586:
case 1850:
case 612:
case 2459:
case 3411:
case 1543:
case 997:
case 1652:
case 151:
case 1548:
case 2517:
case 3723:
case 1429:
case 2092:
case 3505:
case 2622:
case 749:
case 204:
case 2018:
case 1047:
case 275:
case 3050:
case 2045:
case 434:
case 2808:
case 3079:
case 1508:
case 373:
case 2030:
case 2755:
case 2579:
case 1007:
case 3700:
case 1725:
case 3094:
case 796:
case 1879:
case 1261:
case 1037:
case 3055:
case 2825:
case 715:
case 1644:
case 2779:
case 3500:
case 3409:
case 1703:
case 2794:
case 3871:
case 2555:
case 858:
case 353:
case 2000:
case 370:
case 1533:
case 1157:
case 999:
case 1424:
case 3140:
case 890:
case 3572:
case 3246:
case 3368:
case 3128:
case 672:
case 2127:
case 2454:
case 747:
case 136:
case 1216:
case 2367:
case 314:
case 3118:
case 3192:
case 1143:
case 1226:
case 3631:
case 2150:
case 1148:
case 111:
case 2678:
case 2402:
case 1120:
case 1609:
case 700:
case 535:
case 1983:
case 398:
case 685:
case 893:
case 3444:
case 3996:
case 4068:
case 1422:
case 2099:
case 2100:
case 4087:
case 2629:
case 2434:
case 1791:
case 213:
case 1137:
case 2452:
case 832:
case 816:
case 530:
case 2641:
case 1171:
case 3284:
case 680:
case 774:
case 3490:
case 210:
case 3799:
case 533:
case 831:
case 3194:
case 2985:
case 3965:
case 683:
case 2466:
case 3442:
case 1591:
case 349:
case 1498:
case 1493:
case 2891:
case 90:
case 1020:
case 2592:
case 2513:
case 3005:
case 1690:
case 254:
case 2723:
case 1818:
case 2847:
case 1813:
case 2728:
case 3459:
case 3550:
case 1892:
case 3018:
case 3013:
case 1376:
case 3820:
case 1805:
case 101:
case 1048:
case 2017:
case 2535:
case 3023:
case 3612:
case 3028:
case 3693:
case 355:
case 2027:
case 2172:
case 2697:
case 169:
case 1686:
case 1835:
case 3810:
case 2976:
case 3750:
case 2523:
case 713:
case 3035:
case 667:
case 3040:
case 274:
case 2718:
case 1747:
case 3527:
case 1828:
case 3174:
case 303:
case 2730:
case 491:
case 2409:
case 1038:
case 1033:
case 1478:
case 253:
case 3838:
case 1537:
case 1473:
case 3794:
case 3833:
case 1571:
case 1025:
case 1707:
case 183:
case 2837:
case 347:
case 3000:
case 250:
case 3045:
case 3803:
case 2269:
case 3755:
case 3594:
case 3030:
case 2807:
case 1737:
case 1191:
case 1830:
case 1845:
case 1003:
case 2094:
case 492:
case 798:
case 1632:
case 214:
case 3495:
case 750:
case 1147:
case 3678:
case 2105:
case 1380:
case 3256:
case 602:
case 298:
case 22:
case 9:
case 396:
case 2135:
case 3432:
case 315:
case 1872:
case 1158:
case 925:
case 601:
case 1670:
case 2140:
case 2128:
case 2282:
case 3388:
case 3262:
case 753:
case 2123:
case 2368:
case 3960:
case 3367:
case 138:
case 3127:
case 1396:
case 3072:
case 3143:
case 3226:
case 1631:
case 518:
case 1118:
case 1677:
case 2147:
case 267:
case 921:
case 605:
case 1113:
case 12:
case 1444:
case 2987:
case 198:
case 1996:
case 594:
case 1772:
case 2963:
case 1105:
case 2153:
case 3157:
case 3110:
case 1135:
case 2396:
case 238:
case 529:
case 1246:
case 1368:
case 1123:
case 922:
case 1980:
case 1282:
case 1128:
case 1614:
case 2033:
case 2602:
case 3525:
case 3071:
case 2038:
case 1500:
case 1409:
case 3715:
case 3261:
case 1055:
case 2281:
case 3644:
case 2695:
case 2025:
case 432:
case 3533:
case 3703:
case 3431:
case 2473:
case 1871:
case 3708:
case 153:
case 2537:
case 2478:
case 173:
case 3508:
case 431:
case 280:
case 2015:
case 1269:
case 495:
case 4076:
case 2771:
case 3894:
case 3401:
case 613:
case 1079:
case 150:
case 2845:
case 1530:
case 3879:
case 1624:
case 3007:
case 1545:
case 1700:
case 2830:
case 3725:
case 2892:
case 1411:
case 2813:
case 558:
case 3652:
case 284:
case 3548:
case 1847:
case 1518:
case 2690:
case 1513:
case 1592:
case 2805:
case 3757:
case 2043:
case 506:
case 1050:
case 3429:
case 2758:
case 3634:
case 3047:
case 966:
case 2753:
case 2686:
case 2835:
case 62:
case 1540:
case 269:
case 3666:
case 2642:
case 3604:
case 2451:
case 1853:
case 1535:
case 3419:
case 3510:
case 2828:
case 1792:
case 3053:
case 1718:
case 174:
case 2823:
case 2010:
case 371:
case 105:
case 3827:
case 2057:
case 3125:
case 1629:
case 408:
case 3365:
case 769:
case 891:
case 1264:
case 673:
case 3133:
case 1641:
case 2171:
case 1074:
case 2137:
case 3899:
case 3108:
case 1985:
case 3091:
case 2107:
case 653:
case 2412:
case 2493:
case 1404:
case 1619:
case 1130:
case 892:
case 1145:
case 2675:
case 1466:
case 2169:
case 3189:
case 3476:
case 4001:
case 1685:
case 1836:
case 2536:
case 71:
case 1919:
case 2975:
case 1359:
case 560:
case 799:
case 3274:
case 563:
case 3351:
case 2319:
case 3584:
case 4031:
case 2736:
case 1941:
case 3911:
case 1864:
case 2959:
case 2986:
case 4024:
case 1997:
case 3966:
case 3904:
case 68:
case 325:
case 3227:
case 2465:
case 2182:
case 3485:
case 3217:
case 3250:
case 2990:
case 2292:
case 3393:
case 21:
case 4014:
case 2205:
case 3934:
case 3156:
case 3294:
case 2460:
case 2569:
case 3480:
case 3589:
case 2314:
case 465:
case 220:
case 2136:
case 1207:
case 1869:
case 797:
case 2230:
case 1395:
case 1781:
case 1924:
case 542:
case 2245:
case 1488:
case 2902:
case 2200:
case 2881:
case 1581:
case 3496:
case 348:
case 843:
case 3944:
case 3184:
case 1271:
case 2324:
case 2995:
case 1237:
case 223:
case 826:
case 2769:
case 3255:
case 3756:
case 2970:
case 2272:
case 3378:
case 1016:
case 2331:
case 3373:
case 955:
case 3046:
case 2062:
case 27:
case 137:
case 2377:
case 3939:
case 746:
case 982:
case 639:
case 2582:
case 3816:
case 1680:
case 723:
case 2546:
case 2746:
case 2782:
case 2056:
case 904:
case 3667:
case 2687:
case 4029:
case 25:
case 2663:
case 975:
case 3556:
case 3683:
case 2668:
case 237:
case 1377:
case 61:
case 1331:
case 2016:
case 952:
case 2680:
case 3726:
case 971:
case 559:
case 2901:
case 1056:
case 3339:
case 951:
case 1782:
case 3978:
case 3526:
case 1746:
case 3973:
case 517:
case 28:
case 1301:
case 15:
case 268:
case 2869:
case 2207:
case 3344:
case 3889:
case 1314:
case 2302:
case 3208:
case 1460:
case 1569:
case 545:
case 1245:
case 2395:
case 4086:
case 2924:
case 3761:
case 3215:
case 1230:
case 1089:
case 1932:
case 3487:
case 2467:
case 2581:
case 737:
case 2354:
case 3225:
case 2483:
case 1881:
case 2914:
case 3463:
case 4090:
case 3081:
case 1106:
case 2332:
case 3238:
case 3233:
case 2271:
case 1324:
case 1995:
case 3998:
case 3257:
case 2390:
case 3912:
case 3210:
case 3993:
case 577:
case 3352:
case 199:
case 912:
case 1228:
case 697:
case 1465:
case 3304:
case 2247:
case 124:
case 1990:
case 911:
case 1292:
case 3243:
case 3126:
case 2342:
case 321:
case 3248:
case 3922:
case 4002:
case 623:
case 1706:
case 2836:
case 2685:
case 1169:
case 646:
case 1975:
case 3951:
case 4070:
case 440:
case 1341:
case 2181:
case 3321:
case 443:
case 1084:
case 3349:
case 1506:
case 1959:
case 2864:
case 1564:
case 1319:
case 3290:
case 135:
case 3992:
case 3484:
case 4038:
case 1948:
case 3358:
case 3776:
case 1183:
case 3905:
case 928:
case 2234:
case 1920:
case 1188:
case 1222:
case 511:
case 1327:
case 813:
case 1167:
case 216:
case 2204:
case 1212:
case 3347:
case 3935:
case 1298:
case 2076:
case 1957:
case 3940:
case 231:
case 3928:
case 3180:
case 2320:
case 977:
case 3923:
case 192:
case 731:
case 854:
case 2211:
case 3259:
case 2765:
case 3785:
case 3391:
case 1374:
case 3585:
case 2565:
case 3065:
case 805:
case 1399:
case 2085:
case 1251:
case 327:
case 1068:
case 2760:
case 306:
case 917:
case 2096:
case 1278:
case 3780:
case 1087:
case 572:
case 2867:
case 186:
case 870:
case 358:
case 3863:
case 2888:
case 2883:
case 1567:
case 1481:
case 256:
case 74:
case 2080:
case 2239:
case 571:
case 3796:
case 850:
case 3972:
case 552:
case 1783:
case 3580:
case 3176:
case 2560:
case 24:
case 4020:
case 2661:
case 3307:
case 2308:
case 484:
case 1925:
case 814:
case 898:
case 393:
case 1379:
case 4043:
case 1933:
case 401:
case 390:
case 3254:
case 2994:
case 1689:
case 3462:
case 402:
case 945:
case 2979:
case 3371:
case 867:
case 2394:
case 2925:
case 454:
case 1661:
case 14:
case 1315:
case 4050:
case 3971:
case 2379:
case 3937:
case 3345:
case 2689:
case 2903:
case 1994:
case 3907:
case 3224:
case 1333:
case 1338:
case 333:
case 838:
case 1979:
case 405:
case 2355:
case 2087:
case 108:
case 1096:
case 3372:
case 3231:
case 964:
case 1626:
case 3083:
case 2068:
case 504:
case 2063:
case 3088:
case 631:
case 1883:
case 156:
case 3587:
case 1888:
case 388:
case 3563:
case 883:
case 3896:
case 581:
case 1209:
case 1867:
case 2583:
case 413:
case 3568:
case 2788:
case 1239:
case 176:
case 410:
case 1616:
case 2860:
case 1560:
case 555:
case 547:
case 414:
case 42:
case 2684:
case 1999:
case 3664:
case 498:
case 503:
case 801:
case 1565:
case 960:
case 869:
case 2374:
case 735:
case 3636:
case 500:
case 802:
case 2865:
case 2251:
case 3219:
case 1085:
case 2399:
case 64:
case 1406:
case 596:
case 291:
case 3340:
case 1917:
case 3947:
case 1357:
case 235:
case 4055:
case 1464:
case 116:
case 470:
case 132:
case 2327:
case 2188:
case 676:
case 1234:
case 3168:
case 2183:
case 3953:
case 2317:
case 1348:
case 131:
case 3297:
case 3958:
case 1343:
case 3313:
case 2298:
case 195:
case 2957:
case 4079:
case 2212:
case 334:
case 3318:
case 450:
case 1204:
case 2293:
case 1436:
case 608:
case 1160:
case 515:
case 93:
case 2898:
case 2893:
case 978:
case 2734:
case 3658:
case 2566:
case 165:
case 2504:
case 3897:
case 2139:
case 3066:
case 2042:
case 3790:
case 3004:
case 927:
case 1650:
case 2648:
case 261:
case 1178:
case 2552:
case 1852:
case 906:
case 317:
case 3647:
case 1712:
case 1834:
case 2704:
case 2534:
case 958:
case 2766:
case 2620:
case 2109:
case 1522:
case 2090:
case 3786:
case 761:
case 3285:
case 990:
case 2423:
case 2265:
case 2711:
case 2428:
case 899:
case 3049:
case 3154:
case 3819:
case 2549:
case 3575:
case 1041:
case 3102:
case 2405:
case 3775:
case 824:
case 1751:
case 2144:
case 1674:
case 2418:
case 244:
case 3195:
case 1447:
case 993:
case 1699:
case 1811:
case 2492:
case 1029:
case 468:
case 3450:
case 3559:
case 3841:
case 81:
case 3479:
case 2326:
case 3186:
case 2166:
case 1001:
case 929:
case 1112:
case 2430:
case 1916:
case 377:
case 2070:
case 240:
case 1356:
case 3982:
case 1778:
case 2962:
case 2260:
case 1573:
case 3877:
case 1578:
case 357:
case 3009:
case 2878:
case 1471:
case 521:
case 2739:
case 823:
case 39:
case 2316:
case 226:
case 665:
case 1283:
case 1122:
case 3770:
case 1077:
case 2509:
case 2400:
case 207:
case 743:
case 3969:
case 2989:
case 2603:
case 1694:
case 3607:
case 3554:
case 3532:
case 726:
case 2615:
case 3175:
case 1679:
case 3824:
case 707:
case 2149:
case 897:
case 3502:
case 1844:
case 1389:
case 2095:
case 3814:
case 3732:
case 3754:
case 740:
case 1014:
case 2633:
case 2002:
case 1655:
case 3159:
case 3044:
case 1121:
case 360:
case 837:
case 2694:
case 1032:
case 1608:
case 499:
case 2679:
case 1149:
case 3645:
case 2151:
case 3524:
case 1744:
case 424:
case 1544:
case 3724:
case 3981:
case 1095:
case 3129:
case 2389:
case 3514:
case 1625:
case 363:
case 3895:
case 2655:
case 1002:
case 3141:
case 41:
case 3415:
case 2198:
case 1430:
case 2112:
case 1166:
case 2001:
case 3672:
case 2839:
case 2773:
case 1260:
case 2778:
case 2356:
case 3408:
case 1070:
case 661:
case 3777:
case 3501:
case 33:
case 3433:
case 5:
case 1873:
case 3438:
case 4084:
case 143:
case 2437:
case 1152:
case 609:
case 2573:
case 1956:
case 2288:
case 3382:
case 3425:
case 3268:
case 2283:
case 126:
case 2267:
case 3073:
case 2809:
case 3078:
case 1739:
case 1075:
case 4062:
case 342:
case 3741:
case 1265:
case 3051:
case 2019:
case 2453:
case 1440:
case 3124:
case 933:
case 2384:
case 2849:
case 3875:
case 2551:
case 765:
case 839:
case 1059:
case 3336:
case 3719:
case 4056:
case 1405:
case 3114:
case 3420:
case 3529:
case 341:
case 1511:
case 2029:
case 2811:
case 1413:
case 144:
case 2447:
case 1139:
case 3635:
case 3886:
case 607:
case 1610:
case 1657:
case 1504:
case 3842:
case 2866:
case 2512:
case 2804:
case 3597:
case 1898:
case 3012:
case 3093:
case 1752:
case 2097:
case 1086:
case 2627:
case 162:
case 3613:
case 3618:
case 446:
case 3022:
case 2852:
case 1552:
case 1648:
case 2178:
case 3131:
case 3605:
case 1090:
case 1109:
case 96:
case 1766:
case 1620:
case 423:
case 2834:
case 988:
case 1704:
case 2712:
case 50:
case 1822:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750770001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,];
var gg_b = "1750770001/";

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
