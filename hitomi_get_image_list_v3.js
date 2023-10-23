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
var o = 0;
switch (g) {
case 1660:
case 2128:
case 3083:
case 3750:
case 762:
case 4031:
case 769:
case 2947:
case 1716:
case 2119:
case 789:
case 1902:
case 3799:
case 3334:
case 3892:
case 3460:
case 3480:
case 1406:
case 646:
case 2285:
case 1206:
case 1363:
case 2756:
case 1952:
case 2567:
case 2326:
case 2972:
case 1998:
case 3620:
case 1976:
case 3379:
case 1196:
case 1326:
case 3018:
case 3252:
case 704:
case 2904:
case 1506:
case 1593:
case 3146:
case 2413:
case 3670:
case 3422:
case 1782:
case 2490:
case 1075:
case 1320:
case 310:
case 2931:
case 1958:
case 1667:
case 3950:
case 2442:
case 1074:
case 1662:
case 2781:
case 3853:
case 3166:
case 3952:
case 3148:
case 1476:
case 3263:
case 2823:
case 1058:
case 2124:
case 3000:
case 1588:
case 1812:
case 1303:
case 777:
case 1049:
case 2777:
case 2563:
case 743:
case 2356:
case 2458:
case 1535:
case 2946:
case 24:
case 3195:
case 2296:
case 185:
case 631:
case 2728:
case 1827:
case 2746:
case 2310:
case 3822:
case 3240:
case 2674:
case 3874:
case 2481:
case 1309:
case 2758:
case 1202:
case 1969:
case 244:
case 1155:
case 351:
case 496:
case 1849:
case 2738:
case 863:
case 199:
case 2594:
case 1022:
case 2606:
case 3563:
case 949:
case 2180:
case 3910:
case 1293:
case 1421:
case 2975:
case 842:
case 1851:
case 2692:
case 1295:
case 4081:
case 3933:
case 859:
case 3181:
case 722:
case 642:
case 2533:
case 1431:
case 3784:
case 1038:
case 2185:
case 1939:
case 3501:
case 3647:
case 3262:
case 2939:
case 1517:
case 761:
case 1351:
case 3387:
case 2976:
case 3174:
case 2771:
case 1723:
case 2582:
case 2104:
case 794:
case 3842:
case 2301:
case 2562:
case 3045:
case 2509:
case 4018:
case 487:
case 285:
case 2635:
case 3726:
case 2518:
case 1347:
case 1644:
case 2426:
case 147:
case 2475:
case 3648:
case 1269:
case 552:
case 3307:
case 2696:
case 2387:
case 1444:
case 1906:
case 2548:
case 1824:
case 1427:
case 3534:
case 894:
case 915:
case 4074:
case 1796:
case 3245:
case 2859:
case 2245:
case 281:
case 301:
case 996:
case 3399:
case 3128:
case 1135:
case 4010:
case 1225:
case 2316:
case 3757:
case 624:
case 140:
case 618:
case 3319:
case 2465:
case 1179:
case 3404:
case 3661:
case 1656:
case 3182:
case 252:
case 186:
case 2388:
case 2900:
case 1332:
case 1734:
case 838:
case 2322:
case 2038:
case 1983:
case 3569:
case 3861:
case 146:
case 2093:
case 2159:
case 2451:
case 2575:
case 1259:
case 1328:
case 3258:
case 878:
case 1883:
case 1373:
case 3104:
case 689:
case 1468:
case 3631:
case 1905:
case 479:
case 3266:
case 1543:
case 1223:
case 1265:
case 3383:
case 3949:
case 3407:
case 2348:
case 1684:
case 1800:
case 2534:
case 3934:
case 2966:
case 1141:
case 1215:
case 2715:
case 3700:
case 1743:
case 3727:
case 2919:
case 3755:
case 918:
case 965:
case 2092:
case 1387:
case 2416:
case 899:
case 2556:
case 841:
case 169:
case 2887:
case 41:
case 179:
case 3222:
case 2500:
case 2349:
case 3690:
case 264:
case 1807:
case 3793:
case 3531:
case 2219:
case 3609:
case 2723:
case 717:
case 2290:
case 3961:
case 1170:
case 2868:
case 3130:
case 445:
case 908:
case 2930:
case 1500:
case 1548:
case 401:
case 493:
case 2012:
case 2139:
case 446:
case 2138:
case 2068:
case 2909:
case 821:
case 831:
case 344:
case 393:
case 1571:
case 1934:
case 3945:
case 1511:
case 1651:
case 1649:
case 1471:
case 2160:
case 2351:
case 1841:
case 626:
case 1375:
case 1890:
case 896:
case 1082:
case 3824:
case 4077:
case 2216:
case 3136:
case 2305:
case 1191:
case 2811:
case 4020:
case 27:
case 363:
case 2153:
case 2377:
case 2845:
case 754:
case 287:
case 628:
case 2953:
case 3337:
case 29:
case 1893:
case 3129:
case 3792:
case 258:
case 3885:
case 2713:
case 1166:
case 3913:
case 3868:
case 739:
case 1822:
case 729:
case 3610:
case 1870:
case 1129:
case 3302:
case 3748:
case 2828:
case 293:
case 966:
case 3311:
case 1665:
case 595:
case 2538:
case 157:
case 3731:
case 2001:
case 3908:
case 1531:
case 2730:
case 3504:
case 963:
case 1648:
case 3455:
case 1623:
case 937:
case 1182:
case 3111:
case 4094:
case 2121:
case 1965:
case 3492:
case 561:
case 1762:
case 2993:
case 580:
case 1829:
case 3201:
case 2488:
case 385:
case 2346:
case 538:
case 1380:
case 2079:
case 675:
case 954:
case 830:
case 1486:
case 3593:
case 1862:
case 3074:
case 1205:
case 2355:
case 608:
case 654:
case 2207:
case 2482:
case 1484:
case 1016:
case 1700:
case 2273:
case 3097:
case 817:
case 1331:
case 2336:
case 994:
case 220:
case 2080:
case 2266:
case 2897:
case 592:
case 1564:
case 1798:
case 322:
case 1931:
case 1859:
case 180:
case 1742:
case 692:
case 3836:
case 3381:
case 3051:
case 3980:
case 1284:
case 1048:
case 1257:
case 1481:
case 1126:
case 1352:
case 1212:
case 439:
case 1526:
case 1839:
case 2799:
case 3554:
case 467:
case 3322:
case 1809:
case 3583:
case 989:
case 3553:
case 4036:
case 590:
case 1658:
case 1719:
case 2564:
case 3556:
case 1641:
case 3695:
case 3922:
case 86:
case 3544:
case 2186:
case 3419:
case 187:
case 1625:
case 3570:
case 3409:
case 3612:
case 3155:
case 3871:
case 3490:
case 645:
case 111:
case 2466:
case 300:
case 614:
case 1174:
case 1069:
case 1392:
case 790:
case 3801:
case 980:
case 890:
case 2914:
case 3747:
case 3282:
case 718:
case 2640:
case 2008:
case 573:
case 3602:
case 1887:
case 1207:
case 983:
case 1645:
case 938:
case 3075:
case 3134:
case 1007:
case 1643:
case 3704:
case 1389:
case 1879:
case 1469:
case 2102:
case 2937:
case 224:
case 2053:
case 338:
case 1630:
case 1497:
case 124:
case 156:
case 1200:
case 1595:
case 2807:
case 443:
case 2793:
case 1793:
case 3127:
case 805:
case 1433:
case 3573:
case 3009:
case 2215:
case 542:
case 2511:
case 2307:
case 699:
case 2817:
case 4093:
case 1626:
case 87:
case 2015:
case 3651:
case 1741:
case 1134:
case 2970:
case 135:
case 1642:
case 456:
case 3917:
case 703:
case 2578:
case 2405:
case 1346:
case 3976:
case 1797:
case 2964:
case 2109:
case 3998:
case 2770:
case 3070:
case 2288:
case 755:
case 1600:
case 3066:
case 3676:
case 3472:
case 1432:
case 2438:
case 379:
case 3597:
case 2688:
case 3348:
case 3667:
case 2833:
case 2661:
case 1979:
case 3268:
case 497:
case 1982:
case 2560:
case 79:
case 884:
case 2112:
case 3725:
case 2279:
case 1282:
case 2471:
case 2718:
case 3883:
case 1399:
case 3286:
case 3932:
case 4052:
case 3509:
case 691:
case 3595:
case 1213:
case 2050:
case 2440:
case 3673:
case 1925:
case 88:
case 1053:
case 189:
case 906:
case 3839:
case 2890:
case 2752:
case 612:
case 116:
case 1911:
case 566:
case 419:
case 979:
case 2094:
case 2996:
case 2977:
case 2484:
case 2883:
case 1869:
case 715:
case 4048:
case 3326:
case 1478:
case 2835:
case 3856:
case 1764:
case 2367:
case 3946:
case 3730:
case 651:
case 1676:
case 1060:
case 1835:
case 2944:
case 2621:
case 2253:
case 375:
case 2430:
case 2193:
case 1578:
case 1044:
case 1836:
case 2411:
case 1001:
case 4064:
case 668:
case 921:
case 1927:
case 1019:
case 3536:
case 440:
case 3169:
case 3366:
case 3397:
case 3866:
case 3996:
case 2659:
case 1542:
case 3065:
case 1355:
case 149:
case 4035:
case 901:
case 2418:
case 503:
case 2629:
case 1544:
case 2101:
case 554:
case 3896:
case 3002:
case 1341:
case 184:
case 1923:
case 3280:
case 1599:
case 2371:
case 3054:
case 390:
case 3775:
case 1855:
case 591:
case 776:
case 596:
case 3840:
case 3371:
case 946:
case 3994:
case 1362:
case 2806:
case 760:
case 3479:
case 3668:
case 2528:
case 3408:
case 2595:
case 1062:
case 1467:
case 3116:
case 2032:
case 2869:
case 2662:
case 3276:
case 1012:
case 1975:
case 2181:
case 3044:
case 4072:
case 435:
case 3375:
case 2942:
case 451:
case 3370:
case 2523:
case 381:
case 490:
case 998:
case 3206:
case 1854:
case 1614:
case 2381:
case 2341:
case 403:
case 2105:
case 1366:
case 3232:
case 2000:
case 1322:
case 3649:
case 2365:
case 2347:
case 3742:
case 3759:
case 2244:
case 2707:
case 81:
case 2239:
case 647:
case 3080:
case 797:
case 200:
case 95:
case 2155:
case 4037:
case 3876:
case 1826:
case 620:
case 1901:
case 2045:
case 32:
case 94:
case 142:
case 607:
case 1458:
case 498:
case 1391:
case 2772:
case 4003:
case 2803:
case 2151:
case 1305:
case 65:
case 215:
case 1384:
case 2542:
case 3769:
case 3845:
case 3502:
case 3210:
case 1365:
case 2808:
case 3073:
case 460:
case 2705:
case 2168:
case 2774:
case 886:
case 3084:
case 3693:
case 2762:
case 2510:
case 2637:
case 292:
case 3251:
case 3001:
case 2503:
case 1876:
case 84:
case 181:
case 1194:
case 1114:
case 173:
case 984:
case 3794:
case 77:
case 1068:
case 1981:
case 1310:
case 1867:
case 1727:
case 1078:
case 3373:
case 3813:
case 2071:
case 2974:
case 1231:
case 3881:
case 3477:
case 1858:
case 4075:
case 1919:
case 1372:
case 2417:
case 3541:
case 1159:
case 468:
case 2407:
case 1999:
case 3411:
case 837:
case 1099:
case 255:
case 226:
case 909:
case 1027:
case 2858:
case 333:
case 2831:
case 2220:
case 2814:
case 2190:
case 3227:
case 927:
case 660:
case 1354:
case 3354:
case 1907:
case 2980:
case 1455:
case 2448:
case 3707:
case 2042:
case 3640:
case 223:
case 3798:
case 3898:
case 3506:
case 1403:
case 118:
case 3662:
case 2480:
case 2428:
case 345:
case 3249:
case 2271:
case 92:
case 3296:
case 2666:
case 3225:
case 3332:
case 1161:
case 732:
case 3608:
case 2693:
case 3699:
case 2646:
case 2085:
case 3638:
case 802:
case 601:
case 2449:
case 922:
case 3723:
case 2491:
case 816:
case 2743:
case 3112:
case 2395:
case 119:
case 3008:
case 387:
case 1505:
case 2436:
case 2203:
case 3850:
case 1541:
case 2380:
case 3781:
case 3702:
case 3327:
case 1567:
case 210:
case 194:
case 1128:
case 3963:
case 2234:
case 525:
case 2867:
case 442:
case 3031:
case 3167:
case 1042:
case 713:
case 2645:
case 3560:
case 3024:
case 53:
case 1103:
case 1825:
case 3847:
case 2614:
case 2981:
case 953:
case 1356:
case 1711:
case 213:
case 1437:
case 3447:
case 1553:
case 2462:
case 2289:
case 1956:
case 2134:
case 1276:
case 2973:
case 1222:
case 3298:
case 1817:
case 1805:
case 1271:
case 170:
case 815:
case 2969:
case 3615:
case 2776:
case 1790:
case 1314:
case 1930:
case 1430:
case 1474:
case 2830:
case 1312:
case 1746:
case 153:
case 1211:
case 2854:
case 540:
case 321:
case 2445:
case 825:
case 3026:
case 3719:
case 166:
case 1093:
case 3305:
case 2531:
case 2760:
case 2033:
case 3958:
case 1619:
case 2376:
case 1993:
case 3207:
case 2810:
case 1020:
case 3724:
case 3038:
case 3717:
case 2574:
case 483:
case 2319:
case 1130:
case 1627:
case 4025:
case 4053:
case 4070:
case 2558:
case 2639:
case 1124:
case 2058:
case 113:
case 2757:
case 2221:
case 1108:
case 3930:
case 3453:
case 1378:
case 1871:
case 1189:
case 3243:
case 1132:
case 3168:
case 307:
case 2618:
case 2262:
case 2227:
case 1899:
case 1100:
case 2589:
case 2398:
case 2741:
case 2210:
case 2165:
case 3650:
case 914:
case 539:
case 2749:
case 3680:
case 2604:
case 1729:
case 2189:
case 2763:
case 3551:
case 3320:
case 3401:
case 1740:
case 3231:
case 4051:
case 3037:
case 3745:
case 574:
case 2985:
case 3363:
case 2906:
case 3564:
case 2391:
case 3617:
case 2231:
case 3200:
case 2881:
case 3641:
case 748:
case 1302:
case 3607:
case 1492:
case 2682:
case 162:
case 3616:
case 2552:
case 780:
case 3220:
case 3820:
case 1070:
case 376:
case 1151:
case 2009:
case 738:
case 1787:
case 636:
case 3830:
case 2926:
case 3957:
case 458:
case 2733:
case 3400:
case 1732:
case 619:
case 3236:
case 546:
case 2584:
case 291:
case 2716:
case 3947:
case 865:
case 1023:
case 3511:
case 1381:
case 1786:
case 1065:
case 2126:
case 3907:
case 928:
case 4033:
case 2117:
case 3007:
case 1153:
case 3017:
case 4050:
case 3646:
case 3330:
case 866:
case 767:
case 3039:
case 3265:
case 1107:
case 3420:
case 847:
case 2060:
case 664:
case 3123:
case 643:
case 657:
case 1874:
case 3306:
case 3914:
case 3763:
case 2572:
case 4041:
case 3467:
case 3424:
case 1201:
case 1267:
case 2766:
case 3374:
case 3234:
case 644:
case 1348:
case 1489:
case 3126:
case 2179:
case 2924:
case 2268:
case 3341:
case 2282:
case 3094:
case 3281:
case 3499:
case 2527:
case 3047:
case 207:
case 182:
case 1393:
case 1677:
case 2860:
case 137:
case 491:
case 1959:
case 2886:
case 3085:
case 3482:
case 134:
case 2922:
case 141:
case 1289:
case 1639:
case 1446:
case 582:
case 190:
case 945:
case 2895:
case 2191:
case 3929:
case 785:
case 4073:
case 2722:
case 1533:
case 44:
case 2863:
case 579:
case 1701:
case 872:
case 13:
case 3152:
case 822:
case 123:
case 1428:
case 3746:
case 3033:
case 4071:
case 1566:
case 1581:
case 2882:
case 3500:
case 1932:
case 744:
case 879:
case 4007:
case 1894:
case 2166:
case 3278:
case 1636:
case 2145:
case 869:
case 971:
case 1712:
case 3921:
case 218:
case 2278:
case 1308:
case 848:
case 2802:
case 1102:
case 1775:
case 1828:
case 1565:
case 3846:
case 50:
case 1678:
case 2184:
case 1177:
case 1562:
case 1943:
case 4024:
case 1243:
case 2039:
case 1146:
case 806:
case 1881:
case 3186:
case 1021:
case 143:
case 3588:
case 2299:
case 1882:
case 3091:
case 2525:
case 2098:
case 3635:
case 217:
case 1738:
case 3350:
case 1156:
case 3006:
case 4063:
case 1344:
case 1410:
case 3057:
case 2369:
case 3208:
case 164:
case 3223:
case 1383:
case 36:
case 347:
case 1043:
case 1105:
case 2389:
case 2971:
case 3601:
case 367:
case 4006:
case 720:
case 3340:
case 3835:
case 2177:
case 2314:
case 98:
case 2736:
case 1788:
case 1767:
case 1659:
case 2419:
case 1311:
case 2323:
case 1739:
case 2789:
case 3486:
case 2485:
case 246:
case 530:
case 2804:
case 4089:
case 2308:
case 1493:
case 3848:
case 2619:
case 1978:
case 1286:
case 1574:
case 1603:
case 261:
case 534:
case 1273:
case 1329:
case 2941:
case 3870:
case 3462:
case 4008:
case 3331:
case 737:
case 952:
case 1724:
case 3603:
case 3237:
case 1852:
case 569:
case 1897:
case 2921:
case 3385:
case 1590:
case 2496:
case 2651:
case 4005:
case 1369:
case 3659:
case 3164:
case 1530:
case 306:
case 929:
case 2049:
case 3304:
case 107:
case 2297:
case 1803:
case 1236:
case 550:
case 2681:
case 1149:
case 2587:
case 1853:
case 9:
case 262:
case 2991:
case 1398:
case 1694:
case 256:
case 1252:
case 2360:
case 3872:
case 1632:
case 3677:
case 263:
case 359:
case 388:
case 2636:
case 2066:
case 1921:
case 1173:
case 2256:
case 2243:
case 74:
case 1865:
case 2146:
case 528:
case 2073:
case 4000:
case 1766:
case 1933:
case 56:
case 2795:
case 144:
case 2516:
case 1653:
case 1138:
case 1940:
case 814:
case 323:
case 1756:
case 2284:
case 2306:
case 1495:
case 2880:
case 2751:
case 673:
case 3264:
case 174:
case 3761:
case 688:
case 464:
case 3293:
case 1164:
case 2254:
case 3386:
case 3503:
case 560:
case 3041:
case 506:
case 410:
case 1485:
case 1216:
case 3347:
case 325:
case 2447:
case 1395:
case 1385:
case 276:
case 3176:
case 1251:
case 4:
case 2844:
case 3122:
case 1490:
case 1686:
case 1092:
case 2022:
case 771:
case 2274:
case 2173:
case 1258:
case 3538:
case 78:
case 3505:
case 516:
case 2147:
case 1523:
case 629:
case 977:
case 3303:
case 97:
case 2878:
case 3438:
case 719:
case 3497:
case 2907:
case 1006:
case 1752:
case 526:
case 3270:
case 202:
case 3561:
case 247:
case 3844:
case 3905:
case 158:
case 3353:
case 2849:
case 1954:
case 1844:
case 1980:
case 3851:
case 2611:
case 1256:
case 3180:
case 935:
case 3172:
case 3533:
case 1811:
case 3185:
case 1327:
case 12:
case 2260:
case 2724:
case 271:
case 2529:
case 3547:
case 2004:
case 3463:
case 214:
case 2855:
case 3289:
case 1820:
case 1706:
case 2394:
case 1404:
case 3565:
case 211:
case 623:
case 3250:
case 514:
case 2352:
case 512:
case 779:
case 23:
case 3272:
case 1187:
case 2251:
case 3053:
case 1687:
case 353:
case 1966:
case 3284:
case 1937:
case 1868:
case 1334:
case 1791:
case 639:
case 2704:
case 3754:
case 1984:
case 1634:
case 2118:
case 798:
case 3780:
case 2103:
case 1704:
case 2195:
case 2046:
case 1097:
case 2494:
case 2551:
case 1280:
case 1592:
case 1637:
case 4042:
case 2137:
case 2842:
case 2373:
case 2100:
case 2212:
case 1407:
case 228:
case 637:
case 3147:
case 3520:
case 1682:
case 4087:
case 3468:
case 3082:
case 911:
case 2664:
case 55:
case 1672:
case 1450:
case 47:
case 2708:
case 2873:
case 1949:
case 1810:
case 2540:
case 240:
case 943:
case 1850:
case 969:
case 245:
case 1015:
case 1579:
case 2585:
case 3574:
case 2740:
case 1784:
case 1689:
case 2650:
case 3452:
case 1652:
case 3783:
case 1417:
case 470:
case 930:
case 3864:
case 4083:
case 1502:
case 3356:
case 2429:
case 3537:
case 3434:
case 232:
case 4045:
case 3831:
case 2598:
case 1806:
case 3782:
case 710:
case 2843:
case 1036:
case 2067:
case 2374:
case 2712:
case 1880:
case 3117:
case 1860:
case 2602:
case 2427:
case 2905:
case 3395:
case 1451:
case 2422:
case 1190:
case 3581:
case 3999:
case 315:
case 2945:
case 1089:
case 1781:
case 2035:
case 2082:
case 1842:
case 3359:
case 3448:
case 253:
case 1453:
case 236:
case 2601:
case 4032:
case 2495:
case 705:
case 3968:
case 604:
case 1745:
case 3426:
case 2333:
case 407:
case 810:
case 2520:
case 1545:
case 1139:
case 1705:
case 151:
case 2995:
case 472:
case 2492:
case 1501:
case 3093:
case 3:
case 2357:
case 2747:
case 2663:
case 2183:
case 233:
case 2901:
case 2052:
case 1670:
case 20:
case 1661:
case 1040:
case 4085:
case 2652:
case 3059:
case 3860:
case 488:
case 3156:
case 361:
case 2928:
case 1760:
case 3666:
case 1287:
case 638:
case 707:
case 3406:
case 3269:
case 2968:
case 2437:
case 3175:
case 2030:
case 3344:
case 2960:
case 3900:
case 2390:
case 1167:
case 1336:
case 1106:
case 2250:
case 2283:
case 1960:
case 1537:
case 2958:
case 3267:
case 1714:
case 1163:
case 662:
case 836:
case 2678:
case 3466:
case 1111:
case 471:
case 1009:
case 3315:
case 3015:
case 3101:
case 342:
case 3294:
case 2851:
case 3545:
case 1720:
case 2644:
case 3439:
case 3863:
case 2825:
case 1418:
case 889:
case 2025:
case 3469:
case 2200:
case 349:
case 1971:
case 2461:
case 3865:
case 2864:
case 4057:
case 2006:
case 3887:
case 1802:
case 234:
case 3966:
case 962:
case 1837:
case 3295:
case 2175:
case 2943:
case 3988:
case 2090:
case 3621:
case 2632:
case 756:
case 773:
case 3358:
case 3935:
case 80:
case 2062:
case 2667:
case 2568:
case 2470:
case 2176:
case 51:
case 3758:
case 3224:
case 3248:
case 3012:
case 1657:
case 354:
case 2029:
case 942:
case 2059:
case 2837:
case 793:
case 384:
case 2734:
case 356:
case 3115:
case 976:
case 2170:
case 1886:
case 370:
case 1654:
case 2174:
case 652:
case 2208:
case 473:
case 2832:
case 1024:
case 852:
case 1750:
case 2750:
case 2592:
case 3450:
case 2586:
case 2797:
case 3090:
case 1680:
case 1776:
case 311:
case 3843:
case 3587:
case 3997:
case 1035:
case 3441:
case 630:
case 1479:
case 198:
case 1313:
case 3879:
case 2472:
case 476:
case 3109:
case 2246:
case 2668:
case 2345:
case 3336:
case 2450:
case 1193:
case 2343:
case 3889:
case 2784:
case 486:
case 3529:
case 183:
case 1292:
case 2982:
case 7:
case 3140:
case 35:
case 1570:
case 3177:
case 485:
case 108:
case 175:
case 159:
case 1572:
case 2536:
case 2433:
case 289:
case 940:
case 3909:
case 1077:
case 682:
case 1888:
case 2386:
case 355:
case 2444:
case 3435:
case 57:
case 1909:
case 1948:
case 3151:
case 3575:
case 4004:
case 3818:
case 3118:
case 2577:
case 1898:
case 3191:
case 11:
case 609:
case 2007:
case 2034:
case 788:
case 1558:
case 3524:
case 3664:
case 3732:
case 585:
case 3962:
case 33:
case 229:
case 3061:
case 957:
case 685:
case 2276:
case 3613:
case 1814:
case 1204:
case 533:
case 3271:
case 2588:
case 1987:
case 1697:
case 917:
case 249:
case 2479:
case 3669:
case 3806:
case 3859:
case 3369:
case 427:
case 4023:
case 3926:
case 1463:
case 3833:
case 750:
case 2021:
case 1515:
case 782:
case 377:
case 34:
case 1650:
case 2019:
case 3977:
case 3826:
case 4022:
case 674:
case 2368:
case 357:
case 594:
case 110:
case 3555:
case 1889:
case 318:
case 2834:
case 3965:
case 1512:
case 3956:
case 3967:
case 2992:
case 89:
case 1611:
case 960:
case 1304:
case 68:
case 1576:
case 3682:
case 431:
case 1757:
case 2002:
case 1609:
case 372:
case 1367:
case 433:
case 2838:
case 3323:
case 1674:
case 1261:
case 1618:
case 1051:
case 740:
case 2088:
case 1473:
case 3131:
case 4028:
case 3481:
case 2095:
case 2647:
case 3444:
case 3515:
case 447:
case 2061:
case 3321:
case 1396:
case 990:
case 428:
case 1420:
case 2163:
case 2717:
case 14:
case 1922:
case 2247:
case 1532:
case 2790:
case 551:
case 3106:
case 2508:
case 1804:
case 3855:
case 1563:
case 2048:
case 849:
case 366:
case 1112:
case 1030:
case 76:
case 2113:
case 2608:
case 3735:
case 3396:
case 1080:
case 3238:
case 3915:
case 677:
case 1900:
case 1774:
case 982:
case 800:
case 2206:
case 437:
case 2978:
case 438:
case 1736:
case 195:
case 3046:
case 3259:
case 587:
case 1840:
case 2532:
case 568:
case 1785:
case 588:
case 751:
case 2687:
case 2963:
case 766:
case 2698:
case 2553:
case 795:
case 3890:
case 3333:
case 1415:
case 714:
case 1067:
case 1514:
case 2554:
case 2167:
case 3819:
case 1498:
case 3688:
case 1199:
case 1184:
case 3995:
case 2362:
case 2452:
case 3706:
case 112:
case 1192:
case 2836:
case 939:
case 1622:
case 328:
case 2217:
case 876:
case 597:
case 2599:
case 1181:
case 745:
case 1631:
case 891:
case 4046:
case 2396:
case 3081:
case 3983:
case 3925:
case 2954:
case 2782:
case 3190:
case 1728:
case 1448:
case 31:
case 2409:
case 459:
case 2483:
case 2512:
case 3762:
case 2486:
case 3256:
case 712:
case 2672:
case 1477:
case 2455:
case 3951:
case 3643:
case 294:
case 567:
case 1121:
case 2767:
case 2514:
case 2077:
case 3674:
case 2337:
case 1460:
case 1996:
case 2745:
case 972:
case 2363:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1698030002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,];
var gg_b = "1698030002/";

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
      subdomainx = String.fromCharCode(97 + gg_m[x]);
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
