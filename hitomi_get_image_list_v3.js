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
case 663:
case 925:
case 3319:
case 2804:
case 2591:
case 1150:
case 1986:
case 401:
case 909:
case 1061:
case 2636:
case 3461:
case 988:
case 567:
case 3128:
case 2273:
case 522:
case 677:
case 2333:
case 2253:
case 1192:
case 2093:
case 3863:
case 2776:
case 466:
case 1349:
case 1788:
case 1217:
case 3380:
case 2883:
case 1999:
case 2424:
case 927:
case 444:
case 2887:
case 356:
case 1322:
case 2908:
case 2731:
case 4064:
case 3169:
case 186:
case 1567:
case 2221:
case 249:
case 2627:
case 2337:
case 560:
case 2651:
case 258:
case 1213:
case 3962:
case 1155:
case 3948:
case 2706:
case 1772:
case 1175:
case 2365:
case 670:
case 2671:
case 3243:
case 920:
case 3385:
case 3398:
case 3299:
case 435:
case 3465:
case 750:
case 3568:
case 3783:
case 854:
case 40:
case 3645:
case 3917:
case 2220:
case 2744:
case 2485:
case 3812:
case 2588:
case 1065:
case 394:
case 77:
case 1037:
case 769:
case 1397:
case 702:
case 881:
case 143:
case 1842:
case 2022:
case 976:
case 3194:
case 1791:
case 3079:
case 3437:
case 3542:
case 3704:
case 2692:
case 1615:
case 2225:
case 713:
case 2480:
case 511:
case 2655:
case 1127:
case 2939:
case 757:
case 2590:
case 1964:
case 297:
case 1151:
case 3634:
case 2572:
case 3324:
case 3529:
case 651:
case 1033:
case 3806:
case 1393:
case 2767:
case 1409:
case 3381:
case 3913:
case 1262:
case 2552:
case 1696:
case 684:
case 3831:
case 430:
case 3774:
case 1171:
case 755:
case 1531:
case 2675:
case 3009:
case 3965:
case 1152:
case 502:
case 2348:
case 141:
case 883:
case 1959:
case 301:
case 2985:
case 3146:
case 3417:
case 2571:
case 2710:
case 1190:
case 421:
case 344:
case 1261:
case 929:
case 1979:
case 3382:
case 736:
case 3308:
case 610:
case 2362:
case 2796:
case 1447:
case 1116:
case 679:
case 1775:
case 93:
case 2106:
case 1320:
case 3728:
case 2980:
case 2084:
case 3933:
case 2156:
case 3064:
case 555:
case 2501:
case 1511:
case 3043:
case 1644:
case 3378:
case 3926:
case 513:
case 4038:
case 3413:
case 2691:
case 952:
case 2297:
case 2176:
case 245:
case 2715:
case 1195:
case 2536:
case 617:
case 2003:
case 1366:
case 1841:
case 765:
case 606:
case 2313:
case 2135:
case 1596:
case 1321:
case 2981:
case 1486:
case 2575:
case 1237:
case 1631:
case 1303:
case 2066:
case 3961:
case 1510:
case 4059:
case 14:
case 571:
case 931:
case 337:
case 439:
case 3187:
case 4079:
case 2616:
case 3889:
case 1265:
case 1499:
case 2458:
case 1377:
case 767:
case 42:
case 3540:
case 1373:
case 1515:
case 234:
case 1418:
case 1226:
case 3018:
case 299:
case 3462:
case 1612:
case 2711:
case 916:
case 1676:
case 1938:
case 1260:
case 1845:
case 71:
case 1048:
case 864:
case 3632:
case 68:
case 3322:
case 2497:
case 1746:
case 2574:
case 2379:
case 3918:
case 1962:
case 3155:
case 3213:
case 508:
case 3175:
case 3772:
case 3716:
case 3438:
case 4013:
case 875:
case 863:
case 1038:
case 1243:
case 3100:
case 1264:
case 3790:
case 2554:
case 1641:
case 1247:
case 1319:
case 3061:
case 3814:
case 2309:
case 774:
case 1461:
case 949:
case 819:
case 958:
case 1844:
case 2024:
case 3544:
case 1380:
case 3702:
case 3217:
case 493:
case 2493:
case 1830:
case 2583:
case 121:
case 85:
case 3170:
case 990:
case 3060:
case 2449:
case 2890:
case 3127:
case 1640:
case 1433:
case 3964:
case 3151:
case 3506:
case 1634:
case 3033:
case 2984:
case 2669:
case 2977:
case 112:
case 681:
case 3409:
case 2957:
case 3610:
case 514:
case 728:
case 378:
case 2208:
case 2282:
case 1831:
case 3696:
case 2546:
case 3171:
case 276:
case 3026:
case 3531:
case 1218:
case 1009:
case 884:
case 2338:
case 2258:
case 1299:
case 2628:
case 2085:
case 1568:
case 1783:
case 997:
case 391:
case 1645:
case 1876:
case 3459:
case 2802:
case 3512:
case 3136:
case 592:
case 3576:
case 1917:
case 2895:
case 12:
case 194:
case 3556:
case 851:
case 2973:
case 3479:
case 2422:
case 2714:
case 1079:
case 2278:
case 1542:
case 3123:
case 139:
case 1704:
case 3101:
case 3630:
case 86:
case 1933:
case 528:
case 714:
case 1811:
case 1064:
case 207:
case 2142:
case 585:
case 2801:
case 1960:
case 1238:
case 1358:
case 3750:
case 2823:
case 3770:
case 1378:
case 2403:
case 229:
case 2421:
case 2386:
case 1926:
case 2168:
case 638:
case 968:
case 3102:
case 3013:
case 23:
case 683:
case 3366:
case 1965:
case 3017:
case 2654:
case 49:
case 2224:
case 341:
case 947:
case 424:
case 2453:
case 1769:
case 3959:
case 2871:
case 2407:
case 4061:
case 1146:
case 3325:
case 200:
case 144:
case 2318:
case 3667:
case 3261:
case 2851:
case 1047:
case 3700:
case 3979:
case 2827:
case 393:
case 792:
case 252:
case 945:
case 3172:
case 1937:
case 304:
case 1815:
case 2892:
case 3062:
case 708:
case 1642:
case 861:
case 3656:
case 789:
case 2870:
case 2008:
case 2347:
case 4060:
case 2219:
case 2850:
case 4026:
case 1104:
case 3723:
case 1545:
case 2114:
case 3191:
case 1794:
case 3845:
case 3938:
case 3676:
case 3260:
case 1668:
case 806:
case 3307:
case 3233:
case 3353:
case 3596:
case 3486:
case 3631:
case 664:
case 3237:
case 3357:
case 2466:
case 3510:
case 3727:
case 135:
case 123:
case 1279:
case 646:
case 137:
case 1629:
case 1339:
case 1259:
case 216:
case 2420:
case 2285:
case 318:
case 1889:
case 3499:
case 574:
case 3265:
case 3589:
case 1540:
case 2051:
case 1370:
case 1847:
case 500:
case 2027:
case 2160:
case 3547:
case 955:
case 3432:
case 3214:
case 2291:
case 2697:
case 3180:
case 384:
case 2573:
case 1032:
case 2133:
case 1766:
case 1244:
case 3328:
case 3638:
case 3912:
case 1263:
case 2507:
case 2553:
case 181:
case 612:
case 1350:
case 1230:
case 3758:
case 2071:
case 3119:
case 1968:
case 913:
case 4014:
case 3931:
case 1300:
case 3185:
case 326:
case 902:
case 2762:
case 3041:
case 1513:
case 603:
case 1661:
case 1267:
case 2503:
case 3813:
case 1235:
case 1355:
case 2494:
case 2584:
case 1929:
case 2137:
case 3906:
case 1843:
case 3369:
case 2023:
case 287:
case 1122:
case 2839:
case 1301:
case 1899:
case 4042:
case 1323:
case 3489:
case 2983:
case 3034:
case 3599:
case 720:
case 3268:
case 2649:
case 3930:
case 3944:
case 2288:
case 1197:
case 2202:
case 1707:
case 3040:
case 2469:
case 998:
case 18:
case 1773:
case 1096:
case 3609:
case 35:
case 2566:
case 1010:
case 516:
case 3242:
case 3586:
case 1914:
case 2000:
case 3496:
case 2878:
case 4068:
case 415:
case 3045:
case 3739:
case 479:
case 727:
case 46:
case 2050:
case 1371:
case 2525:
case 2216:
case 3935:
case 1784:
case 3181:
case 1445:
case 621:
case 1548:
case 2272:
case 1562:
case 2005:
case 2332:
case 1015:
case 788:
case 1721:
case 3124:
case 1703:
case 4029:
case 3967:
case 709:
case 2070:
case 2808:
case 3415:
case 2987:
case 1327:
case 1818:
case 762:
case 531:
case 725:
case 733:
case 2483:
case 3643:
case 3430:
case 2824:
case 630:
case 960:
case 2271:
case 2677:
case 716:
case 1934:
case 2969:
case 2684:
case 1613:
case 818:
case 3861:
case 1722:
case 3346:
case 3014:
case 520:
case 451:
case 2331:
case 959:
case 3910:
case 1561:
case 2148:
case 2404:
case 2737:
case 1414:
case 1352:
case 2454:
case 361:
case 2312:
case 1749:
case 3780:
case 2928:
case 1617:
case 1211:
case 509:
case 2653:
case 1945:
case 533:
case 731:
case 562:
case 2223:
case 2673:
case 3158:
case 3719:
case 289:
case 2726:
case 3467:
case 2356:
case 2487:
case 3915:
case 146:
case 623:
case 2275:
case 1056:
case 4040:
case 3618:
case 1184:
case 3781:
case 1537:
case 1177:
case 752:
case 1296:
case 470:
case 2200:
case 353:
case 2522:
case 1662:
case 3042:
case 1210:
case 3139:
case 911:
case 4034:
case 2898:
case 3476:
case 1859:
case 1648:
case 3412:
case 3559:
case 3354:
case 45:
case 1289:
case 1121:
case 3724:
case 3240:
case 1793:
case 2113:
case 2335:
case 2255:
case 1076:
case 2002:
case 1153:
case 2292:
case 1107:
case 3431:
case 644:
case 2205:
case 2117:
case 1797:
case 1941:
case 2052:
case 666:
case 936:
case 310:
case 705:
case 1031:
case 2270:
case 36:
case 2819:
case 475:
case 2620:
case 3911:
case 2994:
case 1560:
case 1429:
case 707:
case 576:
case 3406:
case 3245:
case 2090:
case 1006:
case 2880:
case 2344:
case 1173:
case 3833:
case 3699:
case 2159:
case 1198:
case 1931:
case 2436:
case 1185:
case 3441:
case 812:
case 126:
case 2952:
case 547:
case 2803:
case 1041:
case 3235:
case 2884:
case 4067:
case 691:
case 3929:
case 2340:
case 2401:
case 2877:
case 980:
case 797:
case 1564:
case 1369:
case 2254:
case 3864:
case 3725:
case 2179:
case 2094:
case 3011:
case 213:
case 1778:
case 985:
case 2204:
case 2786:
case 1432:
case 678:
case 1214:
case 4044:
case 1180:
case 3305:
case 3149:
case 184:
case 3392:
case 27:
case 2451:
case 2902:
case 1328:
case 2471:
case 2807:
case 803:
case 1638:
case 1976:
case 2995:
case 1912:
case 1817:
case 151:
case 2283:
case 568:
case 2109:
case 2345:
case 82:
case 987:
case 3350:
case 790:
case 1119:
case 2825:
case 4031:
case 177:
case 2764:
case 1739:
case 599:
case 3665:
case 856:
case 2685:
case 1935:
case 3777:
case 2450:
case 1848:
case 1659:
case 2698:
case 3206:
case 3445:
case 3548:
case 1229:
case 132:
case 298:
case 1679:
case 1862:
case 4006:
case 3015:
case 2470:
case 974:
case 1967:
case 3351:
case 1518:
case 624:
case 3637:
case 3327:
case 2492:
case 396:
case 175:
case 2582:
case 2246:
case 2405:
case 2069:
case 3633:
case 3440:
case 3301:
case 1489:
case 3323:
case 1394:
case 2680:
case 170:
case 1268:
case 1930:
case 2455:
case 3276:
case 3660:
case 3197:
case 1944:
case 3434:
case 4056:
case 1040:
case 38:
case 2341:
case 3256:
case 686:
case 1609:
case 821:
case 3626:
case 1410:
case 2578:
case 3010:
case 2747:
case 1496:
case 2991:
case 3166:
case 161:
case 3749:
case 3035:
case 3302:
case 3388:
case 260:
case 2294:
case 1538:
case 1435:
case 3945:
case 3838:
case 2186:
case 4011:
case 1158:
case 106:
case 2074:
case 2087:
case 2709:
case 2970:
case 259:
case 64:
case 1915:
case 1241:
case 830:
case 2639:
case 454:
case 3372:
case 1664:
case 2524:
case 3316:
case 835:
case 4032:
case 3030:
case 1785:
case 1444:
case 3934:
case 2083:
case 80:
case 2759:
case 2118:
case 989:
case 1346:
case 1861:
case 2900:
case 3722:
case 3125:
case 2004:
case 2581:
case 837:
case 2491:
case 3414:
case 3352:
case 265:
case 908:
case 3107:
case 3153:
case 1686:
case 2936:
case 1431:
case 745:
case 3797:
case 1826:
case 110:
case 2519:
case 3391:
case 3526:
case 1509:
case 1304:
case 179:
case 2738:
case 496:
case 3560:
case 1911:
case 2923:
case 3429:
case 2472:
case 1406:
case 1245:
case 2901:
case 3006:
case 4015:
case 747:
case 2228:
case 4089:
case 3056:
case 1781:
case 3184:
case 338:
case 1837:
case 3296:
case 1579:
case 1374:
case 236:
case 2143:
case 1042:
case 383:
case 2951:
case 590:
case 1456:
case 3879:
case 2585:
case 1476:
case 1068:
case 115:
case 1412:
case 1559:
case 1354:
case 2598:
case 3103:
case 3012:
case 1865:
case 3121:
case 3076:
case 3565:
case 3253:
case 3712:
case 3093:
case 3776:
case 1920:
case 2380:
case 1694:
case 3360:
case 1768:
case 1493:
case 3958:
case 3424:
case 2247:
case 3804:
case 3591:
case 2319:
case 2514:
case 1742:
case 1145:
case 3481:
case 1504:
case 1891:
case 986:
case 3636:
case 3756:
case 1966:
case 2461:
case 871:
case 4007:
case 440:
case 78:
case 2128:
case 2948:
case 3284:
case 546:
case 4021:
case 4003:
case 3196:
case 3365:
case 3671:
case 3277:
case 445:
case 2038:
case 564:
case 3854:
case 898:
case 2385:
case 127:
case 1554:
case 125:
case 3887:
case 2746:
case 1497:
case 1379:
case 1574:
case 1587:
case 674:
case 3874:
case 4084:
case 349:
case 1140:
case 924:
case 3097:
case 358:
case 3266:
case 1422:
case 2856:
case 850:
case 203:
case 628:
case 2194:
case 1714:
case 1278:
case 2437:
case 3730:
case 1258:
case 2568:
case 781:
case 390:
case 2783:
case 1098:
case 87:
case 3498:
case 1953:
case 3763:
case 2876:
case 2645:
case 538:
case 3595:
case 2917:
case 3220:
case 3485:
case 3502:
case 1903:
case 1921:
case 2381:
case 3419:
case 642:
case 1282:
case 1546:
case 176:
case 2787:
case 3675:
case 3846:
case 3225:
case 1890:
case 499:
case 2640:
case 3590:
case 2754:
case 1669:
case 3572:
case 680:
case 3132:
case 2460:
case 855:
case 3710:
case 3551:
case 581:
case 783:
case 1851:
case 1922:
case 2047:
case 4093:
case 152:
case 738:
case 3362:
case 266:
case 3073:
case 3796:
case 1129:
case 382:
case 2832:
case 1687:
case 554:
case 1654:
case 3348:
case 1224:
case 1871:
case 1407:
case 1453:
case 201:
case 100:
case 3985:
case 2417:
case 2146:
case 2378:
case 1386:
case 1421:
case 3297:
case 2541:
case 345:
case 3715:
case 1604:
case 904:
case 3057:
case 3077:
case 458:
case 1949:
case 449:
case 3439:
case 3084:
case 811:
case 2064:
case 2811:
case 3894:
case 3501:
case 1745:
case 1594:
case 1399:
case 2358:
case 2629:
case 1364:
case 2534:
case 2339:
case 2099:
case 1285:
case 822:
case 2889:
case 3555:
case 1993:
case 3458:
case 3690:
case 58:
case 3924:
case 1855:
case 2540:
case 3167:
case 272:
case 689:
case 1646:
case 3575:
case 2961:
case 1078:
case 3652:
case 3500:
case 2279:
case 3688:
case 3602:
case 495:
case 1528:
case 918:
case 2668:
case 3317:
case 1280:
case 859:
case 3828:
case 3482:
case 1741:
case 746:
case 1997:
case 3592:
case 2642:
case 399:
case 2209:
case 94:
case 497:
case 1082:
case 1008:
case 860:
case 1706:
case 3729:
case 2772:
case 3:
case 2716:
case 1196:
case 2438:
case 1365:
case 2100:
case 327:
case 1110:
case 3359:
case 429:
case 3554:
case 3239:
case 1887:
case 333:
case 2322:
case 1908:
case 362:
case 1982:
case 3497:
case 3134:
case 1731:
case 286:
case 1874:
case 2918:
case 1627:
case 763:
case 2213:
case 158:
case 2563:
case 2795:
case 1712:
case 1207:
case 3024:
case 1253:
case 1333:
case 1601:
case 1776:
case 2544:
case 452:
case 3694:
case 2702:
case 1883:
case 1360:
case 1958:
case 3493:
case 719:
case 2170:
case 400:
case 1804:
case 1591:
case 2150:
case 1481:
case 3742:
case 1326:
case 2061:
case 1636:
case 1756:
case 3081:
case 224:
case 92:
case 3903:
case 1767:
case 3957:
case 3852:
case 1419:
case 887:
case 1600:
case 726:
case 195:
case 2171:
case 2531:
case 1846:
case 669:
case 1480:
case 828:
case 4008:
case 579:
case 56:
case 3449:
case 1939:
case 2127:
case 2964:
case 1590:
case 3816:
case 885:
case 3669:
case 1572:
case 1132:
case 1049:
case 1516:
case 3080:
case 650:
case 2829:
case 1266:
case 880:
case 2397:
case 2479:
case 243:
case 3714:
case 2791:
case 1111:
case 1022:
case 1605:
case 2615:
case 515:
case 2101:
case 3258:
case 190:
case 553:
case 2868:
case 3098:
case 1498:
case 1763:
case 3888:
case 2512:
case 657:
case 2576:
case 1485:
case 3141:
case 613:
case 2065:
case 912:
case 1650:
case 1588:
case 427:
case 76:
case 2770:
case 3457:
case 779:
case 2909:
case 329:
case 3421:
case 710:
case 1919:
case 2102:
case 1297:
case 2188:
case 636:
case 2705:
case 145:
case 2013:
case 33:
case 2792:
case 1980:
case 2443:
case 1077:
case 1084:
case 147:
case 2464:
case 1894:
case 901:
case 2663:
case 3745:
case 1523:
case 3399:
case 433:
case 425:
case 3477:
case 2750:
case 462:
case 3823:
case 2190:
case 3318:
case 1710:
case 1551:
case 2667:
case 420:
case 168:
case 3922:
case 3851:
case 3827:
case 753:
case 293:
case 1362:
case 3674:
case 2532:
case 2447:
case 1796:
case 182:
case 611:
case 204:
case 3687:
case 3281:
case 1106:
case 4024:
case 1293:
case 140:
case 1789:
case 3654:
case 4081:
case 3224:
case 241:
case 3740:
case 1007:
case 3871:
case 3407:
case 3734:
case 1131:
case 1571:
case 892:
case 715:
case 2325:
case 937:
case 1695:
case 2612:
case 331:
case 2723:
case 1025:
case 1688:
case 808:
case 3114:
case 1711:
case 1550:
case 2845:
case 4019:
case 1249:
case 3528:
case 563:
case 2233:
case 972:
case 3997:
case 2373:
case 4080:
case 1408:
case 3741:
case 1144:
case 3805:
case 1592:
case 2736:
case 1163:
case 134:
case 199:
case 2226:
case 2656:
case 577:
case 3347:
case 706:
case 3082:
case 3219:
case 1672:
case 61:
case 3298:
case 930:
case 660:
case 3058:
case 316:
case 1869:
case 3420:
case 2834:
case 1458:
case 2377:
case 3993:
case 2589:
case 2384:
case 1167:
case 3646:
case 3875:
case 1732:
case 2596:
case 648:
case 1981:
case 659:
case 1478:
case 3466:
case 3078:
case 2727:
case 24:
case 519:
case 4085:
case 1902:
case 504:
case 1807:
case 2912:
case 697:
case 3507:
case 2817:
case 3553:
case 791:
case 251:
case 380:
case 150:
case 3071:
case 1799:
case 4091:
case 2778:
case 3027:
case 2547:
case 2432:
case 3291:
case 3697:
case 2180:
case 743:
case 3573:
case 17:
case 3133:
case 1873:
case 1884:
case 2411:
case 1423:
case 3389:
case 3137:
case 2906:
case 1401:
case 3748:
case 1340:
case 1877:
case 157:
case 2564:
case 2369:
case 3023:
case 1334:
case 1254:
case 1179:
case 1094:
case 387:
case 2543:
case 3693:
case 489:
case 1681:
case 1287:
case 1436:
case 2708:
case 2185:
case 155:
case 1274:
case 778:
case 3165:
case 1803:
case 328:
case 3036:
case 3521:
case 2813:
case 954:
case 724:
case 2609:
case 25:
case 2410:
case 4095:
case 1578:
case 2242:
case 3904:
case 1475:
case 2586:
case 2496:
case 219:
case 2489:
case 2034:
case 270:
case 2599:
case 1455:
case 3649:
case 2268:
case 54:
case 3055:
case 3520:
case 3717:
case 3288:
case 3202:
case 3295:
case 2679:
case 4016:
case 3005:
case 3622:
case 198:
case 414:
case 2862:
case 2124:
case 2415:
case 4090:
case 3987:
case 1582:
case 1405:
case 8:
case 1825:
case 3954:
case 3161:
case 888:
case 3290:
case 2045:
case 3050:
case 2935:
case 2659:
case 1698:
case 3272:
case 1900:
case 2861:
case 1779:
case 2346:
case 3657:
case 964:
case 3251:
case 3603:
case 3621:
case 3227:
case 3404:
case 1975:
case 1581:
case 3737:
case 122:
case 3881:
case 816:
case 2989:
case 167:
case 2643:
case 3824:
case 3677:
case 442:
case 2108:
case 2785:
case 4027:
case 3969:
case 3684:
case 148:
case 3673:
case 487:
case 2158:
case 1342:
case 3726:
case 1970:
case 3487:
case 2915:
case 1905:
case 2647:
case 261:
case 3376:
case 2780:
case 2435:
case 3760:
case 1368:
case 2178:
case 1054:
case 3223:
case 1488:
case 1971:
case 1585:
case 2476:
case 1269:
case 647:
case 2354:
case 3885:
case 1598:
case 2724:
case 474:
case 3095:
case 2240:
case 3113:
case 3335:
case 3255:
case 3088:
case 3002:
case 3625:
case 3275:
case 704:
case 2618:
case 2932:
case 1682:
case 1608:
case 800:
case 253:
case 3522:
case 136:
case 2374:
case 2387:
case 2139:
case 2456:
case 1822:
case 1951:
case 3250:
case 1738:
case 3994:
case 2911:
case 2383:
case 2860:
case 3090:
case 2406:
case 314:
case 3880:
case 3344:
case 3016:
case 1228:
case 805:
case 1658:
case 2833:
case 2699:
case 1580:
case 2686:
case 2431:
case 807:
case 3117:
case 3446:
case 2826:
case 4050:
case 1452:
case 210:
case 983:
case 279:
case 26:
case 3819:
case 2304:
case 2509:
case 682:
case 895:
case 2235:
case 2355:
case 3884:
case 3916:
case 1584:
case 1137:
case 3401:
case 1001:
case 459:
case 2864:
case 448:
case 3094:
case 2011:
case 1693:
case 313:
case 4074:
case 3718:
case 3287:
case 1310:
case 185:
case 3436:
case 1946:
case 2441:
case 2300:
case 3952:
case 3803:
case 3857:
case 2375:
case 2661:
case 41:
case 1503:
case 422:
case 3988:
case 2720:
case 2244:
case 3471:
case 3853:
case 2263:
case 1507:
case 180:
case 3283:
case 4004:
case 2230:
case 2350:
case 2968:
case 350:
case 2370:
case 1051:
case 3786:
case 2942:
case 1027:
case 501:
case 926:
case 1291:
case 676:
case 302:
case 2032:
case 369:
case 3427:
case 3451:
case 794:
case 1713:
case 2193:
case 1332:
case 1252:
case 95:
case 2015:
case 1092:
case 2757:
case 2231:
case 1882:
case 1808:
case 530:
case 2637:
case 1987:
case 2327:
case 1974:
case 3582:
case 756:
case 3508:
case 1954:
case 1161:
case 1290:
case 411:
case 858:
case 1525:
case 2371:
case 1050:
case 2665:
case 3685:
case 2784:
case 2548:
case 1272:
case 3400:
case 2096:
case 963:
case 633:
case 3866:
case 2256:
case 1075:
case 1566:
case 688:
case 2010:
case 3747:
case 1000:
case 1878:
case 3991:
case 2914:
case 535:
case 371:
case 2301:
case 3558:
case 436:
case 6:
case 1520:
case 50:
case 2660:
case 2197:
case 1288:
case 1717:
case 2089:
case 2434:
case 572:
case 3820:
case 627:
case 1469:
case 2212:
case 1673:
case 4094:
case 3199:
case 413:
case 3342:
case 264:
case 3897:
case 1236:
case 246:
case 1474:
case 3905:
case 108:
case 2120:
case 2166:
case 1733:
case 1312:
case 899:
case 2749:
case 2035:
case 2302:
case 616:
case 2388:
case 1928:
case 360:
case 3294:
case 455:
case 3950:
case 730:
case 2945:
case 1607:
case 834:
case 1653:
case 1201:
case 3186:
case 556:
case 521:
case 373:
case 2613:
case 450:
case 3779:
case 1091:
case 906:
case 3900:
case 2722:
case 1603:
case 1331:
case 1657:
case 2561:
case 3004:
case 1148:
case 1737:
case 3975:
case 772:
case 2352:
case 1881:
case 3893:
case 469:
case 3639:
case 2372:
case 631:
case 1483:
case 3329:
case 3524:
case 2316:
case 1824:
case 3955:
case 1162:
case 1765:
case 1271:
case 3083:
case 1684:
case 3118:
case 2390:
case 3738:
case 1250:
case 845:
case 3147:
case 3416:
case 3923:
case 3901:
case 2006:
case 3490:
case 3849:
case 1880:
case 2173:
case 1016:
case 1549:
case 600:
case 2153:
case 3452:
case 3314:
case 2391:
case 2526:
case 2031:
case 2859:
case 539:
case 503:
case 701:
case 1885:
case 2103:
case 2157:
case 2289:
case 1095:
case 2012:
case 2121:
case 594:
case 2076:
case 1335:
case 52:
case 2793:
case 2468:
case 2565:
case 1002:
case 868:
case 1625:
case 629:
case 1367:
case 1275:
case 2056:
case 2442:
case 192:
case 238:
case 605:
case 2296:
case 840:
case 1200:
case 1522:
case 471:
case 283:
case 96:
case 3951:
case 63:
case 744:
case 979:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1763827202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,];
var gg_b = "1763827202/";

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
