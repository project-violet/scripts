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
case 3137:
case 152:
case 1304:
case 3644:
case 3492:
case 1468:
case 1307:
case 3356:
case 922:
case 2165:
case 3134:
case 3647:
case 1776:
case 664:
case 1523:
case 2548:
case 516:
case 311:
case 1159:
case 458:
case 3661:
case 357:
case 1181:
case 125:
case 836:
case 19:
case 3384:
case 2808:
case 3726:
case 1253:
case 3573:
case 3278:
case 2606:
case 1527:
case 313:
case 3842:
case 772:
case 2391:
case 130:
case 3042:
case 1962:
case 657:
case 2639:
case 3577:
case 587:
case 3502:
case 897:
case 1228:
case 829:
case 2243:
case 611:
case 3117:
case 2875:
case 2166:
case 3114:
case 2421:
case 1254:
case 3574:
case 2075:
case 2149:
case 437:
case 507:
case 2926:
case 3641:
case 1696:
case 1337:
case 1301:
case 2620:
case 3235:
case 1270:
case 3550:
case 1990:
case 3216:
case 3172:
case 3512:
case 1156:
case 3131:
case 3381:
case 2952:
case 131:
case 2635:
case 3664:
case 2616:
case 1122:
case 2910:
case 2038:
case 2568:
case 1187:
case 3667:
case 971:
case 1313:
case 2394:
case 944:
case 60:
case 1718:
case 3103:
case 310:
case 2636:
case 2018:
case 226:
case 55:
case 2169:
case 1780:
case 1183:
case 1317:
case 2427:
case 3215:
case 802:
case 592:
case 2609:
case 3700:
case 1314:
case 1942:
case 366:
case 3571:
case 118:
case 1695:
case 3111:
case 1289:
case 1078:
case 2121:
case 3915:
case 3086:
case 3140:
case 916:
case 641:
case 3591:
case 3417:
case 2225:
case 1878:
case 3936:
case 2466:
case 3028:
case 605:
case 2963:
case 3433:
case 374:
case 3743:
case 2230:
case 3625:
case 2706:
case 2583:
case 685:
case 960:
case 3909:
case 3920:
case 1799:
case 3348:
case 2252:
case 2556:
case 2210:
case 341:
case 1459:
case 2099:
case 1005:
case 305:
case 2373:
case 1019:
case 1290:
case 1168:
case 3853:
case 1970:
case 1545:
case 2226:
case 3747:
case 987:
case 2522:
case 2584:
case 643:
case 3916:
case 3744:
case 708:
case 424:
case 3053:
case 1819:
case 3600:
case 2895:
case 73:
case 3411:
case 589:
case 2698:
case 899:
case 1928:
case 376:
case 2943:
case 294:
case 439:
case 2182:
case 2158:
case 1455:
case 2127:
case 3594:
case 2095:
case 3889:
case 340:
case 2469:
case 3978:
case 3939:
case 1836:
case 963:
case 1036:
case 2446:
case 2715:
case 4038:
case 3051:
case 1618:
case 3403:
case 1422:
case 1148:
case 12:
case 2716:
case 1487:
case 2312:
case 4080:
case 676:
case 961:
case 3070:
case 544:
case 359:
case 2350:
case 1835:
case 2947:
case 95:
case 1953:
case 573:
case 3870:
case 1679:
case 212:
case 2229:
case 426:
case 1484:
case 2735:
case 1985:
case 878:
case 3764:
case 3368:
case 2096:
case 3407:
case 1456:
case 640:
case 1020:
case 2961:
case 1820:
case 1796:
case 3741:
case 3905:
case 2559:
case 992:
case 1392:
case 3629:
case 2907:
case 3338:
case 2881:
case 3379:
case 2292:
case 2859:
case 371:
case 3461:
case 1520:
case 1108:
case 3713:
case 2405:
case 2904:
case 1499:
case 2081:
case 3945:
case 3701:
case 98:
case 673:
case 3893:
case 3737:
case 3570:
case 2419:
case 309:
case 389:
case 1865:
case 90:
case 1516:
case 1668:
case 23:
case 3130:
case 671:
case 3640:
case 1066:
case 1232:
case 421:
case 1300:
case 4068:
case 1271:
case 2903:
case 1991:
case 3894:
case 3318:
case 910:
case 3097:
case 2911:
case 2406:
case 373:
case 3443:
case 1509:
case 344:
case 3221:
case 127:
case 355:
case 2435:
case 848:
case 1138:
case 2087:
case 1179:
case 543:
case 796:
case 2022:
case 1326:
case 2822:
case 574:
case 3585:
case 3308:
case 3467:
case 2745:
case 2416:
case 3553:
case 2901:
case 1273:
case 1722:
case 2390:
case 3129:
case 1310:
case 3441:
case 3704:
case 1496:
case 2913:
case 2856:
case 1352:
case 3376:
case 2599:
case 3707:
case 1756:
case 1388:
case 1755:
case 1202:
case 895:
case 2883:
case 1506:
case 3557:
case 1783:
case 82:
case 2682:
case 3375:
case 2855:
case 346:
case 1495:
case 178:
case 2624:
case 2198:
case 2083:
case 435:
case 2409:
case 288:
case 3227:
case 3703:
case 2415:
case 2746:
case 1578:
case 964:
case 3282:
case 1846:
case 2342:
case 3586:
case 2917:
case 1046:
case 2769:
case 3660:
case 3224:
case 370:
case 1869:
case 4048:
case 2436:
case 3982:
case 314:
case 3249:
case 3927:
case 692:
case 1598:
case 3832:
case 852:
case 3266:
case 742:
case 363:
case 3143:
case 4081:
case 3071:
case 4059:
case 89:
case 1821:
case 136:
case 3395:
case 2649:
case 825:
case 1902:
case 739:
case 3614:
case 2721:
case 1977:
case 1297:
case 2666:
case 2518:
case 976:
case 50:
case 1974:
case 1021:
case 2960:
case 490:
case 2868:
case 2213:
case 614:
case 1476:
case 1768:
case 3488:
case 3144:
case 3601:
case 3923:
case 830:
case 2119:
case 2538:
case 2068:
case 3396:
case 663:
case 3637:
case 3426:
case 2105:
case 726:
case 197:
case 3050:
case 1973:
case 3850:
case 2370:
case 3161:
case 1659:
case 607:
case 3760:
case 1480:
case 2211:
case 134:
case 943:
case 4022:
case 3874:
case 2354:
case 3921:
case 3074:
case 1418:
case 2575:
case 2940:
case 511:
case 974:
case 1343:
case 3877:
case 557:
case 2724:
case 2498:
case 316:
case 2109:
case 831:
case 3400:
case 220:
case 491:
case 1655:
case 1971:
case 1827:
case 3163:
case 1347:
case 1950:
case 3590:
case 724:
case 408:
case 538:
case 2353:
case 2508:
case 985:
case 1656:
case 3607:
case 4055:
case 3429:
case 387:
case 488:
case 3073:
case 1687:
case 3167:
case 2231:
case 564:
case 2723:
case 1748:
case 1622:
case 2992:
case 1479:
case 1684:
case 2135:
case 818:
case 1023:
case 2204:
case 182:
case 513:
case 2819:
case 3047:
case 604:
case 137:
case 3493:
case 3844:
case 1584:
case 375:
case 3208:
case 2676:
case 2545:
case 2970:
case 2168:
case 2290:
case 349:
case 684:
case 1964:
case 1465:
case 2019:
case 977:
case 1373:
case 332:
case 2005:
case 1099:
case 3150:
case 2481:
case 650:
case 3276:
case 3112:
case 3572:
case 1705:
case 1899:
case 3531:
case 3061:
case 3757:
case 3728:
case 3642:
case 83:
case 3132:
case 1963:
case 2006:
case 649:
case 3511:
case 3497:
case 158:
case 1466:
case 3358:
case 3786:
case 632:
case 2878:
case 2989:
case 1739:
case 3503:
case 3382:
case 2951:
case 1449:
case 3324:
case 2078:
case 452:
case 51:
case 317:
case 1581:
case 418:
case 969:
case 3238:
case 1559:
case 3279:
case 3841:
case 2796:
case 2820:
case 36:
case 3513:
case 2456:
case 893:
case 583:
case 3067:
case 112:
case 653:
case 2679:
case 2638:
case 3864:
case 888:
case 1350:
case 3534:
case 3064:
case 2035:
case 1312:
case 2816:
case 433:
case 1716:
case 1944:
case 503:
case 556:
case 22:
case 686:
case 2148:
case 2422:
case 651:
case 3517:
case 581:
case 2618:
case 3102:
case 617:
case 1715:
case 1446:
case 3177:
case 2815:
case 2036:
case 3174:
case 2015:
case 2986:
case 1736:
case 431:
case 1200:
case 501:
case 1095:
case 306:
case 1158:
case 3863:
case 1182:
case 3662:
case 545:
case 194:
case 2009:
case 1943:
case 2795:
case 248:
case 2809:
case 2928:
case 862:
case 2340:
case 2957:
case 1124:
case 3063:
case 3533:
case 386:
case 1149:
case 3918:
case 2254:
case 1421:
case 3030:
case 1875:
case 2775:
case 1243:
case 3980:
case 1639:
case 2257:
case 4005:
case 2962:
case 3432:
case 3369:
case 3025:
case 821:
case 6:
case 2524:
case 1391:
case 2582:
case 2303:
case 2286:
case 3742:
case 3194:
case 1606:
case 2558:
case 734:
case 1605:
case 2253:
case 1247:
case 3412:
case 2708:
case 823:
case 1808:
case 1929:
case 3826:
case 2699:
case 1244:
case 225:
case 2181:
case 4006:
case 3450:
case 2331:
case 1548:
case 2523:
case 319:
case 3:
case 1165:
case 967:
case 3852:
case 2307:
case 3938:
case 3299:
case 2468:
case 3052:
case 91:
case 3193:
case 3810:
case 1261:
case 1619:
case 252:
case 4039:
case 4078:
case 1798:
case 1925:
case 2695:
case 218:
case 2942:
case 1458:
case 1427:
case 2155:
case 4020:
case 1482:
case 2183:
case 3762:
case 515:
case 2780:
case 1930:
case 3689:
case 1018:
case 3975:
case 3651:
case 1636:
case 3540:
case 983:
case 67:
case 835:
case 1880:
case 729:
case 647:
case 1146:
case 3191:
case 2718:
case 42:
case 2313:
case 1079:
case 1568:
case 4036:
case 1423:
case 1616:
case 981:
case 142:
case 2779:
case 2738:
case 1988:
case 3976:
case 231:
case 820:
case 1838:
case 1267:
case 3029:
case 736:
case 139:
case 3473:
case 2270:
case 347:
case 1620:
case 2301:
case 1393:
case 3908:
case 3829:
case 1237:
case 2659:
case 3750:
case 2293:
case 2364:
case 2973:
case 1201:
case 3490:
case 2199:
case 3316:
case 1234:
case 229:
case 3712:
case 121:
case 3259:
case 3892:
case 1538:
case 3281:
case 4066:
case 3693:
case 951:
case 1665:
case 917:
case 2476:
case 4049:
case 3153:
case 1868:
case 1178:
case 2974:
case 2294:
case 2363:
case 123:
case 1666:
case 986:
case 547:
case 1580:
case 2297:
case 2977:
case 1721:
case 3309:
case 2902:
case 953:
case 3840:
case 1233:
case 2821:
case 1106:
case 3442:
case 3128:
case 3315:
case 669:
case 1389:
case 3500:
case 2361:
case 1204:
case 282:
case 2023:
case 2684:
case 1135:
case 3510:
case 4046:
case 3968:
case 172:
case 2438:
case 3552:
case 1207:
case 2823:
case 3305:
case 2687:
case 826:
case 377:
case 1385:
case 3526:
case 2656:
case 1508:
case 628:
case 2858:
case 1782:
case 3462:
case 752:
case 3339:
case 2971:
case 2655:
case 2291:
case 3525:
case 1386:
case 2024:
case 519:
case 120:
case 2195:
case 2058:
case 1724:
case 3283:
case 725:
case 2343:
case 1357:
case 3255:
case 2418:
case 79:
case 984:
case 1115:
case 3860:
case 904:
case 1136:
case 64:
case 499:
case 3774:
case 3189:
case 1669:
case 1595:
case 3671:
case 3955:
case 3454:
case 303:
case 356:
case 3797:
case 3833:
case 679:
case 1240:
case 2509:
case 429:
case 3794:
case 398:
case 1406:
case 3457:
case 3563:
case 56:
case 2991:
case 2271:
case 1621:
case 2300:
case 2232:
case 1749:
case 2066:
case 2866:
case 1362:
case 1478:
case 1439:
case 1766:
case 3817:
case 551:
case 379:
case 1765:
case 947:
case 3567:
case 3037:
case 4021:
case 2516:
case 3001:
case 2865:
case 2176:
case 3034:
case 858:
case 2065:
case 1419:
case 345:
case 2250:
case 3801:
case 3987:
case 698:
case 436:
case 553:
case 506:
case 97:
case 683:
case 3837:
case 3922:
case 1081:
case 3190:
case 2499:
case 301:
case 1405:
case 3612:
case 2108:
case 2781:
case 2520:
case 2759:
case 3541:
case 381:
case 1881:
case 1596:
case 3956:
case 1907:
case 4023:
case 1436:
case 482:
case 380:
case 1769:
case 2046:
case 3003:
case 2325:
case 1342:
case 2578:
case 532:
case 1914:
case 1415:
case 402:
case 667:
case 3791:
case 2118:
case 1409:
case 354:
case 3811:
case 1083:
case 278:
case 2495:
case 2274:
case 2330:
case 1682:
case 575:
case 3162:
case 2783:
case 2506:
case 1658:
case 108:
case 3831:
case 2388:
case 2756:
case 3004:
case 4024:
case 191:
case 965:
case 550:
case 680:
case 3807:
case 1056:
case 1913:
case 2310:
case 1420:
case 3031:
case 9:
case 919:
case 1390:
case 2722:
case 1623:
case 584:
case 2273:
case 1887:
case 2993:
case 1416:
case 894:
case 1937:
case 2787:
case 2326:
case 1884:
case 2045:
case 3544:
case 3470:
case 162:
case 2138:
case 504:
case 2784:
case 1435:
case 227:
case 3351:
case 2982:
case 2633:
case 214:
case 2249:
case 2871:
case 1500:
case 3389:
case 865:
case 2927:
case 1697:
case 3214:
case 2832:
case 1336:
case 2958:
case 2562:
case 2032:
case 1315:
case 542:
case 621:
case 1694:
case 2143:
case 263:
case 2071:
case 2924:
case 2395:
case 78:
case 2740:
case 3649:
case 1840:
case 3721:
case 3580:
case 1040:
case 3666:
case 3518:
case 323:
case 3139:
case 3178:
case 3960:
case 3868:
case 1092:
case 1153:
case 3213:
case 169:
case 292:
case 1693:
case 2601:
case 2792:
case 1948:
case 1892:
case 2396:
case 1259:
case 2613:
case 710:
case 2265:
case 473:
case 2050:
case 912:
case 444:
case 1335:
case 2850:
case 3201:
case 2012:
case 3370:
case 2161:
case 4094:
case 1750:
case 3237:
case 623:
case 2077:
case 2002:
case 1774:
case 455:
case 2874:
case 260:
case 3354:
case 3646:
case 1530:
case 958:
case 2603:
case 3940:
case 711:
case 635:
case 87:
case 757:
case 2611:
case 3724:
case 3498:
case 422:
case 2269:
case 3109:
case 2400:
case 3758:
case 3386:
case 3203:
case 3727:
case 672:
case 2542:
case 1339:
case 3782:
case 2631:
case 524:
case 207:
case 3508:
case 2607:
case 2245:
case 14:
case 3120:
case 1284:
case 177:
case 287:
case 2073:
case 2141:
case 2604:
case 3848:
case 1305:
case 3207:
case 3723:
case 1256:
case 2399:
case 1552:
case 1968:
case 372:
case 3048:
case 1956:
case 2338:
case 3881:
case 414:
case 3292:
case 1541:
case 3859:
case 271:
case 2713:
case 2126:
case 4032:
case 101:
case 942:
case 1190:
case 1268:
case 740:
case 1813:
case 4071:
case 1922:
case 2444:
case 2945:
case 1793:
case 2701:
case 2737:
case 2570:
case 594:
case 2110:
case 145:
case 1564:
case 1034:
case 1001:
case 2152:
case 1453:
case 2188:
case 1567:
case 1485:
case 1817:
case 390:
case 3478:
case 3362:
case 2640:
case 832:
case 1814:
case 3621:
case 2946:
case 3903:
case 1017:
case 512:
case 183:
case 2894:
case 45:
case 2318:
case 2097:
case 4050:
case 1457:
case 273:
case 849:
case 1428:
case 4012:
case 2380:
case 1632:
case 1983:
case 2897:
case 244:
case 461:
case 1454:
case 1955:
case 255:
case 3435:
case 608:
case 4077:
case 1470:
case 1544:
case 460:
case 886:
case 3884:
case 2585:
case 3937:
case 2308:
case 3887:
case 3745:
case 3416:
case 558:
case 1547:
case 1561:
case 167:
case 1804:
case 1072:
case 1807:
case 1981:
case 2376:
case 391:
case 1959:
case 1673:
case 2772:
case 11:
case 2707:
case 2223:
case 1831:
case 3627:
case 662:
case 308:
case 537:
case 1011:
case 3658:
case 3883:
case 1162:
case 3682:
case 924:
case 3855:
case 3055:
case 246:
case 2554:
case 2711:
case 3260:
case 3083:
case 705:
case 4073:
case 154:
case 3409:
case 2100:
case 388:
case 1791:
case 3415:
case 3914:
case 100:
case 86:
case 3342:
case 1451:
case 3917:
case 1003:
case 851:
case 2966:
case 3436:
case 2414:
case 1324:
case 2086:
case 591:
case 2140:
case 3449:
case 1382:
case 2417:
case 3739:
case 801:
case 2630:
case 1786:
case 2936:
case 1043:
case 1754:
case 358:
case 2028:
case 184:
case 411:
case 1132:
case 3963:
case 3374:
case 2854:
case 3555:
case 1995:
case 2743:
case 2054:
case 1642:
case 396:
case 3230:
case 3706:
case 104:
case 637:
case 2909:
case 1843:
case 2920:
case 413:
case 972:
case 1323:
case 3899:
case 3705:
case 1572:
case 1112:
case 3556:
case 1507:
case 1276:
case 2413:
case 1150:
case 464:
case 1861:
case 205:
case 3964:
case 3465:
case 1847:
case 149:
case 1785:
case 588:
case 2652:
case 1753:
case 2885:
case 2747:
case 175:
case 803:
case 3584:
case 3967:
case 1844:
case 2437:
case 2916:
case 2053:
case 1047:
case 3709:
case 2600:
case 1321:
case 186:
case 40:
case 53:
case 394:
case 709:
case 3182:
case 2594:
case 106:
case 3127:
case 1218:
case 2889:
case 3371:
case 3469:
case 2160:
case 2939:
case 1514:
case 1174:
case 867:
case 81:
case 3446:
case 2051:
case 2403:
case 1491:
case 3445:
case 3312:
case 744:
case 3350:
case 694:
case 2593:
case 1501:
case 410:
case 1067:
case 1537:
case 3229:
case 2368:
case 3096:
case 2407:
case 2472:
case 1041:
case 16:
case 921:
case 3961:
case 2741:
case 2905:
case 2404:
case 1999:
case 151:
case 1841:
case 3559:
case 3720:
case 3581:
case 3896:
case 590:
case 1088:
case 3261:
case 3076:
case 1810:
case 4086:
case 1979:
case 1299:
case 2788:
case 1010:
case 3165:
case 119:
case 3876:
case 3548:
case 1888:
case 2752:
case 1450:
case 4057:
case 4028:
case 2661:
case 1026:
case 2384:
case 3244:
case 962:
case 1826:
case 2322:
case 1790:
case 4054:
case 760:
case 3929:
case 1345:
case 3808:
case 2387:
case 1412:
case 3247:
case 2113:
case 2573:
case 2726:
case 2725:
case 2239:
case 1657:
case 2643:
case 0:
case 1825:
case 441:
case 1025:
case 815:
case 1369:
case 1432:
case 2133:
case 3639:
case 3678:
case 2383:
case 993:
case 405:
case 3243:
case 3875:
case 988:
case 2355:
case 3421:
case 2114:
case 908:
case 4085:
case 3075:
case 3149:
case 4053:
case 2641:
case 523:
case 2104:
case 1908:
case 3393:
case 93:
case 3620:
case 476:
case 2216:
case 2172:
case 339:
case 2512:
case 2107:
case 1029:
case 626:
case 3879:
case 3241:
case 1592:
case 2220:
case 3988:
case 342:
case 1670:
case 3423:
case 4089:
case 3568:
case 2667:
case 3394:
case 3263:
case 84:
case 761:
case 3818:
case 1402:
case 1191:
case 4070:
case 3080:
case 3018:
case 1975:
case 3169:
case 3930:
case 1762:
case 2663:
case 3482:
case 3427:
case 2862:
case 2532:
case 2062:
case 2236:
case 792:
case 266:
case 2571:
case 3424:
case 3925:
case 1349:
case 2955:
case 144:
case 2983:
case 2632:
case 2428:
case 2142:
case 805:
case 2457:
case 1097:
case 2563:
case 2033:
case 1318:
case 2017:
case 76:
case 3849:
case 3991:
case 3271:
case 1946:
case 1589:
case 841:
case 2814:
case 3536:
case 3175:
case 3866:
case 1969:
case 2014:
case 751:
case 2984:
case 2567:
case 3668:
case 2453:
case 3516:
case 1152:
case 2834:
case 1447:
case 4040:
case 2564:
case 109:
case 1570:
case 2801:
case 3250:
case 874:
case 706:
case 1945:
case 2793:
case 2922:
case 2268:
case 3499:
case 2612:
case 3108:
case 3781:
case 3520:
case 1461:
case 171:
case 1379:
case 1338:
case 2956:
case 170:
case 2489:
case 3046:
case 3325:
case 1949:
case 3846:
case 1282:
case 200:
case 732:
case 1258:
case 3539:
case 2677:
case 1227:
case 1100:
case 749:
case 3994:
case 3495:
case 378:
case 3274:
case 3330:
case 1463:
case 44:
case 775:
case 3783:
case 1557:
case 627:
case 3277:
case 3202:
case 1528:
case 859:
case 3388:
case 1223:
case 2248:
case 2004:
case 1772:
case 3505:
case 2673:
case 1376:
case 3352:
case 1731:
case 750:
case 3496:
case 3310:
case 2804:
case 267:
case 1129:
case 2547:
case 3273:
case 3326:
case 3045:
case 2544:
case 2470:
case 3179:
case 1464:
case 1965:
case 428:
case 399:
case 327:
case 876:
case 3659:
case 3681:
case 533:
case 1012:
case 92:
case 1850:
case 838:
case 3199:
case 1812:
case 498:
case 1265:
case 636:
case 3367:
case 483:
case 3408:
case 15:
case 1426:
case 1396:
case 2892:
case 3341:
case 1410:
case 2281:
case 2948:
case 864:
case 1144:
case 2693:
case 1488:
case 3768:
case 4014:
case 192:
case 269:
case 2185:
case 1634:
case 2092:
case 1452:
case 1430:
case 3475:
case 479:
case 2040:
case 2186:
case 4001:
case 3977:
case 811:
case 77:
case 857:
case 1740:
case 336:
case 401:
case 2442:
case 2694:
case 1143:
case 1266:
case 2336:
case 1958:
case 1832:
case 2500:
case 1982:
case 382:
case 3023:
case 1164:
case 3684:
case 866:
case 2170:
case 2968:
case 480:
case 530:
case 2552:
case 1399:
case 3823:
case 3687:
case 668:
case 1604:
case 2319:
case 810:
case 1073:
case 3196:
case 187:
case 3344:
case 24:
case 1672:
case 2526:
case 1607:
case 3656:
case 107:
case 2287:
case 4011:
case 41:
case 765:
case 3827:
case 2378:
case 2339:
case 3971:
case 2525:
case 3882:
case 3824:
case 3082:
case 719:
case 4072:
case 4007:
case 368:
case 3027:
case 1269:
case 525:
case 2283:
case 1877:
case 3343:
case 2306:
case 2691:
case 2255:
case 1074:
case 59:
case 2530:
case 88:
case 1921:
case 2860:
case 2774:
case 228:
case 3480:
case 138:
case 4047:
case 3311:
case 74:
case 1114:
case 2030:
case 85:
case 1355:
case 1117:
case 449:
case 978:
case 1502:
case 3228:
case 1383:
case 2980:
case 3257:
case 3962:
case 2432:
case 502:
case 1042:
case 2197:
case 3303:
case 3286:
case 1842:
case 4061:
case 2742:
case 652:
case 3527:
case 582:
case 2657:
case 1239:
case 1725:
case 534:
case 728:
case 1890:
case 3253:
case 1573:
case 1387:
case 2345:
case 3285:
case 2790:
case 3699:
case 2826:
case 2026:
case 1219:
case 1090:
case 484:
case 3159:
case 111:
case 2450:
case 2653:
case 1205:
case 2685:
case 1356:
case 1788:
case 3468:
case 2979:
case 450:
case 2052:
case 1101:
case 3304:
case 2349:
case 451:
case 1111:
case 318:
case 2800:
case 3251:
case 417:
case 3942:
case 166:
case 3314:
case 1236:
case 769:
case 1532:
case 2366:
case 3098:
case 46:
case 3183:
case 2762:
case 4041:
case 3780:
case 3521:
case 2689:
case 2474:
case 2651:
case 1209:
case 887:
case 529:
case 2477:
case 3718:
case 4064:
case 2402:
case 3313:
case 1667:
case 618:
case 3187:
case 3448:
case 2670:
case 3779:
case 1220:
case 816:
case 2296:
case 1359:
case 1381:
case 2592:
case 406:
case 536:
case 3334:
case 2365:
case 3270:
case 1550:
case 2908:
case 3337:
case 633:
case 2829:
case 860:
case 844:
case 1401:
case 1744:
case 4030:
case 1437:
case 2844:
case 2208:
case 1747:
case 1885:
case 2753:
case 2044:
case 3290:
case 3168:
case 2861:
case 232:
case 1761:
case 700:
case 1413:
case 2996:
case 2276:
case 1626:
case 2690:
case 3799:
case 2531:
case 1909:
case 1828:
case 3806:
case 1625:
case 2642:
case 2728:
case 1743:
case 934:
case 2275:
case 3360:
case 1854:
case 4026:
case 174:
case 2132:
case 2497:
case 2511:
case 2043:
case 2358:
case 1936:
case 767:
case 3839:
case 2327:
case 3989:
case 3546:
case 3675:
case 1417:
case 3951:
case 4010:
case 4:
case 4052:
case 3078:
case 1414:
case 1915:
case 4088:
case 3039:
case 465:
case 217:
case 3392:
case 2238:
case 2841:
case 251:
case 1404:
case 1741:
case 3796:
case 1431:
case 26:
case 2041:
case 2513:
case 1407:
case 3456:
case 1368:
case 3484:
case 846:
case 2770:
case 783:
case 2501:
case 798:
case 1593:
case 3835:
case 2864:
case 1919:
case 159:
case 3816:
case 3487:
case 32:
case 3422:
case 3148:
case 781:
case 1051:
case 2102:
case 1089:
case 2174:
case 2751:
case 3680:
case 2514:
case 2789:
case 1298:
case 1978:
case 3015:
case 1889:
case 3549:
case 1851:
case 2218:
case 4029:
case 206:
case 1594:
case 3455:
case 2863:
case 447:
case 3340:
case 3957:
case 2280:
case 286:
case 62:
case 2321:
case 1600:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753588801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,];
var gg_b = "1753588801/";

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
