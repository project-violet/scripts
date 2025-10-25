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
case 219:
case 639:
case 1662:
case 3860:
case 2221:
case 3542:
case 3181:
case 995:
case 1980:
case 1460:
case 1153:
case 223:
case 3704:
case 1214:
case 528:
case 209:
case 1610:
case 1273:
case 2064:
case 1156:
case 1053:
case 1412:
case 1898:
case 2552:
case 643:
case 3289:
case 1792:
case 2129:
case 1570:
case 2807:
case 1968:
case 3850:
case 2670:
case 4054:
case 2213:
case 4037:
case 2137:
case 1370:
case 1652:
case 3135:
case 3409:
case 2472:
case 948:
case 1139:
case 1488:
case 1405:
case 1166:
case 2054:
case 2037:
case 540:
case 1231:
case 659:
case 122:
case 3342:
case 1720:
case 2274:
case 2562:
case 2262:
case 3917:
case 3749:
case 152:
case 471:
case 1621:
case 629:
case 3198:
case 3827:
case 1060:
case 2843:
case 2676:
case 163:
case 1723:
case 3856:
case 2825:
case 1745:
case 3238:
case 613:
case 2429:
case 233:
case 1373:
case 1385:
case 2597:
case 2210:
case 1308:
case 1734:
case 3595:
case 3687:
case 2608:
case 271:
case 3098:
case 3481:
case 1726:
case 2673:
case 2846:
case 3389:
case 1160:
case 2771:
case 1453:
case 603:
case 194:
case 433:
case 1270:
case 2941:
case 2724:
case 3589:
case 1844:
case 3891:
case 1466:
case 2252:
case 510:
case 2699:
case 3009:
case 1613:
case 597:
case 1711:
case 3395:
case 462:
case 768:
case 1508:
case 1986:
case 860:
case 1697:
case 1005:
case 1088:
case 1491:
case 3444:
case 3863:
case 558:
case 1983:
case 253:
case 500:
case 2902:
case 2437:
case 782:
case 3435:
case 3109:
case 2631:
case 1616:
case 2172:
case 3242:
case 4072:
case 2521:
case 1835:
case 1674:
case 1150:
case 3951:
case 791:
case 1188:
case 132:
case 1105:
case 1749:
case 2829:
case 295:
case 420:
case 919:
case 1198:
case 822:
case 2425:
case 3723:
case 559:
case 2747:
case 1827:
case 3531:
case 3314:
case 489:
case 3308:
case 3373:
case 1595:
case 2387:
case 3734:
case 2700:
case 3757:
case 909:
case 1687:
case 1853:
case 1481:
case 1098:
case 1961:
case 3453:
case 3160:
case 3599:
case 2864:
case 3881:
case 289:
case 2140:
case 4040:
case 3270:
case 2994:
case 3466:
case 1891:
case 296:
case 377:
case 1009:
case 2587:
case 1395:
case 248:
case 3508:
case 2007:
case 3697:
case 67:
case 3986:
case 543:
case 1444:
case 3491:
case 89:
case 6:
case 3514:
case 539:
case 1839:
case 2765:
case 448:
case 742:
case 3835:
case 2107:
case 3105:
case 332:
case 658:
case 3662:
case 2528:
case 832:
case 2043:
case 1860:
case 430:
case 1542:
case 3460:
case 1338:
case 4046:
case 2638:
case 683:
case 160:
case 3610:
case 971:
case 39:
case 3127:
case 3285:
case 949:
case 2143:
case 610:
case 3208:
case 1498:
case 2125:
case 3412:
case 2948:
case 3053:
case 1289:
case 1850:
case 2703:
case 1805:
case 894:
case 2872:
case 3299:
case 1409:
case 1782:
case 1135:
case 3652:
case 208:
case 418:
case 712:
case 3809:
case 503:
case 2932:
case 3405:
case 3091:
case 2601:
case 1044:
case 2440:
case 3166:
case 863:
case 1035:
case 408:
case 852:
case 2642:
case 322:
case 450:
case 962:
case 3063:
case 513:
case 1342:
case 3191:
case 3039:
case 1628:
case 1144:
case 1990:
case 2706:
case 3116:
case 1852:
case 1307:
case 839:
case 2607:
case 3174:
case 3097:
case 3650:
case 2870:
case 1758:
case 3605:
case 2095:
case 2401:
case 3904:
case 1:
case 3013:
case 2930:
case 3452:
case 2442:
case 3074:
case 3197:
case 4095:
case 2640:
case 843:
case 1992:
case 3722:
case 1340:
case 303:
case 3229:
case 1540:
case 2438:
case 4089:
case 719:
case 3462:
case 3021:
case 3612:
case 1246:
case 522:
case 2089:
case 1810:
case 1507:
case 2398:
case 859:
case 329:
case 709:
case 3572:
case 1087:
case 969:
case 1920:
case 2715:
case 2344:
case 1813:
case 2142:
case 3564:
case 3272:
case 3717:
case 3497:
case 563:
case 491:
case 829:
case 2495:
case 1207:
case 880:
case 3793:
case 552:
case 1945:
case 1923:
case 3666:
case 813:
case 2209:
case 788:
case 1546:
case 3052:
case 1543:
case 3416:
case 468:
case 594:
case 1525:
case 2042:
case 1926:
case 902:
case 3474:
case 3796:
case 4001:
case 3639:
case 1028:
case 2101:
case 2335:
case 3761:
case 1240:
case 1816:
case 3354:
case 803:
case 174:
case 282:
case 2959:
case 753:
case 2924:
case 2741:
case 197:
case 3554:
case 1325:
case 110:
case 3110:
case 2643:
case 183:
case 660:
case 3656:
case 1786:
case 3653:
case 532:
case 2885:
case 2646:
case 1346:
case 2489:
case 2138:
case 4038:
case 100:
case 3364:
case 3779:
case 749:
case 3010:
case 3162:
case 2298:
case 158:
case 1487:
case 771:
case 3751:
case 1681:
case 339:
case 2391:
case 275:
case 1949:
case 442:
case 748:
case 1272:
case 3813:
case 2288:
case 1497:
case 2205:
case 2250:
case 1691:
case 3644:
case 3897:
case 3945:
case 2719:
case 2947:
case 1666:
case 2895:
case 2553:
case 2366:
case 2499:
case 1413:
case 1052:
case 1416:
case 2339:
case 2556:
case 3525:
case 1474:
case 3874:
case 4070:
case 1529:
case 1761:
case 2637:
case 3816:
case 3635:
case 1537:
case 2476:
case 2260:
case 2794:
case 3821:
case 310:
case 469:
case 1062:
case 3343:
case 87:
case 1421:
case 8:
case 1653:
case 2212:
case 476:
case 3346:
case 2566:
case 1779:
case 1364:
case 1010:
case 2408:
case 2664:
case 139:
case 828:
case 2485:
case 2473:
case 2305:
case 858:
case 212:
case 632:
case 328:
case 3307:
case 2350:
case 708:
case 1097:
case 1174:
case 2291:
case 800:
case 1688:
case 3758:
case 1372:
case 2801:
case 2512:
case 2131:
case 1013:
case 3609:
case 37:
case 991:
case 202:
case 1016:
case 1918:
case 2239:
case 810:
case 1197:
case 3428:
case 1254:
case 982:
case 560:
case 2560:
case 2031:
case 3340:
case 1722:
case 1113:
case 2076:
case 103:
case 1660:
case 3540:
case 1982:
case 3862:
case 3225:
case 2108:
case 4073:
case 2173:
case 2185:
case 2227:
case 3246:
case 1612:
case 2253:
case 180:
case 3810:
case 3507:
case 2550:
case 2588:
case 838:
case 1410:
case 1264:
case 3087:
case 730:
case 1572:
case 3920:
case 2085:
case 2008:
case 716:
case 1202:
case 3818:
case 3145:
case 2275:
case 3123:
case 2147:
case 3026:
case 45:
case 2000:
case 3057:
case 1149:
case 1892:
case 835:
case 2558:
case 58:
case 1418:
case 706:
case 1404:
case 1668:
case 3045:
case 966:
case 2970:
case 3126:
case 2155:
case 1049:
case 2830:
case 3332:
case 23:
case 3420:
case 390:
case 1910:
case 3348:
case 2065:
case 1820:
case 2740:
case 3705:
case 3788:
case 60:
case 1215:
case 2380:
case 3882:
case 3011:
case 1709:
case 4065:
case 644:
case 2403:
case 2375:
case 1834:
case 2383:
case 3092:
case 2602:
case 3519:
case 3377:
case 584:
case 281:
case 2746:
case 1683:
case 757:
case 1302:
case 3651:
case 2455:
case 1781:
case 2400:
case 761:
case 1515:
case 2871:
case 355:
case 1916:
case 3434:
case 3679:
case 746:
case 1584:
case 3192:
case 551:
case 1341:
case 2999:
case 3445:
case 2268:
case 3756:
case 890:
case 3232:
case 2743:
case 492:
case 1449:
case 911:
case 1118:
case 2006:
case 3696:
case 3739:
case 3987:
case 3020:
case 1867:
case 2908:
case 2586:
case 772:
case 478:
case 2869:
case 1182:
case 1735:
case 2833:
case 234:
case 3661:
case 2684:
case 2465:
case 4003:
case 3467:
case 356:
case 3248:
case 4078:
case 614:
case 3791:
case 2280:
case 1744:
case 1921:
case 573:
case 3120:
case 64:
case 745:
case 3617:
case 2615:
case 278:
case 1082:
case 3319:
case 1811:
case 2583:
case 3766:
case 737:
case 604:
case 2078:
case 2459:
case 1092:
case 50:
case 4030:
case 466:
case 2855:
case 2677:
case 3302:
case 1753:
case 2471:
case 2290:
case 2764:
case 3974:
case 1426:
case 1651:
case 155:
case 1434:
case 1679:
case 544:
case 279:
case 3018:
case 2729:
case 2561:
case 1849:
case 3913:
case 266:
case 3341:
case 2694:
case 3004:
case 1423:
case 3845:
case 3686:
case 1756:
case 3997:
case 2995:
case 86:
case 1232:
case 2847:
case 786:
case 2596:
case 3449:
case 621:
case 3118:
case 95:
case 1696:
case 2865:
case 1763:
case 2469:
case 93:
case 2396:
case 799:
case 465:
case 3735:
case 3182:
case 3384:
case 2361:
case 2989:
case 2737:
case 156:
case 3744:
case 2579:
case 2317:
case 2551:
case 265:
case 1577:
case 1319:
case 785:
case 2393:
case 3082:
case 3811:
case 393:
case 1766:
case 1693:
case 2059:
case 54:
case 673:
case 1145:
case 2071:
case 1026:
case 1690:
case 2251:
case 1928:
case 3892:
case 2390:
case 3149:
case 504:
case 2159:
case 4059:
case 126:
case 2430:
case 3668:
case 3404:
case 1294:
case 1023:
case 4071:
case 3241:
case 864:
case 2171:
case 2632:
case 211:
case 1804:
case 401:
case 1126:
case 3049:
case 1134:
case 92:
case 2296:
case 2069:
case 1111:
case 4036:
case 117:
case 570:
case 667:
case 2806:
case 1067:
case 2322:
case 2261:
case 2878:
case 3680:
case 2169:
case 125:
case 3215:
case 3962:
case 2590:
case 1011:
case 2036:
case 1167:
case 724:
case 18:
case 4019:
case 2119:
case 1530:
case 1096:
case 3728:
case 73:
case 2320:
case 3822:
case 34:
case 3306:
case 1752:
case 227:
case 1858:
case 2592:
case 1161:
case 1224:
case 985:
case 2019:
case 1093:
case 3458:
case 1196:
case 2211:
case 415:
case 1490:
case 2226:
case 2234:
case 1259:
case 3578:
case 3503:
case 2194:
case 2940:
case 4094:
case 3083:
case 2907:
case 3950:
case 1868:
case 3086:
case 3905:
case 1762:
case 2630:
case 416:
case 3247:
case 2094:
case 2177:
case 3468:
case 844:
case 2245:
case 1022:
case 2731:
case 3365:
case 607:
case 3896:
case 3953:
case 1461:
case 437:
case 1667:
case 1333:
case 3158:
case 1496:
case 625:
case 1981:
case 1774:
case 1369:
case 3180:
case 2669:
case 72:
case 2633:
case 1122:
case 1713:
case 3817:
case 2815:
case 1571:
case 3203:
case 2624:
case 2148:
case 1559:
case 4048:
case 3278:
case 617:
case 1336:
case 1493:
case 2943:
case 870:
case 3893:
case 3080:
case 778:
case 151:
case 31:
case 1611:
case 3500:
case 2132:
case 1451:
case 3963:
case 3939:
case 1883:
case 1090:
case 1875:
case 2334:
case 2357:
case 498:
case 2802:
case 792:
case 3355:
case 1371:
case 2659:
case 1524:
case 2292:
case 1935:
case 3879:
case 446:
case 3851:
case 2477:
case 814:
case 3483:
case 2671:
case 461:
case 593:
case 3486:
case 2841:
case 1569:
case 1533:
case 84:
case 3991:
case 298:
case 3649:
case 3347:
case 587:
case 2345:
case 2567:
case 2714:
case 457:
case 2494:
case 3068:
case 754:
case 1645:
case 1623:
case 3022:
case 1547:
case 1896:
case 555:
case 3667:
case 3496:
case 1158:
case 1861:
case 1180:
case 3369:
case 915:
case 3981:
case 2964:
case 1206:
case 384:
case 3716:
case 1817:
case 3713:
case 3122:
case 3324:
case 2929:
case 3571:
case 285:
case 3559:
case 1203:
case 927:
case 3336:
case 2795:
case 1058:
case 3797:
case 1956:
case 2819:
case 905:
case 66:
case 351:
case 1555:
case 765:
case 2415:
case 1500:
case 3611:
case 1963:
case 3451:
case 3626:
case 2655:
case 2600:
case 741:
case 1939:
case 1787:
case 779:
case 1300:
case 2218:
case 331:
case 3479:
case 2937:
case 3524:
case 1879:
case 3935:
case 1851:
case 3536:
case 916:
case 3359:
case 1475:
case 3721:
case 2894:
case 1486:
case 1991:
case 3944:
case 3533:
case 3190:
case 1649:
case 547:
case 286:
case 766:
case 1347:
case 1565:
case 3645:
case 2441:
case 2204:
case 88:
case 2647:
case 693:
case 2504:
case 873:
case 38:
case 3061:
case 2084:
case 2848:
case 2606:
case 687:
case 3096:
case 3998:
case 972:
case 3620:
case 3233:
case 2742:
case 14:
case 1682:
case 1303:
case 114:
case 937:
case 1960:
case 4084:
case 2678:
case 3093:
case 2382:
case 3880:
case 2603:
case 2701:
case 2015:
case 2318:
case 3051:
case 321:
case 3490:
case 961:
case 1618:
case 170:
case 590:
case 2002:
case 1503:
case 1578:
case 3259:
case 3271:
case 867:
case 2141:
case 1075:
case 1083:
case 1086:
case 1950:
case 1905:
case 507:
case 2972:
case 2249:
case 2738:
case 525:
case 3909:
case 2304:
case 2832:
case 2041:
case 3330:
case 1468:
case 946:
case 1175:
case 808:
case 3700:
case 2757:
case 452:
case 1846:
case 758:
case 1685:
case 3755:
case 2385:
case 1597:
case 2373:
case 700:
case 1984:
case 4060:
case 591:
case 1771:
case 2012:
case 1513:
case 3864:
case 252:
case 3443:
case 2621:
case 1574:
case 1915:
case 1614:
case 494:
case 2723:
case 1676:
case 3919:
case 2745:
case 1902:
case 1437:
case 2576:
case 153:
case 477:
case 1631:
case 774:
case 2767:
case 3977:
case 2331:
case 3040:
case 3765:
case 612:
case 4050:
case 2674:
case 3107:
case 1316:
case 3854:
case 2105:
case 232:
case 2188:
case 3837:
case 2616:
case 2835:
case 396:
case 1736:
case 1699:
case 2399:
case 1313:
case 3140:
case 3994:
case 2466:
case 2844:
case 738:
case 2050:
case 3007:
case 602:
case 3695:
case 2585:
case 2573:
case 3143:
case 848:
case 4027:
case 1064:
case 2156:
case 330:
case 4056:
case 3125:
case 2610:
case 740:
case 2570:
case 2412:
case 2053:
case 1552:
case 2898:
case 669:
case 1221:
case 3043:
case 2958:
case 2027:
case 1164:
case 2056:
case 119:
case 3528:
case 49:
case 1029:
case 2214:
case 2276:
case 3146:
case 2166:
case 1054:
case 1840:
case 2720:
case 1562:
case 1274:
case 3706:
case 4091:
case 3328:
case 3642:
case 1216:
case 2370:
case 1137:
case 2299:
case 2652:
case 1352:
case 2968:
case 1807:
case 3703:
case 1670:
case 642:
case 3932:
case 3407:
case 2450:
case 4063:
case 1297:
case 4039:
case 2405:
case 820:
case 2091:
case 2488:
case 1510:
case 422:
case 3310:
case 2081:
case 130:
case 3064:
case 2718:
case 309:
case 2922:
case 502:
case 3129:
case 780:
case 1948:
case 3552:
case 713:
case 2860:
case 3221:
case 1043:
case 862:
case 2181:
case 3164:
case 4081:
case 952:
case 1528:
case 3730:
case 963:
case 2338:
case 853:
case 1146:
case 323:
case 2035:
case 3840:
case 3274:
case 2628:
case 2144:
case 932:
case 1642:
case 3137:
case 4035:
case 1703:
case 1778:
case 3807:
case 3352:
case 2805:
case 2888:
case 2295:
case 1407:
case 150:
case 849:
case 3510:
case 1601:
case 691:
case 2301:
case 2687:
case 1700:
case 99:
case 2481:
case 3464:
case 1755:
case 3685:
case 3846:
case 3673:
case 3210:
case 3759:
case 1689:
case 2961:
case 3984:
case 1446:
case 3513:
case 1443:
case 3262:
case 195:
case 2749:
case 2238:
case 333:
case 3676:
case 743:
case 2993:
case 353:
case 3437:
case 2435:
case 4009:
case 3631:
case 823:
case 1040:
case 2863:
case 1977:
case 1765:
case 3454:
case 2839:
case 1107:
case 819:
case 1837:
case 3733:
case 2242:
case 3252:
case 2009:
case 3736:
case 3941:
case 1140:
case 2589:
case 759:
case 2444:
case 576:
case 2395:
case 3072:
case 732:
case 3955:
case 191:
case 608:
case 2028:
case 650:
case 2525:
case 549:
case 182:
case 2816:
case 1335:
case 3654:
case 3170:
case 1971:
case 2240:
case 3288:
case 4028:
case 2207:
case 3250:
case 1495:
case 238:
case 2128:
case 3391:
case 168:
case 1142:
case 2813:
case 474:
case 777:
case 2945:
case 3719:
case 794:
case 497:
case 3566:
case 1138:
case 1702:
case 3965:
case 2783:
case 2775:
case 1808:
case 3212:
case 2967:
case 2487:
case 483:
case 1298:
case 3408:
case 3664:
case 3485:
case 3473:
case 1544:
case 1933:
case 1936:
case 376:
case 1924:
case 1741:
case 1643:
case 1876:
case 283:
case 458:
case 2786:
case 210:
case 1814:
case 2325:
case 400:
case 3327:
case 630:
case 2428:
case 3263:
case 27:
case 302:
case 722:
case 428:
case 2992:
case 3560:
case 2340:
case 3842:
case 876:
case 1640:
case 696:
case 869:
case 3291:
case 1401:
case 1870:
case 3305:
case 228:
case 1598:
case 2307:
case 3350:
case 519:
case 3512:
case 1930:
case 3099:
case 3266:
case 3801:
case 3114:
case 3312:
case 1089:
case 2810:
case 2246:
case 3176:
case 1509:
case 1281:
case 2087:
case 2920:
case 3008:
case 240:
case 79:
case 2507:
case 3550:
case 939:
case 3014:
case 2540:
case 943:
case 1189:
case 1438:
case 3903:
case 2768:
case 2225:
case 3256:
case 4087:
case 620:
case 3173:
case 3227:
case 440:
case 2197:
case 2074:
case 2016:
case 102:
case 3235:
case 4013:
case 688:
case 3640:
case 1291:
case 662:
case 4074:
case 2097:
case 3607:
case 2174:
case 2650:
case 2372:
case 3870:
case 3095:
case 2688:
case 112:
case 1388:
case 1305:
case 1672:
case 938:
case 3598:
case 1512:
case 1099:
case 1266:
case 653:
case 3309:
case 1801:
case 1470:
case 1312:
case 1176:
case 213:
case 633:
case 2572:
case 900:
case 4021:
case 1550:
case 958:
case 229:
case 2982:
case 2229:
case 508:
case 1360:
case 997:
case 2660:
case 882:
case 203:
case 1903:
case 649:
case 1256:
case 910:
case 1227:
case 1173:
case 2021:
case 983:
case 429:
case 2462:
case 671:
case 1838:
case 2663:
case 2474:
case 459:
case 1900:
case 2796:
case 2639:
case 3101:
case 142:
case 1363:
case 3042:
case 1637:
case 3959:
case 520:
case 2152:
case 3335:
case 2761:
case 2529:
case 3784:
case 1654:
case 2337:
case 1205:
case 259:
case 3001:
case 2691:
case 3715:
case 368:
case 1391:
case 3344:
case 3899:
case 3142:
case 3209:
case 1553:
case 2052:
case 2413:
case 2793:
case 1719:
case 1947:
case 3138:
case 1353:
case 2653:
case 443:
case 3808:
case 3885:
case 3646:
case 3873:
case 619:
case 940:
case 1485:
case 2751:
case 239:
case 2364:
case 4062:
case 1889:
case 3544:
case 548:
case 2554:
case 2329:
case 3741:
case 1260:
case 3876:
case 2421:
case 3625:
case 1563:
case 3814:
case 4010:
case 596:
case 1641:
case 2004:
case 926:
case 773:
case 154:
case 1268:
case 2584:
case 3561:
case 2913:
case 366:
case 2118:
case 4018:
case 1386:
case 2997:
case 3995:
case 3847:
case 4004:
case 3677:
case 181:
case 3855:
case 2675:
case 2857:
case 3800:
case 1383:
case 1602:
case 1375:
case 2916:
case 1859:
case 731:
case 192:
case 379:
case 3290:
case 2974:
case 3379:
case 3517:
case 2515:
case 1871:
case 1836:
case 801:
case 546:
case 365:
case 1106:
case 2315:
case 3317:
case 907:
case 2502:
case 3424:
case 293:
case 1078:
case 3393:
case 767:
case 1583:
case 1575:
case 3469:
case 12:
case 811:
case 487:
case 784:
case 1586:
case 3396:
case 990:
case 1006:
case 1973:
case 1985:
case 1465:
case 3754:
case 493:
case 561:
case 1103:
case 1178:
case 4082:
case 2182:
case 3222:
case 3361:
case 3522:
case 2668:
case 2241:
case 1970:
case 936:
case 3430:
case 1368:
case 2952:
case 505:
case 2049:
case 3632:
case 311:
case 1286:
case 1100:
case 1283:
case 515:
case 2202:
case 4049:
case 2892:
case 2418:
case 1055:
case 2798:
case 301:
case 686:
case 1000:
case 3251:
case 935:
case 1380:
case 841:
case 2215:
case 2962:
case 3217:
case 3590:
case 3133:
case 699:
case 2658:
case 3878:
case 1707:
case 3803:
case 879:
case 1165:
case 1403:
case 1478:
case 3036:
case 2709:
case 3069:
case 516:
case 26:
case 2910:
case 1406:
case 13:
case 3806:
case 3322:
case 2284:
case 866:
case 124:
case 1568:
case 3136:
case 78:
case 1522:
case 3047:
case 1171:
case 2294:
case 2548:
case 226:
case 834:
case 657:
case 1159:
case 1430:
case 4034:
case 2134:
case 2332:
case 3830:
case 2804:
case 3155:
case 35:
case 2157:
case 4057:
case 3283:
case 646:
case 426:
case 2034:
case 1279:
case 3580:
case 101:
case 2026:
case 1251:
case 878:
case 2690:
case 2057:
case 225:
case 2882:
case 490:
case 3380:
case 1772:
case 2705:
case 892:
case 2788:
case 987:
case 1803:
case 2750:
case 3707:
case 1878:
case 2219:
case 993:
case 1036:
case 2532:
case 2111:
case 2420:
case 3065:
case 1806:
case 1648:
case 1261:
case 1322:
case 2067:
case 1136:
case 3568:
case 407:
case 2348:
case 637:
case 2445:
case 1694:
case 236:
case 3268:
case 2423:
case 3447:
case 1729:
case 1030:
case 166:
case 83:
case 1596:
case 1847:
case 2232:
case 1995:
case 1855:
case 1677:
case 3746:
case 436:
case 2753:
case 1800:
case 606:
case 599:
case 1593:
case 2519:
case 392:
case 3859:
case 1351:
case 1517:
case 1379:
case 2426:
case 1290:
case 141:
case 1764:
case 2457:
case 3400:
case 255:
case 3871:
case 2617:
case 378:
case 3280:
case 235:
case 615:
case 1317:
case 1579:
case 3976:
case 2693:
case 456:
case 1436:
case 3914:
case 586:
case 70:
case 3586:
case 32:
case 1469:
case 1433:
case 85:
case 1396:
case 1865:
case 2739:
case 3973:
case 2020:
case 96:
case 3908:
case 3684:
case 2661:
case 3465:
case 1754:
case 2248:
case 3103:
case 3869:
case 2594:
case 744:
case 3833:
case 1148:
case 1419:
case 2493:
case 914:
case 2336:
case 137:
case 4022:
case 1636:
case 1799:
case 2122:
case 2324:
case 3929:
case 2571:
case 1815:
case 1526:
case 3415:
case 484:
case 2611:
case 1311:
case 1943:
case 3484:
case 3665:
case 904:
case 2667:
case 1946:
case 467:
case 764:
case 592:
case 1523:
case 451:
case 172:
case 1633:
case 2716:
case 581:
case 1220:
case 2369:
case 2981:
case 198:
case 431:
case 3894:
case 3349:
case 2886:
case 1494:
case 3204:
case 273:
case 1776:
case 3647:
case 1323:
case 578:
case 146:
case 1714:
case 1345:
case 1802:
case 611:
case 2634:
case 1785:
case 1773:
case 3877:
case 161:
case 534:
case 1708:
case 2875:
case 2657:
case 1334:
case 3600:
case 2883:
case 2090:
case 970:
case 157:
case 2536:
case 2359:
case 2524:
case 3937:
case 1659:
case 2371:
case 2935:
case 1292:
case 3184:
case 2161:
case 1592:
case 3678:
case 3603:
case 1019:
case 55:
case 2224:
case 2196:
case 3701:
case 3518:
case 91:
case 1267:
case 3084:
case 2061:
case 2530:
case 3504:
case 2422:
case 3742:
case 2117:
case 76:
case 115:
case 2269:
case 2998:
case 665:
case 3972:
case 2762:
case 4079:
case 899:
case 2151:
case 2868:
case 1432:
case 1907:
case 679:
case 421:
case 2330:
case 3832:
case 1223:
case 1094:
case 1245:
case 3102:
case 2909:
case 3304:
case 524:
case 1257:
case 1940:
case 3582:
case 1194:
case 1392:
case 885:
case 3002:
case 116:
case 2259:
case 2960:
case 3770:
case 967:
case 1184:
case 1603:
case 1678:
case 2378:
case 857:
case 634:
case 2303:
case 214:
case 327:
case 861:
case 305:
case 1015:
case 725:
case 62:
case 951:
case 2458:
case 2480:
case 501:
case 3448:
case 1084:
case 3267:
case 2265:
case 3119:
case 717:
case 2822:
case 1742:
case 3320:
case 2306:
case 1115:
case 1606:
case 898:
case 2728:
case 1848:
case 984:
case 2506:
case 470:
case 3520:
case 1249:
case 3907:
case 692:
case 872:
case 2905:
case 3177:
case 3094:
case 1041:
case 1832:
case 2183:
case 2175:
case 3245:
case 1738:
case 3630:
case 973:
case 2618:
case 3234:
case 2186:
case 3257:
case 1318:
case 4086:
case 3226:
case 3077:
case 1141:
case 1582:
case 3940:
case 3392:
case 2890:
case 2075:
case 1002:
case 2578:
case 837:
case 2503:
case 2203:
case 624:
case 2278:
case 337:
case 2817:
case 3815:
case 185:
case 1929:
case 444:
case 747:
case 1282:
case 566:
case 1795:
case 2058:
case 3943:
case 2927:
case 3534:
case 735:
case 2080:
case 1819:
case 2893:
case 2956:
case 756:
case 2896:
case 1665:
case 806:
case 98:
case 3731:
case 244:
case 3523:
case 2365:
case 2547:
case 41:
case 20:
case 372:
case 1549:
case 2158:
case 2206:
case 2180:
case 398:
case 2649:
case 1894:
case 3032:
case 1349:
case 815:
case 1441:
case 1647:
case 736:
case 2966:
case 3323:
case 3345:
case 565:
case 3567:
case 3714:
case 3357:
case 3802:
case 1218:
case 3326:
case 65:
case 3708:
case 361:
case 1877:
case 755:
case 3773:
case 2963:
case 805:
case 1600:
case 2851:
case 357:
case 3477:
case 2483:
case 827:
case 3671:
case 3659:
case 1937:
case 1789:
case 1402:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761393602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,];
var gg_b = "1761393602/";

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
