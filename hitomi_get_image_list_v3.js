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
case 4085:
case 3900:
case 3887:
case 3816:
case 2156:
case 738:
case 742:
case 1457:
case 776:
case 632:
case 2458:
case 3988:
case 3376:
case 834:
case 1104:
case 648:
case 2262:
case 1984:
case 3423:
case 1091:
case 1969:
case 3972:
case 3562:
case 1579:
case 535:
case 3108:
case 3122:
case 2004:
case 2439:
case 2211:
case 3180:
case 2052:
case 3316:
case 673:
case 682:
case 2656:
case 2585:
case 971:
case 3285:
case 884:
case 409:
case 3622:
case 3530:
case 3571:
case 361:
case 2764:
case 3099:
case 3680:
case 585:
case 3883:
case 2789:
case 174:
case 3003:
case 2230:
case 2271:
case 2384:
case 3026:
case 607:
case 1519:
case 2369:
case 2424:
case 3608:
case 3240:
case 1594:
case 21:
case 1677:
case 1302:
case 2678:
case 2327:
case 3014:
case 1328:
case 210:
case 2487:
case 2416:
case 3957:
case 3165:
case 3050:
case 2073:
case 483:
case 1331:
case 1395:
case 3469:
case 3324:
case 2242:
case 2910:
case 2017:
case 2086:
case 3839:
case 3484:
case 10:
case 298:
case 1923:
case 3598:
case 1810:
case 2682:
case 939:
case 2532:
case 2849:
case 188:
case 2298:
case 100:
case 3743:
case 1854:
case 1020:
case 3074:
case 1927:
case 2928:
case 955:
case 4001:
case 3665:
case 1082:
case 1246:
case 1802:
case 510:
case 2476:
case 1828:
case 843:
case 1209:
case 1536:
case 26:
case 2827:
case 1293:
case 2902:
case 433:
case 886:
case 2178:
case 795:
case 51:
case 2182:
case 1113:
case 1759:
case 1673:
case 176:
case 1461:
case 2995:
case 2970:
case 2931:
case 2077:
case 3953:
case 142:
case 2483:
case 1078:
case 1412:
case 2560:
case 2802:
case 1476:
case 896:
case 857:
case 2082:
case 2246:
case 3357:
case 160:
case 3546:
case 1737:
case 2927:
case 1178:
case 2686:
case 2555:
case 3509:
case 1902:
case 1618:
case 2177:
case 3748:
case 1827:
case 2828:
case 2209:
case 2461:
case 276:
case 2895:
case 2673:
case 500:
case 3853:
case 588:
case 3650:
case 1744:
case 2113:
case 1349:
case 238:
case 1323:
case 2354:
case 1483:
case 242:
case 2078:
case 1560:
case 2310:
case 1970:
case 1931:
case 1077:
case 2117:
case 735:
case 2186:
case 3294:
case 2677:
case 1118:
case 2400:
case 493:
case 4036:
case 851:
case 1073:
case 2488:
case 645:
case 1501:
case 1327:
case 20:
case 542:
case 1910:
case 1017:
case 3353:
case 2018:
case 2370:
case 1806:
case 3114:
case 3674:
case 1532:
case 1849:
case 2297:
case 2173:
case 2613:
case 2810:
case 3150:
case 576:
case 3341:
case 307:
case 3428:
case 958:
case 963:
case 3199:
case 421:
case 2715:
case 3566:
case 3126:
case 1635:
case 661:
case 3300:
case 3402:
case 274:
case 1271:
case 595:
case 3983:
case 71:
case 3372:
case 3607:
case 1384:
case 1135:
case 3626:
case 1191:
case 159:
case 3008:
case 875:
case 301:
case 3022:
case 1458:
case 2790:
case 3800:
case 3916:
case 3080:
case 3312:
case 332:
case 4019:
case 2035:
case 348:
case 1262:
case 2984:
case 3781:
case 629:
case 760:
case 2652:
case 3361:
case 820:
case 574:
case 4081:
case 268:
case 1820:
case 2654:
case 2813:
case 253:
case 518:
case 3153:
case 1882:
case 2131:
case 2195:
case 2170:
case 1028:
case 147:
case 1289:
case 224:
case 2920:
case 806:
case 2373:
case 1606:
case 1264:
case 3350:
case 3452:
case 2317:
case 2978:
case 2102:
case 1095:
case 1070:
case 13:
case 3268:
case 2426:
case 590:
case 2403:
case 3515:
case 2499:
case 2128:
case 1127:
case 909:
case 1711:
case 1320:
case 679:
case 1106:
case 1382:
case 1480:
case 3641:
case 3:
case 2313:
case 1563:
case 1149:
case 2154:
case 3814:
case 568:
case 3779:
case 3281:
case 2670:
case 2695:
case 2873:
case 403:
case 2407:
case 2631:
case 2006:
case 1818:
case 3590:
case 2886:
case 3965:
case 3157:
case 290:
case 2628:
case 3039:
case 2275:
case 1627:
case 1378:
case 1986:
case 1010:
case 4068:
case 2918:
case 825:
case 29:
case 1054:
case 2852:
case 312:
case 708:
case 3672:
case 1534:
case 2221:
case 1684:
case 602:
case 3413:
case 78:
case 1952:
case 3161:
case 3205:
case 356:
case 2259:
case 2474:
case 3736:
case 1335:
case 455:
case 631:
case 3755:
case 2709:
case 1356:
case 3803:
case 3600:
case 2746:
case 3292:
case 1237:
case 933:
case 3688:
case 2238:
case 3807:
case 2797:
case 3980:
case 1798:
case 2352:
case 4005:
case 3087:
case 3661:
case 1543:
case 1529:
case 526:
case 3922:
case 391:
case 1169:
case 115:
case 1904:
case 1891:
case 1835:
case 972:
case 3303:
case 1465:
case 3399:
case 4092:
case 205:
case 3326:
case 2991:
case 2804:
case 1725:
case 637:
case 2935:
case 2084:
case 3417:
case 3100:
case 3732:
case 337:
case 2543:
case 1414:
case 1450:
case 3808:
case 3243:
case 3229:
case 1797:
case 2742:
case 2551:
case 3533:
case 2233:
case 3907:
case 2596:
case 3880:
case 565:
case 3683:
case 2465:
case 3116:
case 993:
case 3701:
case 2891:
case 2904:
case 2835:
case 864:
case 3072:
case 1069:
case 1956:
case 768:
case 1084:
case 105:
case 753:
case 387:
case 499:
case 2534:
case 1852:
case 3183:
case 515:
case 3760:
case 4029:
case 4043:
case 1259:
case 1474:
case 3420:
case 2952:
case 3482:
case 126:
case 1709:
case 302:
case 718:
case 1548:
case 3926:
case 3687:
case 3616:
case 3999:
case 1238:
case 612:
case 3903:
case 3176:
case 3537:
case 3061:
case 3057:
case 547:
case 2320:
case 3139:
case 2711:
case 1670:
case 1695:
case 1873:
case 3624:
case 1631:
case 1407:
case 2762:
case 1154:
case 1581:
case 1290:
case 2445:
case 726:
case 866:
case 379:
case 1049:
case 208:
case 19:
case 413:
case 4067:
case 1602:
case 927:
case 1918:
case 6:
case 1377:
case 2378:
case 2917:
case 3456:
case 2010:
case 2002:
case 1610:
case 153:
case 705:
case 1654:
case 3740:
case 168:
case 2820:
case 2264:
case 541:
case 1982:
case 2606:
case 2289:
case 1027:
case 919:
case 3974:
case 3564:
case 2028:
case 247:
case 458:
case 852:
case 23:
case 2031:
case 2977:
case 1568:
case 2318:
case 2070:
case 2095:
case 508:
case 1317:
case 3785:
case 1978:
case 2127:
case 1128:
case 1215:
case 230:
case 3041:
case 1499:
case 1877:
case 3658:
case 3257:
case 1825:
case 3894:
case 2925:
case 1791:
case 3336:
case 1735:
case 2309:
case 815:
case 1689:
case 264:
case 1997:
case 706:
case 2998:
case 1539:
case 1664:
case 514:
case 1842:
case 2479:
case 2897:
case 1249:
case 228:
case 358:
case 677:
case 2202:
case 3726:
case 3394:
case 2846:
case 1909:
case 1485:
case 3502:
case 1993:
case 3528:
case 1946:
case 3836:
case 2675:
case 2893:
case 1227:
case 2115:
case 3466:
case 3855:
case 3067:
case 2553:
case 3960:
case 2419:
case 3570:
case 3595:
case 1524:
case 2295:
case 479:
case 2231:
case 3253:
case 528:
case 1342:
case 1440:
case 3681:
case 603:
case 1189:
case 2541:
case 1398:
case 2752:
case 3241:
case 1164:
case 3692:
case 1587:
case 431:
case 3029:
case 3043:
case 170:
case 1637:
case 1401:
case 2717:
case 2500:
case 1718:
case 2494:
case 17:
case 3051:
case 704:
case 266:
case 2773:
case 2659:
case 3750:
case 1133:
case 689:
case 552:
case 1284:
case 3319:
case 402:
case 2572:
case 4000:
case 3409:
case 3034:
case 1021:
case 3148:
case 481:
case 1576:
case 1059:
case 4088:
case 847:
case 1966:
case 2138:
case 1137:
case 1633:
case 1871:
case 44:
case 1583:
case 3379:
case 639:
case 440:
case 2037:
case 1720:
case 3261:
case 1144:
case 853:
case 2021:
case 2137:
case 206:
case 764:
case 491:
case 2966:
case 1044:
case 3005:
case 3919:
case 1121:
case 152:
case 2583:
case 2460:
case 525:
case 3283:
case 2633:
case 1713:
case 2782:
case 2144:
case 3092:
case 1159:
case 1930:
case 2720:
case 1561:
case 3840:
case 3629:
case 2401:
case 3287:
case 270:
case 456:
case 714:
case 3765:
case 506:
case 3647:
case 1494:
case 3425:
case 27:
case 1033:
case 412:
case 1500:
case 818:
case 1717:
case 1786:
case 1773:
case 699:
case 2330:
case 3143:
case 3129:
case 89:
case 4083:
case 1572:
case 2284:
case 3151:
case 2811:
case 2133:
case 2993:
case 2909:
case 2485:
case 3955:
case 1846:
case 967:
case 1228:
case 1115:
case 4:
case 1675:
case 2227:
case 613:
case 204:
case 1089:
case 3527:
case 3301:
case 826:
case 2946:
case 1064:
case 2342:
case 1295:
case 3224:
case 1231:
case 3068:
case 3332:
case 3471:
case 4039:
case 2398:
case 3860:
case 929:
case 2189:
case 114:
case 1557:
case 1615:
case 1175:
case 1190:
case 2558:
case 3258:
case 504:
case 3745:
case 1393:
case 2756:
case 3081:
case 249:
case 1925:
case 3801:
case 423:
case 3722:
case 2206:
case 2539:
case 2664:
case 2842:
case 3411:
case 3239:
case 3163:
case 1998:
case 3780:
case 2689:
case 164:
case 2090:
case 2075:
case 2997:
case 3506:
case 3523:
case 3832:
case 128:
case 2223:
case 2249:
case 3360:
case 1479:
case 1944:
case 551:
case 2959:
case 1821:
case 3834:
case 296:
case 2171:
case 2130:
case 3343:
case 3464:
case 401:
case 2611:
case 257:
case 1795:
case 2921:
case 4008:
case 2844:
case 2662:
case 143:
case 3140:
case 186:
case 1030:
case 734:
case 2938:
case 3847:
case 1166:
case 369:
case 3948:
case 2837:
case 432:
case 3019:
case 838:
case 2467:
case 644:
case 3334:
case 1321:
case 2508:
case 1710:
case 2162:
case 3208:
case 1754:
case 3640:
case 3829:
case 3843:
case 1933:
case 2723:
case 2749:
case 2463:
case 596:
case 3222:
case 557:
case 3896:
case 2706:
case 1359:
case 2522:
case 2671:
case 251:
case 3739:
case 2111:
case 3347:
case 2256:
case 784:
case 3535:
case 80:
case 2235:
case 1062:
case 3079:
case 2337:
case 1011:
case 1338:
case 2545:
case 1666:
case 1204:
case 3632:
case 3520:
case 1213:
case 1964:
case 2282:
case 3363:
case 3444:
case 3582:
case 1989:
case 1697:
case 940:
case 2093:
case 184:
case 2434:
case 2009:
case 1390:
case 672:
case 4065:
case 520:
case 874:
case 1146:
case 981:
case 683:
case 1193:
case 778:
case 3578:
case 2447:
case 2278:
case 1448:
case 3981:
case 2142:
case 2451:
case 2784:
case 3433:
case 3863:
case 3132:
case 2364:
case 594:
case 2429:
case 2443:
case 1550:
case 134:
case 2389:
case 895:
case 1875:
case 3518:
case 786:
case 1286:
case 1217:
case 931:
case 743:
case 35:
case 2218:
case 3716:
case 2565:
case 1098:
case 2975:
case 2990:
case 633:
case 3101:
case 3265:
case 350:
case 333:
case 1496:
case 1451:
case 3573:
case 65:
case 3881:
case 1429:
case 1364:
case 2273:
case 3636:
case 2286:
case 2217:
case 3517:
case 3586:
case 3655:
case 2609:
case 3700:
case 2693:
case 2646:
case 885:
case 1990:
case 912:
case 1565:
case 2315:
case 796:
case 2405:
case 194:
case 2989:
case 2697:
case 4050:
case 1220:
case 3513:
case 2213:
case 1046:
case 534:
case 1282:
case 4014:
case 372:
case 3712:
case 1093:
case 1889:
case 1434:
case 1642:
case 1864:
case 2146:
case 2375:
case 3694:
case 2277:
case 1625:
case 3136:
case 991:
case 1278:
case 445:
case 3967:
case 835:
case 278:
case 1749:
case 2754:
case 3951:
case 1162:
case 586:
case 2321:
case 81:
case 1111:
case 3929:
case 1522:
case 619:
case 1833:
case 1671:
case 236:
case 3305:
case 1706:
case 2359:
case 810:
case 1580:
case 621:
case 898:
case 492:
case 3348:
case 4026:
case 3475:
case 3392:
case 4003:
case 3757:
case 2666:
case 2011:
case 794:
case 417:
case 1337:
case 923:
case 157:
case 196:
case 1171:
case 720:
case 2821:
case 536:
case 3741:
case 3552:
case 1333:
case 72:
case 1844:
case 3679:
case 3753:
case 1662:
case 1921:
case 2795:
case 3805:
case 2503:
case 3415:
case 2599:
case 411:
case 2728:
case 3299:
case 3848:
case 2937:
case 1727:
case 3203:
case 775:
case 3892:
case 9:
case 2468:
case 1837:
case 3040:
case 3947:
case 3555:
case 3686:
case 2593:
case 2236:
case 3293:
case 3536:
case 1747:
case 3828:
case 2792:
case 767:
case 2357:
case 3246:
case 1665:
case 3738:
case 827:
case 3927:
case 729:
case 338:
case 3354:
case 3412:
case 42:
case 1953:
case 2841:
case 342:
case 1734:
case 3721:
case 3461:
case 3759:
case 3870:
case 3895:
case 3673:
case 2705:
case 1941:
case 2650:
case 3488:
case 717:
case 1165:
case 494:
case 761:
case 3328:
case 698:
case 821:
case 3117:
case 3186:
case 3302:
case 1858:
case 3677:
case 2294:
case 792:
case 916:
case 300:
case 1743:
case 2114:
case 3297:
case 388:
case 3906:
case 3810:
case 3923:
case 30:
case 610:
case 1839:
case 1542:
case 1796:
case 3370:
case 3395:
case 3018:
case 2126:
case 964:
case 745:
case 2402:
case 2768:
case 1876:
case 2300:
case 3266:
case 1645:
case 1427:
case 3604:
case 2388:
case 2103:
case 1387:
case 1316:
case 501:
case 1240:
case 273:
case 548:
case 192:
case 2983:
case 2431:
case 2495:
case 532:
case 1026:
case 2812:
case 3441:
case 1680:
case 1883:
case 3152:
case 1099:
case 1961:
case 161:
case 1571:
case 1530:
case 496:
case 3104:
case 201:
case 1376:
case 2800:
case 3775:
case 2987:
case 2916:
case 685:
case 1900:
case 1007:
case 1406:
case 2872:
case 1763:
case 3652:
case 1180:
case 850:
case 1511:
case 167:
case 2045:
case 1122:
case 3056:
case 1108:
case 232:
case 2410:
case 2312:
case 3969:
case 1972:
case 2107:
case 85:
case 1423:
case 395:
case 573:
case 3035:
case 1699:
case 1987:
case 1916:
case 2988:
case 101:
case 229:
case 833:
case 3135:
case 385:
case 4030:
case 1361:
case 3884:
case 4071:
case 3439:
case 3211:
case 561:
case 3869:
case 517:
case 1454:
case 148:
case 592:
case 2972:
case 1107:
case 2108:
case 132:
case 2383:
case 1410:
case 1312:
case 2876:
case 674:
case 2767:
case 2285:
case 529:
case 1126:
case 1566:
case 2387:
case 2316:
case 1199:
case 1103:
case 1976:
case 436:
case 2645:
case 1428:
case 883:
case 107:
case 3384:
case 2026:
case 1219:
case 1431:
case 1607:
case 4062:
case 3424:
case 3369:
case 1495:
case 1470:
case 2240:
case 292:
case 261:
case 2571:
case 949:
case 2622:
case 4011:
case 217:
case 3764:
case 2680:
case 2099:
case 3271:
case 3230:
case 2003:
case 567:
case 3789:
case 782:
case 310:
case 2014:
case 2957:
case 3416:
case 1958:
case 2201:
case 600:
case 3225:
case 3118:
case 3678:
case 1857:
case 1341:
case 1150:
case 707:
case 3823:
case 3620:
case 1674:
case 1114:
case 1939:
case 3298:
case 2469:
case 2324:
case 2796:
case 3806:
case 3017:
case 3086:
case 3910:
case 3954:
case 906:
case 2751:
case 2839:
case 2542:
case 3733:
case 4025:
case 676:
case 3827:
case 36:
case 1748:
case 1593:
case 3902:
case 1236:
case 748:
case 3178:
case 2074:
case 3737:
case 1546:
case 3928:
case 1357:
case 434:
case 2665:
case 642:
case 1792:
case 2734:
case 3995:
case 2953:
case 3483:
case 2260:
case 4042:
case 3323:
case 970:
case 1853:
case 3182:
case 2941:
case 3306:
case 3120:
case 1174:
case 2339:
case 3551:
case 3184:
case 2296:
case 281:
case 2822:
case 2907:
case 1172:
case 587:
case 3233:
case 2251:
case 2880:
case 2683:
case 605:
case 3529:
case 237:
case 1016:
case 1087:
case 2243:
case 2229:
case 2808:
case 3798:
case 1980:
case 2088:
case 858:
case 2072:
case 994:
case 1417:
case 863:
case 1794:
case 502:
case 3465:
case 1188:
case 3904:
case 2701:
case 4037:
case 416:
case 2420:
case 231:
case 3244:
case 2380:
case 92:
case 3952:
case 2482:
case 1413:
case 537:
case 365:
case 3534:
case 1521:
case 1307:
case 920:
case 2183:
case 2308:
case 2760:
case 2616:
case 540:
case 2903:
case 3237:
case 1826:
case 7:
case 2537:
case 1538:
case 2061:
case 1248:
case 1083:
case 202:
case 626:
case 1899:
case 2247:
case 54:
case 2012:
case 3547:
case 2926:
case 3391:
case 1736:
case 2624:
case 899:
case 1653:
case 3762:
case 1779:
case 1814:
case 3123:
case 3563:
case 1641:
case 2950:
case 3382:
case 3106:
case 3973:
case 341:
case 3320:
case 1374:
case 3711:
case 2139:
case 2914:
case 69:
case 3054:
case 2435:
case 957:
case 712:
case 2491:
case 2865:
case 3986:
case 3917:
case 2456:
case 3378:
case 38:
case 3627:
case 1404:
case 1039:
case 618:
case 1157:
case 414:
case 3818:
case 1590:
case 797:
case 2158:
case 1452:
case 1350:
case 3606:
case 154:
case 3289:
case 347:
case 1314:
case 2564:
case 2639:
case 1719:
case 3882:
case 3623:
case 3820:
case 668:
case 1515:
case 3878:
case 2365:
case 2041:
case 1657:
case 791:
case 653:
case 624:
case 1268:
case 579:
case 1024:
case 3318:
case 822:
case 428:
case 1564:
case 1639:
case 5:
case 3027:
case 3373:
case 740:
case 1589:
case 2452:
case 2141:
case 2350:
case 2874:
case 368:
case 3654:
case 2153:
case 3610:
case 839:
case 1124:
case 3170:
case 3131:
case 2719:
case 3403:
case 1658:
case 737:
case 2515:
case 1365:
case 1041:
case 978:
case 3128:
case 1785:
case 3386:
case 3102:
case 3568:
case 2268:
case 936:
case 702:
case 2814:
case 68:
case 3110:
case 2653:
case 2779:
case 3407:
case 1624:
case 3695:
case 3873:
case 1263:
case 1139:
case 608:
case 2374:
case 404:
case 1057:
case 787:
case 3602:
case 855:
case 39:
case 1435:
case 1491:
case 641:
case 179:
case 2590:
case 2575:
case 3006:
case 1158:
case 731:
case 2965:
case 2039:
case 390:
case 3290:
case 3275:
case 2076:
case 3505:
case 1482:
case 1544:
case 2413:
case 1420:
case 470:
case 256:
case 3259:
case 2205:
case 1760:
case 2672:
case 779:
case 2521:
case 1234:
case 803:
case 1345:
case 1061:
case 2826:
case 1176:
case 3592:
case 1687:
case 877:
case 1616:
case 1926:
case 3548:
case 2736:
case 102:
case 1247:
case 2755:
case 1478:
case 2803:
case 2248:
case 2908:
case 1683:
case 262:
case 2172:
case 1822:
case 512:
case 1533:
case 3797:
case 2807:
case 2473:
case 4059:
case 556:
case 1229:
case 2980:
case 3450:
case 406:
case 137:
case 291:
case 1732:
case 2922:
case 3935:
case 14:
case 305:
case 1845:
case 3084:
case 2417:
case 1072:
case 2100:
case 615:
case 2945:
case 871:
case 1116:
case 2399:
case 984:
case 854:
case 306:
case 2005:
case 1192:
case 3059:
case 2147:
case 1148:
case 763:
case 3021:
case 1034:
case 1409:
case 823:
case 758:
case 3144:
case 3782:
case 1261:
case 2092:
case 3720:
case 91:
case 3311:
case 3038:
case 3362:
case 3460:
case 3583:
case 555:
case 1940:
case 2651:
case 1047:
case 405:
case 3871:
case 2048:
case 666:
case 2647:
case 713:
case 37:
case 1200:
case 2425:
case 1096:
case 539:
case 2385:
case 3401:
case 370:
case 1692:
case 2634:
case 325:
case 2196:
case 3284:
case 2979:
case 2584:
case 2340:
case 2442:
case 255:
case 3269:
case 3133:
case 960:
case 1879:
case 2498:
case 1497:
case 1605:
case 3330:
case 3432:
case 3371:
case 1855:
case 1799:
case 304:
case 856:
case 3227:
case 2527:
case 2301:
case 1836:
case 3946:
case 3993:
case 1502:
case 2955:
case 3909:
case 614:
case 418:
case 3325:
case 2936:
case 2471:
case 2430:
case 2332:
case 277:
case 3164:
case 1241:
case 2663:
case 3398:
case 571:
case 3440:
case 3342:
case 4023:
case 2224:
case 2068:
case 1531:
case 1570:
case 1595:
case 1668:
case 3756:
case 862:
case 468:
case 2081:
case 503:
case 1336:
case 2994:
case 3791:
case 1063:
case 3825:
case 4027:
case 2745:
case 424:
case 935:
case 1181:
case 2549:
case 2523:
case 158:
case 1707:
case 3249:
case 3898:
case 2360:
case 3206:
case 3664:
case 2163:
case 2780:
case 3997:
case 3075:
case 2336:
case 1801:
case 1667:
case 4002:
case 3309:
case 3393:
case 2668:
case 1745:
case 2257:
case 2901:
case 3190:
case 3175:
case 3615:
case 837:
case 3254:
case 263:
case 3479:
case 2510:
case 1462:
case 4031:
case 328:
case 739:
case 258:
case 1549:
case 1523:
case 2554:
case 2181:
case 43:
case 3998:
case 1239:
case 430:
case 171:
case 2528:
case 2836:
case 2703:
case 3690:
case 3893:
case 2466:
case 3809:
case 3202:
case 1936:
case 3846:
case 103:
case 887:
case 755:
case 2168:
case 2502:
case 789:
case 314:
case 3397:
case 3752:
case 3541:
case 177:
case 1471:
case 1332:
case 2960:
case 558:
case 213:
case 604:
case 1068:
case 4010:
case 3419:
case 2570:
case 1224:
case 563:
case 2253:
case 802:
case 3717:
case 3786:
case 2200:
case 1425:
case 3494:
case 2051:
case 299:
case 976:
case 3366:
case 1765:
case 3638:
case 938:
case 2043:
case 189:
case 1287:
case 2288:
case 155:
case 2272:
case 1584:
case 1151:
case 1442:
case 1979:
case 3962:
case 1634:
case 522:
case 3572:
case 1569:
case 2319:
case 3621:
case 2714:
case 67:
case 1129:
case 2879:
case 2750:
case 1498:
case 1005:
case 2192:
case 1885:
case 3138:
case 1276:
case 2409:
case 2985:
case 3866:
case 599:
case 2034:
case 3436:
case 139:
case 988:
case 415:
case 1629:
case 3971:
case 316:
case 2774:
case 3930:
case 1048:
case 2940:
case 1651:
case 2047:
case 2379:
case 3512:
case 352:
case 1696:
case 3121:
case 1919:
case 334:
case 2573:
case 3550:
case 3514:
case 2250:
case 3273:
case 460:
case 1863:
case 233:
case 769:
case 620:
case 572:
case 3646:
case 675:
case 1101:
case 727:
case 2788:
case 811:
case 3098:
case 3315:
case 1716:
case 1787:
case 867:
case 15:
case 3286:
case 3217:
case 3609:
case 2655:
case 1367:
case 2517:
case 3693:
case 1518:
case 193:
case 2712:
case 1783:
case 1160:
case 384:
case 2421:
case 1036:
case 533:
case 41:
case 3989:
case 3405:
case 4073:
case 1444:
case 2513:
case 905:
case 3964:
case 1520:
case 3448:
case 2694:
case 892:
case 2967:
case 694:
case 1578:
case 3109:
case 2155:
case 3146:
case 1437:
case 1601:
case 861:
case 2868:
case 3492:
case 1867:
case 2943:
case 544:
case 2929:
case 1280:
case 336:
case 1896:
case 2305:
case 1222:
case 4052:
case 2207:
case 378:
case 3481:
case 1829:
case 2951:
case 3710:
case 3507:
case 1334:
case 2619:
case 953:
case 2392:
case 2475:
case 1245:
case 2757:
case 968:
case 2504:
case 1685:
case 3062:
case 1079:
case 845:
case 793:
case 1591:
case 435:
case 990:
case 343:
case 2679:
case 75:
case 2753:
case 2085:
case 2934:
case 509:
case 1396:
case 1724:
case 3859:
case 1329:
case 1464:
case 1343:
case 750:
case 1905:
case 244:
case 3821:
case 2741:
case 1185:
case 2226:
case 3468:
case 3526:
case 1948:
case 696:
case 3838:
case 2040:
case 3503:
case 1992:
case 3599:
case 2415:
case 3166:
case 2299:
case 485:
case 918:
case 3728:
case 2203:
case 3071:
case 2848:
case 1934:
case 1805:
case 2724:
case 3662:
case 1753:
case 3844:
case 98:
case 227:
case 1552:
case 3066:
case 2489:
case 3130:
case 980:
case 357:
case 521:
case 2343:
case 2464:
case 4091:
case 941:
case 4035:
case 0:
case 733:
case 2948:
case 1892:
case 1203:
case 1848:
case 1299:
case 2847:
case 3938:
case 3463:
case 3344:
case 3580:
case 3706:
case 1305:
case 221:
case 351:
case 3833:
case 3630:
case 93:
case 1996:
case 2334:
case 1619:
case 3162:
case 1179:
case 3508:
case 2640:
case 1951:
case 2829:
case 109:
case 2208:
case 3723:
case 3749:
case 3337:
case 783:
case 3545:
case 2245:
case 474:
case 1490:
case 636:
case 772:
case 2535:
case 1348:
case 947:
case 3235:
case 569:
case 3291:
case 1381:
case 3642:
case 3093:
case 1712:
case 2055:
case 2783:
case 172:
case 3282:
case 3046:
case 1761:
case 183:
case 2444:
case 3698:
case 1274:
case 394:
case 2968:
case 1967:
case 3278:
case 873:
case 1136:
case 3625:
case 684:
case 1868:
case 2776:
case 400:
case 2601:
case 915:
case 3364:
case 1214:
case 3198:
case 1963:
case 3389:
case 801:
case 1573:
case 2981:
case 2094:
case 2433:
case 1772:
case 2863:
case 133:
case 2716:
case 3975:
case 1788:
case 2101:
case 1032:
case 965:
case 250:
case 476:
case 2265:
case 2518:
case 1700:
case 1368:
case 1655:
case 634:
case 832:
case 3125:
case 25:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756594802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,];
var gg_b = "1756594802/";

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
