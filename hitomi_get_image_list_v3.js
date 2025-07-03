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
case 2749:
case 2656:
case 996:
case 342:
case 2178:
case 1011:
case 3567:
case 2631:
case 1327:
case 3219:
case 660:
case 1708:
case 1283:
case 493:
case 1436:
case 304:
case 412:
case 1660:
case 2165:
case 3577:
case 1030:
case 260:
case 3787:
case 2610:
case 3825:
case 1705:
case 654:
case 335:
case 710:
case 2061:
case 2693:
case 1017:
case 1256:
case 3797:
case 273:
case 45:
case 3679:
case 437:
case 1635:
case 2015:
case 2130:
case 3674:
case 3733:
case 1068:
case 2117:
case 1412:
case 1075:
case 368:
case 2806:
case 1161:
case 2707:
case 3664:
case 120:
case 1210:
case 1982:
case 2325:
case 2458:
case 1342:
case 2386:
case 3669:
case 1167:
case 1065:
case 3853:
case 3791:
case 251:
case 3735:
case 2500:
case 1357:
case 1148:
case 1298:
case 2013:
case 1774:
case 925:
case 1421:
case 3513:
case 3249:
case 3000:
case 301:
case 2109:
case 157:
case 2453:
case 13:
case 2626:
case 1041:
case 2714:
case 2090:
case 1073:
case 2685:
case 345:
case 553:
case 2104:
case 1180:
case 2496:
case 1769:
case 332:
case 774:
case 1047:
case 1764:
case 2287:
case 79:
case 2122:
case 1351:
case 2932:
case 651:
case 1427:
case 3738:
case 3406:
case 2640:
case 156:
case 1145:
case 1295:
case 2233:
case 1966:
case 446:
case 323:
case 2297:
case 2147:
case 3760:
case 886:
case 943:
case 682:
case 1285:
case 2950:
case 3545:
case 1681:
case 3823:
case 3189:
case 2048:
case 282:
case 447:
case 1687:
case 1976:
case 1312:
case 1004:
case 2428:
case 2080:
case 179:
case 2173:
case 1240:
case 2291:
case 2695:
case 3770:
case 1009:
case 1043:
case 3902:
case 1071:
case 2118:
case 1165:
case 154:
case 2660:
case 2436:
case 2708:
case 2327:
case 64:
case 1178:
case 1235:
case 948:
case 1656:
case 1749:
case 2992:
case 776:
case 1423:
case 1637:
case 3929:
case 24:
case 991:
case 1175:
case 1238:
case 3924:
case 3134:
case 1061:
case 3269:
case 1077:
case 559:
case 1610:
case 2115:
case 2030:
case 1152:
case 2321:
case 1168:
case 3614:
case 3726:
case 1806:
case 1539:
case 2412:
case 1683:
case 620:
case 3619:
case 431:
case 1534:
case 3785:
case 1920:
case 2068:
case 890:
case 1015:
case 1472:
case 558:
case 185:
case 329:
case 2237:
case 2065:
case 2171:
case 1270:
case 2143:
case 3821:
case 1386:
case 3788:
case 2342:
case 1458:
case 2078:
case 1111:
case 576:
case 3208:
case 307:
case 1719:
case 2180:
case 1281:
case 3573:
case 3541:
case 3607:
case 278:
case 1626:
case 23:
case 363:
case 2589:
case 656:
case 3089:
case 2774:
case 2298:
case 2357:
case 151:
case 2145:
case 256:
case 2691:
case 1640:
case 2336:
case 2063:
case 2427:
case 306:
case 3959:
case 1287:
case 97:
case 2764:
case 3601:
case 3954:
case 499:
case 2022:
case 38:
case 2285:
case 3522:
case 81:
case 1045:
case 434:
case 1358:
case 1147:
case 4006:
case 3731:
case 1233:
case 2966:
case 498:
case 2442:
case 1698:
case 679:
case 3793:
case 3851:
case 3504:
case 1141:
case 2240:
case 279:
case 1080:
case 1355:
case 3509:
case 881:
case 2687:
case 2976:
case 182:
case 2113:
case 2288:
case 3099:
case 3100:
case 2594:
case 3283:
case 3436:
case 3708:
case 1571:
case 1781:
case 4062:
case 104:
case 481:
case 228:
case 3660:
case 2902:
case 2279:
case 2511:
case 3992:
case 142:
case 2798:
case 795:
case 2517:
case 135:
case 2924:
case 898:
case 3670:
case 834:
case 3017:
case 1561:
case 1577:
case 3321:
case 3115:
case 92:
case 2264:
case 3030:
case 1886:
case 2530:
case 3705:
case 4055:
case 628:
case 750:
case 1039:
case 3075:
case 3412:
case 2827:
case 2614:
case 3256:
case 3177:
case 1679:
case 1797:
case 709:
case 3635:
case 1733:
case 629:
case 614:
case 4023:
case 3171:
case 3143:
case 3293:
case 2740:
case 3065:
case 1853:
case 214:
case 3237:
case 229:
case 2565:
case 1518:
case 940:
case 3210:
case 320:
case 3982:
case 1669:
case 764:
case 2821:
case 3167:
case 33:
case 357:
case 844:
case 378:
case 3180:
case 713:
case 2541:
case 2783:
case 792:
case 207:
case 989:
case 1862:
case 1194:
case 1858:
case 484:
case 3633:
case 3298:
case 1249:
case 3589:
case 101:
case 3779:
case 1000:
case 263:
case 2084:
case 490:
case 1738:
case 663:
case 3295:
case 356:
case 3691:
case 727:
case 132:
case 2601:
case 2954:
case 607:
case 3764:
case 2547:
case 1872:
case 1207:
case 3226:
case 611:
case 1608:
case 1545:
case 3681:
case 3022:
case 28:
case 3966:
case 527:
case 3442:
case 2644:
case 123:
case 2649:
case 2857:
case 2509:
case 379:
case 2737:
case 2836:
case 1580:
case 2851:
case 592:
case 1770:
case 2100:
case 1201:
case 211:
case 3594:
case 988:
case 1605:
case 3703:
case 455:
case 1548:
case 2099:
case 3599:
case 2710:
case 3976:
case 3687:
case 270:
case 3178:
case 3235:
case 2567:
case 3631:
case 487:
case 669:
case 1798:
case 975:
case 3749:
case 3656:
case 1511:
case 3067:
case 1279:
case 3071:
case 3043:
case 2214:
case 354:
case 847:
case 204:
case 2781:
case 2219:
case 2543:
case 2306:
case 2603:
case 1269:
case 2825:
case 518:
case 4012:
case 3152:
case 2561:
case 1929:
case 269:
case 3175:
case 3238:
case 1924:
case 983:
case 1134:
case 1517:
case 2674:
case 2733:
case 3472:
case 519:
case 3130:
case 2679:
case 1568:
case 3328:
case 3455:
case 3806:
case 1726:
case 3707:
case 1827:
case 2039:
case 1785:
case 3117:
case 1578:
case 1821:
case 3701:
case 4051:
case 1788:
case 668:
case 3386:
case 3946:
case 4036:
case 96:
case 3111:
case 385:
case 2518:
case 129:
case 2791:
case 1740:
case 815:
case 1084:
case 163:
case 201:
case 2249:
case 2513:
case 2199:
case 2194:
case 2862:
case 2735:
case 1783:
case 1541:
case 3685:
case 1573:
case 2590:
case 3626:
case 3090:
case 3109:
case 2872:
case 1959:
case 566:
case 3287:
case 1954:
case 3496:
case 232:
case 3688:
case 3640:
case 601:
case 2738:
case 2406:
case 1563:
case 106:
case 3122:
case 85:
case 1857:
case 3362:
case 1649:
case 3358:
case 3147:
case 3297:
case 766:
case 617:
case 3698:
case 3950:
case 18:
case 216:
case 2608:
case 382:
case 170:
case 1710:
case 3048:
case 1099:
case 2548:
case 2823:
case 2605:
case 3372:
case 812:
case 2184:
case 1100:
case 1851:
case 3173:
case 3141:
case 4021:
case 1504:
case 3695:
case 1836:
case 3428:
case 3355:
case 1509:
case 217:
case 1624:
case 1817:
case 1716:
case 3127:
case 2861:
case 1106:
case 3445:
case 3025:
case 2586:
case 456:
case 2776:
case 3910:
case 4063:
case 390:
case 2525:
case 814:
case 829:
case 2528:
case 2871:
case 2843:
case 743:
case 115:
case 2334:
case 384:
case 1602:
case 3956:
case 3448:
case 3121:
case 478:
case 699:
case 2867:
case 457:
case 43:
case 828:
case 147:
case 3361:
case 205:
case 3490:
case 543:
case 355:
case 2818:
case 1732:
case 1865:
case 2400:
case 2964:
case 634:
case 1521:
case 3377:
case 698:
case 3413:
case 1878:
case 1875:
case 234:
case 3983:
case 2006:
case 3343:
case 1527:
case 2202:
case 1914:
case 298:
case 146:
case 605:
case 2596:
case 4022:
case 3142:
case 2815:
case 1868:
case 3620:
case 2974:
case 3096:
case 2434:
case 3380:
case 1863:
case 3632:
case 88:
case 4030:
case 522:
case 3940:
case 3988:
case 1399:
case 44:
case 1394:
case 3157:
case 2572:
case 1746:
case 1847:
case 4011:
case 1907:
case 3151:
case 1841:
case 3266:
case 3800:
case 1720:
case 2558:
case 381:
case 811:
case 3058:
case 3062:
case 2813:
case 3443:
case 971:
case 3729:
case 1551:
case 2880:
case 1804:
case 3724:
case 910:
case 631:
case 4078:
case 2254:
case 2905:
case 202:
case 2259:
case 4068:
case 1822:
case 2845:
case 2908:
case 806:
case 722:
case 3461:
case 1389:
case 3998:
case 4075:
case 1944:
case 231:
case 1557:
case 1384:
case 1949:
case 2792:
case 1525:
case 3042:
case 2830:
case 1776:
case 3378:
case 2542:
case 2106:
case 3970:
case 580:
case 868:
case 2624:
case 3365:
case 3422:
case 594:
case 1867:
case 1766:
case 57:
case 3692:
case 2494:
case 1843:
case 1871:
case 2750:
case 1528:
case 3153:
case 3409:
case 565:
case 794:
case 2489:
case 2521:
case 3682:
case 2484:
case 842:
case 539:
case 141:
case 804:
case 2865:
case 1229:
case 3441:
case 3473:
case 105:
case 3128:
case 247:
case 1553:
case 482:
case 3938:
case 3935:
case 3447:
case 2868:
case 647:
case 3186:
case 246:
case 198:
case 1202:
case 835:
case 2527:
case 780:
case 2875:
case 2847:
case 1572:
case 548:
case 2901:
case 2399:
case 3452:
case 823:
case 3468:
case 612:
case 3216:
case 693:
case 2512:
case 460:
case 1439:
case 3309:
case 3475:
case 3012:
case 816:
case 2863:
case 1434:
case 3889:
case 3478:
case 1562:
case 454:
case 2720:
case 959:
case 3933:
case 4071:
case 3123:
case 4067:
case 2841:
case 3250:
case 3465:
case 3322:
case 591:
case 2907:
case 900:
case 637:
case 4018:
case 3987:
case 3676:
case 65:
case 1259:
case 3894:
case 801:
case 3158:
case 958:
case 102:
case 1254:
case 485:
case 1523:
case 977:
case 562:
case 2804:
case 1880:
case 3363:
case 2809:
case 236:
case 791:
case 845:
case 3232:
case 1792:
case 976:
case 2949:
case 3430:
case 549:
case 832:
case 2557:
case 131:
case 2944:
case 2389:
case 3666:
case 3981:
case 237:
case 1845:
case 1908:
case 2822:
case 30:
case 3417:
case 3341:
case 1282:
case 2196:
case 190:
case 1910:
case 2378:
case 788:
case 2042:
case 3830:
case 1086:
case 873:
case 2365:
case 2422:
case 2970:
case 1318:
case 3817:
case 961:
case 3629:
case 2692:
case 1448:
case 445:
case 2352:
case 1315:
case 1931:
case 401:
case 4000:
case 2409:
case 3750:
case 1028:
case 2960:
case 2375:
case 2330:
case 2021:
case 1646:
case 3878:
case 1413:
case 3489:
case 1377:
case 417:
case 1754:
case 927:
case 347:
case 854:
case 2938:
case 2317:
case 155:
case 2441:
case 1490:
case 1053:
case 3732:
case 1142:
case 1367:
case 2935:
case 2311:
case 2125:
case 1096:
case 588:
case 860:
case 1620:
case 789:
case 992:
case 3875:
case 2027:
case 3919:
case 423:
case 1834:
case 2463:
case 1506:
case 346:
case 3399:
case 469:
case 687:
case 1988:
case 964:
case 2468:
case 1157:
case 3847:
case 3746:
case 435:
case 1348:
case 3659:
case 1380:
case 3863:
case 1632:
case 3512:
case 2309:
case 1940:
case 2991:
case 181:
case 882:
case 2933:
case 312:
case 52:
case 404:
case 393:
case 7:
case 686:
case 2478:
case 1926:
case 3907:
case 1985:
case 2322:
case 1151:
case 3873:
case 950:
case 1418:
case 2411:
case 60:
case 2158:
case 2162:
case 72:
case 851:
case 5:
case 1023:
case 1467:
case 2899:
case 2676:
case 3809:
case 2051:
case 1995:
case 2363:
case 3804:
case 1998:
case 2666:
case 468:
case 995:
case 2057:
case 2430:
case 3557:
case 2172:
case 540:
case 1390:
case 20:
case 35:
case 1112:
case 2937:
case 399:
case 2445:
case 3861:
case 2993:
case 1365:
case 3903:
case 406:
case 3525:
case 684:
case 2910:
case 290:
case 2282:
case 284:
case 4089:
case 1960:
case 1404:
case 3334:
case 2480:
case 3871:
case 1409:
case 4084:
case 3339:
case 1153:
case 2931:
case 2315:
case 1220:
case 3766:
case 2121:
case 1352:
case 966:
case 2448:
case 411:
case 921:
case 1473:
case 255:
case 3229:
case 2361:
case 305:
case 1938:
case 470:
case 4094:
case 2754:
case 3969:
case 2377:
case 2413:
case 2646:
case 1682:
case 1021:
case 3400:
case 2839:
case 3202:
case 2371:
case 2506:
case 2983:
case 84:
case 1125:
case 1447:
case 1935:
case 2367:
case 3979:
case 1186:
case 1991:
case 186:
case 3439:
case 1309:
case 1216:
case 21:
case 1475:
case 681:
case 2348:
case 575:
case 2415:
case 1452:
case 2418:
case 583:
case 1322:
case 1250:
case 1465:
case 2985:
case 2136:
case 1478:
case 61:
case 1889:
case 1933:
case 281:
case 918:
case 1036:
case 1363:
case 2724:
case 2616:
case 83:
case 857:
case 344:
case 2729:
case 2443:
case 1232:
case 1987:
case 1676:
case 1899:
case 2467:
case 2023:
case 1162:
case 1894:
case 414:
case 1158:
case 3523:
case 1411:
case 1981:
case 2650:
case 2112:
case 10:
case 2702:
case 2390:
case 56:
case 3792:
case 331:
case 1172:
case 3300:
case 1057:
case 1666:
case 2313:
case 799:
case 598:
case 850:
case 2762:
case 3952:
case 534:
case 3814:
case 809:
case 1939:
case 1606:
case 643:
case 1129:
case 1934:
case 1883:
case 3819:
case 1124:
case 3975:
case 982:
case 3621:
case 4095:
case 243:
case 1546:
case 2582:
case 3286:
case 3965:
case 165:
case 3370:
case 864:
case 2838:
case 2407:
case 4085:
case 625:
case 1379:
case 3911:
case 1374:
case 17:
case 2002:
case 741:
case 138:
case 2723:
case 599:
case 1364:
case 798:
case 3120:
case 2449:
case 4040:
case 180:
case 1369:
case 372:
case 2444:
case 734:
case 951:
case 1736:
case 225:
case 3481:
case 3529:
case 3917:
case 2029:
case 1893:
case 3524:
case 3849:
case 3333:
case 2566:
case 3844:
case 3258:
case 4083:
case 985:
case 1898:
case 1154:
case 36:
case 149:
case 1550:
case 3470:
case 2999:
case 861:
case 162:
case 1742:
case 2576:
case 544:
case 2301:
case 3272:
case 2994:
case 3255:
case 3904:
case 3651:
case 973:
case 502:
case 3909:
case 633:
case 1469:
case 2897:
case 2344:
case 744:
case 892:
case 1900:
case 2833:
case 191:
case 622:
case 3973:
case 3941:
case 4031:
case 1727:
case 702:
case 3807:
case 3438:
case 1308:
case 826:
case 2054:
case 3435:
case 3559:
case 222:
case 1721:
case 459:
case 4093:
case 3387:
case 1479:
case 697:
case 1840:
case 2891:
case 3150:
case 2414:
case 2419:
case 1532:
case 400:
case 2124:
case 818:
case 2883:
case 388:
case 2606:
case 3331:
case 49:
case 3488:
case 639:
case 474:
case 1758:
case 1835:
case 3356:
case 4081:
case 546:
case 3874:
case 3337:
case 239:
case 1755:
case 3653:
case 2712:
case 3485:
case 265:
case 3192:
case 2303:
case 1772:
case 3310:
case 3869:
case 3046:
case 4033:
case 27:
case 3971:
case 1860:
case 3495:
case 294:
case 1592:
case 747:
case 2374:
case 2379:
case 2831:
case 824:
case 2893:
case 2751:
case 2408:
case 1444:
case 3686:
case 3977:
case 2810:
case 978:
case 4091:
case 3221:
case 2364:
case 3803:
case 957:
case 1723:
case 471:
case 3385:
case 2550:
case 3437:
case 3326:
case 3808:
case 662:
case 4035:
case 920:
case 410:
case 3410:
case 2898:
case 133:
case 340:
case 1566:
case 2159:
case 3016:
case 712:
case 2516:
case 2895:
case 3212:
case 3:
case 3980:
case 536:
case 3623:
case 3431:
case 1786:
case 262:
case 2742:
case 1887:
case 649:
case 2308:
case 2826:
case 32:
case 2885:
case 3662:
case 1349:
case 3658:
case 2900:
case 3257:
case 1344:
case 3913:
case 3236:
case 2532:
case 1414:
case 196:
case 3032:
case 4070:
case 2721:
case 3672:
case 1054:
case 911:
case 3939:
case 288:
case 1627:
case 421:
case 1814:
case 3129:
case 2440:
case 1491:
case 1819:
case 1228:
case 3883:
case 970:
case 4044:
case 3124:
case 3520:
case 2696:
case 2915:
case 2331:
case 1965:
case 365:
case 2485:
case 3102:
case 2653:
case 2046:
case 2310:
case 1978:
case 230:
case 688:
case 1286:
case 2864:
case 98:
case 3303:
case 1433:
case 3546:
case 2495:
case 2227:
case 2943:
case 338:
case 689:
case 1487:
case 2967:
case 1335:
case 1911:
case 3374:
case 1296:
case 3736:
case 3837:
case 1481:
case 2961:
case 3751:
case 1917:
case 1253:
case 963:
case 4001:
case 1930:
case 1120:
case 810:
case 1642:
case 2498:
case 2437:
case 2808:
case 2945:
case 2385:
case 2050:
case 1470:
case 1657:
case 3403:
case 6:
case 786:
case 3159:
case 929:
case 914:
case 2410:
case 4019:
case 3898:
case 2:
case 2980:
case 640:
case 1636:
case 1909:
case 2016:
case 2340:
case 2623:
case 2805:
case 2948:
case 2456:
case 853:
case 1941:
case 1973:
case 1116:
case 22:
case 3826:
case 1807:
case 3727:
case 1381:
case 2398:
case 2913:
case 2176:
case 391:
case 3464:
case 3900:
case 587:
case 2662:
case 2032:
case 874:
case 1150:
case 2655:
case 348:
case 89:
case 3532:
case 2672:
case 3305:
case 62:
case 1559:
case 70:
case 2166:
case 418:
case 1387:
case 3888:
case 1223:
case 1331:
case 1915:
case 2952:
case 3835:
case 3762:
case 1356:
case 3758:
case 2975:
case 859:
case 2360:
case 790:
case 2491:
case 2627:
case 916:
case 3582:
case 1864:
case 343:
case 130:
case 2978:
case 1310:
case 2621:
case 2225:
case 1046:
case 2082:
case 3838:
case 3407:
case 413:
case 4005:
case 923:
case 1653:
case 1918:
case 2370:
case 1485:
case 2296:
case 2146:
case 2335:
case 755:
case 1967:
case 2487:
case 2092:
case 584:
case 1628:
case 1971:
case 461:
case 3206:
case 876:
case 3860:
case 1383:
case 932:
case 1495:
case 1498:
case 1977:
case 945:
case 2642:
case 1221:
case 2120:
case 1625:
case 3449:
case 2524:
case 858:
case 2917:
case 3029:
case 590:
case 325:
case 1961:
case 2481:
case 189:
case 3024:
case 2338:
case 140:
case 2844:
case 71:
case 2066:
case 2849:
case 2470:
case 4079:
case 1493:
case 1050:
case 1385:
case 1808:
case 1945:
case 1437:
case 3881:
case 968:
case 1948:
case 1805:
case 1623:
case 2076:
case 3994:
case 3576:
case 66:
case 2272:
case 3301:
case 1431:
case 3887:
case 1388:
case 2391:
case 4064:
case 2909:
case 2636:
case 781:
case 1212:
case 4069:
case 2460:
case 2255:
case 2651:
case 969:
case 3349:
case 675:
case 1658:
case 1913:
case 1398:
case 3897:
case 2381:
case 2807:
case 2438:
case 2706:
case 12:
case 752:
case 2973:
case 2941:
case 2223:
case 2554:
case 1166:
case 2559:
case 409:
case 1483:
case 1236:
case 275:
case 683:
case 396:
case 2150:
case 3414:
case 450:
case 2612:
case 3891:
case 3753:
case 1032:
case 1160:
case 2665:
case 1618:
case 671:
case 610:
case 3538:
case 931:
case 3329:
case 462:
case 176:
case 1217:
case 585:
case 1230:
case 2131:
case 1564:
case 3882:
case 2277:
case 1083:
case 2927:
case 177:
case 3019:
case 902:
case 319:
case 889:
case 3790:
case 3014:
case 1170:
case 2193:
case 3535:
case 271:
case 1784:
case 2700:
case 1574:
case 3459:
case 3103:
case 2392:
case 1789:
case 2668:
case 1996:
case 210:
case 2035:
case 2070:
case 2218:
case 1661:
case 1265:
case 1037:
case 2824:
case 3570:
case 2183:
case 1794:
case 1010:
case 2630:
case 100:
case 3748:
case 1346:
case 3174:
case 2942:
case 1986:
case 1677:
case 1799:
case 2802:
case 3239:
case 491:
case 1416:
case 1671:
case 1643:
case 1138:
case 1928:
case 3234:
case 1056:
case 2476:
case 1667:
case 3892:
case 1031:
case 1252:
case 830:
case 1320:
case 582:
case 1680:
case 3402:
case 2609:
case 1263:
case 3761:
case 751:
case 3876:
case 3354:
case 69:
case 3587:
case 3694:
case 1923:
case 674:
case 1648:
case 465:
case 998:
case 2492:
case 29:
case 941:
case 1191:
case 1241:
case 2140:
case 1273:
case 3581:
case 3429:
case 2081:
case 3424:
case 2957:
case 3044:
case 2213:
case 2549:
case 2188:
case 3866:
case 2912:
case 480:
case 366:
case 1955:
case 1040:
case 2663:
case 3718:
case 3001:
case 840:
case 1088:
case 2854:
case 2248:
case 782:
case 2195:
case 1085:
case 1350:
case 2033:
case 438:
case 3689:
case 253:
case 47:
case 2097:
case 303:
case 3684:
case 1962:
case 2482:
case 494:
case 1958:
case 999:
case 3533:
case 1156:
case 3069:
case 1277:
case 937:
case 2230:
case 677:
case 1678:
case 1038:
case 2160:
case 2579:
case 2211:
case 110:
case 2996:
case 1668:
case 2789:
case 1392:
case 3820:
case 3079:
case 3583:
case 1243:
case 2432:
case 1271:
case 3773:
case 1137:
case 258:
case 277:
case 433:
case 2083:
case 1466:
case 3003:
case 54:
case 2503:
case 2925:
case 1382:
case 1630:
case 2135:
case 4054:
case 3593:
case 1617:
case 3704:
case 2037:
case 3114:
case 259:
case 2265:
case 2450:
case 2661:
case 2093:
case 1829:
case 2320:
case 2252:
case 1611:
case 2667:
case 497:
case 2056:
case 720:
case 2138:
case 600:
case 73:
case 2133:
case 946:
case 883:
case 3730:
case 579:
case 2923:
case 1087:
case 2505:
case 313:
case 392:
case 2095:
case 443:
case 1609:
case 2263:
case 3595:
case 2680:
case 1604:
case 1185:
case 1951:
case 3101:
case 1544:
case 1188:
case 3598:
case 1549:
case 2098:
case 3289:
case 3711:
case 1957:
case 327:
case 3008:
case 174:
case 1622:
case 2645:
case 2241:
case 4024:
case 1501:
case 3144:
case 3294:
case 3778:
case 3588:
case 915:
case 1248:
case 425:
case 2420:
case 2088:
case 556:
case 1647:
case 3765:
case 1091:
case 2040:
case 2955:
case 3540:
case 2446:
case 1482:
case 2962:
case 578:
case 361:
case 4002:
case 2187:
case 153:
case 2613:
case 1366:
case 1507:
case 2350:
case 2085:
case 3526:
case 1739:
case 3775:
case 2026:
case 1245:
case 1673:
case 1641:
case 3585:
case 529:
case 514:
case 90:
case 3230:
case 728:
case 2747:
case 3564:
case 2069:
case 295:
case 3160:
case 1324:
case 2763:
case 1538:
case 376:
case 3217:
case 1329:
case 2820:
case 1459:
case 695:
case 3789:
case 3579:
case 1454:
case 377:
case 1019:
case 3083:
case 358:
case 4066:
case 208:
case 1302:
case 3432:
case 300:
case 3135:
case 3278:
case 1174:
case 1748:
case 475:
case 3986:
case 3093:
case 2709:
case 2537:
case 2114:
case 3265:
case 118:
case 1780:
case 2704:
case 2119:
case 2593:
case 1169:
case 714:
case 2556:
case 3320:
case 843:
case 264:
case 650:
case 3138:
case 3275:
case 3671:
case 1745:
case 1234:
case 1699:
case 707:
case 1777:
case 1587:
case 2005:
case 1354:
case 213:
case 3923:
case 1694:
case 3133:
case 2595:
case 226:
case 3680:
case 3332:
case 1402:
case 3263:
case 4082:
case 2107:
case 511:
case 2711:
case 3098:
case 1049:
case 2598:
case 2101:
case 1200:
case 2284:
case 1866:
case 121:
case 1767:
case 613:
case 3508:
case 2850:
case 692:
case 3645:
case 1581:
case 3191:
case 78:
case 1001:
case 3972:
case 2149:
case 3088:
case 3420:
case 833:
case 2294:
case 506:
case 1108:
case 3181:
case 3204:
case 166:
case 1591:
case 2540:
case 2765:
case 3316:
case 3209:
case 3613:
case 507:
case 1715:
case 1597:
case 2600:
case 103:
case 1684:
case 1105:
case 3958:
case 3026:
case 3690:
case 2585:
case 167:
case 3085:
case 3350:
case 711:
case 2538:
case 3038:
case 195:
case 1069:
case 3277:
case 3156:
case 4:
case 1747:
case 1846:
case 2882:
case 3131:
case 619:
case 2302:
case 3519:
case 3193:
case 3675:
case 1583:
case 2790:
case 1773:
case 3514:
case 219:
case 3137:
case 1639:
case 1906:
case 440:
case 3927:
case 310:
case 3035:
case 2454:
case 3668:
case 2459:
case 568:
case 3267:
case 1820:
case 769:
case 3700:
case 1119:
case 1704:
case 2780:
case 1114:
case 1709:
case 3829:
case 3218:
case 535:
case 150:
case 1510:
case 2748:
case 2174:
case 2234:
case 2745:
case 2239:
case 542:
case 839:
case 2560:
case 164:
case 1556:
case 2892:
case 2164:
case 91:
case 3611:
case 42:
case 1107:
case 430:
case 3936:
case 621:
case 3951:
case 3185:
case 3604:
case 1717:
case 2694:
case 1730:
case 1005:
case 2354:
case 2587:
case 2777:
case 2699:
case 1008:
case 127:
case 732:
case 3081:
case 374:
case 523:
case 3140:
case 3290:
case 2429:
case 2581:
case 4020:
case 2743:
case 39:
case 3544:
case 2767:
case 2200:
case 1598:
case 2049:
case 3549:
case 3213:
case 3957:
case 2718:
case 532:
case 1832:
case 3280:
case 1778:
case 1144:
case 3376:
case 489:
case 1294:
case 3198:
case 3248:
case 3854:
case 1299:
case 2001:
case 3647:
case 716:
case 3859:
case 1526:
case 3507:
case 1775:
case 3641:
case 1585:
case 3673:
case 3195:
case 3245:
case 3734:
case 3482:
case 161:
case 2105:
case 3097:
case 1600:
case 203:
case 2715:
case 1768:
case 666:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751580001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,];
var gg_b = "1751580001/";

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
