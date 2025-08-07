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
case 886:
case 2871:
case 840:
case 3207:
case 2916:
case 1257:
case 2826:
case 3498:
case 3440:
case 2597:
case 1443:
case 3949:
case 1320:
case 3182:
case 490:
case 763:
case 3575:
case 634:
case 1021:
case 2014:
case 508:
case 1076:
case 2346:
case 2506:
case 1289:
case 3695:
case 249:
case 4046:
case 122:
case 3735:
case 3688:
case 3296:
case 2613:
case 1885:
case 1432:
case 2575:
case 4023:
case 2949:
case 2182:
case 546:
case 3826:
case 917:
case 2434:
case 629:
case 3055:
case 3871:
case 1005:
case 1184:
case 2207:
case 368:
case 2296:
case 571:
case 3613:
case 3931:
case 3506:
case 2695:
case 2784:
case 1426:
case 4037:
case 349:
case 3346:
case 4019:
case 552:
case 1610:
case 3014:
case 1782:
case 2337:
case 723:
case 3576:
case 3722:
case 1861:
case 3521:
case 1948:
case 228:
case 2825:
case 3993:
case 606:
case 1499:
case 3512:
case 2915:
case 2056:
case 3711:
case 730:
case 3295:
case 418:
case 2213:
case 605:
case 802:
case 4080:
case 162:
case 1952:
case 49:
case 1667:
case 3124:
case 3288:
case 2277:
case 1851:
case 903:
case 754:
case 84:
case 2954:
case 65:
case 910:
case 3229:
case 941:
case 483:
case 2711:
case 2486:
case 1724:
case 3825:
case 1136:
case 2722:
case 3081:
case 1514:
case 1122:
case 3380:
case 1904:
case 3954:
case 976:
case 3277:
case 194:
case 2461:
case 2801:
case 1425:
case 3213:
case 2899:
case 3505:
case 2902:
case 1555:
case 1097:
case 497:
case 684:
case 1910:
case 3560:
case 1820:
case 4071:
case 2995:
case 3823:
case 3791:
case 427:
case 1563:
case 2202:
case 1041:
case 836:
case 177:
case 2371:
case 31:
case 1385:
case 835:
case 3616:
case 1398:
case 1423:
case 3929:
case 2649:
case 3420:
case 3264:
case 3343:
case 2846:
case 3550:
case 2332:
case 3837:
case 3672:
case 153:
case 3988:
case 42:
case 1252:
case 2913:
case 3371:
case 949:
case 3995:
case 554:
case 17:
case 2823:
case 2178:
case 2592:
case 139:
case 1446:
case 787:
case 2560:
case 3187:
case 1594:
case 2977:
case 3169:
case 3332:
case 2672:
case 1290:
case 2420:
case 2264:
case 2343:
case 2215:
case 2929:
case 317:
case 2819:
case 21:
case 4043:
case 3293:
case 298:
case 3418:
case 745:
case 752:
case 3053:
case 2517:
case 2996:
case 2602:
case 1133:
case 3130:
case 3144:
case 1708:
case 276:
case 3758:
case 1604:
case 2539:
case 1127:
case 2108:
case 116:
case 3301:
case 2845:
case 459:
case 275:
case 3272:
case 2907:
case 3541:
case 3742:
case 699:
case 3615:
case 1386:
case 1818:
case 780:
case 241:
case 2733:
case 2654:
case 3573:
case 2144:
case 376:
case 1967:
case 3602:
case 46:
case 1652:
case 708:
case 1570:
case 433:
case 1142:
case 3517:
case 2053:
case 1989:
case 621:
case 1883:
case 341:
case 3779:
case 1957:
case 3907:
case 1662:
case 53:
case 2742:
case 2399:
case 3693:
case 2301:
case 3038:
case 1730:
case 3249:
case 1158:
case 2469:
case 2809:
case 3595:
case 2606:
case 1007:
case 2487:
case 2028:
case 3057:
case 2577:
case 1994:
case 1938:
case 2960:
case 2891:
case 2384:
case 2950:
case 3276:
case 531:
case 1878:
case 1123:
case 3675:
case 3221:
case 4084:
case 660:
case 1096:
case 3120:
case 3746:
case 3089:
case 3891:
case 3960:
case 2478:
case 187:
case 919:
case 3028:
case 2057:
case 739:
case 2588:
case 1146:
case 828:
case 3469:
case 1963:
case 1656:
case 2595:
case 1666:
case 3697:
case 3529:
case 3459:
case 1953:
case 2089:
case 3719:
case 2675:
case 1214:
case 1900:
case 1491:
case 2276:
case 24:
case 715:
case 1433:
case 3973:
case 3939:
case 764:
case 2206:
case 3430:
case 3444:
case 935:
case 3596:
case 2605:
case 2322:
case 145:
case 340:
case 4036:
case 385:
case 1427:
case 2941:
case 3507:
case 1844:
case 3780:
case 2297:
case 3879:
case 3275:
case 3621:
case 211:
case 2842:
case 1655:
case 3605:
case 3322:
case 1468:
case 1180:
case 3858:
case 108:
case 1808:
case 781:
case 2917:
case 792:
case 1256:
case 1145:
case 1029:
case 2973:
case 3183:
case 667:
case 2118:
case 1614:
case 2347:
case 3842:
case 1077:
case 4:
case 770:
case 2780:
case 659:
case 2612:
case 2745:
case 3408:
case 1665:
case 1528:
case 3941:
case 3650:
case 1054:
case 810:
case 13:
case 3185:
case 3140:
case 3134:
case 3572:
case 3198:
case 3241:
case 902:
case 3516:
case 3482:
case 2052:
case 3997:
case 2309:
case 1663:
case 3906:
case 2217:
case 2743:
case 1882:
case 2835:
case 219:
case 2048:
case 1378:
case 0:
case 2239:
case 3660:
case 434:
case 1574:
case 2603:
case 1359:
case 516:
case 1002:
case 2482:
case 3052:
case 204:
case 2134:
case 1435:
case 2572:
case 2198:
case 450:
case 3391:
case 1484:
case 2004:
case 3549:
case 482:
case 1171:
case 1740:
case 1734:
case 1798:
case 3239:
case 3273:
case 319:
case 1694:
case 3090:
case 3048:
case 672:
case 875:
case 2906:
case 2692:
case 3743:
case 651:
case 3641:
case 985:
case 1965:
case 2912:
case 3151:
case 3515:
case 1199:
case 3564:
case 1200:
case 473:
case 3186:
case 2921:
case 1914:
case 3725:
case 539:
case 3847:
case 1072:
case 154:
case 697:
case 3260:
case 3333:
case 3292:
case 762:
case 2074:
case 1263:
case 457:
case 1330:
case 3905:
case 898:
case 1955:
case 130:
case 3921:
case 1590:
case 2725:
case 406:
case 1436:
case 3976:
case 553:
case 2327:
case 3593:
case 236:
case 1761:
case 1562:
case 235:
case 1670:
case 1411:
case 1049:
case 2424:
case 1786:
case 3639:
case 2333:
case 3836:
case 794:
case 2554:
case 1125:
case 3342:
case 2847:
case 2362:
case 3285:
case 820:
case 419:
case 3240:
case 3234:
case 4090:
case 1315:
case 3686:
case 1739:
case 3141:
case 1364:
case 3651:
case 2390:
case 1601:
case 984:
case 1078:
case 2348:
case 334:
case 712:
case 1945:
case 3304:
case 1354:
case 2091:
case 229:
case 350:
case 932:
case 2352:
case 1807:
case 1467:
case 2139:
case 2651:
case 526:
case 2240:
case 961:
case 649:
case 2298:
case 3362:
case 2407:
case 2867:
case 1625:
case 1271:
case 250:
case 1568:
case 668:
case 3828:
case 3352:
case 3173:
case 404:
case 3918:
case 3009:
case 525:
case 107:
case 234:
case 1741:
case 1170:
case 2661:
case 3079:
case 35:
case 2810:
case 3251:
case 1201:
case 860:
case 1100:
case 3150:
case 1316:
case 248:
case 3286:
case 3640:
case 3634:
case 2429:
case 1895:
case 3495:
case 999:
case 2700:
case 2058:
case 9:
case 3488:
case 273:
case 1331:
case 2587:
case 3261:
case 1163:
case 1946:
case 82:
case 3559:
case 2698:
case 1760:
case 2634:
case 921:
case 3374:
case 1813:
case 2738:
case 2685:
case 205:
case 2103:
case 2251:
case 357:
case 2079:
case 25:
case 3920:
case 1349:
case 1591:
case 435:
case 3763:
case 566:
case 1410:
case 827:
case 2261:
case 514:
case 1937:
case 206:
case 701:
case 2160:
case 188:
case 1671:
case 2495:
case 1194:
case 3569:
case 369:
case 144:
case 2035:
case 2961:
case 458:
case 1404:
case 2084:
case 2105:
case 3524:
case 765:
case 3389:
case 1815:
case 2683:
case 698:
case 1925:
case 2402:
case 1396:
case 332:
case 3714:
case 950:
case 2328:
case 1307:
case 3176:
case 991:
case 3415:
case 1223:
case 2986:
case 261:
case 3464:
case 883:
case 1547:
case 3112:
case 2951:
case 1705:
case 1452:
case 1721:
case 929:
case 2454:
case 402:
case 3105:
case 1155:
case 2524:
case 3848:
case 1645:
case 3035:
case 3961:
case 1901:
case 2112:
case 1490:
case 1448:
case 2755:
case 1165:
case 4057:
case 2464:
case 2804:
case 1536:
case 2415:
case 3986:
case 361:
case 2121:
case 543:
case 3328:
case 3852:
case 1999:
case 2176:
case 1395:
case 2874:
case 2283:
case 3218:
case 725:
case 1926:
case 1816:
case 906:
case 2106:
case 2310:
case 1637:
case 1872:
case 3047:
case 2036:
case 595:
case 2011:
case 610:
case 1932:
case 603:
case 2985:
case 1831:
case 3582:
case 905:
case 3781:
case 2022:
case 2998:
case 221:
case 726:
case 1623:
case 2940:
case 3036:
case 2766:
case 1280:
case 1245:
case 3310:
case 1156:
case 1377:
case 872:
case 973:
case 1775:
case 512:
case 1313:
case 969:
case 3874:
case 641:
case 299:
case 2218:
case 851:
case 2175:
case 3940:
case 3985:
case 2582:
case 2781:
case 138:
case 957:
case 1535:
case 3197:
case 3449:
case 3011:
case 1584:
case 486:
case 440:
case 1098:
case 1034:
case 2370:
case 805:
case 602:
case 3790:
case 2287:
case 165:
case 3154:
case 360:
case 1793:
case 3561:
case 4070:
case 417:
case 3043:
case 2924:
case 64:
case 588:
case 1876:
case 2193:
case 1936:
case 1501:
case 227:
case 3551:
case 3115:
case 1599:
case 3164:
case 2608:
case 1341:
case 2704:
case 2026:
case 3412:
case 41:
case 2043:
case 1152:
case 3924:
case 1373:
case 1339:
case 498:
case 2278:
case 857:
case 2561:
case 3032:
case 3814:
case 2762:
case 1455:
case 2748:
case 990:
case 3405:
case 2790:
case 658:
case 1317:
case 1764:
case 3269:
case 2630:
case 2644:
case 3370:
case 3259:
case 2586:
case 1209:
case 1148:
case 1190:
case 3026:
case 109:
case 1754:
case 1658:
case 3608:
case 3071:
case 374:
case 513:
case 327:
case 1947:
case 2551:
case 2115:
case 22:
case 1291:
case 2394:
case 1051:
case 983:
case 441:
case 3131:
case 259:
case 2669:
case 475:
case 4094:
case 2866:
case 4038:
case 2406:
case 1392:
case 2687:
case 320:
case 882:
case 3099:
case 686:
case 640:
case 1227:
case 2149:
case 2497:
case 3540:
case 1303:
case 3172:
case 3598:
case 3353:
case 476:
case 3116:
case 36:
case 267:
case 1935:
case 50:
case 3687:
case 1772:
case 2244:
case 359:
case 2230:
case 1526:
case 2363:
case 3866:
case 3406:
case 2774:
case 2131:
case 3394:
case 4063:
case 1481:
case 1716:
case 2678:
case 3338:
case 611:
case 1174:
case 1731:
case 4053:
case 2300:
case 556:
case 1691:
case 2116:
case 918:
case 26:
case 1466:
case 3497:
case 2540:
case 2172:
case 2598:
case 2353:
case 1609:
case 1258:
case 3208:
case 2046:
case 538:
case 1376:
case 1157:
case 3107:
case 2314:
case 1321:
case 1647:
case 3908:
case 3282:
case 1958:
case 3019:
case 2870:
case 251:
case 2583:
case 742:
case 3023:
case 755:
case 2930:
case 2944:
case 3518:
case 960:
case 1841:
case 1968:
case 1189:
case 604:
case 3728:
case 4055:
case 2439:
case 2473:
case 3624:
case 112:
case 468:
case 3870:
case 1817:
case 974:
case 1927:
case 3365:
case 1796:
case 372:
case 3789:
case 3046:
case 1284:
case 1128:
case 2107:
case 3473:
case 707:
case 1545:
case 2728:
case 1622:
case 3583:
case 3417:
case 2023:
case 1470:
case 3944:
case 2518:
case 713:
case 832:
case 635:
case 3710:
case 700:
case 1018:
case 1892:
case 1909:
case 3403:
case 3450:
case 218:
case 1400:
case 2080:
case 29:
case 1713:
case 397:
case 933:
case 2045:
case 2894:
case 1537:
case 178:
case 3195:
case 4056:
case 2978:
case 2113:
case 3188:
case 4081:
case 1803:
case 3492:
case 2356:
case 3987:
case 297:
case 1635:
case 1788:
case 3366:
case 2863:
case 2403:
case 2959:
case 1083:
case 2682:
case 2710:
case 2853:
case 2969:
case 101:
case 788:
case 1110:
case 3113:
case 2188:
case 2224:
case 2800:
case 1494:
case 2195:
case 3978:
case 2344:
case 1502:
case 3552:
case 908:
case 1368:
case 3751:
case 2016:
case 2072:
case 254:
case 4030:
case 1639:
case 3049:
case 400:
case 598:
case 3436:
case 2824:
case 3548:
case 1921:
case 2447:
case 3590:
case 223:
case 1358:
case 3761:
case 1822:
case 3308:
case 1593:
case 601:
case 2253:
case 728:
case 1912:
case 1333:
case 2786:
case 1260:
case 2049:
case 1847:
case 354:
case 3955:
case 945:
case 2552:
case 1905:
case 2422:
case 3016:
case 1292:
case 1203:
case 3253:
case 1515:
case 2308:
case 946:
case 980:
case 3031:
case 3914:
case 2548:
case 517:
case 824:
case 3447:
case 1725:
case 678:
case 323:
case 1564:
case 488:
case 2436:
case 1250:
case 1090:
case 3126:
case 3694:
case 119:
case 2981:
case 1835:
case 3740:
case 1884:
case 1273:
case 1239:
case 2064:
case 3369:
case 3270:
case 2663:
case 2015:
case 1217:
case 749:
case 696:
case 2966:
case 881:
case 2600:
case 455:
case 3484:
case 279:
case 23:
case 993:
case 3435:
case 3882:
case 1732:
case 3663:
case 3956:
case 1906:
case 2734:
case 2740:
case 2171:
case 4087:
case 2798:
case 98:
case 2126:
case 2694:
case 3981:
case 2638:
case 104:
case 363:
case 1198:
case 2435:
case 2484:
case 3600:
case 3054:
case 1650:
case 815:
case 612:
case 3966:
case 3653:
case 575:
case 1241:
case 3143:
case 3718:
case 111:
case 3077:
case 741:
case 1408:
case 2088:
case 2427:
case 3528:
case 3013:
case 3665:
case 2830:
case 1297:
case 3145:
case 2589:
case 889:
case 1605:
case 3655:
case 4024:
case 2567:
case 308:
case 1858:
case 1322:
case 1183:
case 3281:
case 2324:
case 1311:
case 2433:
case 3095:
case 3844:
case 3830:
case 380:
case 3427:
case 2458:
case 185:
case 346:
case 1507:
case 822:
case 2614:
case 1676:
case 2718:
case 3324:
case 1973:
case 1939:
case 3433:
case 2442:
case 954:
case 549:
case 1118:
case 2281:
case 352:
case 3567:
case 140:
case 345:
case 186:
case 3970:
case 1444:
case 2029:
case 3265:
case 717:
case 2096:
case 3887:
case 1529:
case 444:
case 1697:
case 3953:
case 1459:
case 1950:
case 393:
case 147:
case 894:
case 1335:
case 937:
case 3681:
case 1577:
case 2938:
case 387:
case 1723:
case 1960:
case 609:
case 3963:
case 1809:
case 1606:
case 3720:
case 3656:
case 1487:
case 1205:
case 3123:
case 293:
case 1221:
case 1675:
case 2214:
case 1276:
case 798:
case 2953:
case 1089:
case 1746:
case 3382:
case 2255:
case 3137:
case 2859:
case 3938:
case 1478:
case 1907:
case 3957:
case 1693:
case 931:
case 1779:
case 504:
case 2386:
case 2092:
case 3744:
case 3158:
case 216:
case 1880:
case 1249:
case 2127:
case 2060:
case 175:
case 1094:
case 3690:
case 2351:
case 370:
case 2361:
case 837:
case 2708:
case 215:
case 3168:
case 2050:
case 1539:
case 1573:
case 3570:
case 381:
case 1483:
case 3989:
case 1517:
case 3142:
case 1325:
case 2179:
case 1996:
case 3351:
case 1768:
case 2158:
case 316:
case 2274:
case 1063:
case 785:
case 3386:
case 3818:
case 3928:
case 1216:
case 2957:
case 962:
case 2652:
case 3179:
case 292:
case 2967:
case 2570:
case 786:
case 281:
case 3003:
case 2142:
case 315:
case 3604:
case 2480:
case 2168:
case 3050:
case 879:
case 1144:
case 3361:
case 1758:
case 3708:
case 2445:
case 3073:
case 2769:
case 536:
case 465:
case 3248:
case 1332:
case 2787:
case 253:
case 4034:
case 4040:
case 3778:
case 2385:
case 3191:
case 2398:
case 758:
case 2340:
case 117:
case 989:
case 37:
case 1995:
case 1326:
case 339:
case 1202:
case 1988:
case 277:
case 2041:
case 3538:
case 1169:
case 3594:
case 535:
case 2204:
case 2820:
case 702:
case 3398:
case 3340:
case 3334:
case 1929:
case 2674:
case 3385:
case 830:
case 1819:
case 2262:
case 1616:
case 2191:
case 854:
case 74:
case 2248:
case 3787:
case 353:
case 1343:
case 1420:
case 2073:
case 1550:
case 3759:
case 2446:
case 3820:
case 3910:
case 823:
case 2594:
case 1631:
case 3419:
case 3041:
case 1823:
case 3563:
case 1791:
case 394:
case 1277:
case 4018:
case 893:
case 2075:
case 3210:
case 2851:
case 1954:
case 3122:
case 1380:
case 3383:
case 3425:
case 1747:
case 3555:
case 2952:
case 128:
case 2962:
case 54:
case 3628:
case 688:
case 3136:
case 1229:
case 2147:
case 478:
case 3724:
case 331:
case 1056:
case 2861:
case 2990:
case 3514:
case 1899:
case 2425:
case 1124:
case 3667:
case 362:
case 735:
case 2904:
case 2122:
case 4083:
case 1461:
case 3075:
case 3851:
case 3861:
case 1521:
case 3948:
case 2514:
case 916:
case 88:
case 558:
case 3147:
case 2724:
case 1486:
case 547:
case 2006:
case 3657:
case 2628:
case 2136:
case 3556:
case 939:
case 2289:
case 2840:
case 1506:
case 3426:
case 2267:
case 2885:
case 1931:
case 1065:
case 3471:
case 1613:
case 3782:
case 1014:
case 1832:
case 3581:
case 586:
case 540:
case 719:
case 2443:
case 1972:
case 808:
case 1871:
case 1055:
case 2257:
case 1916:
case 3228:
case 1597:
case 2974:
case 1629:
case 496:
case 3021:
case 1337:
case 1296:
case 1735:
case 656:
case 3267:
case 880:
case 2556:
case 3289:
case 2426:
case 1323:
case 3974:
case 1440:
case 511:
case 1485:
case 2005:
case 845:
case 3257:
case 1207:
case 2184:
case 2228:
case 2432:
case 3320:
case 1949:
case 60:
case 3443:
case 871:
case 495:
case 2463:
case 773:
case 301:
case 2519:
case 3494:
case 278:
case 1381:
case 1978:
case 3546:
case 2850:
case 118:
case 757:
case 462:
case 3236:
case 1129:
case 2713:
case 243:
case 1045:
case 3788:
case 3635:
case 2777:
case 1366:
case 2018:
case 3083:
case 2909:
case 4075:
case 1800:
case 2546:
case 1224:
case 2494:
case 378:
case 3537:
case 623:
case 431:
case 2438:
case 183:
case 1987:
case 706:
case 1492:
case 2306:
case 201:
case 3523:
case 494:
case 3892:
case 3909:
case 3453:
case 630:
case 3777:
case 1710:
case 197:
case 3247:
case 561:
case 343:
case 75:
case 2684:
case 1450:
case 3545:
case 2942:
case 3707:
case 637:
case 1757:
case 3933:
case 3979:
case 1473:
case 1439:
case 2020:
case 1417:
case 1930:
case 1944:
case 3470:
case 3305:
case 2841:
case 2968:
case 396:
case 3927:
case 4076:
case 1365:
case 4021:
case 3817:
case 1046:
case 422:
case 3636:
case 3284:
case 2321:
case 1314:
case 3235:
case 4012:
case 965:
case 3968:
case 295:
case 2622:
case 914:
case 2470:
case 4005:
case 312:
case 1624:
case 2611:
case 489:
case 2545:
case 663:
case 2235:
case 3376:
case 2636:
case 1107:
case 2284:
case 2128:
case 2873:
case 2817:
case 782:
case 3312:
case 296:
case 2927:
case 1908:
case 1019:
case 1441:
case 2984:
case 2543:
case 582:
case 591:
case 4050:
case 2227:
case 3258:
case 464:
case 1497:
case 3466:
case 2303:
case 901:
case 3526:
case 159:
case 1669:
case 2392:
case 1406:
case 2086:
case 3897:
case 534:
case 3571:
case 1687:
case 225:
case 3268:
case 416:
case 3716:
case 1394:
case 1338:
case 3242:
case 4092:
case 1540:
case 2466:
case 2609:
case 1353:
case 1598:
case 1172:
case 842:
case 855:
case 3227:
case 2258:
case 326:
case 2731:
case 2174:
case 133:
case 481:
case 3061:
case 2532:
case 3984:
case 1300:
case 16:
case 3543:
case 1774:
case 3360:
case 3233:
case 3875:
case 120:
case 799:
case 325:
case 2268:
case 680:
case 2772:
case 646:
case 1363:
case 2526:
case 1230:
case 7:
case 470:
case 3392:
case 1608:
case 3658:
case 2599:
case 3465:
case 1071:
case 3209:
case 1026:
case 424:
case 3190:
case 1704:
case 477:
case 4041:
case 3162:
case 2702:
case 3947:
case 127:
case 2501:
case 2793:
case 693:
case 2821:
case 1814:
case 2911:
case 1102:
case 3373:
case 3339:
case 3152:
case 3715:
case 506:
case 2876:
case 3317:
case 453:
case 214:
case 2040:
case 1405:
case 995:
case 1865:
case 3525:
case 3668:
case 2104:
case 1752:
case 2414:
case 47:
case 1551:
case 2947:
case 3501:
case 12:
case 1476:
case 68:
case 1586:
case 1412:
case 209:
case 2658:
case 2465:
case 1748:
case 800:
case 160:
case 2764:
case 3812:
case 3098:
case 813:
case 732:
case 314:
case 1644:
case 3034:
case 2373:
case 2339:
case 573:
case 3633:
case 1561:
case 4017:
case 2642:
case 3793:
case 3821:
case 2831:
case 1985:
case 1022:
case 338:
case 121:
case 1934:
case 2623:
case 2706:
case 1449:
case 2024:
case 445:
case 3584:
case 4095:
case 1106:
case 2872:
case 3377:
case 4088:
case 1036:
case 3646:
case 2797:
case 3849:
case 1283:
case 2395:
case 2926:
case 3775:
case 2388:
case 896:
case 2619:
case 988:
case 1472:
case 551:
case 1756:
case 3706:
case 3024:
case 2584:
case 733:
case 913:
case 238:
case 1416:
case 2775:
case 3816:
case 3388:
case 3971:
case 2313:
case 1431:
case 3395:
case 4077:
case 2181:
case 590:
case 2646:
case 1766:
case 2280:
case 2156:
case 1047:
case 3536:
case 2854:
case 3490:
case 2705:
case 1852:
case 3462:
case 48:
case 1493:
case 3999:
case 597:
case 583:
case 3776:
case 2815:
case 2925:
case 3893:
case 2219:
case 3721:
case 2237:
case 1961:
case 907:
case 3645:
case 1084:
case 3680:
case 3712:
case 2864:
case 3246:
case 1415:
case 3223:
case 2114:
case 487:
case 3307:
case 59:
case 2462:
case 2999:
case 2490:
case 2901:
case 1755:
case 72:
case 184:
case 2448:
case 2165:
case 3404:
case 2712:
case 2155:
case 2511:
case 1765:
case 344:
case 3219:
case 2522:
case 2721:
case 132:
case 3396:
case 3082:
case 955:
case 493:
case 760:
case 2776:
case 3815:
case 1389:
case 3410:
case 2163:
case 560:
case 3703:
case 4031:
case 631:
case 3138:
case 169:
case 423:
case 1700:
case 3626:
case 3008:
case 1587:
case 3919:
case 173:
case 3671:
case 3813:
case 2316:
case 2888:
case 200:
case 2100:
case 52:
case 3760:
case 3509:
case 2895:
case 454:
case 213:
case 2044:
case 3792:
case 2643:
case 1763:
case 4016:
case 3591:
case 1042:
case 3877:
case 3632:
case 694:
case 2201:
case 1027:
case 288:
case 106:
case 3331:
case 866:
case 2225:
case 1495:
case 2138:
case 2829:
case 2194:
case 3946:
case 2703:
case 1192:
case 1261:
case 2410:
case 2937:
case 2877:
case 3372:
case 1251:
case 2792:
case 2349:
case 574:
case 3643:
case 1033:
case 797:
case 1286:
case 814:
case 2509:
case 2923:
case 313:
case 1634:
case 1640:
case 3044:
case 1685:
case 3299:
case 2813:
case 662:
case 3316:
case 300:
case 105:
case 129:
case 790:
case 689:
case 2489:
case 3059:
case 255:
case 3568:
case 3625:
case 479:
case 1139:
case 2467:
case 2807:
case 1352:
case 1828:
case 3741:
case 3542:
case 1091:
case 2354:
case 2980:
case 2579:
case 2533:
case 20:
case 2717:
case 772:
case 1348:
case 2078:
case 2896:
case 2457:
case 3087:
case 2699:
case 4064:
case 2527:
case 2315:
case 3069:
case 3354:
case 3579:
case 30:
case 134:
case 207:
case 944:
case 2542:
case 2568:
case 2625:
case 2302:
case 1857:
case 1530:
case 1544:
case 437:
case 2226:
case 3489:
case 2059:
case 1234:
case 1240:
case 3773:
case 567:
case 191:
case 3896:
case 1867:
case 1407:
case 2087:
case 182:
case 2428:
case 3699:
case 2393:
case 3601:
case 1651:
case 2232:
case 1770:
case 1141:
case 3717:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754604001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,];
var gg_b = "1754604001/";

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
