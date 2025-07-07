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
case 2342:
case 1112:
case 4007:
case 3350:
case 2024:
case 2583:
case 2663:
case 3776:
case 2566:
case 952:
case 875:
case 2625:
case 1930:
case 1204:
case 1197:
case 2413:
case 1501:
case 2358:
case 1023:
case 3634:
case 943:
case 2458:
case 111:
case 234:
case 3272:
case 763:
case 2659:
case 3651:
case 2313:
case 1767:
case 3295:
case 547:
case 3035:
case 2228:
case 2729:
case 2543:
case 2854:
case 1869:
case 489:
case 2184:
case 251:
case 1032:
case 1780:
case 1292:
case 2831:
case 3839:
case 2597:
case 2101:
case 103:
case 238:
case 1183:
case 1407:
case 2755:
case 4014:
case 3115:
case 862:
case 1307:
case 989:
case 1796:
case 2512:
case 306:
case 3806:
case 1479:
case 596:
case 3860:
case 2607:
case 3322:
case 712:
case 3044:
case 353:
case 2378:
case 801:
case 2240:
case 704:
case 4086:
case 522:
case 3671:
case 2819:
case 3645:
case 1830:
case 3124:
case 3422:
case 325:
case 1562:
case 2868:
case 1446:
case 342:
case 8:
case 332:
case 3756:
case 877:
case 3847:
case 2927:
case 164:
case 1873:
case 2280:
case 3626:
case 1359:
case 2009:
case 1390:
case 2364:
case 3749:
case 2741:
case 2775:
case 1229:
case 2931:
case 880:
case 1535:
case 1658:
case 91:
case 2162:
case 1490:
case 2464:
case 813:
case 3433:
case 2874:
case 1953:
case 3157:
case 41:
case 2717:
case 3887:
case 2614:
case 2500:
case 1425:
case 999:
case 1918:
case 3333:
case 3906:
case 1255:
case 2015:
case 1463:
case 2864:
case 1373:
case 1859:
case 2040:
case 1189:
case 502:
case 830:
case 359:
case 821:
case 514:
case 478:
case 1473:
case 1863:
case 2549:
case 2374:
case 1886:
case 3575:
case 3541:
case 4030:
case 2067:
case 2195:
case 1907:
case 3128:
case 305:
case 2474:
case 585:
case 1430:
case 3822:
case 2618:
case 1572:
case 3999:
case 3411:
case 2991:
case 2277:
case 2653:
case 493:
case 3201:
case 876:
case 2209:
case 2732:
case 3460:
case 1914:
case 1055:
case 597:
case 3870:
case 1520:
case 3447:
case 1631:
case 2958:
case 993:
case 1654:
case 294:
case 974:
case 4073:
case 2468:
case 1846:
case 2669:
case 2589:
case 3661:
case 2405:
case 2236:
case 2096:
case 2964:
case 1990:
case 3439:
case 3555:
case 2431:
case 1176:
case 439:
case 608:
case 1605:
case 2882:
case 2224:
case 449:
case 3712:
case 3140:
case 3339:
case 2152:
case 2454:
case 1963:
case 1353:
case 1879:
case 1418:
case 215:
case 2521:
case 2630:
case 3072:
case 3694:
case 1318:
case 1807:
case 1208:
case 3216:
case 3797:
case 1453:
case 3850:
case 1041:
case 604:
case 536:
case 4018:
case 3899:
case 1709:
case 2891:
case 1548:
case 360:
case 1092:
case 4053:
case 155:
case 3262:
case 587:
case 2427:
case 2858:
case 2257:
case 3196:
case 561:
case 3783:
case 3766:
case 392:
case 2576:
case 4069:
case 2327:
case 109:
case 2813:
case 123:
case 2385:
case 1295:
case 3767:
case 1651:
case 2326:
case 2938:
case 936:
case 311:
case 995:
case 1634:
case 3008:
case 2509:
case 2748:
case 1737:
case 2256:
case 1016:
case 3197:
case 3065:
case 961:
case 583:
case 1450:
case 1499:
case 1698:
case 3314:
case 741:
case 1220:
case 510:
case 1911:
case 2515:
case 987:
case 495:
case 2536:
case 844:
case 2752:
case 3740:
case 3414:
case 127:
case 731:
case 970:
case 3479:
case 106:
case 754:
case 2788:
case 3678:
case 3796:
case 1136:
case 3307:
case 1115:
case 2345:
case 3166:
case 3407:
case 62:
case 851:
case 3379:
case 329:
case 2810:
case 3275:
case 2249:
case 1109:
case 3032:
case 672:
case 1721:
case 262:
case 3869:
case 470:
case 1177:
case 1470:
case 1847:
case 918:
case 2838:
case 2237:
case 985:
case 2165:
case 132:
case 497:
case 142:
case 3446:
case 1893:
case 125:
case 1645:
case 2557:
case 1789:
case 356:
case 2012:
case 368:
case 153:
case 4033:
case 485:
case 1322:
case 2276:
case 2:
case 418:
case 2894:
case 1860:
case 902:
case 1906:
case 3255:
case 3486:
case 3691:
case 4022:
case 16:
case 3363:
case 3386:
case 1157:
case 2910:
case 2334:
case 3658:
case 879:
case 1939:
case 3535:
case 2451:
case 3229:
case 2351:
case 600:
case 3516:
case 2961:
case 1565:
case 3969:
case 1523:
case 1749:
case 3390:
case 1508:
case 2132:
case 2434:
case 1626:
case 816:
case 1833:
case 1128:
case 3907:
case 2243:
case 1387:
case 1541:
case 51:
case 2716:
case 2898:
case 3886:
case 240:
case 817:
case 772:
case 3473:
case 159:
case 1052:
case 3189:
case 898:
case 2851:
case 3859:
case 3724:
case 1517:
case 2117:
case 47:
case 666:
case 1661:
case 2985:
case 935:
case 182:
case 996:
case 2338:
case 357:
case 3654:
case 945:
case 1504:
case 1610:
case 2438:
case 2639:
case 1393:
case 1447:
case 922:
case 2283:
case 422:
case 3330:
case 4087:
case 445:
case 1201:
case 620:
case 2175:
case 2503:
case 435:
case 2528:
case 3029:
case 496:
case 3595:
case 641:
case 873:
case 1360:
case 2021:
case 2762:
case 97:
case 1822:
case 29:
case 1950:
case 1306:
case 3265:
case 1797:
case 3807:
case 171:
case 3619:
case 2845:
case 2998:
case 3879:
case 1235:
case 2611:
case 3963:
case 1743:
case 2200:
case 2089:
case 1339:
case 107:
case 1140:
case 3668:
case 1712:
case 2693:
case 3081:
case 1020:
case 2647:
case 2951:
case 1638:
case 3004:
case 1439:
case 3369:
case 815:
case 323:
case 309:
case 1602:
case 3715:
case 1766:
case 3946:
case 2826:
case 2155:
case 1783:
case 437:
case 3017:
case 3736:
case 4039:
case 552:
case 1970:
case 126:
case 3814:
case 533:
case 884:
case 937:
case 3121:
case 2784:
case 3674:
case 947:
case 160:
case 3092:
case 486:
case 3232:
case 4006:
case 767:
case 2701:
case 1922:
case 3041:
case 3075:
case 960:
case 3069:
case 2688:
case 2568:
case 3481:
case 2505:
case 1901:
case 511:
case 3696:
case 1862:
case 2722:
case 1320:
case 2061:
case 2173:
case 426:
case 1299:
case 2010:
case 137:
case 1984:
case 1039:
case 3102:
case 730:
case 2389:
case 22:
case 1250:
case 383:
case 2456:
case 3680:
case 1372:
case 1621:
case 1530:
case 2519:
case 1174:
case 1472:
case 272:
case 186:
case 3375:
case 3587:
case 2130:
case 1119:
case 265:
case 1734:
case 4095:
case 2648:
case 776:
case 3492:
case 3441:
case 349:
case 3865:
case 3808:
case 3823:
case 64:
case 63:
case 2245:
case 2271:
case 1835:
case 482:
case 4088:
case 3073:
case 680:
case 1801:
case 1962:
case 1352:
case 2169:
case 1222:
case 2376:
case 393:
case 145:
case 556:
case 1087:
case 1649:
case 2866:
case 1448:
case 1726:
case 2883:
case 1270:
case 2900:
case 2321:
case 1060:
case 1656:
case 3329:
case 1844:
case 1553:
case 601:
case 3506:
case 3782:
case 1518:
case 2421:
case 959:
case 3290:
case 3355:
case 281:
case 3965:
case 1771:
case 1093:
case 459:
case 1916:
case 3908:
case 1488:
case 3923:
case 1689:
case 378:
case 267:
case 1388:
case 2038:
case 3539:
case 6:
case 2897:
case 2298:
case 905:
case 3286:
case 2620:
case 4052:
case 564:
case 2821:
case 3657:
case 3975:
case 3941:
case 2949:
case 1579:
case 3992:
case 258:
case 3754:
case 3829:
case 266:
case 1710:
case 1444:
case 2312:
case 31:
case 2739:
case 3731:
case 1191:
case 619:
case 220:
case 73:
case 231:
case 4084:
case 3046:
case 2397:
case 2443:
case 102:
case 69:
case 4001:
case 863:
case 96:
case 1484:
case 953:
case 3904:
case 2558:
case 1920:
case 2635:
case 1852:
case 1211:
case 1301:
case 2513:
case 640:
case 1401:
case 2616:
case 2876:
case 254:
case 197:
case 2294:
case 442:
case 2107:
case 3086:
case 1247:
case 1995:
case 3063:
case 1848:
case 2466:
case 2542:
case 1972:
case 2098:
case 925:
case 1600:
case 1514:
case 2179:
case 3727:
case 118:
case 453:
case 2383:
case 1293:
case 2366:
case 4044:
case 1525:
case 2921:
case 1099:
case 1702:
case 20:
case 2300:
case 3875:
case 1239:
case 2849:
case 3615:
case 812:
case 1586:
case 1683:
case 1563:
case 3533:
case 3269:
case 2400:
case 1178:
case 1316:
case 3677:
case 1206:
case 7:
case 3817:
case 1559:
case 3308:
case 2564:
case 2684:
case 3323:
case 3774:
case 170:
case 3609:
case 777:
case 68:
case 1416:
case 2085:
case 3804:
case 509:
case 3432:
case 1820:
case 1952:
case 4035:
case 1794:
case 2159:
case 713:
case 161:
case 3719:
case 2190:
case 1546:
case 2889:
case 2711:
case 2976:
case 333:
case 1612:
case 1948:
case 2937:
case 2793:
case 3522:
case 2045:
case 2186:
case 2747:
case 1738:
case 2125:
case 2856:
case 195:
case 2644:
case 3006:
case 2187:
case 527:
case 4092:
case 3495:
case 651:
case 2915:
case 1511:
case 4041:
case 82:
case 3174:
case 2857:
case 4075:
case 3530:
case 923:
case 3621:
case 3372:
case 224:
case 1680:
case 1560:
case 2594:
case 2303:
case 1053:
case 3250:
case 955:
case 3984:
case 2242:
case 337:
case 1547:
case 2977:
case 3420:
case 1381:
case 1593:
case 3862:
case 423:
case 648:
case 3901:
case 2054:
case 798:
case 1640:
case 3835:
case 2027:
case 1279:
case 2193:
case 1417:
case 4004:
case 2147:
case 3816:
case 1865:
case 644:
case 3637:
case 1441:
case 1475:
case 1492:
case 794:
case 2160:
case 1194:
case 3734:
case 3944:
case 1764:
case 891:
case 2759:
case 3751:
case 1587:
case 1667:
case 1341:
case 1375:
case 3270:
case 396:
case 4029:
case 174:
case 3726:
case 3448:
case 3649:
case 3785:
case 2641:
case 2675:
case 2367:
case 3087:
case 2106:
case 1246:
case 322:
case 3348:
case 616:
case 525:
case 3452:
case 3154:
case 542:
case 2440:
case 800:
case 2139:
case 3352:
case 715:
case 269:
case 1742:
case 3962:
case 1110:
case 3801:
case 679:
case 1791:
case 1073:
case 788:
case 1455:
case 1225:
case 3388:
case 2604:
case 3127:
case 3569:
case 3488:
case 2779:
case 2496:
case 3745:
case 2681:
case 1355:
case 2005:
case 2019:
case 1290:
case 1030:
case 1259:
case 3518:
case 784:
case 1506:
case 1429:
case 1603:
case 1628:
case 3553:
case 3656:
case 2924:
case 2480:
case 3158:
case 2718:
case 464:
case 559:
case 3113:
case 858:
case 2632:
case 1855:
case 3191:
case 1273:
case 673:
case 11:
case 3710:
case 2199:
case 263:
case 1754:
case 964:
case 744:
case 3579:
case 3344:
case 2769:
case 3022:
case 694:
case 1941:
case 1145:
case 2315:
case 3033:
case 1624:
case 2268:
case 3600:
case 1550:
case 3972:
case 1025:
case 468:
case 456:
case 1063:
case 3247:
case 2928:
case 968:
case 2526:
case 2409:
case 2608:
case 3384:
case 698:
case 2840:
case 3211:
case 582:
case 3920:
case 2477:
case 2064:
case 1059:
case 3182:
case 738:
case 1904:
case 3484:
case 3335:
case 2013:
case 1465:
case 3988:
case 2534:
case 80:
case 929:
case 1308:
case 3590:
case 1218:
case 3559:
case 507:
case 1955:
case 2551:
case 2254:
case 3178:
case 1014:
case 1269:
case 429:
case 1533:
case 1929:
case 2773:
case 2324:
case 3666:
case 2231:
case 1875:
case 3099:
case 2042:
case 1198:
case 395:
case 336:
case 3738:
case 911:
case 1522:
case 2133:
case 1705:
case 208:
case 1768:
case 615:
case 387:
case 1151:
case 152:
case 4008:
case 3546:
case 3462:
case 779:
case 3164:
case 688:
case 1881:
case 3362:
case 2940:
case 1570:
case 592:
case 1432:
case 411:
case 3542:
case 15:
case 3107:
case 1903:
case 1928:
case 2063:
case 3466:
case 1415:
case 3956:
case 1436:
case 59:
case 3366:
case 2145:
case 2727:
case 3179:
case 1268:
case 897:
case 3635:
case 1477:
case 1840:
case 703:
case 2059:
case 2230:
case 729:
case 1219:
case 2090:
case 3989:
case 3876:
case 354:
case 3513:
case 885:
case 2981:
case 1665:
case 3497:
case 2185:
case 916:
case 2855:
case 3582:
case 1718:
case 341:
case 3397:
case 4009:
case 3114:
case 2992:
case 358:
case 2754:
case 366:
case 521:
case 3821:
case 2657:
case 2975:
case 530:
case 2273:
case 540:
case 163:
case 1199:
case 1150:
case 3202:
case 2705:
case 1457:
case 2522:
case 3045:
case 3793:
case 3071:
case 1803:
case 2079:
case 1828:
case 764:
case 108:
case 3578:
case 3125:
case 861:
case 58:
case 243:
case 3186:
case 887:
case 846:
case 2134:
case 3760:
case 1940:
case 434:
case 3889:
case 836:
case 1082:
case 3159:
case 1730:
case 895:
case 2719:
case 2218:
case 2323:
case 1058:
case 3564:
case 2365:
case 1551:
case 2955:
case 451:
case 1996:
case 948:
case 3026:
case 104:
case 2892:
case 2615:
case 623:
case 2929:
case 609:
case 1091:
case 1324:
case 951:
case 3210:
case 1042:
case 2841:
case 2875:
case 2014:
case 1980:
case 3400:
case 438:
case 2533:
case 1122:
case 2636:
case 1424:
case 2207:
case 2808:
case 1786:
case 988:
case 3943:
case 1147:
case 249:
case 239:
case 562:
case 2279:
case 1027:
case 2640:
case 3271:
case 3997:
case 1193:
case 1759:
case 1282:
case 2764:
case 2392:
case 3574:
case 3349:
case 1111:
case 2341:
case 611:
case 590:
case 2667:
case 2587:
case 2475:
case 415:
case 150:
case 4003:
case 3648:
case 1160:
case 2194:
case 488:
case 2492:
case 3449:
case 847:
case 210:
case 124:
case 1594:
case 2680:
case 1213:
case 1303:
case 3456:
case 1746:
case 3966:
case 2511:
case 372:
case 3356:
case 3983:
case 984:
case 1428:
case 837:
case 2696:
case 2593:
case 2214:
case 3489:
case 2778:
case 3688:
case 484:
case 3568:
case 1538:
case 3010:
case 3389:
case 32:
case 2404:
case 603:
case 629:
case 2547:
case 1291:
case 2923:
case 2908:
case 1779:
case 998:
case 278:
case 3843:
case 1005:
case 668:
case 656:
case 1707:
case 3620:
case 2455:
case 4040:
case 2263:
case 1604:
case 3298:
case 4067:
case 917:
case 1380:
case 723:
case 709:
case 3421:
case 2628:
case 2506:
case 498:
case 3251:
case 3695:
case 2246:
case 1106:
case 973:
case 293:
case 87:
case 1692:
case 3866:
case 2713:
case 1367:
case 3437:
case 3153:
case 1340:
case 2742:
case 3799:
case 3750:
case 169:
case 3002:
case 822:
case 2791:
case 3376:
case 1714:
case 835:
case 1278:
case 896:
case 2932:
case 3585:
case 1616:
case 4043:
case 2260:
case 1989:
case 3064:
case 1558:
case 2484:
case 3309:
case 2301:
case 3840:
case 9:
case 2211:
case 2852:
case 2514:
case 3315:
case 2293:
case 285:
case 2033:
case 3436:
case 3205:
case 3415:
case 2995:
case 477:
case 2247:
case 1466:
case 3336:
case 1107:
case 35:
case 901:
case 1202:
case 3150:
case 363:
case 2142:
case 2710:
case 2444:
case 3880:
case 598:
case 2507:
case 3545:
case 2022:
case 2761:
case 682:
case 413:
case 1949:
case 2344:
case 2579:
case 1114:
case 0:
case 2287:
case 517:
case 1443:
case 1397:
case 202:
case 3274:
case 141:
case 81:
case 3896:
case 1662:
case 2070:
case 131:
case 120:
case 3753:
case 2113:
case 843:
case 2462:
case 76:
case 94:
case 261:
case 3082:
case 2546:
case 475:
case 833:
case 1760:
case 584:
case 2794:
case 2820:
case 2952:
case 1163:
case 4000:
case 852:
case 1856:
case 236:
case 308:
case 3828:
case 246:
case 1793:
case 607:
case 1045:
case 44:
case 2872:
case 3133:
case 1937:
case 3424:
case 3122:
case 1261:
case 515:
case 588:
case 3254:
case 2178:
case 10:
case 2050:
case 2702:
case 725:
case 2239:
case 1921:
case 3042:
case 692:
case 2099:
case 3773:
case 3231:
case 490:
case 2586:
case 2666:
case 304:
case 1026:
case 3170:
case 990:
case 1085:
case 3996:
case 3013:
case 2206:
case 1787:
case 2316:
case 1684:
case 2590:
case 3058:
case 2559:
case 753:
case 1648:
case 782:
case 839:
case 538:
case 2637:
case 2751:
case 3111:
case 1574:
case 2119:
case 3790:
case 2944:
case 1130:
case 3282:
case 1997:
case 3193:
case 1271:
case 627:
case 551:
case 328:
case 2835:
case 2816:
case 3655:
case 3291:
case 544:
case 3031:
case 2039:
case 12:
case 2250:
case 2299:
case 3538:
case 237:
case 3054:
case 1688:
case 1489:
case 810:
case 247:
case 2320:
case 1061:
case 1722:
case 1505:
case 534:
case 2472:
case 3258:
case 2174:
case 3428:
case 1356:
case 286:
case 172:
case 3915:
case 3303:
case 1285:
case 3213:
case 3594:
case 2372:
case 324:
case 1770:
case 1812:
case 625:
case 2011:
case 642:
case 3019:
case 2518:
case 1672:
case 1321:
case 1094:
case 632:
case 726:
case 3480:
case 1234:
case 2844:
case 421:
case 2656:
case 1897:
case 3510:
case 3604:
case 1038:
case 3396:
case 1620:
case 653:
case 2745:
case 3496:
case 2916:
case 1843:
case 1554:
case 940:
case 760:
case 2488:
case 3779:
case 4076:
case 2127:
case 3278:
case 1169:
case 3440:
case 3714:
case 2222:
case 2884:
case 1376:
case 3617:
case 1476:
case 3809:
case 2131:
case 2352:
case 3139:
case 1002:
case 27:
case 2962:
case 3340:
case 3957:
case 1153:
case 49:
case 3675:
case 2785:
case 3641:
case 707:
case 976:
case 2649:
case 100:
case 235:
case 3074:
case 919:
case 245:
case 3106:
case 1337:
case 1438:
case 119:
case 373:
case 2504:
case 3368:
case 2393:
case 2447:
case 3215:
case 1266:
case 1985:
case 3405:
case 3913:
case 2347:
case 2493:
case 1117:
case 1338:
case 394:
case 2088:
case 3589:
case 900:
case 1606:
case 3277:
case 3878:
case 3991:
case 400:
case 2284:
case 2822:
case 2999:
case 3419:
case 602:
case 2360:
case 857:
case 3732:
case 3080:
case 3319:
case 1192:
case 2460:
case 55:
case 1716:
case 697:
case 1037:
case 981:
case 140:
case 398:
case 2048:
case 2592:
case 3708:
case 130:
case 205:
case 3172:
case 737:
case 3195:
case 3067:
case 2487:
case 1735:
case 1212:
case 1851:
case 2700:
case 618:
case 1181:
case 3864:
case 2517:
case 467:
case 786:
case 3120:
case 1076:
case 42:
case 3257:
case 3188:
case 226:
case 2602:
case 4061:
case 3813:
case 1826:
case 384:
case 972:
case 3978:
case 3891:
case 472:
case 18:
case 1701:
case 670:
case 1687:
case 809:
case 77:
case 1998:
case 315:
case 1871:
case 991:
case 271:
case 2095:
case 3003:
case 2406:
case 2235:
case 3028:
case 2797:
case 2216:
case 2933:
case 2694:
case 1660:
case 504:
case 3431:
case 2555:
case 722:
case 636:
case 1361:
case 745:
case 207:
case 1934:
case 735:
case 3331:
case 646:
case 2987:
case 2115:
case 637:
case 550:
case 3974:
case 3512:
case 1788:
case 2806:
case 190:
case 348:
case 2136:
case 40:
case 647:
case 1471:
case 3482:
case 1902:
case 2062:
case 803:
case 528:
case 2177:
case 3597:
case 785:
case 1810:
case 3382:
case 718:
case 1249:
case 1748:
case 3358:
case 344:
case 2016:
case 1485:
case 2737:
case 3313:
case 1577:
case 2035:
case 3228:
case 1385:
case 3203:
case 3827:
case 3690:
case 175:
case 3659:
case 1326:
case 1938:
case 1633:
case 3024:
case 2399:
case 714:
case 3342:
case 2960:
case 1289:
case 2350:
case 4045:
case 2499:
case 4071:
case 3144:
case 3625:
case 2450:
case 3663:
case 524:
case 3566:
case 3686:
case 2776:
case 3491:
case 2911:
case 2288:
case 2887:
case 3614:
case 1398:
case 3500:
case 920:
case 3036:
case 3874:
case 2906:
case 2333:
case 941:
case 1699:
case 761:
case 3775:
case 1802:
case 441:
case 696:
case 1961:
case 1351:
case 966:
case 2626:
case 958:
case 3954:
case 746:
case 2508:
case 1334:
case 622:
case 736:
case 431:
case 3931:
case 1795:
case 3267:
case 3868:
case 4034:
case 3135:
case 2893:
case 101:
case 1772:
case 3805:
case 868:
case 4051:
case 2248:
case 1108:
case 2470:
case 1165:
case 569:
case 2756:
case 1237:
case 253:
case 3378:
case 1894:
case 1720:
case 3607:
case 1276:
case 3781:
case 3819:
case 2645:
case 1557:
case 2124:
case 3240:
case 954:
case 3679:
case 3478:
case 2252:
case 2789:
case 4074:
case 1653:
case 2914:
case 3494:
case 3192:
case 2149:
case 1319:
case 882:
case 1209:
case 1618:
case 3021:
case 3762:
case 1942:
case 39:
case 1991:
case 1878:
case 2595:
case 1277:
case 3606:
case 1589:
case 1669:
case 376:
case 3338:
case 3926:
case 1096:
case 1913:
case 1405:
case 2757:
case 3266:
case 2520:
case 2631:
case 1215:
case 3283:
case 2055:
case 1305:
case 61:
case 554:
case 1368:
case 3639:
case 1958:
case 3402:
case 3104:
case 2473:
case 3834:
case 531:
case 4068:
case 2724:
case 541:
case 2890:
case 2627:
case 117:
case 2907:
case 566:
case 3243:
case 1195:
case 1474:
case 1172:
case 1374:
case 340:
case 2825:
case 3971:
case 3898:
case 3716:
case 3297:
case 4019:
case 2121:
case 255:
case 3784:
case 2814:
case 892:
case 3567:
case 424:
case 2777:
case 1842:
case 3701:
case 2075:
case 3049:
case 2092:
case 1891:
case 1978:
case 2232:
case 4054:
case 3155:
case 223:
case 1327:
case 209:
case 860:
case 2552:
case 1427:
case 3540:
case 924:
case 1858:
case 3461:
case 1224:
case 3596:
case 3693:
case 1331:
case 1152:
case 3310:
case 774:
case 2588:
case 2004:
case 871:
case 793:
case 2959:
case 3410:
case 2990:
case 2176:
case 4027:
case 643:
case 2807:
case 3580:
case 928:
case 2318:
case 3660:
case 1148:
case 2137:
case 3056:
case 1028:
case 3611:
case 2353:
case 2986:
case 450:
case 1003:
case 188:
case 1521:
case 1630:
case 3871:
case 3998:
case 2418:
case 2292:
case 412:
case 2032:
case 591:
case 3810:
case 2241:
case 1597:
case 2275:
case 1646:
case 362:
case 1543:
case 2973:
case 151:
case 3861:
case 3902:
case 1184:
case 1482:
case 4042:
case 3471:
case 2217:
case 3445:
case 1057:
case 2307:
case 148:
case 2678:
case 4091:
case 2479:
case 1512:
case 3788:
case 203:
case 138:
case 1974:
case 229:
case 2544:
case 2379:
case 2166:
case 1491:
case 1686:
case 1566:
case 1442:
case 799:
case 1919:
case 3000:
case 33:
case 3752:
case 3994:
case 2112:
case 1391:
case 639:
case 134:
case 211:
case 1458:
case 3326:
case 3938:
case 1659:
case 71:
case 1690:
case 1827:
case 1313:
case 3485:
case 2501:
case 2065:
case 2197:
case 144:
case 1358:
case 2008:
case 827:
case 3509:
case 693:
case 2229:
case 567:
case 963:
case 3221:
case 1792:
case 2969:
case 264:
case 3132:
case 1280:
case 2613:
case 1741:
case 3802:
case 1775:
case 3498:
case 313:
case 2425:
case 3650:
case 2463:
case 2255:
case 2486:
case 463:
case 3524:
case 1874:
case 2386:
case 2953:
case 1614:
case 1500:
case 3398:
case 2325:
case 2100:
case 1240:
case 256:
case 2830:
case 789:
case 3557:
case 832:
case 1607:
case 3720:
case 3894:
case 3:
case 842:
case 825:
case 2346:
case 3165:
case 1805:
case 2682:
case 301:
case 95:
case 2728:
case 1868:
case 2446:
case 1267:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751911202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,];
var gg_b = "1751911202/";

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
