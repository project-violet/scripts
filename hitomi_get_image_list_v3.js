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
case 1799:
case 1387:
case 162:
case 2198:
case 1780:
case 2383:
case 706:
case 572:
case 1885:
case 3386:
case 200:
case 2351:
case 1586:
case 688:
case 2174:
case 3990:
case 2718:
case 494:
case 2530:
case 2266:
case 449:
case 3440:
case 377:
case 823:
case 3159:
case 3934:
case 3733:
case 2736:
case 292:
case 1064:
case 335:
case 1408:
case 993:
case 3719:
case 2722:
case 3565:
case 4019:
case 3203:
case 3061:
case 2676:
case 3673:
case 2206:
case 3579:
case 1379:
case 870:
case 3972:
case 1004:
case 1867:
case 2391:
case 792:
case 3042:
case 2137:
case 2624:
case 3180:
case 1910:
case 984:
case 1841:
case 2727:
case 3950:
case 1924:
case 2314:
case 2244:
case 1723:
case 1862:
case 3977:
case 1046:
case 1976:
case 55:
case 2132:
case 3047:
case 1917:
case 1956:
case 2720:
case 268:
case 2574:
case 3957:
case 1323:
case 36:
case 2825:
case 447:
case 379:
case 99:
case 1068:
case 3938:
case 409:
case 428:
case 3319:
case 2322:
case 3182:
case 676:
case 553:
case 1860:
case 198:
case 2415:
case 311:
case 1519:
case 1613:
case 2:
case 1765:
case 1782:
case 3645:
case 2318:
case 1928:
case 2248:
case 1639:
case 1446:
case 1996:
case 2558:
case 3179:
case 3333:
case 7:
case 1705:
case 3165:
case 246:
case 1684:
case 1800:
case 157:
case 4086:
case 3442:
case 51:
case 2532:
case 1787:
case 1404:
case 2371:
case 119:
case 2628:
case 2939:
case 3599:
case 1008:
case 2696:
case 680:
case 3291:
case 3507:
case 725:
case 2303:
case 181:
case 3160:
case 47:
case 208:
case 385:
case 1700:
case 754:
case 30:
case 2017:
case 3053:
case 433:
case 1887:
case 1013:
case 2883:
case 229:
case 2851:
case 3585:
case 1302:
case 3909:
case 1211:
case 2820:
case 934:
case 921:
case 3562:
case 501:
case 389:
case 1362:
case 2286:
case 1488:
case 2431:
case 2908:
case 3541:
case 3473:
case 2028:
case 2476:
case 686:
case 3567:
case 254:
case 1367:
case 1879:
case 1294:
case 2135:
case 343:
case 708:
case 2363:
case 3748:
case 3100:
case 1865:
case 2410:
case 3366:
case 2891:
case 1548:
case 3819:
case 1237:
case 3481:
case 1859:
case 2233:
case 4066:
case 1413:
case 1767:
case 1258:
case 766:
case 2456:
case 227:
case 3348:
case 2964:
case 3453:
case 2417:
case 3218:
case 2827:
case 248:
case 3185:
case 838:
case 1823:
case 190:
case 1762:
case 1144:
case 3429:
case 420:
case 2412:
case 3102:
case 1274:
case 2010:
case 1880:
case 303:
case 2871:
case 1785:
case 2024:
case 3642:
case 3943:
case 3162:
case 1226:
case 4044:
case 2076:
case 2428:
case 1298:
case 3073:
case 2818:
case 1646:
case 1088:
case 3500:
case 2535:
case 3995:
case 3706:
case 541:
case 3833:
case 3167:
case 266:
case 2836:
case 2703:
case 4006:
case 886:
case 2349:
case 1166:
case 3510:
case 1376:
case 4038:
case 1550:
case 253:
case 3869:
case 344:
case 969:
case 3757:
case 2713:
case 3716:
case 1717:
case 3576:
case 2679:
case 5:
case 568:
case 2441:
case 1965:
case 3531:
case 2000:
case 3654:
case 3035:
case 1620:
case 71:
case 2462:
case 3752:
case 3128:
case 1331:
case 2388:
case 933:
case 1712:
case 4052:
case 21:
case 1683:
case 1905:
case 842:
case 2060:
case 1152:
case 3611:
case 1796:
case 3112:
case 690:
case 1651:
case 2181:
case 3321:
case 3809:
case 1170:
case 1403:
case 3630:
case 1116:
case 4092:
case 2983:
case 3156:
case 2275:
case 2407:
case 3208:
case 3792:
case 952:
case 2605:
case 3117:
case 3658:
case 3721:
case 1177:
case 2846:
case 3124:
case 213:
case 2400:
case 1999:
case 896:
case 4034:
case 920:
case 967:
case 1201:
case 3933:
case 500:
case 2593:
case 2680:
case 2804:
case 1396:
case 4090:
case 3895:
case 75:
case 3632:
case 474:
case 3264:
case 3790:
case 397:
case 3397:
case 772:
case 506:
case 3512:
case 2623:
case 2864:
case 3698:
case 890:
case 1425:
case 3772:
case 1552:
case 3204:
case 1312:
case 1189:
case 973:
case 1242:
case 1190:
case 25:
case 2659:
case 2553:
case 3338:
case 681:
case 1557:
case 1622:
case 1516:
case 3316:
case 2460:
case 1815:
case 2313:
case 2085:
case 1538:
case 1356:
case 1710:
case 4050:
case 713:
case 2927:
case 782:
case 2142:
case 619:
case 2764:
case 2641:
case 548:
case 1036:
case 322:
case 1195:
case 1018:
case 983:
case 2662:
case 1831:
case 364:
case 1876:
case 3375:
case 3032:
case 817:
case 1962:
case 1143:
case 3877:
case 1071:
case 3850:
case 2479:
case 1715:
case 170:
case 1824:
case 907:
case 3755:
case 2667:
case 2221:
case 1941:
case 949:
case 1902:
case 4043:
case 3821:
case 3309:
case 2482:
case 3074:
case 855:
case 514:
case 615:
case 2250:
case 831:
case 310:
case 566:
case 824:
case 241:
case 1273:
case 1509:
case 1027:
case 1603:
case 1155:
case 3288:
case 2487:
case 862:
case 2685:
case 1907:
case 1483:
case 282:
case 1451:
case 2059:
case 2272:
case 4095:
case 3411:
case 2101:
case 2480:
case 909:
case 2499:
case 701:
case 529:
case 2252:
case 2304:
case 1595:
case 947:
case 2561:
case 49:
case 2079:
case 819:
case 1896:
case 1828:
case 2839:
case 1418:
case 2346:
case 4009:
case 3213:
case 2768:
case 1014:
case 1649:
case 508:
case 928:
case 136:
case 3635:
case 3892:
case 1020:
case 1281:
case 2292:
case 1109:
case 3838:
case 3011:
case 2708:
case 2140:
case 3515:
case 1051:
case 350:
case 2459:
case 3870:
case 2813:
case 3816:
case 1315:
case 554:
case 655:
case 1083:
case 1817:
case 2660:
case 3239:
case 3355:
case 1856:
case 3948:
case 1427:
case 2501:
case 2297:
case 3498:
case 2005:
case 1960:
case 3426:
case 188:
case 3474:
case 2082:
case 3925:
case 1648:
case 543:
case 2355:
case 3140:
case 2011:
case 3708:
case 1419:
case 2838:
case 1881:
case 3292:
case 250:
case 4008:
case 2284:
case 2515:
case 2094:
case 1301:
case 1829:
case 1564:
case 930:
case 2498:
case 3297:
case 2030:
case 1228:
case 3364:
case 105:
case 2948:
case 2426:
case 2078:
case 457:
case 301:
case 3423:
case 2395:
case 1504:
case 128:
case 936:
case 2897:
case 3499:
case 3065:
case 3949:
case 1342:
case 3079:
case 3252:
case 1546:
case 3884:
case 1433:
case 92:
case 3238:
case 2437:
case 684:
case 2892:
case 3547:
case 50:
case 256:
case 1217:
case 1256:
case 147:
case 3257:
case 2213:
case 3346:
case 1845:
case 109:
case 3023:
case 2115:
case 3277:
case 210:
case 3405:
case 1276:
case 2430:
case 145:
case 2098:
case 1606:
case 2074:
case 4046:
case 3482:
case 1210:
case 1747:
case 587:
case 3746:
case 2743:
case 3368:
case 3272:
case 3059:
case 1761:
case 3101:
case 2889:
case 722:
case 2890:
case 1644:
case 4004:
case 1164:
case 1486:
case 382:
case 3903:
case 3161:
case 3234:
case 149:
case 2058:
case 222:
case 455:
case 107:
case 1701:
case 3290:
case 3963:
case 424:
case 2037:
case 3142:
case 3641:
case 893:
case 2872:
case 1033:
case 462:
case 3479:
case 710:
case 3080:
case 3221:
case 2755:
case 1873:
case 3308:
case 1146:
case 4088:
case 539:
case 797:
case 3922:
case 2919:
case 3007:
case 3529:
case 13:
case 3295:
case 112:
case 2772:
case 3243:
case 496:
case 3313:
case 1926:
case 2750:
case 3460:
case 2246:
case 563:
case 3927:
case 1448:
case 2855:
case 1974:
case 1773:
case 2556:
case 938:
case 126:
case 2777:
case 1619:
case 2435:
case 2124:
case 3545:
case 2110:
case 1633:
case 535:
case 3339:
case 3255:
case 1932:
case 1847:
case 2721:
case 1215:
case 1584:
case 551:
case 2843:
case 1958:
case 2789:
case 2397:
case 297:
case 2790:
case 1188:
case 2131:
case 2264:
case 3918:
case 2528:
case 3936:
case 3067:
case 2734:
case 3699:
case 152:
case 1793:
case 2390:
case 3402:
case 3129:
case 31:
case 1686:
case 1930:
case 1978:
case 3485:
case 3983:
case 3784:
case 1113:
case 3269:
case 2630:
case 2117:
case 3153:
case 3605:
case 674:
case 4084:
case 2792:
case 2208:
case 3407:
case 361:
case 537:
case 1911:
case 2321:
case 2809:
case 3181:
case 799:
case 3739:
case 1745:
case 3665:
case 133:
case 2350:
case 2757:
case 3467:
case 1184:
case 511:
case 3920:
case 3679:
case 1954:
case 442:
case 3209:
case 978:
case 1373:
case 1781:
case 2738:
case 2770:
case 244:
case 2869:
case 2524:
case 834:
case 3193:
case 2752:
case 1729:
case 2128:
case 3000:
case 1588:
case 2531:
case 3991:
case 718:
case 481:
case 2372:
case 795:
case 56:
case 2035:
case 2493:
case 1077:
case 67:
case 2943:
case 2073:
case 1497:
case 3076:
case 2227:
case 2141:
case 2642:
case 3024:
case 3703:
case 1259:
case 2833:
case 1942:
case 1492:
case 438:
case 2500:
case 287:
case 3818:
case 633:
case 820:
case 2445:
case 2995:
case 1961:
case 3535:
case 1858:
case 2647:
case 867:
case 873:
case 4063:
case 1457:
case 1103:
case 1034:
case 3763:
case 2453:
case 516:
case 2348:
case 327:
case 2107:
case 3615:
case 3456:
case 1089:
case 665:
case 1438:
case 3822:
case 1901:
case 2560:
case 787:
case 1470:
case 522:
case 2271:
case 1525:
case 2601:
case 902:
case 1021:
case 703:
case 83:
case 2955:
case 652:
case 3325:
case 1826:
case 3286:
case 2969:
case 289:
case 2541:
case 869:
case 3431:
case 1092:
case 3820:
case 87:
case 3725:
case 1472:
case 2251:
case 2562:
case 243:
case 785:
case 833:
case 3424:
case 3891:
case 3410:
case 1282:
case 2100:
case 2748:
case 491:
case 1669:
case 325:
case 1563:
case 3476:
case 2473:
case 134:
case 121:
case 2093:
case 550:
case 626:
case 2306:
case 308:
case 2160:
case 1735:
case 285:
case 3749:
case 1421:
case 673:
case 2029:
case 1265:
case 556:
case 1052:
case 1609:
case 1279:
case 2585:
case 3851:
case 63:
case 2344:
case 3968:
case 1070:
case 852:
case 1490:
case 1489:
case 1940:
case 2081:
case 1038:
case 2220:
case 3056:
case 2053:
case 3017:
case 2502:
case 329:
case 3883:
case 1125:
case 1778:
case 919:
case 711:
case 1518:
case 1191:
case 3248:
case 683:
case 3318:
case 3537:
case 237:
case 1536:
case 1993:
case 1495:
case 2461:
case 1697:
case 2225:
case 3696:
case 1075:
case 1711:
case 4051:
case 2599:
case 4083:
case 2992:
case 3154:
case 3532:
case 694:
case 430:
case 2442:
case 1114:
case 3783:
case 2786:
case 607:
case 915:
case 2970:
case 3526:
case 279:
case 1527:
case 998:
case 1009:
case 3598:
case 1374:
case 2938:
case 1981:
case 1398:
case 3574:
case 3720:
case 88:
case 4014:
case 4020:
case 26:
case 1183:
case 3714:
case 3656:
case 3415:
case 340:
case 3178:
case 2105:
case 1455:
case 1616:
case 1657:
case 2848:
case 1522:
case 2249:
case 1200:
case 599:
case 2952:
case 2681:
case 1638:
case 645:
case 42:
case 544:
case 1136:
case 735:
case 3610:
case 3137:
case 3863:
case 3391:
case 263:
case 1118:
case 3722:
case 2719:
case 2579:
case 2673:
case 2203:
case 1095:
case 777:
case 184:
case 3631:
case 894:
case 1043:
case 1973:
case 423:
case 1774:
case 3554:
case 2047:
case 807:
case 2199:
case 1202:
case 306:
case 628:
case 4027:
case 3244:
case 3314:
case 605:
case 2844:
case 68:
case 3351:
case 924:
case 931:
case 1311:
case 3126:
case 300:
case 2386:
case 3771:
case 3015:
case 392:
case 3594:
case 1378:
case 2806:
case 1330:
case 4036:
case 235:
case 2582:
case 1737:
case 3266:
case 3718:
case 2990:
case 962:
case 2159:
case 1267:
case 1621:
case 771:
case 215:
case 39:
case 979:
case 2519:
case 1:
case 2613:
case 3657:
case 1656:
case 757:
case 1178:
case 1322:
case 2912:
case 641:
case 911:
case 3652:
case 3527:
case 3981:
case 1111:
case 1598:
case 682:
case 3151:
case 1526:
case 2186:
case 801:
case 578:
case 1913:
case 1714:
case 4054:
case 3754:
case 1327:
case 3953:
case 3711:
case 1696:
case 1939:
case 1751:
case 3571:
case 975:
case 1783:
case 3114:
case 1371:
case 1984:
case 2404:
case 1532:
case 257:
case 4078:
case 3191:
case 798:
case 146:
case 3692:
case 3778:
case 715:
case 4030:
case 1558:
case 2996:
case 3358:
case 2533:
case 3260:
case 2639:
case 1537:
case 2064:
case 2807:
case 1736:
case 1803:
case 841:
case 1594:
case 3378:
case 717:
case 1578:
case 3394:
case 2468:
case 3621:
case 3267:
case 3122:
case 2119:
case 255:
case 3409:
case 601:
case 1174:
case 4032:
case 935:
case 3583:
case 1351:
case 1126:
case 3262:
case 882:
case 2799:
case 2387:
case 3774:
case 3520:
case 3973:
case 1132:
case 1554:
case 1631:
case 2046:
case 4074:
case 3285:
case 3043:
case 963:
case 2862:
case 1314:
case 3171:
case 2924:
case 762:
case 259:
case 1727:
case 2841:
case 106:
case 3672:
case 3798:
case 1863:
case 724:
case 1391:
case 731:
case 2867:
case 1610:
case 580:
case 755:
case 2759:
case 3469:
case 384:
case 3095:
case 3591:
case 1988:
case 2408:
case 3475:
case 3874:
case 632:
case 3299:
case 1412:
case 3021:
case 3525:
case 61:
case 2762:
case 290:
case 1325:
case 2915:
case 796:
case 1827:
case 3898:
case 160:
case 1763:
case 1417:
case 1456:
case 1615:
case 2413:
case 3457:
case 497:
case 661:
case 1233:
case 3470:
case 374:
case 2859:
case 3438:
case 2237:
case 3090:
case 3901:
case 1822:
case 3942:
case 2707:
case 653:
case 1349:
case 2166:
case 3163:
case 3837:
case 576:
case 3492:
case 3259:
case 1836:
case 1904:
case 3072:
case 114:
case 3961:
case 523:
case 2646:
case 458:
case 3643:
case 3497:
case 3695:
case 1428:
case 3947:
case 3077:
case 1496:
case 987:
case 2785:
case 1024:
case 872:
case 1871:
case 2880:
case 296:
case 2274:
case 1010:
case 790:
case 3490:
case 52:
case 444:
case 499:
case 1968:
case 3070:
case 90:
case 1883:
case 832:
case 3057:
case 3125:
case 65:
case 2544:
case 2385:
case 2887:
case 1017:
case 2148:
case 4035:
case 1749:
case 108:
case 3878:
case 1303:
case 3503:
case 3609:
case 2506:
case 1012:
case 3421:
case 2865:
case 1891:
case 1410:
case 418:
case 2760:
case 530:
case 3450:
case 1135:
case 2294:
case 1424:
case 495:
case 154:
case 2367:
case 853:
case 321:
case 1096:
case 3477:
case 1028:
case 125:
case 613:
case 1908:
case 3287:
case 2488:
case 672:
case 2362:
case 1286:
case 1725:
case 742:
case 2211:
case 2341:
case 1918:
case 2328:
case 3188:
case 3958:
case 172:
case 2172:
case 1804:
case 1593:
case 2063:
case 2597:
case 3066:
case 562:
case 3937:
case 2980:
case 2636:
case 1041:
case 3539:
case 904:
case 3633:
case 113:
case 1545:
case 531:
case 1846:
case 3215:
case 3584:
case 367:
case 2618:
case 654:
case 555:
case 1173:
case 2247:
case 3353:
case 2710:
case 1581:
case 2538:
case 3998:
case 860:
case 2923:
case 1243:
case 1085:
case 373:
case 3926:
case 4073:
case 2516:
case 3044:
case 3773:
case 326:
case 608:
case 1553:
case 2731:
case 15:
case 3801:
case 1922:
case 2242:
case 1295:
case 2261:
case 2627:
case 559:
case 2552:
case 238:
case 2425:
case 312:
case 1529:
case 1623:
case 1388:
case 2331:
case 1462:
case 4029:
case 2620:
case 278:
case 485:
case 2965:
case 944:
case 791:
case 3588:
case 2049:
case 1441:
case 999:
case 1573:
case 2756:
case 2717:
case 515:
case 854:
case 2577:
case 2691:
case 2324:
case 1145:
case 2550:
case 3139:
case 1808:
case 825:
case 3781:
case 1153:
case 1275:
case 2521:
case 1407:
case 3113:
case 2025:
case 1983:
case 3406:
case 571:
case 1269:
case 365:
case 3745:
case 660:
case 1181:
case 4045:
case 1402:
case 2651:
case 3444:
case 2796:
case 352:
case 3994:
case 1687:
case 1060:
case 829:
case 1485:
case 291:
case 132:
case 2589:
case 3686:
case 778:
case 1884:
case 2543:
case 2649:
case 2436:
case 1768:
case 309:
case 2418:
case 3217:
case 3347:
case 347:
case 3740:
case 3256:
case 479:
case 1839:
case 3504:
case 3893:
case 1079:
case 3935:
case 1304:
case 1252:
case 1499:
case 2900:
case 1949:
case 788:
case 2229:
case 3301:
case 1005:
case 288:
case 1423:
case 3296:
case 475:
case 950:
case 38:
case 2625:
case 868:
case 2427:
case 1087:
case 1660:
case 2817:
case 2315:
case 1925:
case 736:
case 3086:
case 1813:
case 230:
case 3168:
case 3419:
case 2422:
case 1140:
case 2109:
case 692:
case 3881:
case 3508:
case 2941:
case 2575:
case 1465:
case 2491:
case 1099:
case 922:
case 2569:
case 270:
case 502:
case 383:
case 2715:
case 646:
case 1147:
case 723:
case 2876:
case 2831:
case 3701:
case 2018:
case 451:
case 1161:
case 2414:
case 1641:
case 2036:
case 1963:
case 1764:
case 806:
case 1142:
case 1101:
case 910:
case 3644:
case 3761:
case 1903:
case 1685:
case 3164:
case 345:
case 2273:
case 1023:
case 2985:
case 892:
case 6:
case 1746:
case 1368:
case 3224:
case 640:
case 1482:
case 3340:
case 2902:
case 1834:
case 1906:
case 3483:
case 1288:
case 2164:
case 2742:
case 679:
case 1890:
case 2644:
case 749:
case 794:
case 3451:
case 1944:
case 323:
case 2747:
case 1309:
case 3902:
case 1074:
case 2340:
case 1098:
case 835:
case 2606:
case 3273:
case 3027:
case 376:
case 783:
case 245:
case 1478:
case 110:
case 406:
case 3985:
case 3962:
case 1877:
case 574:
case 3143:
case 1375:
case 3876:
case 164:
case 1032:
case 116:
case 3491:
case 1755:
case 863:
case 3575:
case 400:
case 2508:
case 3715:
case 1850:
case 2666:
case 3071:
case 3824:
case 2033:
case 2104:
case 3414:
case 3420:
case 1966:
case 1037:
case 1454:
case 2701:
case 207:
case 3831:
case 3195:
case 2296:
case 1426:
case 1030:
case 2228:
case 1948:
case 1498:
case 28:
case 2301:
case 728:
case 1094:
case 521:
case 2168:
case 150:
case 3051:
case 3555:
case 2881:
case 901:
case 3109:
case 1011:
case 709:
case 2419:
case 2853:
case 3856:
case 1355:
case 1857:
case 330:
case 2648:
case 2086:
case 811:
case 3245:
case 2845:
case 663:
case 3175:
case 2256:
case 2740:
case 2347:
case 156:
case 3253:
case 1437:
case 3543:
case 468:
case 4:
case 78:
case 639:
case 2212:
case 3900:
case 3091:
case 32:
case 1432:
case 3828:
case 2893:
case 3896:
case 2745:
case 91:
case 2840:
case 1809:
case 1321:
case 2911:
case 3521:
case 1156:
case 1117:
case 3987:
case 1792:
case 1678:
case 3116:
case 265:
case 3025:
case 2113:
case 3157:
case 391:
case 77:
case 2978:
case 1334:
case 2048:
case 3590:
case 3589:
case 3982:
case 1797:
case 3728:
case 3651:
case 1390:
case 2793:
case 3534:
case 769:
case 64:
case 1611:
case 1372:
case 3979:
case 3620:
case 3049:
case 2588:
case 3965:
case 27:
case 3331:
case 1196:
case 889:
case 3550:
case 1770:
case 1869:
case 2373:
case 1510:
case 3192:
case 1576:
case 3463:
case 3756:
case 3310:
case 3240:
case 4017:
case 2184:
case 687:
case 3324:
case 3691:
case 1716:
case 4056:
case 1350:
case 2513:
case 60:
case 3557:
case 1777:
case 584:
case 767:
case 1517:
case 226:
case 2773:
case 1338:
case 1556:
case 720:
case 2381:
case 2998:
case 3538:
case 3317:
case 2353:
case 4024:
case 2448:
case 2926:
case 1750:
case 273:
case 1246:
case 3724:
case 95:
case 1357:
case 338:
case 3552:
case 3003:
case 3134:
case 593:
case 23:
case 466:
case 1512:
case 3242:
case 2801:
case 414:
case 3731:
case 3190:
case 3959:
case 4031:
case 427:
case 73:
case 1596:
case 460:
case 2937:
case 3597:
case 689:
case 3201:
case 3063:
case 1528:
case 1264:
case 197:
case 1397:
case 1895:
case 2861:
case 2393:
case 3618:
case 220:
case 267:
case 2215:
case 2345:
case 1658:
case 972:
case 3592:
case 2932:
case 1110:
case 386:
case 3636:
case 3980:
case 1637:
case 2205:
case 3278:
case 3608:
case 899:
case 1567:
case 221:
case 2675:
case 1473:
case 3566:
case 2097:
case 2669:
case 2563:
case 1748:
case 1366:
case 4060:
case 3865:
case 2282:
case 2149:
case 3879:
case 3760:
case 1562:
case 925:
case 2854:
case 3211:
case 505:
case 2092:
case 604:
case 3488:
case 2287:
case 3039:
case 189:
case 1886:
case 3385:
case 3544:
case 3013:
case 2125:
case 818:
case 658:
case 895:
case 2489:
case 453:
case 2940:
case 2038:
case 1081:
case 908:
case 1909:
case 2490:
case 3302:
case 1214:
case 2070:
case 1640:
case 2894:
case 2052:
case 2503:
case 734:
case 721:
case 547:
case 3668:
case 1029:
case 185:
case 2830:
case 10:
case 3148:
case 2735:
case 1306:
case 2878:
case 2858:
case 45:
case 2549:
case 1500:
case 3088:
case 187:
case 3646:
case 3300:
case 2837:
case 699:
case 2942:
case 1833:
case 103:
case 1642:
case 3785:
case 3274:
case 396:
case 897:
case 2695:
case 966:
case 2497:
case 3298:
case 1744:
case 4002:
case 1943:
case 1493:
case 2077:
case 1162:
case 1185:
case 3915:
case 2826:
case 4041:
case 14:
case 2898:
case 413:
case 4062:
case 618:
case 1102:
case 2452:
case 927:
case 1271:
case 3144:
case 2525:
case 3859:
case 2470:
case 1236:
case 1560:
case 948:
case 2901:
case 3548:
case 1481:
case 3237:
case 2438:
case 1453:
case 4067:
case 1348:
case 2416:
case 3360:
case 2034:
case 2457:
case 3767:
case 3258:
case 359:
case 3723:
case 3924:
case 2171:
case 3910:
case 1180:
case 2672:
case 2202:
case 53:
case 3841:
case 1047:
case 3976:
case 2043:
case 2285:
case 822:
case 139:
case 284:
case 2469:
case 1673:
case 906:
case 2475:
case 1719:
case 4059:
case 317:
case 3408:
case 864:
case 2677:
case 1565:
case 2591:
case 2650:
case 1042:
case 816:
case 1972:
case 151:
case 2621:
case 2758:
case 2267:
case 1159:
case 1989:
case 3382:
case 3119:
case 784:
case 900:
case 1582:
case 2330:
case 135:
case 3064:
case 1806:
case 3305:
case 331:
case 2551:
case 1386:
case 2127:
case 2055:
case 3387:
case 3799:
case 3780:
case 362:
case 2311:
case 2732:
case 1587:
case 2690:
case 2583:
case 2689:
case 1786:
case 3404:
case 2120:
case 3380:
case 1442:
case 1992:
case 3787:
case 1599:
case 2332:
case 2075:
case 1580:
case 3008:
case 1225:
case 2945:
case 2495:
case 2069:
case 3446:
case 4082:
case 3639:
case 2260:
case 2794:
case 2358:
case 616:
case 2443:
case 3996:
case 3782:
case 137:
case 1447:
case 401:
case 2518:
case 2191:
case 2730:
case 2337:
case 4005:
case 3800:
case 1179:
case 2835:
case 3705:
case 850:
case 3235:
case 968:
case 1319:
case 3613:
case 2657:
case 3519:
case 2616:
case 1559:
case 1653:
case 398:
case 2183:
case 1957:
case 2326:
case 3917:
case 2953:
case 1187:
case 3956:
case 1040:
case 1938:
case 1401:
case 2652:
case 569:
case 2009:
case 179:
case 9:
case 1970:
case 1523:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746950401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,];
var gg_b = "1746950401/";

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
