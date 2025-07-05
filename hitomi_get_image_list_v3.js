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
case 966:
case 343:
case 729:
case 1976:
case 1739:
case 3709:
case 2121:
case 2617:
case 644:
case 3905:
case 3127:
case 2835:
case 3777:
case 1418:
case 2544:
case 2876:
case 1262:
case 385:
case 2978:
case 1168:
case 3597:
case 3820:
case 2553:
case 900:
case 1337:
case 648:
case 4:
case 2416:
case 1547:
case 2301:
case 3214:
case 2048:
case 156:
case 4039:
case 2259:
case 1878:
case 2576:
case 829:
case 355:
case 3994:
case 3748:
case 495:
case 1074:
case 2535:
case 3190:
case 3225:
case 3310:
case 1944:
case 1798:
case 2345:
case 2987:
case 1625:
case 3158:
case 2433:
case 1953:
case 1578:
case 3788:
case 2891:
case 2077:
case 3941:
case 2600:
case 3071:
case 2947:
case 2796:
case 2009:
case 3429:
case 296:
case 2853:
case 172:
case 2230:
case 1180:
case 1141:
case 1793:
case 3067:
case 603:
case 2317:
case 1482:
case 3362:
case 1856:
case 3153:
case 457:
case 3406:
case 2956:
case 3191:
case 3743:
case 1436:
case 753:
case 2204:
case 1524:
case 2061:
case 2719:
case 1990:
case 479:
case 3607:
case 1194:
case 308:
case 2915:
case 1442:
case 1279:
case 3940:
case 1958:
case 2601:
case 2438:
case 1028:
case 1815:
case 2890:
case 626:
case 1207:
case 4093:
case 3679:
case 3144:
case 1413:
case 3968:
case 487:
case 665:
case 2645:
case 416:
case 2369:
case 278:
case 2770:
case 2295:
case 1210:
case 522:
case 2054:
case 1764:
case 838:
case 2827:
case 441:
case 3135:
case 2590:
case 2499:
case 4064:
case 3726:
case 3176:
case 2300:
case 1515:
case 1352:
case 3866:
case 2973:
case 40:
case 274:
case 971:
case 1163:
case 3821:
case 2767:
case 1057:
case 1107:
case 2825:
case 616:
case 3694:
case 2018:
case 3681:
case 1488:
case 2969:
case 342:
case 2687:
case 200:
case 1644:
case 1729:
case 2324:
case 2131:
case 1281:
case 898:
case 1653:
case 3284:
case 88:
case 3450:
case 2514:
case 3291:
case 2852:
case 1022:
case 2647:
case 641:
case 1952:
case 3830:
case 1684:
case 1800:
case 3253:
case 1241:
case 266:
case 75:
case 657:
case 3605:
case 1635:
case 1263:
case 3276:
case 3911:
case 1460:
case 403:
case 2525:
case 2474:
case 530:
case 3663:
case 577:
case 512:
case 1390:
case 78:
case 3439:
case 2315:
case 426:
case 173:
case 2195:
case 3003:
case 2814:
case 2423:
case 2552:
case 861:
case 3114:
case 1426:
case 2159:
case 1845:
case 3668:
case 3910:
case 1461:
case 3381:
case 1344:
case 2387:
case 695:
case 2945:
case 1412:
case 2082:
case 2624:
case 3895:
case 1353:
case 3008:
case 34:
case 1162:
case 2537:
case 3713:
case 2985:
case 2042:
case 1391:
case 1872:
case 1111:
case 2789:
case 3089:
case 4006:
case 3742:
case 1454:
case 523:
case 3305:
case 1335:
case 915:
case 51:
case 1545:
case 3804:
case 367:
case 3680:
case 782:
case 560:
case 3363:
case 2708:
case 444:
case 1240:
case 1572:
case 1801:
case 4092:
case 978:
case 1937:
case 3907:
case 2457:
case 3125:
case 3290:
case 2837:
case 3640:
case 1706:
case 3979:
case 1443:
case 448:
case 831:
case 3066:
case 1780:
case 358:
case 112:
case 48:
case 3479:
case 1943:
case 3692:
case 969:
case 3951:
case 2401:
case 1857:
case 924:
case 573:
case 638:
case 2957:
case 3407:
case 1292:
case 1528:
case 2322:
case 354:
case 865:
case 494:
case 2102:
case 1983:
case 3819:
case 3606:
case 928:
case 1682:
case 1024:
case 1954:
case 1150:
case 4080:
case 1206:
case 333:
case 3236:
case 130:
case 3160:
case 1828:
case 1015:
case 3329:
case 2485:
case 3964:
case 1557:
case 1768:
case 388:
case 2249:
case 3870:
case 2928:
case 2058:
case 2333:
case 39:
case 4068:
case 765:
case 2583:
case 2826:
case 3177:
case 189:
case 2861:
case 3213:
case 3410:
case 2554:
case 299:
case 2812:
case 2171:
case 3519:
case 3867:
case 683:
case 3109:
case 1056:
case 1139:
case 384:
case 1613:
case 2766:
case 3392:
case 911:
case 2616:
case 2548:
case 1414:
case 106:
case 1586:
case 1342:
case 1909:
case 3735:
case 1375:
case 4005:
case 527:
case 835:
case 2720:
case 3306:
case 2170:
case 1618:
case 2860:
case 2588:
case 11:
case 4063:
case 664:
case 1546:
case 2655:
case 2417:
case 482:
case 363:
case 1874:
case 160:
case 3218:
case 2044:
case 4041:
case 2577:
case 3183:
case 2848:
case 2203:
case 1886:
case 691:
case 1078:
case 1452:
case 3802:
case 2509:
case 1229:
case 2400:
case 3950:
case 3020:
case 2399:
case 980:
case 848:
case 431:
case 1574:
case 1425:
case 3784:
case 1151:
case 3791:
case 3143:
case 2888:
case 2076:
case 2469:
case 392:
case 305:
case 2797:
case 3753:
case 1988:
case 3896:
case 844:
case 1193:
case 2037:
case 586:
case 3118:
case 1899:
case 619:
case 631:
case 2473:
case 2270:
case 3849:
case 2795:
case 2542:
case 8:
case 310:
case 3350:
case 1264:
case 2628:
case 3031:
case 517:
case 3261:
case 795:
case 3004:
case 702:
case 2575:
case 3226:
case 1612:
case 332:
case 2582:
case 2346:
case 1388:
case 1913:
case 2267:
case 3212:
case 1377:
case 1293:
case 4007:
case 381:
case 2842:
case 3549:
case 1458:
case 999:
case 2938:
case 7:
case 2415:
case 1085:
case 1490:
case 2704:
case 1599:
case 540:
case 1975:
case 429:
case 802:
case 895:
case 2219:
case 2165:
case 1129:
case 1779:
case 3589:
case 347:
case 1360:
case 3480:
case 3095:
case 2103:
case 3283:
case 2836:
case 1982:
case 1045:
case 2875:
case 676:
case 1707:
case 2513:
case 2014:
case 3803:
case 741:
case 1491:
case 3698:
case 879:
case 1106:
case 661:
case 2632:
case 3441:
case 3650:
case 70:
case 2686:
case 1298:
case 2933:
case 33:
case 2328:
case 1017:
case 2487:
case 1444:
case 1192:
case 239:
case 716:
case 857:
case 3481:
case 1688:
case 914:
case 1555:
case 3494:
case 3142:
case 122:
case 1326:
case 2189:
case 1239:
case 1343:
case 3030:
case 1000:
case 3351:
case 2916:
case 3393:
case 1816:
case 68:
case 3277:
case 2052:
case 2478:
case 2922:
case 2149:
case 4062:
case 280:
case 1918:
case 757:
case 3405:
case 1354:
case 2818:
case 1476:
case 4011:
case 2759:
case 190:
case 3714:
case 453:
case 393:
case 1062:
case 1246:
case 3108:
case 1138:
case 1696:
case 2288:
case 1367:
case 3487:
case 630:
case 3646:
case 557:
case 2481:
case 3296:
case 339:
case 1011:
case 3730:
case 350:
case 1700:
case 2142:
case 490:
case 963:
case 2929:
case 346:
case 2136:
case 4000:
case 579:
case 2248:
case 3014:
case 2364:
case 2175:
case 920:
case 677:
case 2441:
case 2650:
case 3328:
case 1903:
case 3202:
case 3674:
case 3818:
case 1199:
case 516:
case 2405:
case 3955:
case 3025:
case 1319:
case 293:
case 422:
case 145:
case 2260:
case 541:
case 2209:
case 2565:
case 2113:
case 2639:
case 50:
case 905:
case 1671:
case 1717:
case 1223:
case 2004:
case 1396:
case 3536:
case 1989:
case 232:
case 2226:
case 2468:
case 369:
case 3582:
case 3346:
case 2889:
case 324:
case 1122:
case 2212:
case 623:
case 1745:
case 606:
case 1007:
case 3473:
case 1949:
case 3332:
case 1302:
case 2664:
case 4072:
case 2350:
case 1079:
case 3542:
case 328:
case 2849:
case 3795:
case 954:
case 4085:
case 1155:
case 756:
case 872:
case 3999:
case 26:
case 3219:
case 988:
case 2254:
case 1010:
case 4034:
case 2480:
case 3882:
case 1806:
case 3836:
case 1257:
case 786:
case 42:
case 1908:
case 3323:
case 2549:
case 3842:
case 2693:
case 2339:
case 413:
case 2243:
case 1892:
case 4001:
case 717:
case 3704:
case 856:
case 1371:
case 772:
case 3974:
case 93:
case 535:
case 1081:
case 318:
case 3417:
case 1128:
case 263:
case 613:
case 2392:
case 1308:
case 3338:
case 1222:
case 314:
case 3809:
case 3091:
case 2126:
case 2776:
case 2939:
case 3548:
case 2161:
case 62:
case 3877:
case 119:
case 2735:
case 3622:
case 727:
case 205:
case 1389:
case 3469:
case 3888:
case 3560:
case 3076:
case 176:
case 2143:
case 1063:
case 182:
case 3797:
case 4087:
case 1157:
case 2896:
case 544:
case 3577:
case 1787:
case 2744:
case 2998:
case 993:
case 2629:
case 1902:
case 3932:
case 3848:
case 2183:
case 1430:
case 2020:
case 3400:
case 3509:
case 2571:
case 3265:
case 4047:
case 2154:
case 1603:
case 96:
case 1132:
case 951:
case 2758:
case 3512:
case 622:
case 910:
case 489:
case 1186:
case 2236:
case 1715:
case 2479:
case 2692:
case 1756:
case 2242:
case 4015:
case 258:
case 3316:
case 1893:
case 321:
case 3638:
case 3196:
case 2021:
case 873:
case 2188:
case 3208:
case 3583:
case 1123:
case 2727:
case 2213:
case 690:
case 1689:
case 2867:
case 3721:
case 3171:
case 459:
case 399:
case 3554:
case 2410:
case 107:
case 430:
case 284:
case 981:
case 2109:
case 412:
case 198:
case 1970:
case 18:
case 3485:
case 1724:
case 1365:
case 3090:
case 1649:
case 3472:
case 1040:
case 29:
case 288:
case 2870:
case 4073:
case 1273:
case 3972:
case 2008:
case 1621:
case 997:
case 2713:
case 1507:
case 1666:
case 201:
case 3673:
case 3347:
case 904:
case 706:
case 2464:
case 3266:
case 148:
case 1006:
case 1995:
case 1224:
case 723:
case 2668:
case 2381:
case 3075:
case 640:
case 3945:
case 1467:
case 71:
case 1810:
case 582:
case 2895:
case 3749:
case 144:
case 3082:
case 2258:
case 2049:
case 2907:
case 3457:
case 2493:
case 3615:
case 672:
case 617:
case 2640:
case 2451:
case 1931:
case 2775:
case 1807:
case 2125:
case 1169:
case 1215:
case 519:
case 2736:
case 531:
case 1100:
case 2595:
case 135:
case 1256:
case 1904:
case 3934:
case 552:
case 2680:
case 81:
case 2804:
case 3656:
case 1697:
case 2284:
case 712:
case 1321:
case 1247:
case 58:
case 3486:
case 3852:
case 3900:
case 2450:
case 2253:
case 1402:
case 3647:
case 2498:
case 2244:
case 594:
case 2694:
case 2137:
case 1287:
case 3825:
case 3703:
case 3446:
case 889:
case 2368:
case 759:
case 300:
case 103:
case 3969:
case 242:
case 3131:
case 1496:
case 3765:
case 2065:
case 1471:
case 3678:
case 3195:
case 3220:
case 270:
case 4022:
case 2859:
case 2340:
case 3423:
case 2003:
case 1620:
case 561:
case 1145:
case 165:
case 1172:
case 1811:
case 3917:
case 789:
case 3356:
case 859:
case 2276:
case 1716:
case 67:
case 830:
case 2754:
case 3858:
case 1840:
case 208:
case 3438:
case 2679:
case 3527:
case 3890:
case 1187:
case 1757:
case 583:
case 3197:
case 3634:
case 1604:
case 2153:
case 204:
case 47:
case 2362:
case 901:
case 3026:
case 2743:
case 2406:
case 2311:
case 297:
case 3061:
case 2184:
case 1921:
case 538:
case 2135:
case 3827:
case 315:
case 3300:
case 2726:
case 967:
case 1272:
case 1540:
case 3685:
case 673:
case 534:
case 1245:
case 1178:
case 1728:
case 378:
case 1580:
case 3295:
case 1489:
case 3369:
case 2019:
case 3924:
case 790:
case 2820:
case 4023:
case 3422:
case 486:
case 3978:
case 2307:
case 1659:
case 1098:
case 1774:
case 3301:
case 713:
case 3591:
case 1920:
case 591:
case 1863:
case 3166:
case 2905:
case 2662:
case 3455:
case 4074:
case 3334:
case 1581:
case 2611:
case 2777:
case 1805:
case 3876:
case 3088:
case 2963:
case 4032:
case 2252:
case 1403:
case 3372:
case 1997:
case 1746:
case 3600:
case 82:
case 3884:
case 3947:
case 813:
case 2071:
case 1465:
case 1039:
case 2429:
case 4086:
case 1156:
case 396:
case 255:
case 2748:
case 1115:
case 1269:
case 440:
case 1395:
case 564:
case 1786:
case 2310:
case 3844:
case 1505:
case 2225:
case 3535:
case 3987:
case 970:
case 1881:
case 2158:
case 4046:
case 3807:
case 97:
case 575:
case 401:
case 1837:
case 3931:
case 1901:
case 2658:
case 3320:
case 2443:
case 3169:
case 1378:
case 3879:
case 4008:
case 44:
case 2801:
case 514:
case 1615:
case 1457:
case 2545:
case 2834:
case 3256:
case 335:
case 1934:
case 792:
case 518:
case 705:
case 1347:
case 1673:
case 1985:
case 3470:
case 2111:
case 1789:
case 1428:
case 2038:
case 2353:
case 1972:
case 909:
case 3117:
case 3273:
case 1537:
case 3092:
case 1387:
case 1945:
case 2412:
case 1624:
case 763:
case 2268:
case 3995:
case 1159:
case 4089:
case 2426:
case 3006:
case 805:
case 892:
case 1075:
case 149:
case 2358:
case 1423:
case 3278:
case 3145:
case 79:
case 788:
case 3755:
case 1678:
case 3471:
case 858:
case 3029:
case 1220:
case 2914:
case 273:
case 1195:
case 125:
case 442:
case 1356:
case 1525:
case 986:
case 2205:
case 3716:
case 784:
case 917:
case 2676:
case 854:
case 365:
case 1917:
case 3172:
case 2022:
case 1432:
case 2952:
case 1297:
case 4003:
case 2684:
case 89:
case 2327:
case 888:
case 2691:
case 3247:
case 758:
case 470:
case 1486:
case 1852:
case 2294:
case 1969:
case 100:
case 437:
case 3511:
case 2729:
case 733:
case 2055:
case 2925:
case 956:
case 3287:
case 1018:
case 2488:
case 3733:
case 2352:
case 174:
case 2163:
case 670:
case 2057:
case 3093:
case 1827:
case 2105:
case 3285:
case 379:
case 1672:
case 3051:
case 3921:
case 408:
case 115:
case 2556:
case 1369:
case 497:
case 178:
case 1295:
case 1120:
case 511:
case 1054:
case 1924:
case 793:
case 2824:
case 3728:
case 3178:
case 1601:
case 1438:
case 3631:
case 2573:
case 73:
case 1527:
case 341:
case 2990:
case 2637:
case 1915:
case 3840:
case 2279:
case 2436:
case 3234:
case 2475:
case 1061:
case 2141:
case 2793:
case 3757:
case 580:
case 2856:
case 3604:
case 387:
case 3568:
case 3841:
case 2984:
case 1385:
case 3:
case 1796:
case 2991:
case 851:
case 196:
case 217:
case 2953:
case 286:
case 1891:
case 2847:
case 3630:
case 1884:
case 1600:
case 2944:
case 569:
case 1987:
case 2625:
case 3894:
case 485:
case 1060:
case 667:
case 3115:
case 3269:
case 443:
case 1535:
case 2074:
case 2887:
case 1844:
case 3124:
case 710:
case 3774:
case 751:
case 1591:
case 76:
case 256:
case 2086:
case 1259:
case 2032:
case 2168:
case 3541:
case 3805:
case 1835:
case 3173:
case 2046:
case 3723:
case 395:
case 240:
case 3594:
case 1166:
case 2739:
case 3304:
case 1617:
case 1025:
case 3319:
case 3274:
case 1955:
case 2354:
case 897:
case 3199:
case 345:
case 383:
case 1149:
case 180:
case 804:
case 462:
case 3717:
case 3223:
case 1922:
case 3529:
case 2677:
case 2343:
case 808:
case 688:
case 139:
case 2361:
case 2688:
case 1646:
case 654:
case 150:
case 222:
case 353:
case 1730:
case 2326:
case 3246:
case 2312:
case 633:
case 3367:
case 1487:
case 704:
case 923:
case 574:
case 1686:
case 658:
case 3829:
case 2522:
case 1202:
case 1933:
case 2453:
case 3286:
case 338:
case 146:
case 1447:
case 1632:
case 91:
case 708:
case 515:
case 2484:
case 2654:
case 1836:
case 2982:
case 2045:
case 885:
case 605:
case 1875:
case 1513:
case 2683:
case 4004:
case 2975:
case 3010:
case 1374:
case 3701:
case 1165:
case 2129:
case 432:
case 2360:
case 1657:
case 2309:
case 1415:
case 2942:
case 3734:
case 3371:
case 391:
case 2490:
case 3892:
case 2377:
case 2643:
case 2293:
case 1842:
case 2072:
case 1323:
case 3772:
case 169:
case 2661:
case 2388:
case 2913:
case 1267:
case 912:
case 977:
case 3116:
case 447:
case 4095:
case 3506:
case 2612:
case 3989:
case 663:
case 213:
case 1795:
case 1542:
case 2348:
case 2264:
case 2710:
case 3155:
case 930:
case 3007:
case 368:
case 481:
case 2899:
case 3228:
case 959:
case 3302:
case 3949:
case 1332:
case 1797:
case 1946:
case 3063:
case 2313:
case 647:
case 2574:
case 1035:
case 3747:
case 376:
case 1560:
case 3389:
case 2846:
case 681:
case 3539:
case 1400:
case 2794:
case 3430:
case 1399:
case 1633:
case 3898:
case 2781:
case 990:
case 84:
case 3787:
case 2523:
case 1848:
case 3850:
case 3349:
case 2078:
case 2452:
case 3902:
case 3128:
case 2546:
case 1655:
case 1417:
case 2087:
case 632:
case 260:
case 1044:
case 2375:
case 1974:
case 3255:
case 1720:
case 2336:
case 571:
case 405:
case 2618:
case 2960:
case 2823:
case 701:
case 4020:
case 2342:
case 2586:
case 2047:
case 3216:
case 1622:
case 331:
case 1084:
case 319:
case 1877:
case 2705:
case 610:
case 2763:
case 651:
case 114:
case 3222:
case 1053:
case 3308:
case 1923:
case 2961:
case 500:
case 1554:
case 199:
case 1812:
case 1721:
case 842:
case 2926:
case 2056:
case 2139:
case 3080:
case 307:
case 3773:
case 454:
case 394:
case 1826:
case 693:
case 1445:
case 2912:
case 1861:
case 2557:
case 2768:
case 1249:
case 1928:
case 566:
case 1472:
case 2828:
case 4066:
case 458:
case 3970:
case 3649:
case 1090:
case 770:
case 2682:
case 1355:
case 3919:
case 92:
case 837:
case 1434:
case 742:
case 525:
case 259:
case 1883:
case 3715:
case 662:
case 1526:
case 3186:
case 1102:
case 3068:
case 913:
case 1512:
case 2437:
case 1027:
case 3851:
case 1843:
case 2528:
case 35:
case 361:
case 212:
case 2943:
case 1638:
case 1196:
case 3564:
case 1401:
case 870:
case 2857:
case 3893:
case 2593:
case 19:
case 3768:
case 866:
case 3015:
case 2970:
case 3828:
case 1160:
case 1964:
case 2299:
case 2365:
case 1867:
case 1519:
case 680:
case 1410:
case 542:
case 2080:
case 2495:
case 1109:
case 3926:
case 991:
case 1727:
case 389:
case 1177:
case 3912:
case 2851:
case 3292:
case 1407:
case 3437:
case 3642:
case 964:
case 929:
case 3528:
case 1479:
case 3943:
case 2756:
case 1242:
case 312:
case 377:
case 3780:
case 4090:
case 1951:
case 1021:
case 2564:
case 2404:
case 3954:
case 2919:
case 330:
case 133:
case 3206:
case 1148:
case 2715:
case 1282:
case 2132:
case 3740:
case 1606:
case 3198:
case 3636:
case 3318:
case 2430:
case 3794:
case 3832:
case 3229:
case 2539:
case 1802:
case 2898:
case 4084:
case 1154:
case 2603:
case 3078:
case 3886:
case 2665:
case 2063:
case 1753:
case 282:
case 3193:
case 2157:
case 4044:
case 3574:
case 2005:
case 105:
case 418:
case 3846:
case 192:
case 2459:
case 3909:
case 1776:
case 3342:
case 3823:
case 219:
case 736:
case 628:
case 2598:
case 1871:
case 1112:
case 1392:
case 2308:
case 3532:
case 3546:
case 1218:
case 360:
case 3087:
case 3874:
case 163:
case 2255:
case 3164:
case 3375:
case 3960:
case 3618:
case 1411:
case 871:
case 4076:
case 749:
case 323:
case 3336:
case 1339:
case 1693:
case 3309:
case 1243:
case 3251:
case 796:
case 3599:
case 994:
case 3085:
case 2371:
case 181:
case 4037:
case 3293:
case 907:
case 3377:
case 3643:
case 3072:
case 424:
case 469:
case 3707:
case 98:
case 3045:
case 2701:
case 3975:
case 1254:
case 543:
case 2010:
case 3683:
case 147:
case 1480:
case 3779:
case 3936:
case 1906:
case 110:
case 1849:
case 614:
case 151:
case 3710:
case 2155:
case 3264:
case 16:
case 675:
case 1118:
case 3899:
case 2592:
case 3427:
case 1398:
case 2007:
case 2302:
case 32:
case 3538:
case 1508:
case 2772:
case 2122:
case 1261:
case 1004:
case 132:
case 1226:
case 1277:
case 976:
case 1639:
case 1393:
case 3816:
case 2223:
case 3533:
case 4014:
case 3343:
case 2529:
case 3711:
case 446:
case 1209:
case 3239:
case 1565:
case 982:
case 2274:
case 411:
case 597:
case 778:
case 3069:
case 1714:
case 193:
case 450:
case 245:
case 3476:
case 699:
case 283:
case 3855:
case 3918:
case 3648:
case 1650:
case 2903:
case 3522:
case 4052:
case 2829:
case 3106:
case 2370:
case 3833:
case 2769:
case 3516:
case 4025:
case 878:
case 3688:
case 2011:
case 253:
case 3326:
case 1494:
case 322:
case 1142:
case 480:
case 234:
case 3017:
case 919:
case 1288:
case 3444:
case 3192:
case 2367:
case 3312:
case 824:
case 869:
case 2881:
case 1158:
case 4088:
case 671:
case 2563:
case 2732:
case 3750:
case 1748:
case 2269:
case 1310:
case 532:
case 3887:
case 828:
case 1071:
case 2:
case 3652:
case 2465:
case 510:
case 317:
case 3180:
case 4048:
case 551:
case 372:
case 1520:
case 2039:
case 2156:
case 56:
case 1252:
case 386:
case 3953:
case 3023:
case 2997:
case 2746:
case 2630:
case 3847:
case 3418:
case 724:
case 769:
case 2217:
case 2723:
case 3262:
case 1963:
case 1709:
case 143:
case 2594:
case 340:
case 295:
case 1905:
case 547:
case 3935:
case 2304:
case 728:
case 3086:
case 2050:
case 2920:
case 1597:
case 1002:
case 2098:
case 2659:
case 2541:
case 4077:
case 3614:
case 2868:
case 2580:
case 2489:
case 3764:
case 1019:
case 4061:
case 3413:
case 625:
case 2178:
case 2728:
case 1968:
case 3163:
case 2540:
case 1866:
case 2093:
case 935:
case 53:
case 1712:
case 1821:
case 3105:
case 846:
case 2966:
case 2330:
case 1191:
case 3436:
case 1743:
case 739:
case 711:
case 478:
case 1311:
case 1980:
case 3475:
case 593:
case 3524:
case 750:
case 1184:
case 4054:
case 948:
case 600:
case 2757:
case 3141:
case 287:
case 2568:
case 2880:
case 1153:
case 3482:
case 104:
case 3856:
case 1362:
case 3815:
case 3028:
case 20:
case 1940:
case 2408:
case 1492:
case 2187:
case 1754:
case 3990:
case 944:
case 241:
case 2064:
case 1521:
case 746:
case 3181:
case 3279:
case 2840:
case 666:
case 3637:
case 1070:
case 3442:
case 415:
case 108:
case 1911:
case 1380:
case 1663:
case 2185:
case 1235:
case 3676:
case 4018:
case 2172:
case 1605:
case 2278:
case 1003:
case 2620:
case 3477:
case 615:
case 466:
case 2145:
case 3390:
case 3110:
case 821:
case 2959:
case 1439:
case 3644:
case 142:
case 3925:
case 3055:
case 3281:
case 1244:
case 3107:
case 2733:
case 1368:
case 1681:
case 3800:
case 3684:
case 3952:
case 3022:
case 995:
case 1498:
case 3691:
case 59:
case 902:
case 2247:
case 3016:
case 1559:
case 226:
case 1291:
case 2366:
case 1450:
case 3448:
case 1641:
case 1804:
case 3545:
case 3792:
case 2738:
case 979:
case 4082:
case 3483:
case 1742:
case 327:
case 3280:
case 2419:
case 818:
case 3454:
case 2904:
case 449:
case 2510:
case 520:
case 3099:
case 3658:
case 875:
case 2931:
case 1775:
case 1290:
case 2169:
case 1979:
case 2320:
case 3443:
case 3706:
case 3572:
case 2879:
case 3240:
case 1907:
case 696:
case 1831:
case 957:
case 3801:
case 3412:
case 2467:
case 2810:
case 3268:
case 1895:
case 1394:
case 1114:
case 2995:
case 2224:
case 718:
case 90:
case 3534:
case 471:
case 1381:
case 592:
case 2799:
case 3845:
case 775:
case 3501:
case 1464:
case 1531:
case 3384:
case 3872:
case 3627:
case 2470:
case 2117:
case 2397:
case 14:
case 1341:
case 1227:
case 916:
case 1713:
case 2666:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751756402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,];
var gg_b = "1751756402/";

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
