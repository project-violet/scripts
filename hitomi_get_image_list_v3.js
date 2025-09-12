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
case 637:
case 605:
case 3257:
case 3833:
case 1182:
case 1300:
case 2840:
case 2732:
case 646:
case 1460:
case 2726:
case 551:
case 4073:
case 4003:
case 389:
case 2919:
case 1324:
case 1777:
case 1578:
case 2023:
case 1806:
case 2346:
case 3672:
case 3629:
case 466:
case 3261:
case 658:
case 516:
case 3602:
case 2131:
case 1508:
case 623:
case 1412:
case 1458:
case 1876:
case 43:
case 1406:
case 2048:
case 1556:
case 1944:
case 4071:
case 2005:
case 4001:
case 2075:
case 1858:
case 2355:
case 2686:
case 1439:
case 349:
case 1783:
case 4025:
case 2133:
case 1366:
case 1675:
case 686:
case 781:
case 1977:
case 1860:
case 1907:
case 3831:
case 3094:
case 3542:
case 1605:
case 1981:
case 3789:
case 2485:
case 1269:
case 1621:
case 2440:
case 219:
case 1086:
case 199:
case 3561:
case 1278:
case 1280:
case 628:
case 3087:
case 3939:
case 2181:
case 2090:
case 3198:
case 3001:
case 3392:
case 713:
case 1889:
case 3071:
case 2017:
case 3351:
case 669:
case 1933:
case 2549:
case 122:
case 2813:
case 3481:
case 304:
case 3367:
case 3758:
case 594:
case 3712:
case 2498:
case 1915:
case 3407:
case 1:
case 1617:
case 2144:
case 2411:
case 1338:
case 2782:
case 1931:
case 2898:
case 800:
case 3739:
case 3654:
case 179:
case 835:
case 3483:
case 2811:
case 1036:
case 3706:
case 1119:
case 3242:
case 1009:
case 3776:
case 95:
case 3563:
case 33:
case 2636:
case 574:
case 2265:
case 3958:
case 366:
case 3135:
case 3844:
case 2609:
case 131:
case 3003:
case 2982:
case 489:
case 3073:
case 848:
case 3353:
case 2679:
case 3113:
case 2256:
case 3826:
case 3419:
case 215:
case 231:
case 1609:
case 1622:
case 2715:
case 3374:
case 1636:
case 867:
case 3054:
case 905:
case 338:
case 1183:
case 3740:
case 3541:
case 2733:
case 3785:
case 2022:
case 350:
case 3673:
case 2359:
case 2164:
case 2119:
case 958:
case 2009:
case 798:
case 923:
case 596:
case 3347:
case 1898:
case 2395:
case 306:
case 4029:
case 3189:
case 2036:
case 1596:
case 1811:
case 1435:
case 3262:
case 2915:
case 1498:
case 3671:
case 1835:
case 2338:
case 1411:
case 3940:
case 3927:
case 1107:
case 778:
case 3210:
case 3426:
case 3864:
case 2278:
case 986:
case 299:
case 2530:
case 2245:
case 88:
case 1090:
case 433:
case 609:
case 3297:
case 2208:
case 2086:
case 119:
case 1440:
case 2621:
case 644:
case 2269:
case 1296:
case 485:
case 2860:
case 1764:
case 320:
case 3016:
case 2605:
case 327:
case 953:
case 2907:
case 928:
case 2439:
case 1686:
case 1565:
case 514:
case 333:
case 464:
case 1133:
case 2783:
case 3735:
case 1932:
case 175:
case 969:
case 2556:
case 1048:
case 2858:
case 1075:
case 2806:
case 2578:
case 3597:
case 2876:
case 438:
case 2230:
case 2545:
case 2781:
case 71:
case 773:
case 3798:
case 2777:
case 2324:
case 1964:
case 1919:
case 3711:
case 2068:
case 3637:
case 252:
case 1249:
case 3935:
case 3391:
case 3002:
case 3029:
case 406:
case 3072:
case 3158:
case 3318:
case 3352:
case 2623:
case 1827:
case 2370:
case 3562:
case 457:
case 3913:
case 2050:
case 1840:
case 824:
case 2300:
case 2388:
case 2081:
case 4027:
case 3187:
case 3349:
case 4040:
case 1218:
case 4085:
case 2357:
case 3011:
case 3171:
case 2077:
case 527:
case 2007:
case 703:
case 3101:
case 3098:
case 3916:
case 1644:
case 2632:
case 725:
case 2873:
case 1921:
case 3490:
case 3729:
case 1681:
case 2425:
case 1607:
case 1032:
case 2592:
case 2044:
case 1975:
case 2551:
case 1136:
case 158:
case 1923:
case 3817:
case 2786:
case 1574:
case 801:
case 1683:
case 1504:
case 1341:
case 810:
case 2801:
case 2473:
case 2887:
case 3716:
case 3890:
case 265:
case 2825:
case 3255:
case 1064:
case 1547:
case 1293:
case 1721:
case 146:
case 3396:
case 3929:
case 3013:
case 2950:
case 130:
case 2664:
case 137:
case 1705:
case 1082:
case 2251:
case 615:
case 1150:
case 1310:
case 3954:
case 0:
case 3875:
case 538:
case 2437:
case 3546:
case 740:
case 1631:
case 3848:
case 747:
case 550:
case 2922:
case 2979:
case 708:
case 557:
case 4013:
case 842:
case 2682:
case 3137:
case 1429:
case 1472:
case 1790:
case 2123:
case 3658:
case 4035:
case 2015:
case 1872:
case 1829:
case 2494:
case 1802:
case 2105:
case 3676:
case 2342:
case 4011:
case 1247:
case 2033:
case 585:
case 3085:
case 1593:
case 3639:
case 3040:
case 1220:
case 882:
case 622:
case 2121:
case 3475:
case 2709:
case 2837:
case 1615:
case 3448:
case 3823:
case 2722:
case 1186:
case 3365:
case 209:
case 1274:
case 128:
case 699:
case 414:
case 1633:
case 3599:
case 1204:
case 1990:
case 228:
case 877:
case 1736:
case 2274:
case 2186:
case 253:
case 3868:
case 3987:
case 3640:
case 1837:
case 321:
case 1709:
case 734:
case 1722:
case 3006:
case 3971:
case 3295:
case 2593:
case 3850:
case 1494:
case 2829:
case 1015:
case 2334:
case 3703:
case 1342:
case 2802:
case 2790:
case 3787:
case 2816:
case 1031:
case 332:
case 3060:
case 897:
case 1936:
case 1267:
case 2717:
case 3570:
case 3886:
case 2362:
case 1682:
case 3238:
case 3701:
case 70:
case 3500:
case 1909:
case 3588:
case 53:
case 1437:
case 4089:
case 3172:
case 3129:
case 3378:
case 3380:
case 2397:
case 3345:
case 2631:
case 768:
case 1292:
case 451:
case 3973:
case 695:
case 1619:
case 3559:
case 2775:
case 3409:
case 1950:
case 2384:
case 205:
case 2705:
case 237:
case 1083:
case 3314:
case 432:
case 861:
case 246:
case 2109:
case 1473:
case 351:
case 2019:
case 589:
case 1403:
case 1968:
case 2122:
case 1825:
case 2574:
case 1786:
case 1363:
case 2136:
case 316:
case 474:
case 2341:
case 3635:
case 4058:
case 1592:
case 2905:
case 763:
case 3698:
case 1471:
case 2677:
case 1551:
case 922:
case 2854:
case 3224:
case 421:
case 1750:
case 4039:
case 2921:
case 1873:
case 2343:
case 1077:
case 1357:
case 3994:
case 3200:
case 1632:
case 759:
case 3538:
case 1007:
case 3737:
case 1626:
case 494:
case 1081:
case 1190:
case 3822:
case 3879:
case 1567:
case 1656:
case 3891:
case 3034:
case 2209:
case 903:
case 2222:
case 3818:
case 2753:
case 178:
case 27:
case 2586:
case 2870:
case 1385:
case 1704:
case 2888:
case 326:
case 2306:
case 1575:
case 1846:
case 2951:
case 2376:
case 2992:
case 1455:
case 1747:
case 2193:
case 1499:
case 4043:
case 925:
case 3170:
case 383:
case 2568:
case 2953:
case 2424:
case 2866:
case 1899:
case 3100:
case 162:
case 1904:
case 1290:
case 2080:
case 629:
case 3097:
case 1446:
case 1523:
case 198:
case 4041:
case 2118:
case 2152:
case 2767:
case 2358:
case 3893:
case 2470:
case 2792:
case 2488:
case 4084:
case 2550:
case 435:
case 2751:
case 692:
case 1920:
case 3572:
case 668:
case 3502:
case 1947:
case 1680:
case 348:
case 2147:
case 1793:
case 2389:
case 3195:
case 940:
case 2120:
case 3554:
case 2696:
case 1221:
case 1614:
case 3946:
case 3028:
case 3364:
case 866:
case 936:
case 4010:
case 96:
case 1248:
case 1918:
case 2286:
case 2174:
case 2536:
case 2069:
case 11:
case 1096:
case 1335:
case 1991:
case 2838:
case 2104:
case 3216:
case 2509:
case 4062:
case 2459:
case 307:
case 3084:
case 1153:
case 1313:
case 2579:
case 300:
case 3229:
case 3746:
case 1993:
case 3202:
case 2438:
case 3820:
case 1791:
case 659:
case 281:
case 1590:
case 1167:
case 1718:
case 193:
case 3657:
case 570:
case 388:
case 987:
case 3804:
case 577:
case 3138:
case 3571:
case 934:
case 3700:
case 3788:
case 2590:
case 3587:
case 1649:
case 3966:
case 439:
case 181:
case 3853:
case 2223:
case 3525:
case 2167:
case 293:
case 582:
case 2192:
case 3377:
case 471:
case 4042:
case 2151:
case 3057:
case 625:
case 1438:
case 885:
case 354:
case 1859:
case 2630:
case 3381:
case 3643:
case 90:
case 1459:
case 1509:
case 3988:
case 3867:
case 1522:
case 3628:
case 542:
case 2096:
case 1536:
case 1286:
case 1495:
case 2952:
case 3641:
case 845:
case 850:
case 2991:
case 2335:
case 3924:
case 2275:
case 3573:
case 2248:
case 3453:
case 367:
case 34:
case 1147:
case 612:
case 2221:
case 1696:
case 3851:
case 3063:
case 1120:
case 324:
case 636:
case 2678:
case 715:
case 2680:
case 2645:
case 3995:
case 102:
case 3331:
case 1792:
case 3610:
case 640:
case 1400:
case 4063:
case 3537:
case 1008:
case 2446:
case 2290:
case 2904:
case 608:
case 44:
case 1767:
case 1152:
case 1118:
case 2523:
case 467:
case 3662:
case 2217:
case 1568:
case 2899:
case 1866:
case 779:
case 460:
case 3201:
case 391:
case 2747:
case 3795:
case 7:
case 2499:
case 2720:
case 2521:
case 2065:
case 3273:
case 722:
case 3759:
case 2575:
case 1306:
case 2455:
case 3634:
case 1992:
case 2548:
case 1056:
case 1586:
case 2327:
case 1967:
case 687:
case 17:
case 1665:
case 827:
case 680:
case 454:
case 820:
case 2340:
case 2704:
case 3333:
case 2385:
case 3199:
case 4057:
case 3594:
case 2656:
case 371:
case 3938:
case 1753:
case 3315:
case 1279:
case 26:
case 2765:
case 524:
case 3336:
case 1604:
case 192:
case 941:
case 1233:
case 2047:
case 3414:
case 3141:
case 3469:
case 3309:
case 1756:
case 255:
case 247:
case 2653:
case 3379:
case 1215:
case 4088:
case 3239:
case 1945:
case 1647:
case 1980:
case 2354:
case 1978:
case 10:
case 208:
case 2169:
case 2114:
case 2441:
case 2074:
case 1861:
case 3276:
case 918:
case 2428:
case 3742:
case 591:
case 317:
case 3830:
case 1303:
case 1149:
case 172:
case 1387:
case 2526:
case 2443:
case 2828:
case 4066:
case 2965:
case 1325:
case 3430:
case 1371:
case 1051:
case 2841:
case 2282:
case 814:
case 1956:
case 1301:
case 3260:
case 134:
case 1067:
case 678:
case 1745:
case 2130:
case 287:
case 2884:
case 1231:
case 1708:
case 1780:
case 709:
case 1507:
case 3038:
case 72:
case 2692:
case 3869:
case 981:
case 1577:
case 2651:
case 2264:
case 2219:
case 744:
case 3456:
case 58:
case 876:
case 3880:
case 3289:
case 159:
case 2316:
case 1394:
case 1442:
case 2434:
case 3763:
case 2862:
case 2093:
case 3699:
case 2949:
case 75:
case 3000:
case 3088:
case 2462:
case 4059:
case 1207:
case 99:
case 3350:
case 1277:
case 896:
case 2018:
case 3560:
case 2329:
case 1969:
case 3646:
case 1914:
case 1531:
case 3197:
case 2180:
case 2091:
case 61:
case 560:
case 902:
case 1244:
case 410:
case 2582:
case 2410:
case 3478:
case 784:
case 2226:
case 54:
case 1337:
case 212:
case 1652:
case 3445:
case 2497:
case 3558:
case 3480:
case 1749:
case 730:
case 112:
case 2337:
case 548:
case 2691:
case 705:
case 3046:
case 3323:
case 3670:
case 3928:
case 874:
case 1410:
case 3688:
case 746:
case 1372:
case 1178:
case 1052:
case 1145:
case 2730:
case 556:
case 618:
case 1834:
case 2281:
case 1091:
case 1180:
case 3743:
case 1108:
case 723:
case 2207:
case 998:
case 1462:
case 535:
case 758:
case 832:
case 263:
case 1949:
case 2283:
case 3666:
case 3235:
case 3540:
case 3585:
case 2394:
case 1316:
case 3213:
case 3728:
case 2515:
case 2930:
case 3099:
case 2693:
case 3465:
case 3943:
case 1810:
case 681:
case 3321:
case 103:
case 259:
case 821:
case 370:
case 3375:
case 1219:
case 3784:
case 978:
case 1897:
case 3348:
case 377:
case 993:
case 2507:
case 3598:
case 1651:
case 2577:
case 180:
case 3449:
case 3161:
case 3797:
case 2708:
case 1884:
case 67:
case 187:
case 2745:
case 526:
case 477:
case 2371:
case 2301:
case 2092:
case 2544:
case 2956:
case 769:
case 4055:
case 3638:
case 1526:
case 3390:
case 272:
case 1667:
case 2325:
case 2053:
case 583:
case 1519:
case 1564:
case 2303:
case 973:
case 1843:
case 91:
case 3997:
case 2980:
case 2647:
case 2945:
case 1074:
case 851:
case 2196:
case 1354:
case 155:
case 3849:
case 140:
case 361:
case 490:
case 1484:
case 3513:
case 2674:
case 1020:
case 1765:
case 16:
case 3227:
case 602:
case 1047:
case 3285:
case 2583:
case 292:
case 136:
case 2604:
case 2405:
case 2555:
case 3253:
case 2823:
case 1901:
case 121:
case 3837:
case 1076:
case 1116:
case 2194:
case 1987:
case 1039:
case 1685:
case 599:
case 1627:
case 1925:
case 309:
case 2365:
case 3342:
case 2676:
case 3148:
case 4077:
case 3175:
case 4007:
case 3494:
case 1259:
case 5:
case 2606:
case 1773:
case 3015:
case 685:
case 4081:
case 825:
case 2754:
case 2040:
case 3033:
case 1701:
case 1450:
case 3909:
case 1588:
case 3979:
case 1771:
case 579:
case 3123:
case 717:
case 2658:
case 2612:
case 701:
case 3267:
case 3894:
case 989:
case 132:
case 296:
case 2137:
case 1524:
case 2821:
case 812:
case 515:
case 1903:
case 3292:
case 1308:
case 45:
case 2423:
case 638:
case 1345:
case 2660:
case 1012:
case 3437:
case 2954:
case 174:
case 1154:
case 1314:
case 2929:
case 1436:
case 552:
case 3083:
case 2902:
case 2035:
case 1479:
case 2103:
case 3619:
case 966:
case 836:
case 3950:
case 1409:
case 384:
case 3801:
case 1635:
case 2299:
case 1266:
case 3786:
case 2817:
case 3363:
case 3871:
case 3553:
case 2255:
case 3968:
case 3887:
case 365:
case 808:
case 742:
case 2702:
case 42:
case 2490:
case 214:
case 2729:
case 3873:
case 2246:
case 1611:
case 1224:
case 904:
case 1698:
case 4033:
case 3567:
case 1822:
case 1737:
case 3190:
case 344:
case 2187:
case 1809:
case 2916:
case 1994:
case 3632:
case 4015:
case 620:
case 1538:
case 2101:
case 2098:
case 880:
case 627:
case 3357:
case 3117:
case 3768:
case 1270:
case 1098:
case 1101:
case 2538:
case 834:
case 2270:
case 1011:
case 1171:
case 777:
case 2822:
case 3252:
case 1187:
case 1349:
case 3291:
case 985:
case 3677:
case 3607:
case 2698:
case 1417:
case 1729:
case 3179:
case 689:
case 80:
case 1890:
case 3109:
case 3683:
case 945:
case 950:
case 1299:
case 2635:
case 790:
case 797:
case 3923:
case 323:
case 957:
case 3748:
case 595:
case 337:
case 2479:
case 3705:
case 938:
case 868:
case 2559:
case 1013:
case 892:
case 330:
case 1972:
case 2369:
case 2314:
case 1396:
case 2154:
case 1035:
case 2595:
case 3293:
case 3547:
case 1689:
case 2345:
case 1848:
case 3631:
case 2308:
case 274:
case 1875:
case 1821:
case 3150:
case 4019:
case 3082:
case 3402:
case 3518:
case 3552:
case 1658:
case 1612:
case 1137:
case 196:
case 232:
case 3591:
case 446:
case 3429:
case 2787:
case 3472:
case 2588:
case 430:
case 2450:
case 2771:
case 405:
case 2886:
case 3168:
case 3717:
case 437:
case 369:
case 1754:
case 1027:
case 3247:
case 604:
case 1639:
case 2295:
case 933:
case 1676:
case 1606:
case 2259:
case 3872:
case 3416:
case 1421:
case 3633:
case 176:
case 3990:
case 2039:
case 2987:
case 2640:
case 1365:
case 2925:
case 3186:
case 2627:
case 328:
case 1823:
case 1448:
case 2971:
case 3615:
case 1405:
case 1194:
case 2116:
case 1475:
case 859:
case 2901:
case 1832:
case 3183:
case 4023:
case 1304:
case 1727:
case 3636:
case 2958:
case 2912:
case 3265:
case 2563:
case 23:
case 1054:
case 2353:
case 3622:
case 3679:
case 1528:
case 2003:
case 1464:
case 1826:
case 3982:
case 2877:
case 632:
case 2739:
case 1189:
case 3898:
case 2242:
case 157:
case 818:
case 2881:
case 3413:
case 145:
case 1673:
case 1927:
case 2367:
case 2758:
case 204:
case 2481:
case 1625:
case 1940:
case 3549:
case 419:
case 1601:
case 2883:
case 914:
case 1671:
case 1262:
case 3498:
case 2407:
case 2087:
case 4021:
case 3090:
case 2760:
case 1819:
case 2025:
case 2561:
case 4048:
case 726:
case 621:
case 1432:
case 2351:
case 2906:
case 3177:
case 4005:
case 2198:
case 2392:
case 1534:
case 1016:
case 2415:
case 1998:
case 1284:
case 3764:
case 976:
case 1911:
case 319:
case 2433:
case 788:
case 1139:
case 1393:
case 3115:
case 1882:
case 3399:
case 3133:
case 3686:
case 3021:
case 4090:
case 2127:
case 133:
case 3919:
case 3964:
case 1510:
case 1482:
case 756:
case 1711:
case 289:
case 89:
case 1798:
case 700:
case 2037:
case 2989:
case 1243:
case 2602:
case 735:
case 616:
case 2672:
case 2261:
case 523:
case 3023:
case 537:
case 3840:
case 2257:
case 802:
case 1029:
case 1072:
case 546:
case 1318:
case 1158:
case 2815:
case 1637:
case 3726:
case 1935:
case 2352:
case 3623:
case 1431:
case 2029:
case 4036:
case 2002:
case 760:
case 4079:
case 3388:
case 1833:
case 974:
case 3744:
case 3050:
case 74:
case 2562:
case 1257:
case 1602:
case 3230:
case 3545:
case 3781:
case 3412:
case 3458:
case 3876:
case 1989:
case 2243:
case 3508:
case 3806:
case 2160:
case 3578:
case 1672:
case 2711:
case 2482:
case 415:
case 862:
case 932:
case 431:
case 3707:
case 2798:
case 898:
case 3783:
case 1140:
case 149:
case 614:
case 2241:
case 499:
case 2882:
case 233:
case 1127:
case 2228:
case 3812:
case 3858:
case 3556:
case 3406:
case 754:
case 2694:
case 1616:
case 1433:
case 3621:
case 3269:
case 3214:
case 921:
case 3086:
case 2393:
case 78:
case 2139:
case 544:
case 1831:
case 2284:
case 3907:
case 2176:
case 2998:
case 2016:
case 878:
case 3605:
case 227:
case 1094:
case 1542:
case 3977:
case 3860:
case 2106:
case 2432:
case 1111:
case 1001:
case 1976:
case 893:
case 2297:
case 3280:
case 3731:
case 3245:
case 1087:
case 1939:
case 771:
case 264:
case 1025:
case 399:
case 509:
case 2819:
case 2426:
case 3132:
case 1477:
case 1407:
case 2262:
case 3915:
case 2671:
case 3617:
case 2625:
case 1481:
case 1712:
case 1367:
case 4086:
case 2687:
case 322:
case 285:
case 2234:
case 1776:
case 873:
case 916:
case 1706:
case 3164:
case 3022:
case 1654:
case 3514:
case 3036:
case 1960:
case 2320:
case 1877:
case 951:
case 3395:
case 1807:
case 1739:
case 3715:
case 1113:
case 1353:
case 315:
case 331:
case 3256:
case 2464:
case 2419:
case 2826:
case 1003:
case 724:
case 166:
case 2304:
case 2541:
case 2785:
case 2832:
case 1135:
case 2054:
case 13:
case 1912:
case 2727:
case 3410:
case 3582:
case 1670:
case 2162:
case 2757:
case 667:
case 1865:
case 2368:
case 2408:
case 1046:
case 3497:
case 2480:
case 2512:
case 1323:
case 2963:
case 64:
case 2445:
case 4074:
case 2856:
case 1624:
case 1211:
case 190:
case 2350:
case 447:
case 1298:
case 2088:
case 3834:
case 983:
case 46:
case 3108:
case 3302:
case 3180:
case 573:
case 2646:
case 242:
case 51:
case 4047:
case 2761:
case 1213:
case 2655:
case 2957:
case 1728:
case 3316:
case 282:
case 325:
case 2699:
case 1235:
case 1666:
case 3949:
case 1585:
case 3093:
case 654:
case 1741:
case 480:
case 2386:
case 2763:
case 2576:
case 3897:
case 1784:
case 2845:
case 68:
case 1348:
case 82:
case 170:
case 2456:
case 926:
case 3796:
case 3810:
case 303:
case 2961:
case 2066:
case 1099:
case 2289:
case 1465:
case 387:
case 4093:
case 2260:
case 2869:
case 425:
case 844:
case 3651:
case 671:
case 1511:
case 3692:
case 2038:
case 3443:
case 3828:
case 2212:
case 1762:
case 1157:
case 1317:
case 911:
case 865:
case 935:
case 3441:
case 3169:
case 562:
case 1997:
case 2239:
case 1695:
case 3004:
case 900:
case 2830:
case 1734:
case 85:
case 3428:
case 3843:
case 3564:
case 2206:
case 956:
case 210:
case 1659:
case 1496:
case 884:
case 3047:
case 2141:
case 2469:
case 4018:
case 1163:
case 2336:
case 1227:
case 3765:
case 1962:
case 2379:
case 2322:
case 2128:
case 2059:
case 1513:
case 340:
case 1849:
case 161:
case 2513:
case 1322:
case 1379:
case 3215:
case 2962:
case 3756:
case 261:
case 846:
case 3583:
case 392:
case 2240:
case 830:
case 1141:
case 1414:
case 502:
case 2496:
case 2285:
case 805:
case 368:
case 3674:
case 2163:
case 1336:
case 837:
case 967:
case 683:
case 1184:
case 1276:
case 823:
case 858:
case 117:
case 1830:
case 1742:
case 732:
case 110:
case 3053:
case 1206:
case 3196:
case 3978:
case 59:
case 3945:
case 2695:
case 1239:
case 3980:
case 1589:
case 794:
case 954:
case 3092:
case 3863:
case 2317:
case 2157:
case 3051:
case 1430:
case 3461:
case 2390:
case 2511:
case 2710:
case 1814:
case 1038:
case 3507:
case 3457:
case 2598:
case 2934:
case 3745:
case 3581:
case 3780:
case 3231:
case 1143:
case 334:
case 513:
case 721:
case 626:
case 3067:
case 2321:
case 1961:
case 3714:
case 472:
case 971:
case 2465:
case 1289:
case 2099:
case 1134:
case 277:
case 1808:
case 2305:
case 1880:
case 1576:
case 853:
case 1878:
case 4092:
case 2055:
case 3533:
case 4067:
case 434:
case 2666:
case 2235:
case 363:
case 2527:
case 1655:
case 3442:
case 3394:
case 869:
case 1197:
case 3531:
case 3842:
case 1761:
case 656:
case 1646:
case 3969:
case 607:
case 1110:
case 1350:
case 290:
case 716:
case 1088:
case 1000:
case 600:
case 2298:
case 648:
case 1963:
case 1512:
case 2046:
case 1856:
case 2600:
case 4053:
case 2688:
case 1368:
case 1024:
case 541:
case 1853:
case 1525:
case 2326:
case 1587:
case 381:
case 2043:
case 1237:
case 1501:
case 1344:
case 2332:
case 1451:
case 2804:
case 1788:
case 2874:
case 2955:
case 1571:
case 2657:
case 288:
case 1467:
case 2202:
case 47:
case 1643:
case 413:
case 1381:
case 3859:
case 2272:
case 3250:
case 2820:
case 1377:
case 2847:
case 2799:
case 2420:
case 1766:
case 3104:
case 256:
case 1641:
case 318:
case 3536:
case 3069:
case 901:
case 3495:
case 3286:
case 2663:
case 3174:
case 2755:
case 1867:
case 1970:
case 697:
case 690:
case 211:
case 2084:
case 1294:
case 207:
case 3459:
case 3696:
case 3120:
case 4008:
case 2404:
case 2195:
case 3389:
case 4078:
case 2041:
case 14:
case 1453:
case 1684:
case 1924:
case 2364:
case 2159:
case 341:
case 1573:
case 1610:
case 3751:
case 2062:
case 3550:
case 766:
case 3488:
case 1959:
case 3400:
case 3792:
case 2893:
case 592:
case 1331:
case 418:
case 2452:
case 4069:
case 302:
case 2502:
case 124:
case 2529:
case 895:
case 3866:
case 441:
case 3424:
case 2188:
case 942:
case 2382:
case 2100:
case 1662:
case 1271:
case 283:
case 50:
case 3767:
case 1225:
case 3312:
case 3078:
case 3045:
case 2642:
case 1634:
case 1203:
case 1273:
case 3951:
case 1759:
case 982:
case 3466:
case 4030:
case 875:
case 1795:
case 243:
case 3279:
case 3222:
case 2516:
case 3209:
case 1594:
case 1042:
case 171:
case 1938:
case 819:
case 3800:
case 2166:
case 3967:
case 534:
case 3236:
case 3665:
case 2493:
case 970:
case 2199:
case 587:
case 580:
case 1493:
case 378:
case 3327:
case 2155:
case 1891:
case 3656:
case 2938:
case 2042:
case 3521:
case 239:
case 3065:
case 3499:
case 1254:
case 143:
case 3455:
case 1642:
case 2759:
case 785:
case 3846:
case 398:
case 3974:
case 2225:
case 3855:
case 3290:
case 362:
case 2287:
case 990:
case 2537:
case 1097:
case 745:
case 291:
case 2738:
case 1100:
case 1188:
case 706:
case 183:
case 2271:
case 617:
case 1452:
case 2995:
case 3680:
case 3947:
case 3608:
case 2146:
case 3678:
case 1491:
case 1529:
case 224:
case 56:
case 3920:
case 2959:
case 1124:
case 2610:
case 738:
case 1893:
case 267:
case 3205:
case 2453:
case 1028:
case 1319:
case 2924:
case 1554:
case 961:
case 2851:
case 24:
case 512:
case 3793:
case 148:
case 1474:
case 498:
case 1195:
case 2628:
case 3153:
case 107:
case 2988:
case 1216:
case 1084:
case 111:
case 879:
case 2766:
case 1799:
case 1663:
case 3918:
case 3952:
case 3096:
case 3151:
case 682:
case 2377:
case 3398:
case 525:
case 1847:
case 3993:
case 2643:
case 8:
case 3630:
case 3049:
case 2467:
case 478:
case 254:
case 1661:
case 1746:
case 2700:
case 1804:
case 2451:
case 1332:
case 1138:
case 899:
case 2501:
case 188:
case 1657:
case 2571:
case 2770:
case 2492:
case 2061:
case 3752:
case 3718:
case 393:
case 2853:
case 503:
case 3223:
case 2237:
case 3590:
case 2587:
case 1999:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757700002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,];
var gg_b = "1757700002/";

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
