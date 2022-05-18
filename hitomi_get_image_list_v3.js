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
case 978:
case 2259:
case 491:
case 3162:
case 2383:
case 4076:
case 2450:
case 669:
case 868:
case 2949:
case 803:
case 3826:
case 208:
case 2199:
case 3462:
case 871:
case 1126:
case 2970:
case 2600:
case 982:
case 2482:
case 932:
case 1661:
case 2135:
case 2708:
case 296:
case 3800:
case 3775:
case 2886:
case 3365:
case 2170:
case 3912:
case 3607:
case 1123:
case 349:
case 736:
case 988:
case 1221:
case 2473:
case 3537:
case 3478:
case 10:
case 2449:
case 3173:
case 2033:
case 1685:
case 178:
case 1923:
case 1511:
case 1614:
case 1496:
case 694:
case 1914:
case 1746:
case 1024:
case 2908:
case 317:
case 3020:
case 133:
case 1263:
case 3399:
case 3027:
case 2241:
case 2526:
case 2983:
case 3425:
case 2540:
case 4085:
case 1651:
case 3467:
case 2159:
case 1385:
case 185:
case 1958:
case 2103:
case 511:
case 3776:
case 1783:
case 918:
case 1005:
case 2918:
case 2160:
case 1252:
case 2086:
case 2981:
case 2394:
case 3728:
case 659:
case 2148:
case 929:
case 3454:
case 787:
case 1698:
case 550:
case 3182:
case 2039:
case 834:
case 994:
case 72:
case 1841:
case 177:
case 1553:
case 564:
case 3913:
case 1689:
case 1118:
case 874:
case 114:
case 1387:
case 2651:
case 2679:
case 1638:
case 3266:
case 1351:
case 799:
case 1686:
case 2924:
case 2771:
case 2564:
case 2641:
case 2713:
case 3470:
case 19:
case 668:
case 3657:
case 456:
case 1059:
case 3726:
case 1266:
case 2762:
case 2378:
case 3353:
case 3902:
case 2667:
case 3991:
case 821:
case 1284:
case 259:
case 3419:
case 1469:
case 7:
case 1672:
case 662:
case 2309:
case 1191:
case 3280:
case 9:
case 2811:
case 2292:
case 699:
case 3879:
case 2965:
case 4030:
case 2880:
case 2120:
case 226:
case 897:
case 220:
case 2827:
case 278:
case 92:
case 1479:
case 1977:
case 3156:
case 836:
case 329:
case 1688:
case 3009:
case 2439:
case 396:
case 1875:
case 3258:
case 2388:
case 496:
case 1001:
case 1838:
case 2352:
case 2860:
case 1008:
case 300:
case 1489:
case 410:
case 3174:
case 146:
case 442:
case 532:
case 1457:
case 772:
case 4018:
case 4089:
case 3387:
case 2051:
case 1908:
case 4092:
case 2045:
case 3956:
case 726:
case 1827:
case 2626:
case 1239:
case 1555:
case 2418:
case 2577:
case 3886:
case 2829:
case 888:
case 2196:
case 2215:
case 677:
case 3209:
case 2585:
case 1934:
case 492:
case 3799:
case 1066:
case 681:
case 1359:
case 4075:
case 2608:
case 3859:
case 3170:
case 3405:
case 877:
case 395:
case 51:
case 3971:
case 1234:
case 1336:
case 1472:
case 158:
case 3592:
case 1242:
case 3241:
case 3033:
case 357:
case 2011:
case 2999:
case 3736:
case 322:
case 3519:
case 1414:
case 1463:
case 2553:
case 3491:
case 3829:
case 873:
case 3603:
case 3124:
case 1308:
case 271:
case 2557:
case 1643:
case 1570:
case 4008:
case 66:
case 3816:
case 1215:
case 2455:
case 132:
case 1579:
case 2454:
case 90:
case 2943:
case 519:
case 1204:
case 1282:
case 2921:
case 2194:
case 242:
case 3767:
case 4054:
case 3850:
case 3240:
case 1597:
case 2064:
case 3469:
case 4002:
case 1718:
case 94:
case 2305:
case 1480:
case 2911:
case 3194:
case 1172:
case 2642:
case 2166:
case 251:
case 2730:
case 1870:
case 1941:
case 2737:
case 78:
case 272:
case 3618:
case 312:
case 1808:
case 2229:
case 1054:
case 1141:
case 1475:
case 1483:
case 3337:
case 243:
case 1444:
case 3038:
case 3698:
case 3275:
case 2260:
case 1549:
case 1415:
case 1944:
case 1037:
case 338:
case 142:
case 2958:
case 2423:
case 1969:
case 1710:
case 2725:
case 1823:
case 138:
case 3796:
case 3066:
case 3527:
case 4035:
case 3654:
case 2764:
case 3834:
case 3120:
case 1720:
case 1670:
case 2320:
case 3940:
case 497:
case 2576:
case 711:
case 2347:
case 40:
case 262:
case 2429:
case 3691:
case 2753:
case 2609:
case 3590:
case 462:
case 674:
case 318:
case 1858:
case 61:
case 1202:
case 246:
case 3513:
case 623:
case 3948:
case 200:
case 3088:
case 1842:
case 2835:
case 3813:
case 2770:
case 1081:
case 2108:
case 837:
case 2283:
case 4063:
case 45:
case 1089:
case 1967:
case 3876:
case 1127:
case 567:
case 2729:
case 3998:
case 3584:
case 3673:
case 1042:
case 1740:
case 1087:
case 2868:
case 1462:
case 2293:
case 2374:
case 2282:
case 1647:
case 3569:
case 467:
case 2957:
case 1582:
case 2872:
case 3138:
case 1936:
case 2333:
case 749:
case 2620:
case 1762:
case 832:
case 3269:
case 321:
case 1159:
case 237:
case 3980:
case 454:
case 1619:
case 1966:
case 2375:
case 721:
case 895:
case 647:
case 610:
case 1734:
case 4036:
case 3599:
case 1065:
case 2688:
case 3236:
case 3609:
case 2927:
case 1422:
case 3774:
case 3412:
case 1390:
case 3312:
case 3805:
case 1273:
case 4064:
case 2495:
case 3410:
case 1437:
case 2252:
case 627:
case 643:
case 1726:
case 693:
case 483:
case 3871:
case 3019:
case 2329:
case 1874:
case 275:
case 2201:
case 3711:
case 894:
case 330:
case 3567:
case 3843:
case 3487:
case 60:
case 510:
case 3128:
case 105:
case 3297:
case 2087:
case 1067:
case 1265:
case 116:
case 1596:
case 2745:
case 3638:
case 2893:
case 1436:
case 1135:
case 535:
case 1782:
case 3771:
case 2012:
case 3860:
case 3034:
case 2619:
case 1152:
case 42:
case 152:
case 2720:
case 1545:
case 2935:
case 1337:
case 387:
case 742:
case 1909:
case 1804:
case 2912:
case 1813:
case 1659:
case 1090:
case 413:
case 1109:
case 3407:
case 3367:
case 493:
case 379:
case 3135:
case 2890:
case 2706:
case 3640:
case 2343:
case 1793:
case 1433:
case 2310:
case 341:
case 3697:
case 2007:
case 174:
case 3198:
case 989:
case 1482:
case 2948:
case 1122:
case 1473:
case 2775:
case 517:
case 2571:
case 2861:
case 2416:
case 3423:
case 3515:
case 2820:
case 14:
case 3350:
case 385:
case 452:
case 1299:
case 2131:
case 820:
case 2516:
case 2163:
case 2371:
case 13:
case 2232:
case 2536:
case 2552:
case 1091:
case 3255:
case 3242:
case 3974:
case 588:
case 2875:
case 2535:
case 764:
case 2580:
case 2022:
case 1868:
case 585:
case 2931:
case 2217:
case 2106:
case 2562:
case 3501:
case 1822:
case 239:
case 2311:
case 1845:
case 342:
case 1120:
case 2059:
case 3385:
case 3922:
case 1293:
case 1078:
case 1184:
case 995:
case 1031:
case 2359:
case 3048:
case 2274:
case 2370:
case 665:
case 3712:
case 231:
case 3549:
case 3784:
case 276:
case 2612:
case 887:
case 3342:
case 4001:
case 198:
case 1124:
case 2524:
case 1149:
case 3042:
case 1820:
case 612:
case 3302:
case 1427:
case 1551:
case 479:
case 3175:
case 1786:
case 907:
case 753:
case 34:
case 1194:
case 3645:
case 56:
case 1895:
case 378:
case 1216:
case 2514:
case 946:
case 1633:
case 3304:
case 3400:
case 3397:
case 2233:
case 2014:
case 1709:
case 1411:
case 2602:
case 578:
case 1836:
case 980:
case 4011:
case 738:
case 2710:
case 2959:
case 3299:
case 3789:
case 244:
case 3890:
case 632:
case 1757:
case 2180:
case 2588:
case 4073:
case 1100:
case 3325:
case 3705:
case 206:
case 3604:
case 1523:
case 2649:
case 746:
case 1680:
case 281:
case 2210:
case 1964:
case 2874:
case 2883:
case 2177:
case 2862:
case 767:
case 886:
case 2856:
case 2115:
case 1246:
case 923:
case 2477:
case 1704:
case 1650:
case 2799:
case 2894:
case 427:
case 1933:
case 365:
case 1930:
case 2825:
case 359:
case 812:
case 757:
case 3077:
case 2016:
case 2533:
case 707:
case 857:
case 740:
case 965:
case 3766:
case 3026:
case 3468:
case 397:
case 2008:
case 3049:
case 1723:
case 1189:
case 460:
case 3798:
case 1460:
case 3010:
case 434:
case 3132:
case 1057:
case 1646:
case 896:
case 3218:
case 3461:
case 2672:
case 147:
case 2318:
case 1470:
case 822:
case 2441:
case 566:
case 3653:
case 4012:
case 1244:
case 1725:
case 3371:
case 1729:
case 310:
case 1201:
case 905:
case 543:
case 3243:
case 4016:
case 211:
case 652:
case 2133:
case 3381:
case 3909:
case 3623:
case 938:
case 3096:
case 440:
case 2582:
case 3262:
case 1534:
case 1356:
case 3594:
case 1664:
case 577:
case 3145:
case 1701:
case 1392:
case 343:
case 3750:
case 3764:
case 3914:
case 3504:
case 1946:
case 3483:
case 1738:
case 638:
case 925:
case 2235:
case 2632:
case 2351:
case 2277:
case 2584:
case 3394:
case 1608:
case 3605:
case 2489:
case 3916:
case 3723:
case 1588:
case 3901:
case 3043:
case 3731:
case 813:
case 403:
case 3358:
case 3516:
case 2674:
case 3062:
case 2682:
case 1864:
case 1047:
case 4010:
case 2599:
case 1345:
case 704:
case 443:
case 2406:
case 62:
case 2925:
case 1099:
case 3083:
case 106:
case 981:
case 1763:
case 797:
case 1211:
case 2766:
case 1581:
case 288:
case 161:
case 1441:
case 3413:
case 2683:
case 1984:
case 3930:
case 1368:
case 2164:
case 3017:
case 1594:
case 1004:
case 748:
case 1993:
case 2444:
case 2484:
case 391:
case 2445:
case 249:
case 31:
case 1395:
case 3446:
case 769:
case 2992:
case 3235:
case 2025:
case 2387:
case 3500:
case 1448:
case 26:
case 2879:
case 1110:
case 2537:
case 2299:
case 2656:
case 780:
case 2586:
case 3724:
case 3973:
case 3809:
case 1917:
case 1206:
case 1927:
case 2107:
case 1606:
case 2574:
case 2500:
case 3936:
case 629:
case 1654:
case 1849:
case 2172:
case 1926:
case 3957:
case 2207:
case 2709:
case 2010:
case 1739:
case 1548:
case 985:
case 2623:
case 184:
case 1699:
case 3681:
case 1495:
case 2520:
case 1584:
case 1316:
case 2061:
case 302:
case 4069:
case 309:
case 3108:
case 3841:
case 1703:
case 4013:
case 3213:
case 3591:
case 3664:
case 835:
case 1108:
case 3267:
case 110:
case 1715:
case 21:
case 2048:
case 2662:
case 3627:
case 3994:
case 1408:
case 2819:
case 3917:
case 656:
case 2749:
case 1106:
case 3193:
case 3025:
case 635:
case 3181:
case 1331:
case 539:
case 949:
case 0:
case 2296:
case 2884:
case 2652:
case 3146:
case 287:
case 3176:
case 1447:
case 3252:
case 3958:
case 2143:
case 3765:
case 2265:
case 170:
case 2181:
case 3870:
case 1660:
case 3944:
case 3873:
case 355:
case 1829:
case 603:
case 3717:
case 1527:
case 1567:
case 422:
case 3868:
case 446:
case 2479:
case 3003:
case 1693:
case 3332:
case 3906:
case 3572:
case 2613:
case 2777:
case 1388:
case 3579:
case 805:
case 2513:
case 692:
case 1577:
case 3116:
case 1623:
case 435:
case 2139:
case 2702:
case 487:
case 2889:
case 2268:
case 2146:
case 2058:
case 3646:
case 1396:
case 3360:
case 2072:
case 1227:
case 2648:
case 2089:
case 2222:
case 2116:
case 1488:
case 418:
case 3303:
case 2195:
case 3073:
case 3772:
case 171:
case 1161:
case 1780:
case 1:
case 4028:
case 3001:
case 3743:
case 3206:
case 2091:
case 2246:
case 2491:
case 1222:
case 3848:
case 2614:
case 163:
case 3136:
case 3570:
case 2858:
case 1706:
case 927:
case 1949:
case 844:
case 3652:
case 1622:
case 1600:
case 3993:
case 1277:
case 438:
case 1175:
case 4019:
case 3839:
case 1148:
case 2716:
case 2756:
case 3338:
case 217:
case 1417:
case 3286:
case 169:
case 1919:
case 4078:
case 2226:
case 416:
case 3530:
case 2432:
case 839:
case 1176:
case 3701:
case 1778:
case 2357:
case 2480:
case 4077:
case 3119:
case 3544:
case 3677:
case 49:
case 3420:
case 2621:
case 2300:
case 376:
case 3964:
case 1716:
case 3642:
case 1115:
case 3306:
case 826:
case 3624:
case 153:
case 344:
case 1866:
case 1942:
case 3880:
case 473:
case 2693:
case 1831:
case 3238:
case 2724:
case 2773:
case 3079:
case 2054:
case 488:
case 3310:
case 428:
case 1296:
case 696:
case 849:
case 3427:
case 3422:
case 2389:
case 883:
case 3179:
case 3161:
case 2763:
case 2506:
case 3641:
case 2977:
case 2544:
case 375:
case 3109:
case 3029:
case 155:
case 2036:
case 790:
case 4061:
case 1902:
case 1022:
case 2722:
case 2386:
case 1801:
case 680:
case 2275:
case 996:
case 1609:
case 1522:
case 2270:
case 1752:
case 3308:
case 3935:
case 3566:
case 195:
case 936:
case 3080:
case 3546:
case 439:
case 1658:
case 1913:
case 2757:
case 2085:
case 1195:
case 940:
case 2332:
case 563:
case 1662:
case 408:
case 2077:
case 2633:
case 1339:
case 1143:
case 3463:
case 3540:
case 2521:
case 2052:
case 1890:
case 2818:
case 3550:
case 2681:
case 3191:
case 2595:
case 3954:
case 1134:
case 1855:
case 1306:
case 1190:
case 1237:
case 2404:
case 3036:
case 17:
case 1183:
case 1572:
case 2393:
case 2788:
case 4059:
case 1554:
case 977:
case 3153:
case 966:
case 1988:
case 1136:
case 3679:
case 2155:
case 1696:
case 1530:
case 1355:
case 3311:
case 1652:
case 2735:
case 2488:
case 197:
case 2316:
case 941:
case 2960:
case 1327:
case 2273:
case 1117:
case 1830:
case 2704:
case 935:
case 3988:
case 4053:
case 1102:
case 437:
case 289:
case 2253:
case 3094:
case 1288:
case 3345:
case 706:
case 1494:
case 2944:
case 1082:
case 575:
case 2791:
case 3960:
case 961:
case 1575:
case 3202:
case 1755:
case 3721:
case 2191:
case 3878:
case 1569:
case 682:
case 2838:
case 1369:
case 3:
case 3250:
case 1063:
case 1305:
case 2442:
case 2852:
case 730:
case 405:
case 1040:
case 1828:
case 2440:
case 2734:
case 1303:
case 3054:
case 763:
case 1928:
case 2784:
case 2492:
case 286:
case 2785:
case 269:
case 3457:
case 3004:
case 611:
case 793:
case 3075:
case 2092:
case 2593:
case 2057:
case 3383:
case 2472:
case 775:
case 3208:
case 2451:
case 2836:
case 136:
case 1309:
case 3380:
case 695:
case 1986:
case 3216:
case 1922:
case 972:
case 2559:
case 3791:
case 2381:
case 2397:
case 2837:
case 4043:
case 1278:
case 2843:
case 2165:
case 920:
case 3762:
case 663:
case 724:
case 2638:
case 3950:
case 2543:
case 3700:
case 1887:
case 3014:
case 2655:
case 2769:
case 345:
case 3336:
case 74:
case 1178:
case 3561:
case 2110:
case 818:
case 3095:
case 4071:
case 3678:
case 1497:
case 2483:
case 3863:
case 1013:
case 3769:
case 3015:
case 3614:
case 3910:
case 3490:
case 3390:
case 2797:
case 2401:
case 2021:
case 3055:
case 2531:
case 2645:
case 852:
case 1897:
case 2130:
case 3172:
case 1346:
case 1682:
case 3778:
case 28:
case 998:
case 3103:
case 1521:
case 3983:
case 865:
case 3000:
case 1119:
case 3273:
case 1060:
case 2132:
case 2334:
case 3961:
case 926:
case 1891:
case 2538:
case 2726:
case 2684:
case 201:
case 2542:
case 1617:
case 3246:
case 3722:
case 3278:
case 2372:
case 968:
case 716:
case 364:
case 2618:
case 3825:
case 700:
case 1217:
case 1705:
case 2227:
case 725:
case 2294:
case 1744:
case 230:
case 1319:
case 3190:
case 3779:
case 2360:
case 1046:
case 2914:
case 3024:
case 729:
case 219:
case 4093:
case 3551:
case 952:
case 336:
case 2030:
case 4072:
case 1259:
case 2188:
case 1232:
case 2457:
case 23:
case 1907:
case 602:
case 3137:
case 3710:
case 3488:
case 1574:
case 308:
case 1796:
case 2173:
case 2765:
case 3264:
case 3189:
case 1843:
case 4057:
case 1038:
case 890:
case 4033:
case 1192:
case 1503:
case 3508:
case 773:
case 3741:
case 1797:
case 1146:
case 199:
case 3227:
case 1754:
case 3057:
case 2808:
case 622:
case 2078:
case 3229:
case 3686:
case 390:
case 1817:
case 1791:
case 2646:
case 768:
case 3786:
case 1401:
case 4005:
case 1291:
case 1663:
case 3259:
case 3927:
case 3852:
case 1163:
case 2281:
case 223:
case 1854:
case 555:
case 2356:
case 53:
case 2740:
case 2236:
case 3636:
case 909:
case 2322:
case 1644:
case 2314:
case 3708:
case 2040:
case 96:
case 2109:
case 1929:
case 2899:
case 892:
case 3865:
case 1138:
case 412:
case 2504:
case 1405:
case 597:
case 3568:
case 1209:
case 2689:
case 2794:
case 3493:
case 705:
case 3688:
case 407:
case 1272:
case 4082:
case 3100:
case 2453:
case 3932:
case 1169:
case 3450:
case 214:
case 2002:
case 3729:
case 4056:
case 3888:
case 3616:
case 3732:
case 2237:
case 3755:
case 3534:
case 3735:
case 1039:
case 2398:
case 2746:
case 1730:
case 1041:
case 2824:
case 3047:
case 3058:
case 3256:
case 845:
case 634:
case 1048:
case 3347:
case 1640:
case 2821:
case 2639:
case 3801:
case 859:
case 3298:
case 1861:
case 644:
case 3211:
case 1171:
case 1364:
case 2986:
case 2561:
case 475:
case 2518:
case 2032:
case 3761:
case 148:
case 3442:
case 1546:
case 616:
case 3760:
case 258:
case 1612:
case 1493:
case 2666:
case 3719:
case 471:
case 1256:
case 3184:
case 70:
case 2789:
case 1821:
case 1583:
case 1376:
case 79:
case 3499:
case 2306:
case 1735:
case 2728:
case 3113:
case 2361:
case 3067:
case 3445:
case 1229:
case 1435:
case 3444:
case 1112:
case 2604:
case 18:
case 1714:
case 3438:
case 3585:
case 3615:
case 2630:
case 2809:
case 2184:
case 448:
case 1506:
case 1669:
case 2269:
case 2112:
case 3667:
case 2405:
case 3739:
case 2901:
case 3141:
case 1230:
case 3612:
case 119:
case 3013:
case 1776:
case 2934:
case 3374:
case 4060:
case 2906:
case 1945:
case 2379:
case 2062:
case 1805:
case 3364:
case 1032:
case 1509:
case 953:
case 1007:
case 1687:
case 2291:
case 2123:
case 2424:
case 4045:
case 2037:
case 2985:
case 2522:
case 3806:
case 81:
case 30:
case 2715:
case 2279:
case 538:
case 109:
case 1020:
case 3514:
case 794:
case 2354:
case 4048:
case 2213:
case 990:
case 3126:
case 745:
case 1559:
case 2408:
case 3947:
case 1079:
case 2183:
case 3127:
case 4041:
case 65:
case 3384:
case 112:
case 3608:
case 3804:
case 1802:
case 3695:
case 2780:
case 1011:
case 801:
case 1628:
case 2867:
case 1370:
case 2129:
case 542:
case 162:
case 2592:
case 3031:
case 465:
case 1972:
case 2768:
case 685:
case 1249:
case 2936:
case 2158:
case 569:
case 782:
case 260:
case 1423:
case 1261:
case 1250:
case 3291:
case 75:
case 2657:
case 509:
case 1863:
case 346:
case 3086:
case 3178:
case 701:
case 2786:
case 1033:
case 2733:
case 3999:
case 1275:
case 3154:
case 2563:
case 1015:
case 3378:
case 1014:
case 833:
case 4062:
case 16:
case 2950:
case 530:
case 4055:
case 999:
case 595:
case 3289:
case 4022:
case 3195:
case 386:
case 2628:
case 2853:
case 144:
case 1300:
case 3373:
case 1315:
case 373:
case 3082:
case 2304:
case 1722:
case 2587:
case 1310:
case 2239:
case 2844:
case 3433:
case 4088:
case 1373:
case 188:
case 549:
case 3669:
case 537:
case 2989:
case 1975:
case 866:
case 2932:
case 3151:
case 2363:
case 3581:
case 1634:
case 3528:
case 2325:
case 3588:
case 137:
case 547:
case 3897:
case 3396:
case 1193:
case 754:
case 350:
case 3502:
case 1924:
case 2556:
case 2353:
case 1464:
case 1294:
case 3539:
case 2066:
case 891:
case 3401:
case 2312:
case 1991:
case 2831:
case 959:
case 3068:
case 3484:
case 3226:
case 1116:
case 2136:
case 3494:
case 2413:
case 3388:
case 1107:
case 3112:
case 3368:
case 3937:
case 3989:
case 3715:
case 1810:
case 1302:
case 1542:
case 1598:
case 3647:
case 3668:
case 3959:
case 1247:
case 20:
case 2826:
case 1578:
case 1056:
case 3165:
case 2121:
case 3578:
case 2966:
case 168:
case 559:
case 2870:
case 1420:
case 2954:
case 2041:
case 2727:
case 4058:
case 1983:
case 1635:
case 2349:
case 3091:
case 2560:
case 2589:
case 1884:
case 2807:
case 2692:
case 914:
case 1906:
case 3942:
case 3817:
case 2787:
case 1092:
case 3408:
case 3706:
case 1978:
case 2952:
case 445:
case 720:
case 862:
case 2301:
case 2548:
case 3543:
case 1777:
case 1404:
case 583:
case 2303:
case 3301:
case 2869:
case 1694:
case 3555:
case 227:
case 3204:
case 240:
case 2256:
case 291:
case 3874:
case 1476:
case 947:
case 958:
case 973:
case 2117:
case 3740:
case 3375:
case 520:
case 333:
case 3979:
case 2497:
case 3507:
case 3393:
case 313:
case 3435:
case 1750:
case 466:
case 3872:
case 1006:
case 441:
case 658:
case 673:
case 4091:
case 626:
case 370:
case 3458:
case 2575:
case 122:
case 1218:
case 2067:
case 1104:
case 2610:
case 2644:
case 1760:
case 3292:
case 1406:
case 558:
case 562:
case 525:
case 811:
case 4049:
case 3305:
case 93:
case 1666:
case 2902:
case 2369:
case 1121:
case 2551:
case 3925:
case 2503:
case 4026:
case 1077:
case 3768:
case 2832:
case 2494:
case 4050:
case 2782:
case 2459:
case 3192:
case 2380:
case 1097:
case 3596:
case 880:
case 2464:
case 3759:
case 3084:
case 3831:
case 1700:
case 618:
case 3459:
case 3061:
case 1989:
case 2663:
case 2566:
case 3619:
case 216:
case 1903:
case 879:
case 2456:
case 1440:
case 2974:
case 2125:
case 1196:
case 3089:
case 1338:
case 3330:
case 1761:
case 4047:
case 3272:
case 885:
case 2772:
case 2248:
case 3123:
case 154:
case 104:
case 468:
case 1224:
case 2607:
case 3404:
case 3818:
case 394:
case 3651:
case 4065:
case 2328:
case 1955:
case 3812:
case 2691:
case 2400:
case 3907:
case 1691:
case 2622:
case 2994:
case 3215:
case 3366:
case 1779:
case 2913:
case 1547:
case 1995:
case 930:
case 2915:
case 1344:
case 2420:
case 2250:
case 4095:
case 1697:
case 1824:
case 2285:
case 3314:
case 1815:
case 2961:
case 1641:
case 2338:
case 2189:
case 2395:
case 1446:
case 3472:
case 2084:
case 478:
case 334:
case 689:
case 1915:
case 2190:
case 252:
case 58:
case 1181:
case 1799:
case 1235:
case 853:
case 326:
case 1096:
case 352:
case 2845:
case 3782:
case 598:
case 2972:
case 3734:
case 1017:
case 934:
case 1347:
case 3718:
case 165:
case 3230:
case 191:
case 1684:
case 515:
case 232:
case 3110:
case 3169:
case 1027:
case 1937:
case 1573:
case 421:
case 679:
case 1151:
case 2878:
case 2546:
case 2144:
case 4000:
case 2783:
case 3030:
case 3949:
case 250:
case 3210:
case 2412:
case 3386:
case 911:
case 2111:
case 279:
case 1690:
case 113:
case 1642:
case 2813:
case 207:
case 1653:
case 1367:
case 1402:
case 3335:
case 1062:
case 898:
case 3106:
case 229:
case 83:
case 1832:
case 4046:
case 4087:
case 2534:
case 1759:
case 3453:
case 3699:
case 3101:
case 1518:
case 3882:
case 1899:
case 3343:
case 1507:
case 676:
case 1985:
case 3263:
case 540:
case 388:
case 664:
case 3938:
case 1455:
case 2098:
case 1711:
case 295:
case 576:
case 3529:
case 280:
case 2073:
case 2926:
case 795:
case 3158:
case 1585:
case 1860:
case 1637:
case 3474:
case 3482:
case 5:
case 498:
case 3840:
case 1655:
case 1816:
case 825:
case 1950:
case 4017:
case 3559:
case 381:
case 3924:
case 2422:
case 841:
case 233:
case 2527:
case 1679:
case 1207:
case 2634:
case 3177:
case 2760:
case 2532:
case 2698:
case 3620:
case 2703:
case 3510:
case 38:
case 2731:
case 3171:
case 120:
case 190:
case 1948:
case 2272:
case 1775:
case 160:
case 1565:
case 741:
case 173:
case 3016:
case 82:
case 3602:
case 744:
case 3477:
case 824:
case 2082:
case 678:
case 1745:
case 1620:
case 1311:
case 2367:
case 3309:
case 590:
case 3744:
case 3144:
case 3022:
case 1245:
case 1219:
case 3634:
case 2466:
case 1051:
case 3934:
case 4042:
case 2323:
case 878:
case 1667:
case 2778:
case 1741:
case 843:
case 2549:
case 718:
case 2895:
case 1088:
case 2596:
case 2841:
case 2993:
case 651:
case 1888:
case 2718:
case 2590:
case 3074:
case 870:
case 3296:
case 1312:
case 2335:
case 1520:
case 2529:
case 1707:
case 1524:
case 3376:
case 571:
case 400:
case 1458:
case 661:
case 267:
case 1045:
case 35:
case 3628:
case 117:
case 3313:
case 297:
case 1050:
case 3898:
case 1080:
case 1882:
case 1182:
case 2068:
case 1603:
case 398:
case 1260:
case 3820:
case 414:
case 1133:
case 3166:
case 3007:
case 4094:
case 3063:
case 356:
case 253:
case 2937:
case 1992:
case 2573:
case 285:
case 524:
case 2345:
case 904:
case 1589:
case 993:
case 2200:
case 325:
case 2458:
case 1314:
case 3770:
case 3970:
case 1692:
case 971:
case 3533:
case 851:
case 2606:
case 4040:
case 3967:
case 967:
case 504:
case 1416:
case 1071:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1652889601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,];
var gg_b = "1652889601/";

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
