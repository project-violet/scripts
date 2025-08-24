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
case 3173:
case 1185:
case 3371:
case 3556:
case 3760:
case 3418:
case 2464:
case 2504:
case 581:
case 786:
case 2105:
case 3666:
case 3179:
case 1078:
case 1584:
case 3967:
case 82:
case 3981:
case 1790:
case 3853:
case 3456:
case 2564:
case 3518:
case 3700:
case 2158:
case 1747:
case 247:
case 681:
case 2654:
case 163:
case 3907:
case 1643:
case 905:
case 2612:
case 1947:
case 756:
case 1884:
case 1990:
case 341:
case 2791:
case 4030:
case 1740:
case 2084:
case 2211:
case 3453:
case 869:
case 3856:
case 3162:
case 2804:
case 746:
case 1064:
case 2119:
case 3029:
case 3559:
case 3176:
case 2311:
case 3553:
case 2864:
case 3818:
case 1317:
case 1638:
case 3023:
case 1624:
case 1535:
case 3614:
case 429:
case 3731:
case 2405:
case 1828:
case 3479:
case 285:
case 152:
case 3045:
case 3876:
case 105:
case 767:
case 1892:
case 1019:
case 3082:
case 2028:
case 3118:
case 2164:
case 3802:
case 4080:
case 2416:
case 439:
case 2465:
case 2505:
case 3227:
case 1184:
case 3573:
case 1585:
case 1542:
case 3862:
case 3156:
case 2104:
case 3351:
case 3153:
case 3462:
case 1065:
case 1135:
case 1058:
case 2865:
case 1528:
case 1625:
case 2519:
case 202:
case 3159:
case 311:
case 3476:
case 1842:
case 4087:
case 1005:
case 3562:
case 2413:
case 2816:
case 424:
case 511:
case 1016:
case 2805:
case 3652:
case 168:
case 2042:
case 46:
case 2085:
case 4001:
case 1798:
case 1356:
case 1571:
case 2229:
case 2577:
case 2394:
case 590:
case 21:
case 3510:
case 1722:
case 734:
case 390:
case 1637:
case 2870:
case 1318:
case 873:
case 1256:
case 1936:
case 791:
case 2477:
case 596:
case 2631:
case 3768:
case 3410:
case 4043:
case 416:
case 1733:
case 2121:
case 2952:
case 3011:
case 2232:
case 76:
case 670:
case 121:
case 179:
case 576:
case 1077:
case 1736:
case 825:
case 893:
case 370:
case 2326:
case 3774:
case 3417:
case 1253:
case 1871:
case 2877:
case 1630:
case 194:
case 1933:
case 2752:
case 3810:
case 90:
case 131:
case 739:
case 376:
case 2226:
case 1998:
case 2157:
case 2570:
case 2344:
case 1922:
case 3912:
case 440:
case 898:
case 3641:
case 827:
case 2857:
case 522:
case 632:
case 2772:
case 3975:
case 1680:
case 1983:
case 2450:
case 465:
case 1273:
case 1820:
case 446:
case 2395:
case 450:
case 2963:
case 1427:
case 2969:
case 622:
case 532:
case 2177:
case 4088:
case 3342:
case 3385:
case 1373:
case 3110:
case 2557:
case 2170:
case 3117:
case 1262:
case 1021:
case 931:
case 1661:
case 2382:
case 1827:
case 3328:
case 2667:
case 4025:
case 1202:
case 2681:
case 2457:
case 2850:
case 878:
case 28:
case 3712:
case 1451:
case 1276:
case 921:
case 1520:
case 2245:
case 10:
case 480:
case 2282:
case 994:
case 3228:
case 2709:
case 2607:
case 1783:
case 3639:
case 3845:
case 3737:
case 3076:
case 881:
case 1092:
case 3882:
case 3123:
case 2013:
case 3002:
case 1655:
case 1813:
case 1558:
case 743:
case 3930:
case 664:
case 3250:
case 2485:
case 3221:
case 1608:
case 1465:
case 1104:
case 1516:
case 52:
case 3622:
case 753:
case 3350:
case 564:
case 242:
case 33:
case 2585:
case 1513:
case 1858:
case 2592:
case 3144:
case 3545:
case 851:
case 102:
case 3582:
case 155:
case 2534:
case 3257:
case 1413:
case 987:
case 1816:
case 3079:
case 3636:
case 369:
case 669:
case 3937:
case 3445:
case 3073:
case 841:
case 268:
case 1805:
case 3730:
case 706:
case 501:
case 713:
case 3594:
case 2142:
case 1878:
case 3377:
case 2078:
case 3961:
case 3826:
case 3423:
case 157:
case 601:
case 1404:
case 2649:
case 3987:
case 2747:
case 1158:
case 1564:
case 700:
case 3529:
case 3494:
case 2790:
case 301:
case 1741:
case 0:
case 788:
case 1991:
case 263:
case 2484:
case 2696:
case 2940:
case 3780:
case 1654:
case 3053:
case 3901:
case 2997:
case 3523:
case 1165:
case 1941:
case 2990:
case 3056:
case 2947:
case 3526:
case 2004:
case 1804:
case 2797:
case 2435:
case 2699:
case 3701:
case 1675:
case 2740:
case 3980:
case 3444:
case 1211:
case 1791:
case 748:
case 3145:
case 3182:
case 3018:
case 2128:
case 2134:
case 3823:
case 2624:
case 1864:
case 2192:
case 3829:
case 1311:
case 3544:
case 955:
case 2057:
case 4068:
case 3993:
case 2279:
case 3690:
case 2786:
case 1051:
case 3749:
case 3999:
case 673:
case 1450:
case 2680:
case 3796:
case 3743:
case 1857:
case 448:
case 3216:
case 1772:
case 3265:
case 2379:
case 2427:
case 1660:
case 1421:
case 1963:
case 91:
case 1395:
case 3924:
case 1177:
case 573:
case 1766:
case 1550:
case 896:
case 1969:
case 3316:
case 3258:
case 413:
case 2021:
case 2262:
case 1557:
case 2302:
case 1667:
case 525:
case 876:
case 1966:
case 3738:
case 18:
case 3949:
case 1703:
case 1850:
case 2986:
case 3746:
case 1457:
case 2202:
case 870:
case 1607:
case 535:
case 3640:
case 693:
case 4074:
case 325:
case 3219:
case 3799:
case 1245:
case 20:
case 11:
case 822:
case 1577:
case 1394:
case 3264:
case 2218:
case 2571:
case 3304:
case 337:
case 2948:
case 1332:
case 2722:
case 527:
case 1631:
case 483:
case 1294:
case 2936:
case 2471:
case 2256:
case 1323:
case 4054:
case 698:
case 3017:
case 398:
case 1952:
case 1121:
case 94:
case 627:
case 2939:
case 4012:
case 279:
case 3010:
case 221:
case 443:
case 1877:
case 1244:
case 3411:
case 1752:
case 2933:
case 678:
case 1470:
case 3725:
case 1344:
case 3511:
case 3278:
case 578:
case 2748:
case 2734:
case 2728:
case 2611:
case 997:
case 4053:
case 871:
case 3745:
case 3837:
case 2942:
case 3363:
case 2792:
case 2212:
case 3161:
case 3031:
case 1293:
case 401:
case 4059:
case 1246:
case 3530:
case 1958:
case 3187:
case 1238:
case 839:
case 2140:
case 1191:
case 3303:
case 2312:
case 2197:
case 1965:
case 1346:
case 1393:
case 3101:
case 3266:
case 2354:
case 1758:
case 3372:
case 1396:
case 1349:
case 3537:
case 3180:
case 834:
case 2254:
case 2742:
case 195:
case 3366:
case 1919:
case 3945:
case 3206:
case 1716:
case 1243:
case 123:
case 1296:
case 86:
case 1610:
case 3795:
case 4056:
case 2992:
case 3215:
case 824:
case 1225:
case 3352:
case 138:
case 2540:
case 1591:
case 2597:
case 2374:
case 3923:
case 43:
case 226:
case 3929:
case 128:
case 3744:
case 2440:
case 3561:
case 2735:
case 2274:
case 42:
case 3401:
case 236:
case 1904:
case 3000:
case 1047:
case 220:
case 3651:
case 3487:
case 2041:
case 1090:
case 3994:
case 3732:
case 923:
case 177:
case 3887:
case 2935:
case 1388:
case 2091:
case 2255:
case 1040:
case 2308:
case 3794:
case 3214:
case 3081:
case 1441:
case 2897:
case 2447:
case 1704:
case 737:
case 933:
case 3723:
case 3067:
case 2355:
case 2590:
case 3627:
case 3729:
case 2208:
case 3314:
case 2368:
case 2547:
case 1764:
case 1653:
case 1950:
case 19:
case 2006:
case 1569:
case 498:
case 2072:
case 856:
case 1230:
case 2886:
case 1409:
case 3843:
case 3493:
case 518:
case 3896:
case 769:
case 1659:
case 161:
case 2148:
case 1757:
case 2751:
case 1806:
case 683:
case 2015:
case 437:
case 3438:
case 2720:
case 3424:
case 1469:
case 850:
case 1330:
case 2583:
case 3546:
case 1503:
case 2589:
case 318:
case 583:
case 1463:
case 353:
case 3596:
case 2069:
case 1114:
case 2623:
case 653:
case 2063:
case 1721:
case 1618:
case 214:
case 3838:
case 3824:
case 1869:
case 2629:
case 2727:
case 2009:
case 3443:
case 1083:
case 3846:
case 2889:
case 1803:
case 1566:
case 643:
case 553:
case 1656:
case 3449:
case 3012:
case 3899:
case 1089:
case 2951:
case 2122:
case 3188:
case 2231:
case 880:
case 2486:
case 2694:
case 2883:
case 4010:
case 1809:
case 1301:
case 658:
case 3193:
case 3146:
case 1261:
case 2448:
case 2898:
case 1103:
case 2189:
case 1552:
case 2307:
case 3008:
case 259:
case 3199:
case 1387:
case 810:
case 558:
case 2682:
case 2645:
case 2839:
case 2548:
case 473:
case 99:
case 1814:
case 348:
case 1033:
case 2207:
case 3628:
case 3525:
case 3634:
case 1163:
case 1977:
case 2436:
case 2281:
case 3138:
case 3068:
case 3124:
case 1169:
case 961:
case 1676:
case 3692:
case 2836:
case 3911:
case 2052:
case 289:
case 97:
case 493:
case 3588:
case 425:
case 3074:
case 2771:
case 688:
case 2360:
case 2439:
case 300:
case 2695:
case 2598:
case 1414:
case 3241:
case 1166:
case 388:
case 1679:
case 1380:
case 435:
case 2260:
case 3143:
case 313:
case 306:
case 588:
case 2539:
case 1172:
case 2498:
case 1514:
case 606:
case 3860:
case 992:
case 3467:
case 2225:
case 339:
case 130:
case 126:
case 2964:
case 3918:
case 3753:
case 1847:
case 1735:
case 3348:
case 297:
case 2841:
case 2491:
case 228:
case 1890:
case 2090:
case 371:
case 3759:
case 3657:
case 3481:
case 2904:
case 671:
case 2047:
case 3956:
case 629:
case 770:
case 2040:
case 66:
case 3322:
case 1255:
case 277:
case 36:
case 3953:
case 624:
case 4095:
case 790:
case 3756:
case 3087:
case 1447:
case 1897:
case 691:
case 2704:
case 1268:
case 391:
case 3807:
case 1490:
case 3333:
case 3222:
case 2288:
case 3061:
case 634:
case 411:
case 3621:
case 3460:
case 591:
case 1547:
case 796:
case 3973:
case 2299:
case 1985:
case 2338:
case 4044:
case 2916:
case 1275:
case 1728:
case 2246:
case 1792:
case 192:
case 3181:
case 2399:
case 2958:
case 3762:
case 926:
case 2393:
case 1197:
case 1312:
case 2191:
case 3107:
case 1140:
case 2396:
case 2343:
case 2141:
case 1354:
case 4023:
case 1190:
case 2349:
case 451:
case 3962:
case 223:
case 1928:
case 2243:
case 3160:
case 3030:
case 1934:
case 4032:
case 3773:
case 1254:
case 732:
case 295:
case 3976:
case 3431:
case 3902:
case 2610:
case 441:
case 3677:
case 818:
case 565:
case 2552:
case 3340:
case 3808:
case 2022:
case 2103:
case 3112:
case 1267:
case 1898:
case 1448:
case 3397:
case 2301:
case 422:
case 346:
case 3175:
case 1183:
case 2109:
case 350:
case 1381:
case 646:
case 751:
case 159:
case 556:
case 2452:
case 1207:
case 2033:
case 1839:
case 2770:
case 1548:
case 432:
case 356:
case 1971:
case 550:
case 3613:
case 3855:
case 1281:
case 656:
case 741:
case 184:
case 149:
case 608:
case 2970:
case 1522:
case 3616:
case 1836:
case 2280:
case 586:
case 1433:
case 308:
case 2166:
case 2777:
case 3508:
case 3710:
case 2414:
case 1695:
case 1439:
case 1771:
case 843:
case 386:
case 1186:
case 508:
case 1422:
case 686:
case 154:
case 2380:
case 3154:
case 3390:
case 2514:
case 3568:
case 1300:
case 1886:
case 3096:
case 3475:
case 316:
case 303:
case 3043:
case 2409:
case 2569:
case 1072:
case 1006:
case 616:
case 2653:
case 2815:
case 490:
case 3854:
case 1015:
case 1489:
case 3412:
case 3049:
case 2806:
case 261:
case 2659:
case 3575:
case 2469:
case 503:
case 711:
case 516:
case 119:
case 2152:
case 858:
case 2866:
case 2463:
case 1589:
case 1626:
case 496:
case 1927:
case 2863:
case 1623:
case 2572:
case 1139:
case 806:
case 1586:
case 2869:
case 862:
case 1331:
case 1063:
case 2515:
case 114:
case 2618:
case 3664:
case 1133:
case 2721:
case 3454:
case 888:
case 2750:
case 1632:
case 2803:
case 3099:
case 27:
case 2406:
case 800:
case 667:
case 1198:
case 2083:
case 1009:
case 1486:
case 1883:
case 2957:
case 2089:
case 1003:
case 470:
case 1925:
case 1788:
case 137:
case 61:
case 1264:
case 2510:
case 2755:
case 198:
case 2011:
case 3952:
case 777:
case 49:
case 1017:
case 127:
case 3323:
case 51:
case 290:
case 1364:
case 1811:
case 461:
case 3294:
case 2410:
case 3714:
case 2768:
case 4086:
case 3631:
case 3470:
case 47:
case 797:
case 3752:
case 728:
case 4083:
case 2810:
case 2955:
case 4089:
case 3326:
case 270:
case 3570:
case 2335:
case 4:
case 2517:
case 1511:
case 1725:
case 738:
case 276:
case 404:
case 64:
case 173:
case 1743:
case 2975:
case 2754:
case 3450:
case 899:
case 232:
case 1999:
case 34:
case 3600:
case 3903:
case 2912:
case 1647:
case 1749:
case 3295:
case 3051:
case 3715:
case 1690:
case 1946:
case 1205:
case 1993:
case 1365:
case 3969:
case 65:
case 1316:
case 937:
case 4022:
case 3550:
case 3766:
case 3020:
case 1924:
case 2385:
case 3421:
case 1305:
case 1265:
case 1738:
case 3345:
case 4048:
case 135:
case 3821:
case 3382:
case 2328:
case 3769:
case 3667:
case 1313:
case 58:
case 2117:
case 1111:
case 2392:
case 3763:
case 775:
case 3906:
case 821:
case 1697:
case 3282:
case 125:
case 879:
case 2954:
case 1996:
case 2775:
case 2234:
case 2228:
case 3709:
case 2691:
case 3681:
case 4036:
case 1746:
case 894:
case 2292:
case 1949:
case 2712:
case 38:
case 1826:
case 2179:
case 3105:
case 657:
case 2967:
case 1195:
case 2173:
case 842:
case 1594:
case 2556:
case 2760:
case 3116:
case 2026:
case 1523:
case 475:
case 2606:
case 3165:
case 3035:
case 964:
case 1432:
case 1780:
case 2907:
case 3991:
case 281:
case 2859:
case 2672:
case 1277:
case 805:
case 2518:
case 3564:
case 2853:
case 2615:
case 3158:
case 3404:
case 704:
case 423:
case 3084:
case 1444:
case 2856:
case 2162:
case 3804:
case 2900:
case 2603:
case 3612:
case 1787:
case 1526:
case 1689:
case 1832:
case 1056:
case 2094:
case 2459:
case 687:
case 433:
case 2767:
case 2669:
case 882:
case 3478:
case 3864:
case 2818:
case 1370:
case 2023:
case 1426:
case 2960:
case 1018:
case 2029:
case 3119:
case 251:
case 2876:
case 2045:
case 2473:
case 12:
case 812:
case 1129:
case 77:
case 1633:
case 3164:
case 3034:
case 3416:
case 3558:
case 4090:
case 1002:
case 3565:
case 2614:
case 685:
case 3819:
case 385:
case 3092:
case 1882:
case 863:
case 1639:
case 517:
case 2573:
case 7:
case 2862:
case 2156:
case 3516:
case 1622:
case 438:
case 3465:
case 317:
case 1132:
case 585:
case 3505:
case 1698:
case 617:
case 3865:
case 602:
case 655:
case 1582:
case 3519:
case 211:
case 1545:
case 2576:
case 366:
case 2462:
case 2153:
case 1357:
case 2502:
case 3513:
case 1126:
case 502:
case 1730:
case 555:
case 2652:
case 3042:
case 1895:
case 1445:
case 3674:
case 2476:
case 2095:
case 360:
case 2251:
case 2562:
case 761:
case 660:
case 3816:
case 1257:
case 807:
case 2402:
case 2931:
case 1285:
case 3851:
case 3273:
case 1242:
case 3983:
case 273:
case 2796:
case 1641:
case 449:
case 484:
case 3786:
case 3527:
case 3279:
case 2690:
case 2993:
case 3373:
case 1342:
case 3171:
case 2265:
case 454:
case 50:
case 3827:
case 792:
case 2319:
case 3420:
case 3551:
case 3376:
case 2111:
case 976:
case 3262:
case 1117:
case 60:
case 1691:
case 4052:
case 1234:
case 1775:
case 2640:
case 2996:
case 3783:
case 3601:
case 3050:
case 30:
case 2799:
case 3451:
case 1292:
case 3986:
case 2746:
case 2213:
case 3948:
case 419:
case 574:
case 2925:
case 3722:
case 1708:
case 3218:
case 2304:
case 3798:
case 227:
case 3070:
case 1974:
case 1284:
case 4072:
case 3733:
case 1011:
case 1768:
case 1410:
case 399:
case 1817:
case 3739:
case 190:
case 2204:
case 2411:
case 3630:
case 2378:
case 3871:
case 1417:
case 1774:
case 621:
case 720:
case 3120:
case 1968:
case 2278:
case 2511:
case 2725:
case 1517:
case 1335:
case 3998:
case 414:
case 631:
case 579:
case 176:
case 730:
case 3359:
case 652:
case 1802:
case 264:
case 2633:
case 2250:
case 3442:
case 3019:
case 3892:
case 1082:
case 2129:
case 3485:
case 981:
case 1045:
case 352:
case 2495:
case 2076:
case 2737:
case 2639:
case 2882:
case 420:
case 4041:
case 1479:
case 3828:
case 2002:
case 3013:
case 847:
case 642:
case 3542:
case 2194:
case 1573:
case 426:
case 2595:
case 2062:
case 857:
case 2648:
case 111:
case 1159:
case 1220:
case 719:
case 2545:
case 3534:
case 3528:
case 3065:
case 1502:
case 1462:
case 2144:
case 1576:
case 1320:
case 2445:
case 2895:
case 2730:
case 368:
case 887:
case 582:
case 1402:
case 1562:
case 2079:
case 3842:
case 941:
case 3885:
case 1873:
case 2195:
case 3584:
case 3078:
case 2532:
case 492:
case 563:
case 1179:
case 817:
case 512:
case 1026:
case 1760:
case 1556:
case 2429:
case 3185:
case 3310:
case 1173:
case 1672:
case 1044:
case 2780:
case 3484:
case 363:
case 1907:
case 2901:
case 663:
case 2523:
case 3835:
case 3747:
case 3649:
case 612:
case 1456:
case 2277:
case 2494:
case 2844:
case 3210:
case 2059:
case 3699:
case 3435:
case 3217:
case 1032:
case 1453:
case 2683:
case 1707:
case 2980:
case 860:
case 607:
case 141:
case 749:
case 784:
case 3646:
case 3884:
case 1900:
case 2689:
case 2526:
case 2787:
case 3947:
case 3624:
case 1023:
case 866:
case 3192:
case 1176:
case 911:
case 507:
case 151:
case 2145:
case 759:
case 855:
case 1663:
case 3134:
case 1960:
case 2823:
case 2446:
case 956:
case 3148:
case 1049:
case 3751:
case 2125:
case 2849:
case 2635:
case 2538:
case 3072:
case 768:
case 3644:
case 1475:
case 116:
case 1096:
case 2546:
case 3626:
case 782:
case 3136:
case 2599:
case 3063:
case 2824:
case 1155:
case 614:
case 3727:
case 3586:
case 3139:
case 1038:
case 1168:
case 742:
case 1554:
case 3122:
case 2449:
case 1604:
case 4077:
case 3883:
case 421:
case 2846:
case 2075:
case 2684:
case 980:
case 3198:
case 167:
case 705:
case 1099:
case 1454:
case 3536:
case 2008:
case 2199:
case 3822:
case 2888:
case 659:
case 549:
case 2193:
case 910:
case 3267:
case 3189:
case 2391:
case 3833:
case 384:
case 2124:
case 2068:
case 89:
case 1855:
case 1613:
case 3281:
case 140:
case 649:
case 684:
case 2692:
case 707:
case 3682:
case 3548:
case 1474:
case 3839:
case 3645:
case 1240:
case 2525:
case 3207:
case 3360:
case 3200:
case 3598:
case 1247:
case 1874:
case 3439:
case 1710:
case 1508:
case 712:
case 1290:
case 1605:
case 344:
case 1455:
case 2074:
case 180:
case 554:
case 1917:
case 40:
case 213:
case 2143:
case 4021:
case 3539:
case 2825:
case 354:
case 3533:
case 1025:
case 3422:
case 262:
case 2488:
case 544:
case 186:
case 3186:
case 929:
case 1167:
case 2995:
case 1037:
case 2203:
case 897:
case 1979:
case 3728:
case 3611:
case 2430:
case 3734:
case 3275:
case 463:
case 1831:
case 2837:
case 1973:
case 2782:
case 2263:
case 3140:
case 838:
case 939:
case 3312:
case 2101:
case 1762:
case 2530:
case 2309:
case 4078:
case 2269:
case 1386:
case 1962:
case 1531:
case 2180:
case 3354:
case 2266:
case 2306:
case 672:
case 1779:
case 2830:
case 2795:
case 2671:
case 4004:
case 1773:
case 96:
case 2272:
case 1030:
case 3928:
case 2060:
case 326:
case 2587:
case 630:
case 520:
case 1581:
case 1336:
case 536:
case 2352:
case 1507:
case 3374:
case 3597:
case 2620:
case 2501:
case 442:
case 336:
case 2651:
case 320:
case 2487:
case 2000:
case 779:
case 3041:
case 1759:
case 171:
case 1481:
case 636:
case 129:
case 2880:
case 1236:
case 3890:
case 2744:
case 1407:
case 1567:
case 4019:
case 405:
case 1800:
case 3497:
case 2932:
case 1753:
case 2794:
case 1807:
case 3308:
case 2081:
case 191:
case 2214:
case 799:
case 3897:
case 1239:
case 3447:
case 1756:
case 823:
case 1560:
case 1001:
case 468:
case 3091:
case 3255:
case 124:
case 3784:
case 2480:
case 2729:
case 3208:
case 2627:
case 1867:
case 1500:
case 1339:
case 1298:
case 1718:
case 1061:
case 2723:
case 1131:
case 1222:
case 3355:
case 2137:
case 4058:
case 134:
case 3109:
case 246:
case 2175:
case 250:
case 3387:
case 1888:
case 1199:
case 3662:
case 819:
case 918:
case 1008:
case 2808:
case 2340:
case 3103:
case 2397:
case 3261:
case 504:
case 1146:
case 3301:
case 4020:
case 1692:
case 787:
case 983:
case 3287:
case 2910:
case 1124:
case 2855:
case 3977:
case 2240:
case 3163:
case 3033:
case 3452:
case 1055:
case 1291:
case 3814:
case 2868:
case 3361:
case 2474:
case 2619:
case 604:
case 2290:
case 2508:
case 3777:
case 3166:
case 309:
case 2605:
case 188:
case 2468:
case 2710:
case 2874:
case 2247:
case 100:
case 280:
case 1685:
case 3970:
case 2616:
case 208:
case 2408:
case 2154:
case 2390:
case 4027:
case 3514:
case 2568:
case 1341:
case 3172:
case 106:
case 286:
case 757:
case 1488:
case 162:
case 3048:
case 1149:
case 3380:
case 3563:
case 760:
case 3806:
case 2412:
case 2049:
case 3403:
case 361:
case 3659:
case 3872:
case 3086:
case 183:
case 3409:
case 2096:
case 69:
case 1499:
case 39:
case 849:
case 1054:
case 884:
case 3815:
case 948:
case 3152:
case 3866:
case 766:
case 2512:
case 2174:
case 41:
case 1593:
case 3330:
case 3509:
case 3469:
case 1424:
case 1438:
case 958:
case 913:
case 717:
case 3869:
case 1838:
case 3337:
case 2664:
case 3466:
case 3:
case 3506:
case 2038:
case 2024:
case 962:
case 2093:
case 2046:
case 3957:
case 900:
case 1188:
case 1012:
case 785:
case 2604:
case 3656:
case 3415:
case 2108:
case 3566:
case 3750:
case 2454:
case 267:
case 3406:
case 2812:
case 2099:
case 1684:
case 1496:
case 1893:
case 143:
case 2336:
case 417:
case 2581:
case 3964:
case 2918:
case 1060:
case 1130:
case 528:
case 2860:
case 1461:
case 3591:
case 597:
case 1352:
case 229:
case 3090:
case 271:
case 485:
case 4092:
case 3904:
case 2956:
case 1401:
case 628:
case 2800:
case 397:
case 697:
case 4034:
case 2567:
case 1744:
case 2080:
case 1252:
case 2756:
case 2239:
case 2087:
case 291:
case 2959:
case 3441:
case 1794:
case 1007:
case 224:
case 1944:
case 3040:
case 677:
case 2881:
case 1887:
case 3388:
case 377:
case 445:
case 2650:
case 1732:
case 2460:
case 2718:
case 3764:
case 2621:
case 2339:
case 1314:
case 1627:
case 71:
case 1729:
case 1580:
case 2222:
case 1067:
case 2131:
case 455:
case 2979:
case 3905:
case 3713:
case 2702:
case 1031:
case 1203:
case 2037:
case 2289:
case 1995:
case 78:
case 4035:
case 1782:
case 1837:
case 2670:
case 820:
case 1369:
case 2283:
case 3393:
case 2762:
case 3191:
case 2389:
case 2107:
case 3224:
case 3399:
case 3238:
case 1269:
case 575:
case 2383:
case 1530:
case 1180:
case 3349:
case 2531:
case 333:
case 3343:
case 3396:
case 1372:
case 2100:
case 3758:
case 633:
case 523:
case 1215:
case 2976:
case 3610:
case 2431:
case 3913:
case 2286:
case 2677:
case 3243:
case 2160:
case 4084:
case 1272:
case 2773:
case 1945:
case 1982:
case 74:
case 3919:
case 395:
case 533:
case 623:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756015201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,];
var gg_b = "1756015201/";

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
