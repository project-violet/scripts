// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 2543:
case 19:
case 3482:
case 1173:
case 4093:
case 1687:
case 279:
case 1678:
case 1901:
case 3084:
case 1282:
case 348:
case 2710:
case 2915:
case 34:
case 2153:
case 2061:
case 3241:
case 418:
case 779:
case 634:
case 360:
case 637:
case 2232:
case 1103:
case 649:
case 1968:
case 2450:
case 3168:
case 1393:
case 3198:
case 87:
case 3462:
case 1160:
case 1231:
case 2094:
case 1872:
case 2649:
case 2647:
case 1727:
case 246:
case 3453:
case 3821:
case 2764:
case 3444:
case 882:
case 3889:
case 3849:
case 788:
case 1995:
case 3706:
case 3655:
case 2222:
case 3130:
case 3110:
case 3470:
case 1722:
case 422:
case 3204:
case 746:
case 248:
case 1615:
case 2297:
case 2841:
case 1652:
case 1346:
case 4000:
case 2:
case 52:
case 3128:
case 2622:
case 2139:
case 1603:
case 516:
case 1289:
case 2757:
case 3082:
case 3575:
case 1521:
case 572:
case 2269:
case 3959:
case 2125:
case 3150:
case 3633:
case 618:
case 301:
case 2351:
case 262:
case 573:
case 2388:
case 1858:
case 888:
case 4020:
case 2093:
case 2314:
case 4082:
case 1106:
case 1569:
case 314:
case 1899:
case 1023:
case 3028:
case 2632:
case 3447:
case 495:
case 3009:
case 3104:
case 2603:
case 2525:
case 2690:
case 1437:
case 3053:
case 2903:
case 337:
case 1320:
case 1807:
case 623:
case 2110:
case 2872:
case 3236:
case 3939:
case 3361:
case 3136:
case 3132:
case 534:
case 3458:
case 3969:
case 896:
case 2053:
case 394:
case 1474:
case 409:
case 1967:
case 2549:
case 2469:
case 3682:
case 1246:
case 2160:
case 3052:
case 3700:
case 1072:
case 1113:
case 2580:
case 1596:
case 3163:
case 2978:
case 2082:
case 105:
case 2442:
case 671:
case 149:
case 1457:
case 2480:
case 3436:
case 4:
case 1594:
case 2802:
case 3509:
case 1500:
case 2823:
case 2842:
case 2296:
case 816:
case 2745:
case 3935:
case 3200:
case 587:
case 1723:
case 1073:
case 2092:
case 474:
case 3981:
case 142:
case 3411:
case 1658:
case 1383:
case 3819:
case 1378:
case 2228:
case 2065:
case 979:
case 2846:
case 183:
case 217:
case 2268:
case 1721:
case 561:
case 2942:
case 2257:
case 2637:
case 1783:
case 3503:
case 2544:
case 1877:
case 2990:
case 189:
case 3026:
case 2684:
case 1187:
case 772:
case 2572:
case 1333:
case 3680:
case 3201:
case 3311:
case 752:
case 3879:
case 3042:
case 2635:
case 382:
case 3276:
case 3343:
case 70:
case 835:
case 724:
case 10:
case 3870:
case 3318:
case 983:
case 1256:
case 2405:
case 2070:
case 1588:
case 1305:
case 1716:
case 2123:
case 1388:
case 591:
case 3914:
case 423:
case 3120:
case 4041:
case 3787:
case 3471:
case 3736:
case 3415:
case 1926:
case 1403:
case 3299:
case 1508:
case 1629:
case 2034:
case 3414:
case 3965:
case 3014:
case 2387:
case 1108:
case 2097:
case 1913:
case 2488:
case 3625:
case 3737:
case 3950:
case 1429:
case 2742:
case 3498:
case 980:
case 3397:
case 977:
case 1784:
case 2104:
case 3058:
case 4025:
case 2739:
case 2665:
case 450:
case 2210:
case 3731:
case 2377:
case 3106:
case 3145:
case 1268:
case 3882:
case 1150:
case 2188:
case 632:
case 2233:
case 18:
case 488:
case 3187:
case 627:
case 1355:
case 263:
case 492:
case 761:
case 2452:
case 178:
case 2893:
case 2454:
case 710:
case 747:
case 3772:
case 2733:
case 1088:
case 190:
case 3500:
case 2522:
case 1030:
case 872:
case 1020:
case 2611:
case 786:
case 2653:
case 956:
case 1623:
case 2559:
case 1937:
case 2470:
case 827:
case 3777:
case 2768:
case 1440:
case 1366:
case 2552:
case 373:
case 2031:
case 643:
case 152:
case 1493:
case 1416:
case 1230:
case 2705:
case 836:
case 2934:
case 975:
case 748:
case 3780:
case 3853:
case 2501:
case 535:
case 313:
case 699:
case 1670:
case 1918:
case 3329:
case 1221:
case 231:
case 2576:
case 3820:
case 202:
case 2230:
case 3109:
case 4088:
case 976:
case 2391:
case 3567:
case 1885:
case 2882:
case 3974:
case 1279:
case 560:
case 250:
case 3083:
case 3843:
case 2397:
case 3080:
case 3968:
case 365:
case 1039:
case 660:
case 2359:
case 2357:
case 3159:
case 2036:
case 1896:
case 541:
case 3074:
case 1418:
case 25:
case 539:
case 1451:
case 879:
case 1163:
case 2723:
case 3190:
case 962:
case 3023:
case 3581:
case 2838:
case 910:
case 901:
case 397:
case 987:
case 594:
case 1620:
case 3376:
case 114:
case 1354:
case 1747:
case 1413:
case 3339:
case 264:
case 116:
case 1767:
case 484:
case 780:
case 3854:
case 1306:
case 1876:
case 3679:
case 1151:
case 2374:
case 2103:
case 799:
case 2939:
case 2596:
case 3871:
case 1134:
case 3275:
case 576:
case 2582:
case 2026:
case 2813:
case 3553:
case 2704:
case 4090:
case 1637:
case 3903:
case 2075:
case 2090:
case 1584:
case 3971:
case 624:
case 3366:
case 2849:
case 1142:
case 777:
case 2100:
case 1726:
case 3605:
case 3068:
case 1799:
case 3869:
case 1424:
case 3562:
case 21:
case 1136:
case 1675:
case 3401:
case 3278:
case 1749:
case 2786:
case 1962:
case 3673:
case 477:
case 1710:
case 443:
case 850:
case 457:
case 2936:
case 1769:
case 2774:
case 161:
case 1712:
case 2258:
case 177:
case 1640:
case 3432:
case 303:
case 3408:
case 1738:
case 3294:
case 750:
case 1068:
case 778:
case 852:
case 2970:
case 3258:
case 2720:
case 402:
case 3382:
case 1261:
case 2950:
case 2054:
case 688:
case 1183:
case 3957:
case 743:
case 985:
case 1362:
case 1351:
case 785:
case 2116:
case 1319:
case 2109:
case 275:
case 3313:
case 2844:
case 1220:
case 3388:
case 569:
case 2426:
case 2822:
case 3571:
case 426:
case 3720:
case 3686:
case 3858:
case 3468:
case 3248:
case 2953:
case 4068:
case 4049:
case 1636:
case 3217:
case 3895:
case 675:
case 4027:
case 1407:
case 3019:
case 1794:
case 2332:
case 1288:
case 1686:
case 700:
case 984:
case 3474:
case 1732:
case 453:
case 452:
case 1667:
case 988:
case 929:
case 2459:
case 1827:
case 3222:
case 3335:
case 2455:
case 2959:
case 2947:
case 1276:
case 2511:
case 1552:
case 1523:
case 2386:
case 2330:
case 2685:
case 122:
case 1550:
case 2579:
case 3650:
case 823:
case 1159:
case 797:
case 2640:
case 4080:
case 2586:
case 255:
case 583:
case 1227:
case 1:
case 1836:
case 258:
case 1882:
case 1713:
case 1487:
case 551:
case 2316:
case 2438:
case 2300:
case 28:
case 2437:
case 875:
case 2578:
case 2434:
case 1743:
case 3958:
case 3710:
case 219:
case 1182:
case 2556:
case 3030:
case 3689:
case 2444:
case 3400:
case 3693:
case 1148:
case 1868:
case 2376:
case 431:
case 1359:
case 96:
case 2776:
case 2925:
case 3768:
case 293:
case 657:
case 2149:
case 1271:
case 3420:
case 2035:
case 2779:
case 2554:
case 2657:
case 2815:
case 3985:
case 3373:
case 3537:
case 49:
case 2194:
case 3695:
case 2184:
case 2859:
case 2619:
case 2964:
case 1410:
case 2895:
case 102:
case 131:
case 2681:
case 954:
case 3349:
case 1334:
case 4033:
case 3274:
case 316:
case 3310:
case 1700:
case 935:
case 2451:
case 3438:
case 3715:
case 2267:
case 948:
case 3651:
case 3762:
case 320:
case 1812:
case 2392:
case 299:
case 362:
case 1653:
case 1957:
case 466:
case 2676:
case 3735:
case 2755:
case 1593:
case 3398:
case 2860:
case 2485:
case 1739:
case 2320:
case 2686:
case 369:
case 2699:
case 2972:
case 1681:
case 94:
case 1664:
case 1772:
case 2251:
case 575:
case 485:
case 2777:
case 1660:
case 4001:
case 3661:
case 1539:
case 2037:
case 82:
case 3725:
case 2088:
case 908:
case 4061:
case 2900:
case 2407:
case 3399:
case 310:
case 71:
case 3326:
case 1790:
case 3908:
case 2353:
case 2254:
case 2679:
case 401:
case 3943:
case 3548:
case 1618:
case 2458:
case 668:
case 3418:
case 203:
case 1992:
case 3010:
case 318:
case 2174:
case 3989:
case 3724:
case 3619:
case 106:
case 274:
case 605:
case 851:
case 2294:
case 3594:
case 3117:
case 3980:
case 3663:
case 65:
case 2477:
case 1599:
case 1893:
case 185:
case 2810:
case 1570:
case 647:
case 1222:
case 536:
case 3582:
case 3784:
case 3363:
case 1546:
case 4054:
case 2155:
case 3179:
case 1647:
case 1117:
case 1144:
case 1698:
case 900:
case 253:
case 3137:
case 1406:
case 3775:
case 1397:
case 3574:
case 3925:
case 800:
case 138:
case 2630:
case 3127:
case 3156:
case 472:
case 180:
case 1787:
case 2988:
case 2535:
case 134:
case 4031:
case 3543:
case 3286:
case 528:
case 2158:
case 3262:
case 942:
case 907:
case 494:
case 1809:
case 2955:
case 1327:
case 3238:
case 2800:
case 2018:
case 2133:
case 2689:
case 3273:
case 1049:
case 449:
case 1485:
case 271:
case 3203:
case 2457:
case 2646:
case 1839:
case 3332:
case 1484:
case 1309:
case 664:
case 515:
case 749:
case 2553:
case 3873:
case 3785:
case 1004:
case 1970:
case 720:
case 3433:
case 1107:
case 1124:
case 1702:
case 971:
case 3638:
case 2968:
case 3624:
case 3598:
case 3868:
case 2173:
case 2162:
case 764:
case 733:
case 1634:
case 1135:
case 4070:
case 36:
case 350:
case 973:
case 4040:
case 2399:
case 944:
case 3155:
case 2032:
case 996:
case 2898:
case 704:
case 289:
case 658:
case 3704:
case 3353:
case 1961:
case 2143:
case 3864:
case 1200:
case 2795:
case 1322:
case 3806:
case 1782:
case 2288:
case 1639:
case 2282:
case 1053:
case 2263:
case 1465:
case 1983:
case 2306:
case 3753:
case 2047:
case 1411:
case 2516:
case 2358:
case 54:
case 3923:
case 414:
case 2500:
case 2007:
case 2971:
case 1199:
case 1219:
case 3599:
case 1888:
case 2929:
case 3799:
case 839:
case 2852:
case 2084:
case 2901:
case 2204:
case 815:
case 3421:
case 3380:
case 940:
case 3729:
case 3545:
case 2762:
case 1284:
case 440:
case 396:
case 2272:
case 1468:
case 1266:
case 1044:
case 1600:
case 1453:
case 162:
case 1672:
case 3891:
case 2756:
case 268:
case 4057:
case 107:
case 3978:
case 1662:
case 603:
case 1527:
case 2633:
case 2905:
case 3559:
case 768:
case 2345:
case 3282:
case 207:
case 1762:
case 1811:
case 2381:
case 3835:
case 3734:
case 2734:
case 3423:
case 227:
case 651:
case 355:
case 1866:
case 2073:
case 1353:
case 3315:
case 168:
case 420:
case 981:
case 2066:
case 2039:
case 3621:
case 2494:
case 2983:
case 294:
case 1307:
case 415:
case 3301:
case 2871:
case 542:
case 2654:
case 2729:
case 1837:
case 3495:
case 3516:
case 2360:
case 406:
case 2404:
case 2876:
case 3164:
case 1999:
case 67:
case 1557:
case 1668:
case 3642:
case 3918:
case 2747:
case 3087:
case 563:
case 2384:
case 628:
case 1592:
case 2545:
case 2700:
case 631:
case 822:
case 1853:
case 2462:
case 2276:
case 1511:
case 3340:
case 2461:
case 2142:
case 992:
case 377:
case 374:
case 1542:
case 1529:
case 171:
case 3251:
case 1204:
case 642:
case 3316:
case 525:
case 921:
case 3247:
case 526:
case 1273:
case 37:
case 1554:
case 359:
case 3875:
case 154:
case 3626:
case 1822:
case 2966:
case 3178:
case 7:
case 2008:
case 2807:
case 1419:
case 1665:
case 1210:
case 1907:
case 3779:
case 1387:
case 1841:
case 2835:
case 1131:
case 3089:
case 3933:
case 278:
case 3172:
case 2252:
case 616:
case 2113:
case 1509:
case 3233:
case 3660:
case 45:
case 139:
case 2560:
case 2502:
case 3773:
case 2773:
case 3123:
case 626:
case 1975:
case 1792:
case 1293:
case 3327:
case 1234:
case 2551:
case 1065:
case 1613:
case 2317:
case 1976:
case 1475:
case 3490:
case 1115:
case 3025:
case 121:
case 1458:
case 3116:
case 2879:
case 1472:
case 1729:
case 3886:
case 347:
case 3961:
case 849:
case 1884:
case 387:
case 2792:
case 577:
case 4084:
case 1646:
case 3789:
case 3652:
case 877:
case 2443:
case 167:
case 3193:
case 1259:
case 1677:
case 174:
case 2496:
case 3181:
case 330:
case 3449:
case 2052:
case 2416:
case 2395:
case 685:
case 1400:
case 3657:
case 1488:
case 2224:
case 3124:
case 1404:
case 3235:
case 1997:
case 3973:
case 2598:
case 1741:
case 3976:
case 2857:
case 3702:
case 3863:
case 2962:
case 3846:
case 79:
case 3391:
case 840:
case 690:
case 3708:
case 1717:
case 2507:
case 1240:
case 490:
case 2914:
case 1146:
case 14:
case 269:
case 1482:
case 798:
case 1456:
case 461:
case 3007:
case 1861:
case 2225:
case 2411:
case 2127:
case 600:
case 211:
case 424:
case 3814:
case 2111:
case 4089:
case 2873:
case 2933:
case 3131:
case 3197:
case 3035:
case 2468:
case 2118:
case 547:
case 2600:
case 3383:
case 1936:
case 2478:
case 2808:
case 90:
case 1555:
case 1133:
case 3901:
case 1255:
case 2484:
case 903:
case 3578:
case 1384:
case 698:
case 811:
case 955:
case 2379:
case 3900:
case 2796:
case 1229:
case 3802:
case 543:
case 2089:
case 4075:
case 964:
case 2040:
case 3945:
case 1127:
case 1432:
case 354:
case 654:
case 3744:
case 2279:
case 405:
case 943:
case 2534:
case 3112:
case 3284:
case 3060:
case 991:
case 1360:
case 3250:
case 1042:
case 2902:
case 3952:
case 192:
case 1206:
case 3676:
case 324:
case 1528:
case 3960:
case 1776:
case 1093:
case 2737:
case 1947:
case 1486:
case 1188:
case 3234:
case 3521:
case 2780:
case 3003:
case 408:
case 2429:
case 1504:
case 1045:
case 1445:
case 3246:
case 610:
case 3810:
case 3755:
case 1299:
case 2069:
case 3298:
case 2617:
case 1704:
case 837:
case 1092:
case 93:
case 3641:
case 2798:
case 181:
case 1141:
case 430:
case 2718:
case 3865:
case 1855:
case 678:
case 343:
case 1694:
case 2517:
case 856:
case 3334:
case 1886:
case 2211:
case 1326:
case 3811:
case 3390:
case 3588:
case 2120:
case 3962:
case 2121:
case 2702:
case 1724:
case 775:
case 1565:
case 3830:
case 3556:
case 1780:
case 4043:
case 3255:
case 2101:
case 2422:
case 1934:
case 3140:
case 1715:
case 1417:
case 3465:
case 2532:
case 904:
case 3718:
case 2731:
case 2038:
case 1506:
case 3295:
case 1350:
case 3227:
case 191:
case 3881:
case 3317:
case 843:
case 2398:
case 1154:
case 2790:
case 2976:
case 1203:
case 390:
case 966:
case 3653:
case 3101:
case 3142:
case 878:
case 3919:
case 972:
case 2918:
case 2924:
case 1883:
case 1438:
case 228:
case 2187:
case 3634:
case 2662:
case 4077:
case 1556:
case 367:
case 1297:
case 1626:
case 3441:
case 1336:
case 3489:
case 1879:
case 1933:
case 3778:
case 1464:
case 1860:
case 648:
case 2643:
case 3580:
case 3738:
case 3331:
case 2714:
case 2678:
case 1880:
case 2985:
case 2728:
case 2213:
case 200:
case 2466:
case 144:
case 117:
case 665:
case 1321:
case 4065:
case 286:
case 2170:
case 11:
case 2197:
case 3937:
case 1659:
case 2896:
case 3544:
case 1466:
case 2588:
case 1386:
case 3044:
case 994:
case 3041:
case 2002:
case 3305:
case 1793:
case 1425:
case 2463:
case 3493:
case 3825:
case 3955:
case 221:
case 1177:
case 546:
case 2313:
case 3342:
case 1984:
case 260:
case 3739:
case 3371:
case 2219:
case 1515:
case 3856:
case 2343:
case 1281:
case 963:
case 3525:
case 1507:
case 1048:
case 1581:
case 1101:
case 1948:
case 821:
case 3037:
case 2911:
case 1532:
case 927:
case 241:
case 2433:
case 371:
case 1050:
case 3756:
case 3741:
case 1038:
case 3505:
case 847:
case 2076:
case 813:
case 2708:
case 2793:
case 2145:
case 1379:
case 458:
case 4006:
case 3218:
case 3264:
case 3608:
case 2175:
case 155:
case 1119:
case 3188:
case 1197:
case 3051:
case 967:
case 3884:
case 1132:
case 3964:
case 1960:
case 2154:
case 1392:
case 607:
case 2696:
case 4009:
case 1294:
case 2778:
case 615:
case 1225:
case 2062:
case 3931:
case 886:
case 2527:
case 3681:
case 1398:
case 890:
case 2910:
case 2817:
case 309:
case 3387:
case 1927:
case 2920:
case 2513:
case 2616:
case 212:
case 3766:
case 2954:
case 1105:
case 3182:
case 3153:
case 2115:
case 471:
case 3740:
case 2848:
case 173:
case 1688:
case 416:
case 223:
case 3842:
case 364:
case 1642:
case 2998:
case 2977:
case 4042:
case 681:
case 3209:
case 2262:
case 3021:
case 3998:
case 2071:
case 1130:
case 4016:
case 208:
case 506:
case 2515:
case 3314:
case 143:
case 1498:
case 3352:
case 919:
case 3219:
case 898:
case 2410:
case 384:
case 2472:
case 3077:
case 480:
case 2583:
case 3125:
case 696:
case 1056:
case 871:
case 997:
case 1380:
case 4092:
case 3786:
case 1184:
case 1241:
case 276:
case 1502:
case 1655:
case 906:
case 2241:
case 2048:
case 682:
case 3845:
case 2027:
case 266:
case 2248:
case 3678:
case 2323:
case 1746:
case 2828:
case 1489:
case 793:
case 1609:
case 673:
case 2804:
case 85:
case 305:
case 2863:
case 141:
case 1932:
case 3443:
case 2226:
case 2178:
case 3659:
case 194:
case 3688:
case 1925:
case 1175:
case 1059:
case 513:
case 3138:
case 2181:
case 789:
case 1904:
case 3266:
case 3573:
case 2878:
case 1365:
case 3231:
case 581:
case 2128:
case 1910:
case 2850:
case 1301:
case 3430:
case 715:
case 4053:
case 285:
case 3062:
case 3876:
case 841:
case 411:
case 1922:
case 828:
case 3395:
case 2347:
case 2497:
case 3649:
case 2875:
case 3852:
case 2445:
case 2811:
case 2412:
case 77:
case 2322:
case 3072:
case 3902:
case 118:
case 740:
case 1060:
case 2524:
case 2558:
case 2453:
case 1575:
case 3260:
case 2951:
case 1067:
case 172:
case 585:
case 3813:
case 3987:
case 2191:
case 242:
case 4071:
case 499:
case 970:
case 1643:
case 3287:
case 1756:
case 3006:
case 759:
case 1972:
case 459:
case 1751:
case 363:
case 817:
case 2146:
case 3791:
case 3771:
case 197:
case 1578:
case 2568:
case 1577:
case 491:
case 251:
case 454:
case 867:
case 3367:
case 2307:
case 2309:
case 968:
case 2483:
case 644:
case 3929:
case 3586:
case 2668:
case 3748:
case 3269:
case 3746:
case 2354:
case 2738:
case 2136:
case 298:
case 44:
case 930:
case 3834:
case 2137:
case 510:
case 2567:
case 3199:
case 15:
case 2260:
case 730:
case 3857:
case 859:
case 2547:
case 1558:
case 2349:
case 1415:
case 558:
case 1239:
case 1082:
case 3451:
case 3265:
case 825:
case 3597:
case 862:
case 2421:
case 1786:
case 540:
case 2198:
case 659:
case 83:
case 2078:
case 2744:
case 1695:
case 1345:
case 1924:
case 2331:
case 2085:
case 1806:
case 1650:
case 2134:
case 1707:
case 436:
case 2851:
case 1316:
case 3840:
case 2523:
case 1147:
case 830:
case 1859:
case 2414:
case 2784:
case 1395:
case 3325:
case 1014:
case 4013:
case 335:
case 3121:
case 1270:
case 2862:
case 820:
case 2240:
case 329:
case 2287:
case 315:
case 2816:
case 2481:
case 3285:
case 2255:
case 51:
case 1682:
case 1524:
case 1377:
case 2594:
case 721:
case 2059:
case 3764:
case 1264:
case 3375:
case 3239:
case 175:
case 3221:
case 17:
case 4019:
case 1304:
case 2621:
case 2017:
case 1420:
case 2464:
case 2096:
case 2591:
case 111:
case 3685:
case 3435:
case 3515:
case 1708:
case 2506:
case 186:
case 199:
case 1104:
case 2363:
case 2022:
case 3347:
case 2473:
case 42:
case 1952:
case 769:
case 1349:
case 2809:
case 2028:
case 2273:
case 1892:
case 3095:
case 548:
case 3565:
case 1765:
case 993:
case 1272:
case 6:
case 3497:
case 265:
case 1192:
case 2298:
case 1495:
case 1408:
case 3614:
case 2563:
case 1462:
case 2960:
case 3666:
case 1390:
case 3293:
case 1207:
case 130:
case 2749:
case 3831:
case 2612:
case 990:
case 2025:
case 100:
case 3093:
case 3892:
case 3866:
case 4064:
case 3818:
case 2606:
case 95:
case 544:
case 3687:
case 865:
case 1314:
case 1789:
case 437:
case 2285:
case 622:
case 669:
case 3502:
case 2261:
case 3812:
case 1051:
case 239:
case 3063:
case 3990:
case 3134:
case 3466:
case 1214:
case 2281:
case 2645:
case 2406:
case 2326:
case 1029:
case 2571:
case 2634:
case 2147:
case 791:
case 1262:
case 3406:
case 3088:
case 3431:
case 201:
case 3437:
case 2144:
case 2812:
case 3362:
case 549:
case 50:
case 2350:
case 1441:
case 2829:
case 57:
case 804:
case 2045:
case 2280:
case 1258:
case 3039:
case 982:
case 1631:
case 3940:
case 2409:
case 3997:
case 2874:
case 209:
case 566:
case 2906:
case 666:
case 1469:
case 2168:
case 500:
case 1898:
case 2540:
case 3154:
case 3148:
case 3328:
case 2430:
case 2366:
case 332:
case 812:
case 522:
case 697:
case 2286:
case 3758:
case 3036:
case 2931:
case 716:
case 2352:
case 370:
case 1074:
case 2752:
case 2238:
case 3782:
case 606:
case 3160:
case 1543:
case 1008:
case 4003:
case 3377:
case 2628:
case 9:
case 196:
case 104:
case 2669:
case 3861:
case 3259:
case 1168:
case 126:
case 372:
case 3751:
case 3583:
case 1171:
case 1064:
case 410:
case 195:
case 3508:
case 2185:
case 679:
case 717:
case 653:
case 2769:
case 35:
case 1275:
case 3392:
case 1323:
case 3862:
case 1303:
case 806:
case 529:
case 3510:
case 3467:
case 2141:
case 2932:
case 1973:
case 3207:
case 3454:
case 58:
case 3022:
case 3461:
case 4035:
case 2105:
case 3445:
case 3793:
case 1017:
case 3494:
case 3851:
case 1514:
case 345:
case 1693:
case 630:
case 3617:
case 2826:
case 3031:
case 3604:
case 2533:
case 1709:
case 2753:
case 1887:
case 4055:
case 3099:
case 2565:
case 1483:
case 1363:
case 892:
case 1287:
case 3647:
case 3450:
case 2087:
case 2853:
case 2727:
case 602:
case 3254:
case 3412:
case 1951:
case 1881:
case 2725:
case 2419:
case 765:
case 157:
case 2321:
case 559:
case 1998:
case 281:
case 1285:
case 3627:
case 3020:
case 469:
case 2203:
case 403:
case 3584:
case 2938:
case 404:
case 53:
case 1278:
case 1923:
case 636:
case 2234:
case 2916:
case 3826:
case 3711:
case 1329:
case 2670:
case 3389:
case 974:
case 3716:
case 3860:
case 3386:
case 1819:
case 608:
case 844:
case 2244:
case 3563:
case 3705:
case 2205:
case 1290:
case 1624:
case 1015:
case 2355:
case 2555:
case 2782:
case 1409:
case 2519:
case 140:
case 2987:
case 1595:
case 1757:
case 876:
case 3263:
case 831:
case 2794:
case 1252:
case 1089:
case 1479:
case 3949:
case 1576:
case 1829:
case 2986:
case 1055:
case 2760:
case 62:
case 1078:
case 3612:
case 2408:
case 3911:
case 2009:
case 597:
case 833:
case 1905:
case 4022:
case 2940:
case 3671:
case 570:
case 80:
case 1630:
case 1213:
case 880:
case 3405:
case 2724:
case 3692:
case 2394:
case 1339:
case 2539:
case 312:
case 1312:
case 1930:
case 1874:
case 1052:
case 3013:
case 1033:
case 3139:
case 2192:
case 1540:
case 1254:
case 3428:
case 3029:
case 3448:
case 3795:
case 1109:
case 2362:
case 349:
case 794:
case 1446:
case 3469:
case 3108:
case 693:
case 3618:
case 3572:
case 3126:
case 1422:
case 3351:
case 2315:
case 1689:
case 3632:
case 1138:
case 502:
case 1949:
case 663:
case 399:
case 2937:
case 2946:
case 1492:
case 3662:
case 127:
case 3307:
case 1340:
case 1370:
case 2250:
case 4076:
case 2538:
case 1641:
case 3091:
case 1791:
case 1958:
case 1714:
case 507:
case 2102:
case 556:
case 905:
case 1371:
case 166:
case 425:
case 1455:
case 3714:
case 2033:
case 383:
case 969:
case 3946:
case 1582:
case 2503:
case 2577:
case 742:
case 2214:
case 760:
case 1499:
case 2091:
case 3501:
case 3455:
case 4095:
case 1237:
case 2138:
case 43:
case 222:
case 2806:
case 1215:
case 571:
case 3476:
case 3610:
case 2449:
case 4047:
case 819:
case 165:
case 1368:
case 2641:
case 2639:
case 2995:
case 1533:
case 3878:
case 2688:
case 2486:
case 421:
case 3057:
case 674:
case 91:
case 3434:
case 735:
case 1728:
case 1283:
case 2992:
case 3570:
case 2887:
case 3292:
case 489:
case 2783:
case 3409:
case 2020:
case 153:
case 1635:
case 216:
case 3938:
case 3065:
case 1818:
case 2413:
case 470:
case 3518:
case 3324:
case 311:
case 73:
case 2095:
case 3333:
case 74:
case 378:
case 781:
case 3732:
case 2713:
case 938:
case 1028:
case 3546:
case 1737:
case 709:
case 3066:
case 924:
case 1963:
case 3085:
case 1778:
case 593:
case 1820:
case 3792:
case 3794:
case 1018:
case 3076:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1655067602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,];
var gg_b = "1655064002/";

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
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
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
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
