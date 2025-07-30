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
case 390:
case 4012:
case 1417:
case 1445:
case 1856:
case 3919:
case 1332:
case 1475:
case 3438:
case 3089:
case 3866:
case 774:
case 3491:
case 3680:
case 1294:
case 2679:
case 3523:
case 3188:
case 3542:
case 509:
case 946:
case 3572:
case 3657:
case 1036:
case 2070:
case 461:
case 4000:
case 2809:
case 3701:
case 1922:
case 3739:
case 1363:
case 552:
case 329:
case 1038:
case 3075:
case 5:
case 1774:
case 1521:
case 729:
case 1744:
case 1825:
case 1351:
case 1995:
case 3361:
case 983:
case 2254:
case 1091:
case 3971:
case 1489:
case 439:
case 1858:
case 692:
case 374:
case 939:
case 1960:
case 1493:
case 790:
case 1205:
case 2782:
case 905:
case 263:
case 1370:
case 1340:
case 1392:
case 3062:
case 2058:
case 585:
case 2560:
case 2331:
case 231:
case 1106:
case 1234:
case 3431:
case 1907:
case 646:
case 2398:
case 3366:
case 2025:
case 503:
case 1297:
case 366:
case 3285:
case 3033:
case 3799:
case 2159:
case 3181:
case 1832:
case 1526:
case 1356:
case 1935:
case 3978:
case 198:
case 3948:
case 2352:
case 1462:
case 1840:
case 2573:
case 2543:
case 4067:
case 2522:
case 1870:
case 1528:
case 639:
case 2092:
case 2110:
case 1183:
case 1009:
case 3452:
case 1213:
case 992:
case 989:
case 766:
case 101:
case 3861:
case 3249:
case 2257:
case 29:
case 489:
case 683:
case 2124:
case 492:
case 3496:
case 867:
case 2396:
case 1777:
case 1325:
case 1851:
case 1747:
case 2368:
case 3352:
case 3522:
case 2978:
case 2948:
case 1923:
case 1942:
case 3280:
case 1893:
case 3504:
case 1972:
case 2590:
case 1694:
case 3092:
case 557:
case 3468:
case 51:
case 421:
case 3124:
case 4013:
case 3056:
case 2279:
case 3769:
case 2249:
case 1425:
case 39:
case 1267:
case 369:
case 3102:
case 1759:
case 943:
case 1519:
case 1066:
case 873:
case 3396:
case 1889:
case 3331:
case 694:
case 697:
case 331:
case 2498:
case 636:
case 2062:
case 1710:
case 1068:
case 2409:
case 3398:
case 1492:
case 1320:
case 241:
case 2853:
case 2431:
case 1550:
case 1587:
case 266:
case 1817:
case 83:
case 2946:
case 1724:
case 1845:
case 1541:
case 4034:
case 2115:
case 2181:
case 486:
case 2033:
case 2177:
case 1605:
case 2147:
case 3595:
case 223:
case 781:
case 1264:
case 2017:
case 3461:
case 3896:
case 4005:
case 2045:
case 3032:
case 2987:
case 2361:
case 1634:
case 1576:
case 1546:
case 1833:
case 3063:
case 274:
case 2950:
case 277:
case 326:
case 618:
case 3507:
case 1470:
case 621:
case 2436:
case 879:
case 2868:
case 3611:
case 363:
case 1053:
case 436:
case 290:
case 1061:
case 2144:
case 1613:
case 1317:
case 1584:
case 2680:
case 2491:
case 88:
case 3051:
case 1200:
case 1375:
case 2103:
case 2866:
case 3928:
case 4094:
case 2218:
case 3898:
case 2542:
case 545:
case 2657:
case 2353:
case 1463:
case 1820:
case 381:
case 229:
case 3453:
case 358:
case 2093:
case 997:
case 3809:
case 686:
case 994:
case 3293:
case 1880:
case 245:
case 2583:
case 309:
case 2128:
case 4061:
case 197:
case 1666:
case 2240:
case 3656:
case 3018:
case 2270:
case 1122:
case 529:
case 1143:
case 2305:
case 1173:
case 1037:
case 868:
case 3867:
case 3364:
case 3944:
case 3795:
case 2155:
case 3289:
case 310:
case 3974:
case 2508:
case 2464:
case 1741:
case 1857:
case 2620:
case 1524:
case 1005:
case 612:
case 2834:
case 574:
case 2633:
case 2337:
case 577:
case 3743:
case 3437:
case 3773:
case 895:
case 2263:
case 3312:
case 2506:
case 1160:
case 853:
case 752:
case 1291:
case 2126:
case 3141:
case 2394:
case 3300:
case 2897:
case 3217:
case 3171:
case 3245:
case 1238:
case 4053:
case 3016:
case 3187:
case 3146:
case 1357:
case 3011:
case 3233:
case 3981:
case 3367:
case 2225:
case 3632:
case 385:
case 2805:
case 541:
case 186:
case 1380:
case 2313:
case 2617:
case 3262:
case 2645:
case 2772:
case 2723:
case 2397:
case 2924:
case 143:
case 3800:
case 21:
case 1908:
case 3184:
case 778:
case 1999:
case 3640:
case 2902:
case 3670:
case 3049:
case 2057:
case 3079:
case 3434:
case 1231:
case 1013:
case 859:
case 118:
case 3148:
case 3582:
case 1135:
case 3178:
case 2292:
case 450:
case 1298:
case 625:
case 2837:
case 802:
case 2910:
case 1983:
case 1661:
case 31:
case 498:
case 3730:
case 1266:
case 3397:
case 1067:
case 2214:
case 3894:
case 59:
case 3924:
case 133:
case 3057:
case 2049:
case 2497:
case 1311:
case 2670:
case 811:
case 2812:
case 2651:
case 2434:
case 3910:
case 998:
case 2220:
case 2707:
case 1123:
case 1349:
case 3467:
case 965:
case 203:
case 2011:
case 1379:
case 17:
case 757:
case 2176:
case 3959:
case 1586:
case 2864:
case 2663:
case 2981:
case 1457:
case 3501:
case 3805:
case 2632:
case 617:
case 278:
case 3539:
case 572:
case 1268:
case 2735:
case 3645:
case 3772:
case 465:
case 71:
case 856:
case 4038:
case 1253:
case 1728:
case 3633:
case 2150:
case 698:
case 3412:
case 601:
case 2312:
case 4091:
case 2743:
case 2722:
case 3263:
case 2773:
case 563:
case 1885:
case 1581:
case 183:
case 3126:
case 3400:
case 1755:
case 1652:
case 2986:
case 2245:
case 2187:
case 2569:
case 3765:
case 745:
case 2300:
case 3394:
case 1064:
case 3897:
case 2988:
case 2293:
case 3813:
case 209:
case 3128:
case 3614:
case 252:
case 917:
case 235:
case 3240:
case 1982:
case 2018:
case 2760:
case 45:
case 1609:
case 2944:
case 3599:
case 2289:
case 417:
case 1316:
case 4036:
case 2867:
case 3251:
case 2119:
case 2903:
case 3464:
case 3620:
case 1849:
case 1698:
case 3029:
case 1165:
case 1450:
case 1004:
case 251:
case 319:
case 275:
case 2970:
case 2028:
case 2940:
case 124:
case 1137:
case 1043:
case 2598:
case 127:
case 3118:
case 3872:
case 3993:
case 3842:
case 18:
case 3495:
case 1326:
case 1716:
case 4082:
case 2395:
case 1487:
case 2951:
case 520:
case 1239:
case 179:
case 544:
case 1105:
case 602:
case 547:
case 3659:
case 2322:
case 825:
case 2615:
case 2490:
case 1201:
case 1060:
case 2304:
case 995:
case 3737:
case 216:
case 3473:
case 1558:
case 495:
case 2154:
case 1419:
case 3917:
case 2227:
case 3365:
case 1525:
case 3087:
case 1821:
case 1991:
case 3071:
case 719:
case 3041:
case 2932:
case 2596:
case 1826:
case 313:
case 2259:
case 3247:
case 3281:
case 2925:
case 2895:
case 3046:
case 1484:
case 2021:
case 3933:
case 1779:
case 1197:
case 1749:
case 3627:
case 348:
case 1478:
case 3435:
case 3553:
case 532:
case 2335:
case 2442:
case 2860:
case 571:
case 20:
case 2430:
case 1711:
case 402:
case 2956:
case 1682:
case 2688:
case 2157:
case 3149:
case 3797:
case 2224:
case 3330:
case 3920:
case 1035:
case 3078:
case 2210:
case 2603:
case 2307:
case 959:
case 108:
case 2180:
case 2674:
case 713:
case 1909:
case 1540:
case 2644:
case 902:
case 3407:
case 1589:
case 30:
case 3224:
case 1421:
case 428:
case 1966:
case 2149:
case 2797:
case 4083:
case 584:
case 911:
case 3180:
case 3210:
case 2890:
case 2920:
case 2048:
case 1593:
case 3307:
case 3603:
case 801:
case 2407:
case 1042:
case 898:
case 3992:
case 3674:
case 3644:
case 2076:
case 3895:
case 865:
case 1030:
case 2281:
case 14:
case 1601:
case 2046:
case 3591:
case 2185:
case 3259:
case 213:
case 3538:
case 1575:
case 1841:
case 1757:
case 1517:
case 2627:
case 2323:
case 604:
case 607:
case 2435:
case 1780:
case 3958:
case 1378:
case 338:
case 1348:
case 70:
case 3681:
case 3490:
case 2404:
case 2050:
case 115:
case 2568:
case 1428:
case 3343:
case 537:
case 1562:
case 534:
case 2473:
case 628:
case 596:
case 3304:
case 611:
case 2917:
case 2975:
case 3026:
case 2071:
case 2286:
case 1164:
case 1319:
case 1606:
case 4039:
case 3465:
case 219:
case 3970:
case 656:
case 2705:
case 1282:
case 1699:
case 3531:
case 1848:
case 1090:
case 1112:
case 351:
case 2872:
case 2823:
case 2460:
case 2288:
case 3598:
case 2019:
case 2566:
case 1371:
case 1754:
case 2495:
case 1514:
case 2610:
case 407:
case 1387:
case 85:
case 1065:
case 3951:
case 3395:
case 2989:
case 2244:
case 1824:
case 1745:
case 1623:
case 3738:
case 1486:
case 64:
case 2808:
case 2151:
case 3791:
case 2929:
case 3003:
case 320:
case 476:
case 1136:
case 2170:
case 399:
case 1222:
case 519:
case 1243:
case 107:
case 976:
case 104:
case 3088:
case 2339:
case 3193:
case 2228:
case 1204:
case 1810:
case 3401:
case 2684:
case 2513:
case 3241:
case 680:
case 3086:
case 1444:
case 3145:
case 415:
case 76:
case 1138:
case 667:
case 2132:
case 1295:
case 1789:
case 782:
case 883:
case 664:
case 1191:
case 2226:
case 1859:
case 3916:
case 3382:
case 2806:
case 2163:
case 720:
case 3736:
case 1260:
case 3621:
case 296:
case 2646:
case 3250:
case 2534:
case 915:
case 1039:
case 234:
case 1006:
case 44:
case 2641:
case 4030:
case 2671:
case 1720:
case 2158:
case 3798:
case 2687:
case 3709:
case 676:
case 3483:
case 332:
case 355:
case 2839:
case 2399:
case 1302:
case 513:
case 3408:
case 393:
case 1196:
case 3985:
case 3911:
case 3246:
case 1997:
case 94:
case 3081:
case 2766:
case 3015:
case 3276:
case 87:
case 2059:
case 3499:
case 3133:
case 922:
case 1913:
case 615:
case 3120:
case 3406:
case 287:
case 1131:
case 464:
case 793:
case 3655:
case 3248:
case 1235:
case 1083:
case 2768:
case 833:
case 3796:
case 1359:
case 1008:
case 964:
case 967:
case 1477:
case 4042:
case 1099:
case 1447:
case 630:
case 1481:
case 3500:
case 3979:
case 1888:
case 1518:
case 2406:
case 102:
case 473:
case 991:
case 1223:
case 3980:
case 2248:
case 821:
case 2655:
case 3010:
case 3192:
case 360:
case 3768:
case 159:
case 3306:
case 818:
case 2882:
case 1622:
case 4035:
case 408:
case 1844:
case 1725:
case 1967:
case 1381:
case 1315:
case 2500:
case 1604:
case 32:
case 843:
case 1803:
case 2284:
case 742:
case 2114:
case 1459:
case 3002:
case 491:
case 2162:
case 3687:
case 3671:
case 271:
case 3839:
case 2626:
case 1410:
case 627:
case 1792:
case 255:
case 3801:
case 1756:
case 1424:
case 760:
case 2564:
case 3221:
case 2408:
case 3125:
case 2047:
case 1402:
case 2133:
case 2499:
case 787:
case 2246:
case 1230:
case 3597:
case 3954:
case 479:
case 1607:
case 1303:
case 2175:
case 2241:
case 2086:
case 2117:
case 4060:
case 1751:
case 1344:
case 870:
case 1815:
case 3132:
case 3027:
case 1511:
case 2621:
case 244:
case 247:
case 3163:
case 4095:
case 691:
case 337:
case 1153:
case 334:
case 516:
case 3646:
case 2250:
case 3676:
case 737:
case 2074:
case 734:
case 3808:
case 1161:
case 1549:
case 796:
case 2738:
case 1579:
case 2003:
case 4073:
case 3255:
case 3648:
case 1635:
case 3678:
case 427:
case 220:
case 1386:
case 3929:
case 1912:
case 2088:
case 1763:
case 588:
case 299:
case 282:
case 26:
case 1290:
case 836:
case 3684:
case 2401:
case 1082:
case 894:
case 3228:
case 3485:
case 969:
case 3411:
case 82:
case 1800:
case 2067:
case 3746:
case 3908:
case 2266:
case 1184:
case 3999:
case 1670:
case 4092:
case 1049:
case 233:
case 99:
case 2385:
case 1079:
case 1651:
case 321:
case 3013:
case 3231:
case 598:
case 3209:
case 1582:
case 1148:
case 49:
case 1812:
case 469:
case 1707:
case 2172:
case 663:
case 884:
case 2142:
case 2588:
case 2123:
case 501:
case 3784:
case 431:
case 2349:
case 2379:
case 1233:
case 3854:
case 3479:
case 565:
case 2457:
case 1367:
case 1663:
case 1915:
case 718:
case 3296:
case 1977:
case 2586:
case 1735:
case 2268:
case 3252:
case 1413:
case 2480:
case 743:
case 386:
case 842:
case 3380:
case 1262:
case 3107:
case 658:
case 2638:
case 1150:
case 837:
case 2318:
case 3005:
case 963:
case 2728:
case 3901:
case 0:
case 1437:
case 1743:
case 239:
case 1773:
case 1625:
case 2696:
case 3160:
case 1986:
case 2652:
case 2577:
case 426:
case 1300:
case 736:
case 1217:
case 2429:
case 797:
case 1658:
case 794:
case 669:
case 463:
case 1187:
case 1016:
case 3238:
case 672:
case 336:
case 514:
case 981:
case 109:
case 3104:
case 631:
case 2012:
case 3750:
case 2190:
case 394:
case 3666:
case 1760:
case 152:
case 246:
case 4070:
case 2000:
case 2726:
case 2631:
case 1364:
case 1944:
case 2609:
case 1289:
case 1692:
case 3502:
case 3416:
case 2165:
case 3787:
case 1903:
case 2879:
case 3857:
case 2261:
case 3524:
case 3771:
case 2750:
case 3012:
case 2666:
case 294:
case 145:
case 86:
case 1128:
case 1614:
case 1305:
case 2122:
case 882:
case 346:
case 899:
case 2173:
case 3982:
case 1240:
case 1155:
case 666:
case 1599:
case 2502:
case 1251:
case 361:
case 3000:
case 3454:
case 3631:
case 3726:
case 2354:
case 1464:
case 990:
case 2741:
case 2524:
case 2771:
case 2857:
case 3849:
case 2416:
case 429:
case 2787:
case 4075:
case 1834:
case 305:
case 1337:
case 1412:
case 1506:
case 2160:
case 974:
case 761:
case 525:
case 1054:
case 2291:
case 2719:
case 1400:
case 3515:
case 383:
case 2195:
case 3755:
case 2559:
case 3547:
case 1232:
case 3577:
case 2329:
case 2668:
case 1662:
case 3429:
case 2238:
case 1765:
case 1927:
case 1897:
case 3064:
case 1467:
case 2653:
case 3349:
case 2854:
case 3379:
case 2527:
case 37:
case 2784:
case 3130:
case 690:
case 3969:
case 2296:
case 1959:
case 792:
case 3457:
case 2449:
case 1225:
case 733:
case 832:
case 855:
case 1805:
case 2748:
case 2906:
case 3268:
case 466:
case 2778:
case 1645:
case 286:
case 2776:
case 1730:
case 2411:
case 1397:
case 1894:
case 3067:
case 1924:
case 243:
case 1057:
case 3385:
case 3311:
case 1256:
case 2829:
case 3721:
case 3574:
case 677:
case 218:
case 512:
case 674:
case 2013:
case 1910:
case 2661:
case 77:
case 2298:
case 3818:
case 3588:
case 1978:
case 765:
case 521:
case 3935:
case 41:
case 1948:
case 3840:
case 1629:
case 3098:
case 212:
case 954:
case 4057:
case 1452:
case 3031:
case 301:
case 1565:
case 1279:
case 1249:
case 1861:
case 543:
case 4080:
case 2066:
case 2519:
case 3777:
case 457:
case 3325:
case 1014:
case 454:
case 3747:
case 80:
case 3392:
case 1062:
case 645:
case 3863:
case 1853:
case 3234:
case 2320:
case 141:
case 1431:
case 2550:
case 1654:
case 3907:
case 1409:
case 2492:
case 2724:
case 2456:
case 2541:
case 2930:
case 2314:
case 2169:
case 2817:
case 3297:
case 798:
case 3414:
case 3832:
case 1181:
case 3526:
case 1115:
case 1075:
case 570:
case 3774:
case 3825:
case 61:
case 3744:
case 3995:
case 2634:
case 2833:
case 3091:
case 406:
case 3703:
case 3858:
case 174:
case 549:
case 3788:
case 177:
case 1950:
case 654:
case 657:
case 3205:
case 3370:
case 1868:
case 3786:
case 190:
case 1174:
case 3417:
case 1144:
case 3445:
case 1919:
case 2375:
case 1089:
case 2432:
case 1866:
case 1103:
case 1680:
case 2200:
case 2814:
case 35:
case 1523:
case 536:
case 314:
case 1188:
case 1572:
case 3904:
case 2820:
case 317:
case 2990:
case 1353:
case 3036:
case 3973:
case 3943:
case 3892:
case 2212:
case 1739:
case 945:
case 2578:
case 2182:
case 1093:
case 2548:
case 851:
case 4029:
case 2856:
case 2445:
case 409:
case 3061:
case 2417:
case 3584:
case 3317:
case 3965:
case 1051:
case 3814:
case 3200:
case 3727:
case 3375:
case 3432:
case 3345:
case 435:
case 1898:
case 1679:
case 678:
case 2904:
case 3820:
case 3578:
case 181:
case 2667:
case 1453:
case 909:
case 1831:
case 3548:
case 2973:
case 819:
case 2943:
case 3264:
case 583:
case 2995:
case 2744:
case 2825:
case 1461:
case 2351:
case 3389:
case 1926:
case 1127:
case 2489:
case 9:
case 3634:
case 2091:
case 1254:
case 3833:
case 1063:
case 2788:
case 3697:
case 1507:
case 126:
case 3440:
case 4:
case 2370:
case 2340:
case 2101:
case 1685:
case 1611:
case 2139:
case 2960:
case 4016:
case 1782:
case 2205:
case 1560:
case 2664:
case 1331:
case 750:
case 131:
case 609:
case 403:
case 1616:
case 1309:
case 4085:
case 4011:
case 172:
case 3068:
case 2052:
case 978:
case 635:
case 3492:
case 1398:
case 652:
case 985:
case 3320:
case 848:
case 2234:
case 3587:
case 3930:
case 3169:
case 610:
case 1025:
case 2297:
case 3845:
case 485:
case 1838:
case 3875:
case 3541:
case 2526:
case 813:
case 1466:
case 2356:
case 1159:
case 1573:
case 1352:
case 3458:
case 2870:
case 1836:
case 1543:
case 312:
case 592:
case 2935:
case 2213:
case 2031:
case 3972:
case 1110:
case 1092:
case 2183:
case 2358:
case 2009:
case 350:
case 2851:
case 1102:
case 2777:
case 533:
case 2747:
case 2555:
case 2781:
case 2758:
case 3198:
case 2272:
case 508:
case 857:
case 854:
case 40:
case 328:
case 616:
case 1248:
case 259:
case 1752:
case 2967:
case 2347:
case 2725:
case 2377:
case 2673:
case 3477:
case 3099:
case 1628:
case 1114:
case 3733:
case 3447:
case 1369:
case 1949:
case 3690:
case 3481:
case 756:
case 3415:
case 2604:
case 2166:
case 1284:
case 2803:
case 3720:
case 356:
case 3310:
case 675:
case 2695:
case 2410:
case 1483:
case 3152:
case 171:
case 4021:
case 1626:
case 711:
case 2069:
case 2424:
case 193:
case 2756:
case 1564:
case 1246:
case 2230:
case 1276:
case 2402:
case 1077:
case 1499:
case 1869:
case 3474:
case 1086:
case 1271:
case 2303:
case 2607:
case 1287:
case 540:
case 3138:
case 2881:
case 253:
case 2964:
case 3789:
case 2511:
case 2877:
case 3191:
case 2751:
case 1916:
case 3859:
case 144:
case 147:
case 3905:
case 295:
case 1621:
case 2388:
case 2900:
case 475:
case 3745:
case 3824:
case 58:
case 2549:
case 3557:
case 3623:
case 1738:
case 3775:
case 3486:
case 1044:
case 488:
case 3717:
case 2161:
case 451:
case 2386:
case 1219:
case 268:
case 120:
case 1189:
case 562:
case 2635:
case 3136:
case 2912:
case 2763:
case 1088:
case 2082:
case 1193:
case 1918:
case 845:
case 988:
case 3204:
case 3810:
case 16:
case 3937:
case 2486:
case 2994:
case 419:
case 2672:
case 613:
case 2745:
case 2775:
case 3265:
case 2623:
case 2327:
case 1255:
case 368:
case 3732:
case 1678:
case 795:
case 3635:
case 1151:
case 2802:
case 810:
case 1899:
case 1929:
case 2243:
case 400:
case 2222:
case 1339:
case 3763:
case 204:
case 2273:
case 648:
case 1301:
case 852:
case 1170:
case 2136:
case 3290:
case 2204:
case 1513:
case 1753:
case 1954:
case 3607:
case 3303:
case 2474:
case 2444:
case 4050:
case 2191:
case 3877:
case 3847:
case 3374:
case 353:
case 3815:
case 8:
case 1132:
case 530:
case 2403:
case 3964:
case 768:
case 3740:
case 395:
case 3770:
case 2260:
case 1163:
case 2793:
case 137:
case 4087:
case 2039:
case 1646:
case 196:
case 4071:
case 1676:
case 1158:
case 619:
case 142:
case 2934:
case 2310:
case 1641:
case 4076:
case 2006:
case 1671:
case 878:
case 1839:
case 3410:
case 1505:
case 885:
case 948:
case 3168:
case 2152:
case 2196:
case 3424:
case 3660:
case 759:
case 1221:
case 448:
case 1399:
case 2302:
case 913:
case 2827:
case 803:
case 1650:
case 2324:
case 1766:
case 3230:
case 4084:
case 184:
case 3272:
case 2762:
case 302:
case 3223:
case 3242:
case 228:
case 160:
case 1192:
case 2083:
case 522:
case 1306:
case 1619:
case 2008:
case 3622:
case 3347:
case 2529:
case 3377:
case 4048:
case 1156:
case 1024:
case 3315:
case 2415:
case 3604:
case 2481:
case 2690:
case 12:
case 3803:
case 3166:
case 2099:
case 564:
case 2477:
case 567:
case 2447:
case 3459:
case 2733:
case 1002:
case 1084:
case 484:
case 869:
case 3321:
case 487:
case 280:
case 3476:
case 3785:
case 2167:
case 3711:
case 3682:
case 3299:
case 2966:
case 1797:
case 1149:
case 3208:
case 1561:
case 1330:
case 1865:
case 2346:
case 73:
case 3113:
case 3998:
case 4024:
case 511:
case 3570:
case 42:
case 3909:
case 696:
case 3540:
case 1407:
case 634:
case 637:
case 391:
case 1277:
case 2639:
case 3826:
case 1247:
case 24:
case 2030:
case 1215:
case 1076:
case 3484:
case 1046:
case 791:
case 2517:
case 33:
case 2887:
case 3779:
case 2871:
case 1962:
case 3448:
case 2850:
case 1342:
case 1372:
case 3563:
case 2378:
case 3007:
case 3952:
case 2968:
case 3206:
case 3239:
case 215:
case 2428:
case 996:
case 863:
case 3201:
case 1050:
case 3718:
case 1390:
case 826:
case 1422:
case 3669:
case 1443:
case 3558:
case 2562:
case 1975:
case 1794:
case 2533:
case 2455:
case 340:
case 3095:
case 2729:
case 1087:
case 437:
case 1116:
case 434:
case 3355:
case 3991:
case 2319:
case 2164:
case 1286:
case 496:
case 62:
case 1041:
case 881:
case 3450:
case 2878:
case 3004:
case 507:
case 3936:
case 3592:
case 1602:
case 2282:
case 2699:
case 1705:
case 504:
case 324:
case 3073:
case 3137:
case 1288:
case 276:
case 327:
case 3043:
case 1118:
case 1624:
case 2520:
case 1842:
case 2350:
case 1993:
case 100:
case 1610:
case 2683:
case 2884:
case 1203:
case 1019:
case 2341:
case 2754:
case 779:
case 1274:
case 3556:
case 1244:
case 1970:
case 1028:
case 175:
case 2936:
case 2592:
case 1509:
case 1940:
case 3699:
case 3848:
case 96:
case 829:
case 3090:
case 151:
case 1835:
case 4074:
case 3878:
case 671:
case 3350:
case 224:
case 1598:
case 227:
case 632:
case 2043:
case 3608:
case 376:
case 3371:
case 3341:
case 482:
case 3100:
case 693:
case 28:
case 3683:
case 3514:
case 890:
case 3065:
case 1951:
case 262:
case 2487:
case 1395:
case 2326:
case 2471:
case 1963:
case 1490:
case 1615:
case 1712:
case 1373:
case 279:
case 2239:
case 1322:
case 3428:
case 1647:
case 2669:
case 2558:
case 3562:
case 947:
case 116:
case 1807:
case 2060:
case 2718:
case 877:
case 444:
case 3455:
case 3533:
case 3876:
case 447:
case 1026:
case 2419:
case 1154:
case 3164:
case 3319:
case 2525:
case 330:
case 3729:
case 1465:
case 2821:
case 823:
case 722:
case 1767:
case 3269:
case 432:
case 1538:
case 455:
case 3545:
case 3850:
case 2478:
case 955:
case 971:
case 493:
case 764:
case 3780:
case 2952:
case 1686:
case 4015:
case 2206:
case 1335:
case 1472:
case 4047:
case 4077:
case 138:
case 780:
case 3589:
case 2785:
case 2682:
case 1956:
case 2551:
case 10:
case 3421:
case 364:
case 3966:
case 1688:
case 1157:
case 1180:
case 2998:
case 647:
case 1804:
case 2035:
case 1307:
case 644:
case 74:
case 3072:
case 291:
case 1992:
case 1822:
case 1674:
case 1873:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753905601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,];
var gg_b = "1753905601/";

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
