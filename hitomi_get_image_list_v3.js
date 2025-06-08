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
case 18:
case 3010:
case 3565:
case 635:
case 1480:
case 1553:
case 1524:
case 2930:
case 644:
case 487:
case 3147:
case 2552:
case 1473:
case 3156:
case 1537:
case 3735:
case 2018:
case 1496:
case 1125:
case 1093:
case 2085:
case 1555:
case 3757:
case 2490:
case 1502:
case 2942:
case 780:
case 251:
case 3412:
case 3746:
case 888:
case 765:
case 1936:
case 1082:
case 3509:
case 4049:
case 3526:
case 1419:
case 2070:
case 2486:
case 837:
case 854:
case 3074:
case 1154:
case 526:
case 531:
case 218:
case 2569:
case 1095:
case 2791:
case 1475:
case 146:
case 2361:
case 3498:
case 869:
case 1166:
case 1772:
case 1662:
case 4076:
case 2780:
case 3603:
case 3306:
case 1289:
case 3828:
case 1322:
case 419:
case 1187:
case 3669:
case 3779:
case 2444:
case 3985:
case 2448:
case 3914:
case 3295:
case 138:
case 2481:
case 1274:
case 3837:
case 2910:
case 322:
case 2358:
case 1278:
case 2216:
case 2773:
case 3788:
case 2038:
case 3784:
case 361:
case 3432:
case 1826:
case 1360:
case 3983:
case 904:
case 4095:
case 2197:
case 2978:
case 402:
case 2974:
case 1809:
case 253:
case 3605:
case 741:
case 1439:
case 1916:
case 3802:
case 2299:
case 3276:
case 533:
case 2989:
case 1071:
case 267:
case 239:
case 3293:
case 3970:
case 69:
case 2231:
case 3665:
case 1347:
case 3775:
case 376:
case 1798:
case 440:
case 1300:
case 1218:
case 3231:
case 1869:
case 339:
case 1214:
case 1036:
case 1292:
case 1637:
case 3974:
case 2983:
case 986:
case 712:
case 2432:
case 3197:
case 192:
case 3719:
case 114:
case 794:
case 607:
case 181:
case 3299:
case 1712:
case 2605:
case 4016:
case 270:
case 805:
case 2837:
case 3796:
case 3358:
case 0:
case 2992:
case 2295:
case 693:
case 2440:
case 3859:
case 3038:
case 2715:
case 1655:
case 94:
case 833:
case 2784:
case 3820:
case 3773:
case 2407:
case 1852:
case 1805:
case 2788:
case 2603:
case 2306:
case 3467:
case 2828:
case 616:
case 1045:
case 2030:
case 2329:
case 2824:
case 2985:
case 2282:
case 4031:
case 2521:
case 864:
case 2914:
case 3448:
case 1270:
case 2350:
case 25:
case 1993:
case 2918:
case 3444:
case 318:
case 36:
case 9:
case 3569:
case 3791:
case 3083:
case 1413:
case 1234:
case 1016:
case 4043:
case 3503:
case 414:
case 481:
case 3361:
case 2563:
case 2746:
case 140:
case 1971:
case 2089:
case 3245:
case 3387:
case 4036:
case 520:
case 2509:
case 183:
case 691:
case 572:
case 1488:
case 2817:
case 909:
case 2271:
case 2927:
case 3236:
case 3085:
case 1559:
case 2168:
case 1031:
case 2735:
case 826:
case 2100:
case 955:
case 3160:
case 3104:
case 74:
case 4011:
case 1099:
case 475:
case 587:
case 2244:
case 632:
case 2991:
case 1558:
case 2248:
case 1566:
case 200:
case 1601:
case 677:
case 666:
case 2742:
case 2416:
case 1098:
case 3163:
case 1094:
case 284:
case 2939:
case 3075:
case 1102:
case 3495:
case 3240:
case 3126:
case 1474:
case 1478:
case 3556:
case 3547:
case 1745:
case 3080:
case 164:
case 2499:
case 426:
case 2079:
case 1410:
case 3564:
case 762:
case 4040:
case 3500:
case 3727:
case 2508:
case 1948:
case 3493:
case 1944:
case 875:
case 2431:
case 1967:
case 1124:
case 3734:
case 2801:
case 317:
case 105:
case 2084:
case 1711:
case 2015:
case 2651:
case 3165:
case 3738:
case 3913:
case 4094:
case 2057:
case 3551:
case 3320:
case 3039:
case 1352:
case 2272:
case 2046:
case 296:
case 2337:
case 3858:
case 3770:
case 1986:
case 3608:
case 2600:
case 2668:
case 2850:
case 3091:
case 2033:
case 2774:
case 3449:
case 2806:
case 519:
case 1442:
case 1273:
case 2656:
case 4012:
case 3792:
case 1868:
case 433:
case 2996:
case 389:
case 1219:
case 1369:
case 1864:
case 608:
case 723:
case 2973:
case 1847:
case 2445:
case 2290:
case 405:
case 3988:
case 1430:
case 3212:
case 1972:
case 2411:
case 131:
case 3121:
case 1731:
case 936:
case 3785:
case 1587:
case 31:
case 3714:
case 1666:
case 1213:
case 1363:
case 3980:
case 4072:
case 2298:
case 3355:
case 1438:
case 1326:
case 1654:
case 268:
case 2121:
case 2718:
case 3035:
case 1044:
case 2792:
case 673:
case 2825:
case 2362:
case 2212:
case 583:
case 120:
case 3445:
case 3973:
case 3436:
case 1822:
case 927:
case 3597:
case 1795:
case 2091:
case 2449:
case 3664:
case 2783:
case 1625:
case 3778:
case 846:
case 1288:
case 1215:
case 4090:
case 137:
case 154:
case 3272:
case 2866:
case 1994:
case 3789:
case 1998:
case 1241:
case 2660:
case 2823:
case 188:
case 2608:
case 1279:
case 72:
case 3337:
case 4086:
case 3431:
case 2096:
case 3560:
case 4044:
case 2887:
case 915:
case 1414:
case 2165:
case 730:
case 3015:
case 495:
case 3801:
case 420:
case 838:
case 2734:
case 2073:
case 671:
case 592:
case 2377:
case 3041:
case 2547:
case 3499:
case 2080:
case 3730:
case 2556:
case 1246:
case 2727:
case 2500:
case 2568:
case 887:
case 4081:
case 629:
case 2697:
case 2935:
case 3079:
case 581:
case 1506:
case 311:
case 2946:
case 1771:
case 2075:
case 1661:
case 384:
case 3742:
case 660:
case 2957:
case 1529:
case 2163:
case 3013:
case 2109:
case 1483:
case 1321:
case 242:
case 1086:
case 13:
case 2495:
case 3281:
case 2126:
case 2482:
case 3248:
case 3991:
case 2019:
case 469:
case 3244:
case 358:
case 3317:
case 1090:
case 952:
case 300:
case 727:
case 1149:
case 1532:
case 1385:
case 1314:
case 515:
case 1264:
case 783:
case 2696:
case 1200:
case 3922:
case 1950:
case 3812:
case 1256:
case 1906:
case 3539:
case 3142:
case 3688:
case 848:
case 1247:
case 2557:
case 2890:
case 3051:
case 1929:
case 371:
case 3684:
case 1672:
case 4066:
case 3898:
case 494:
case 1875:
case 2477:
case 3641:
case 186:
case 4:
case 3894:
case 981:
case 2097:
case 3769:
case 3679:
case 914:
case 2886:
case 412:
case 398:
case 2872:
case 3266:
case 2765:
case 2138:
case 2675:
case 1061:
case 1880:
case 823:
case 277:
case 2395:
case 1383:
case 3960:
case 1421:
case 3258:
case 2250:
case 1540:
case 2382:
case 2535:
case 2127:
case 4025:
case 552:
case 1720:
case 1873:
case 1507:
case 3752:
case 2956:
case 3417:
case 2206:
case 684:
case 3455:
case 3261:
case 486:
case 3311:
case 1463:
case 781:
case 3997:
case 3178:
case 112:
case 1409:
case 2183:
case 373:
case 1054:
case 1426:
case 208:
case 3519:
case 1195:
case 530:
case 940:
case 1182:
case 2022:
case 1891:
case 1667:
case 356:
case 2513:
case 2462:
case 983:
case 2951:
case 2201:
case 1598:
case 3068:
case 3000:
case 1025:
case 821:
case 836:
case 3336:
case 3633:
case 2114:
case 27:
case 2691:
case 2579:
case 2185:
case 2844:
case 3580:
case 1465:
case 3047:
case 862:
case 1251:
case 3428:
case 3453:
case 3424:
case 879:
case 4061:
case 224:
case 155:
case 3343:
case 3573:
case 2420:
case 2639:
case 2004:
case 613:
case 3840:
case 2881:
case 2060:
case 3420:
case 1405:
case 1452:
case 2807:
case 2343:
case 2573:
case 2646:
case 1961:
case 3639:
case 690:
case 324:
case 1632:
case 3008:
case 1297:
case 3459:
case 830:
case 2110:
case 3881:
case 1835:
case 2437:
case 3004:
case 2596:
case 3192:
case 2336:
case 3844:
case 3185:
case 3118:
case 3721:
case 3848:
case 2000:
case 4001:
case 2424:
case 787:
case 2428:
case 919:
case 2047:
case 61:
case 2287:
case 1469:
case 1050:
case 3170:
case 3022:
case 1029:
case 1330:
case 3462:
case 480:
case 3951:
case 2345:
case 1403:
case 2189:
case 256:
case 1006:
case 465:
case 562:
case 350:
case 1857:
case 579:
case 141:
case 689:
case 1640:
case 2174:
case 536:
case 2832:
case 273:
case 3183:
case 719:
case 199:
case 3964:
case 987:
case 3250:
case 3900:
case 1222:
case 3968:
case 3206:
case 1815:
case 2417:
case 1389:
case 285:
case 2752:
case 1001:
case 1612:
case 3947:
case 1888:
case 260:
case 2130:
case 3765:
case 3138:
case 366:
case 1841:
case 1694:
case 3134:
case 3872:
case 2266:
case 1753:
case 2960:
case 78:
case 1548:
case 2908:
case 2223:
case 3395:
case 1544:
case 2254:
case 3477:
case 2703:
case 1966:
case 852:
case 2399:
case 441:
case 1813:
case 1143:
case 746:
case 1923:
case 298:
case 1260:
case 1958:
case 2769:
case 3097:
case 1208:
case 2679:
case 2591:
case 3393:
case 3709:
case 143:
case 2331:
case 4050:
case 1755:
case 3890:
case 2051:
case 2684:
case 271:
case 523:
case 82:
case 3763:
case 3376:
case 2812:
case 3673:
case 180:
case 3386:
case 594:
case 3683:
case 3021:
case 1959:
case 4037:
case 2768:
case 1209:
case 2135:
case 1226:
case 651:
case 3255:
case 2899:
case 1616:
case 1263:
case 2398:
case 4028:
case 2538:
case 2965:
case 3876:
case 2401:
case 130:
case 297:
case 3893:
case 2831:
case 3487:
case 3670:
case 66:
case 618:
case 3228:
case 509:
case 235:
case 1388:
case 3224:
case 203:
case 841:
case 452:
case 937:
case 954:
case 3614:
case 1878:
case 382:
case 2610:
case 42:
case 1549:
case 1132:
case 2259:
case 2909:
case 1874:
case 988:
case 1706:
case 1699:
case 4055:
case 1571:
case 2220:
case 2816:
case 3542:
case 391:
case 2146:
case 1456:
case 2642:
case 2188:
case 828:
case 1028:
case 2845:
case 1447:
case 720:
case 795:
case 3510:
case 349:
case 653:
case 2592:
case 1400:
case 1468:
case 639:
case 2585:
case 1593:
case 29:
case 1037:
case 2518:
case 1346:
case 1643:
case 2052:
case 676:
case 2141:
case 899:
case 2811:
case 12:
case 3381:
case 3454:
case 3026:
case 880:
case 1582:
case 1335:
case 3009:
case 3458:
case 1221:
case 865:
case 788:
case 1198:
case 3466:
case 2113:
case 1194:
case 201:
case 54:
case 2751:
case 843:
case 3175:
case 3638:
case 210:
case 754:
case 737:
case 2406:
case 3367:
case 1645:
case 427:
case 1595:
case 2069:
case 2450:
case 772:
case 393:
case 3627:
case 152:
case 3578:
case 2217:
case 2367:
case 3406:
case 310:
case 1516:
case 1062:
case 2627:
case 886:
case 1422:
case 2119:
case 2797:
case 3069:
case 2009:
case 2458:
case 1186:
case 3570:
case 3340:
case 2026:
case 2381:
case 301:
case 216:
case 2638:
case 2175:
case 3751:
case 3843:
case 2466:
case 2063:
case 2634:
case 39:
case 1404:
case 462:
case 1059:
case 1460:
case 964:
case 479:
case 1408:
case 3921:
case 3141:
case 2180:
case 1838:
case 1834:
case 3005:
case 3052:
case 207:
case 1671:
case 1761:
case 3642:
case 3188:
case 933:
case 2173:
case 123:
case 2196:
case 2510:
case 249:
case 905:
case 1391:
case 1649:
case 2722:
case 448:
case 3909:
case 3259:
case 663:
case 1883:
case 3816:
case 2542:
case 1252:
case 1955:
case 3146:
case 1380:
case 3157:
case 344:
case 2903:
case 2253:
case 1373:
case 1676:
case 1543:
case 4062:
case 634:
case 3133:
case 1754:
case 278:
case 2882:
case 1758:
case 3262:
case 3312:
case 1928:
case 3534:
case 3401:
case 2390:
case 1953:
case 3538:
case 2670:
case 1144:
case 2760:
case 1885:
case 733:
case 1818:
case 1695:
case 931:
case 541:
case 926:
case 20:
case 3764:
case 3674:
case 2021:
case 1892:
case 3700:
case 759:
case 3678:
case 847:
case 2530:
case 809:
case 3756:
case 764:
case 2952:
case 121:
case 2461:
case 3394:
case 3209:
case 262:
case 683:
case 2725:
case 2892:
case 3140:
case 3226:
case 2695:
case 3810:
case 236:
case 2375:
case 1255:
case 1202:
case 87:
case 1530:
case 573:
case 3616:
case 4065:
case 2203:
case 2953:
case 1876:
case 2269:
case 449:
case 1708:
case 1760:
case 1670:
case 556:
case 2885:
case 3451:
case 327:
case 3265:
case 3315:
case 1224:
case 913:
case 1903:
case 808:
case 2373:
case 2758:
case 3631:
case 1882:
case 2693:
case 178:
case 1614:
case 1191:
case 3878:
case 2883:
case 996:
case 1237:
case 3379:
case 1895:
case 3750:
case 2497:
case 1722:
case 2077:
case 3699:
case 3571:
case 2380:
case 416:
case 784:
case 1372:
case 2252:
case 2902:
case 2955:
case 711:
case 3456:
case 3024:
case 3830:
case 2917:
case 832:
case 2761:
case 1065:
case 2671:
case 107:
case 315:
case 3464:
case 149:
case 692:
case 3636:
case 223:
case 1196:
case 3400:
case 2408:
case 40:
case 2460:
case 2059:
case 3037:
case 2531:
case 4021:
case 3593:
case 3701:
case 2339:
case 3643:
case 598:
case 3346:
case 1180:
case 1026:
case 1381:
case 32:
case 3221:
case 1009:
case 3582:
case 1466:
case 3977:
case 1638:
case 3611:
case 3194:
case 116:
case 2062:
case 3112:
case 2516:
case 374:
case 958:
case 1367:
case 1217:
case 193:
case 478:
case 1344:
case 1119:
case 3595:
case 1578:
case 1348:
case 900:
case 352:
case 1627:
case 435:
case 1003:
case 2645:
case 1429:
case 2112:
case 790:
case 3062:
case 2842:
case 110:
case 252:
case 1583:
case 1836:
case 638:
case 3422:
case 2582:
case 2335:
case 906:
case 348:
case 566:
case 1340:
case 1570:
case 2055:
case 2611:
case 101:
case 687:
case 1113:
case 532:
case 942:
case 1307:
case 768:
case 1518:
case 1921:
case 3408:
case 3460:
case 3059:
case 3838:
case 1811:
case 2357:
case 1141:
case 3339:
case 3172:
case 1052:
case 2701:
case 1005:
case 2643:
case 3761:
case 3671:
case 1115:
case 2028:
case 1184:
case 2447:
case 1845:
case 2053:
case 497:
case 3917:
case 2456:
case 2024:
case 1188:
case 1642:
case 2468:
case 789:
case 323:
case 2400:
case 917:
case 2636:
case 2549:
case 1259:
case 2132:
case 1909:
case 619:
case 3536:
case 3497:
case 2878:
case 856:
case 1926:
case 1146:
case 3955:
case 706:
case 3205:
case 3252:
case 2341:
case 144:
case 1963:
case 2706:
case 401:
case 3676:
case 3373:
case 2451:
case 57:
case 873:
case 135:
case 2384:
case 2315:
case 1133:
case 2631:
case 3758:
case 3396:
case 103:
case 230:
case 197:
case 717:
case 1965:
case 1312:
case 1262:
case 2017:
case 3511:
case 1689:
case 1538:
case 989:
case 3203:
case 3269:
case 3814:
case 3144:
case 3818:
case 602:
case 3148:
case 1674:
case 379:
case 2810:
case 362:
case 1678:
case 2209:
case 1768:
case 550:
case 4052:
case 4005:
case 321:
case 3545:
case 1747:
case 91:
case 3819:
case 129:
case 2136:
case 3264:
case 3314:
case 967:
case 976:
case 3268:
case 243:
case 3950:
case 1225:
case 3200:
case 751:
case 1688:
case 1539:
case 3906:
case 1812:
case 456:
case 3929:
case 3247:
case 2143:
case 1898:
case 3762:
case 2813:
case 953:
case 1894:
case 386:
case 3875:
case 1703:
case 2966:
case 1679:
case 2208:
case 1769:
case 473:
case 2204:
case 2954:
case 76:
case 3392:
case 2923:
case 2724:
case 1613:
case 1316:
case 2841:
case 2694:
case 2111:
case 3061:
case 2567:
case 1254:
case 228:
case 1223:
case 34:
case 2548:
case 1908:
case 2581:
case 63:
case 3759:
case 3540:
case 4000:
case 2737:
case 160:
case 4056:
case 2001:
case 3720:
case 2145:
case 2389:
case 1417:
case 2815:
case 593:
case 3338:
case 3:
case 1311:
case 1261:
case 2590:
case 1455:
case 2607:
case 620:
case 3463:
case 3512:
case 695:
case 173:
case 835:
case 312:
case 3058:
case 1635:
case 753:
case 3681:
case 1832:
case 3426:
case 3054:
case 739:
case 3327:
case 2586:
case 429:
case 3891:
case 2833:
case 951:
case 471:
case 4051:
case 1575:
case 3777:
case 1345:
case 1189:
case 776:
case 767:
case 3598:
case 3193:
case 309:
case 1633:
case 1064:
case 1428:
case 485:
case 3251:
case 1047:
case 460:
case 2342:
case 2572:
case 2199:
case 654:
case 2961:
case 2405:
case 1573:
case 1343:
case 672:
case 1437:
case 591:
case 2835:
case 1596:
case 1639:
case 3961:
case 761:
case 3405:
case 1420:
case 124:
case 1584:
case 477:
case 255:
case 1515:
case 1881:
case 722:
case 1060:
case 1008:
case 544:
case 934:
case 3632:
case 1004:
case 1691:
case 1185:
case 1114:
case 535:
case 209:
case 945:
case 1848:
case 1721:
case 2193:
case 2025:
case 1118:
case 3131:
case 3987:
case 2176:
case 3572:
case 1541:
case 2901:
case 1022:
case 2644:
case 891:
case 3050:
case 3833:
case 2648:
case 2182:
case 3586:
case 597:
case 2327:
case 1951:
case 2598:
case 3330:
case 3029:
case 3006:
case 2667:
case 878:
case 2334:
case 3846:
case 3607:
case 341:
case 770:
case 2681:
case 2058:
case 212:
case 1127:
case 510:
case 399:
case 1535:
case 3737:
case 2759:
case 1619:
case 2087:
case 1968:
case 3222:
case 1250:
case 2370:
case 3925:
case 3884:
case 3145:
case 1956:
case 1206:
case 745:
case 2720:
case 1947:
case 3694:
case 3841:
case 424:
case 177:
case 166:
case 1138:
case 1765:
case 2880:
case 3111:
case 849:
case 734:
case 3724:
case 3753:
case 1872:
case 3548:
case 807:
case 4004:
case 2383:
case 3374:
case 3879:
case 4008:
case 605:
case 286:
case 3966:
case 2875:
case 450:
case 59:
case 893:
case 2762:
case 3813:
case 633:
case 3923:
case 2392:
case 3208:
case 3310:
case 3260:
case 2950:
case 3136:
case 2819:
case 1726:
case 2385:
case 365:
case 2247:
case 3755:
case 664:
case 380:
case 1673:
case 628:
case 3523:
case 4091:
case 2470:
case 910:
case 3012:
case 2162:
case 425:
case 3851:
case 853:
case 490:
case 1163:
case 2529:
case 744:
case 522:
case 106:
case 3094:
case 3474:
case 2749:
case 901:
case 1126:
case 2897:
case 2550:
case 1495:
case 3736:
case 867:
case 876:
case 2483:
case 2235:
case 699:
case 2072:
case 3239:
case 1556:
case 680:
case 2246:
case 1861:
case 1080:
case 2257:
case 359:
case 468:
case 1232:
case 2159:
case 1935:
case 3981:
case 3137:
case 1568:
case 3525:
case 570:
case 489:
case 3291:
case 2233:
case 2418:
case 1096:
case 1073:
case 3967:
case 1738:
case 1165:
case 797:
case 3711:
case 2241:
case 406:
case 1320:
case 851:
case 442:
case 2279:
case 3986:
case 534:
case 272:
case 1783:
case 935:
case 1091:
case 2795:
case 1471:
case 190:
case 2365:
case 903:
case 818:
case 86:
case 3442:
case 3868:
case 1792:
case 1825:
case 3369:
case 3650:
case 2044:
case 1622:
case 3561:
case 2067:
case 1988:
case 3606:
case 3847:
case 3629:
case 295:
case 220:
case 3856:
case 1362:
case 1915:
case 3430:
case 331:
case 4080:
case 2438:
case 3275:
case 2501:
case 3007:
case 2434:
case 1941:
case 2666:
case 1718:
case 2658:
case 1979:
case 1121:
case 2808:
case 1714:
case 11:
case 2654:
case 3501:
case 2007:
case 1980:
case 3776:
case 3363:
case 3666:
case 3438:
case 226:
case 231:
case 56:
case 518:
case 90:
case 4041:
case 3654:
case 3808:
case 2040:
case 2587:
case 3326:
case 1035:
case 2731:
case 3793:
case 1286:
case 2369:
case 2864:
case 3044:
case 1996:
case 1710:
case 612:
case 857:
case 834:
case 2800:
case 395:
case 2430:
case 694:
case 2117:
case 1973:
case 6:
case 2847:
case 2303:
case 4084:
case 1774:
case 369:
case 3795:
case 1850:
case 1597:
case 3822:
case 1436:
case 1919:
case 793:
case 1600:
case 2296:
case 113:
case 2716:
case 2442:
case 2273:
case 1353:
case 1656:
case 354:
case 337:
case 3215:
case 3912:
case 1046:
case 4013:
case 196:
case 1975:
case 2305:
case 3177:
case 3998:
case 411:
case 388:
case 2032:
case 233:
case 1504:
case 1508:
case 2291:
case 2948:
case 3485:
case 3233:
case 2711:
case 686:
case 205:
case 539:
case 2153:
case 2967:
case 1088:
case 264:
case 1499:
case 3907:
case 3072:
case 3246:
case 4035:
case 3940:
case 2410:
case 184:
case 1939:
case 4057:
case 2155:
case 3506:
case 1013:
case 496:
case 3529:
case 1416:
case 1742:
case 2098:
case 2478:
case 3321:
case 3483:
case 3235:
case 2474:
case 1281:
case 916:
case 2736:
case 3897:
case 33:
case 2558:
case 1248:
case 413:
case 158:
case 1244:
case 3470:
case 3687:
case 2523:
case 1169:
case 3090:
case 993:
case 1267:
case 1317:
case 3162:
case 2012:
case 2601:
case 2743:
case 100:
case 422:
case 3821:
case 2479:
case 3744:
case 732:
case 924:
case 38:
case 2441:
case 157:
case 134:
case 3528:
case 3677:
case 3767:
case 1565:
case 3911:
case 1147:
case 97:
case 1271:
case 3242:
case 3473:
case 163:
case 1100:
case 3093:
case 1735:
case 1168:
case 3781:
case 2740:
case 525:
case 1927:
case 2617:
case 589:
case 621:
case 3502:
case 2971:
case 2129:
case 1509:
case 3082:
case 2227:
case 662:
case 1526:
case 1078:
case 950:
case 2238:
case 908:
case 813:
case 2016:
case 2234:
case 1498:
case 470:
case 2562:
case 3662:
case 1828:
case 2045:
case 387:
case 1603:
case 3865:
case 1918:
case 1779:
case 1669:
case 3931:
case 3187:
case 2270:
case 1350:
case 2993:
case 463:
case 1985:
case 3274:
case 338:
case 1295:
case 1440:
case 2283:
case 724:
case 3999:
case 1788:
case 542:
case 932:
case 2805:
case 1407:
case 2852:
case 161:
case 275:
case 3161:
case 1715:
case 2011:
case 2655:
case 3659:
case 3308:
case 292:
case 3360:
case 4074:
case 800:
case 1432:
case 3304:
case 2292:
case 623:
case 708:
case 2995:
case 3439:
case 2446:
case 3863:
case 3620:
case 750:
case 1855:
case 3790:
case 1802:
case 214:
case 3916:
case 1276:
case 2628:
case 2794:
case 1151:
case 2803:
case 2347:
case 2869:
case 2214:
case 2285:
case 2982:
case 2368:
case 3786:
case 1970:
case 811:
case 1293:
case 3794:
case 3628:
case 167:
case 451:
case 1775:
case 3347:
case 2071:
case 3803:
case 3624:
case 1231:
case 3218:
case 3300:
case 1325:
case 806:
case 3364:
case 3214:
case 3869:
case 2491:
case 971:
case 2049:
case 3433:
case 3285:
case 4083:
case 2304:
case 3637:
case 3995:
case 3292:
case 392:
case 1978:
case 2210:
case 1299:
case 314:
case 2790:
case 2439:
case 2863:
case 3712:
case 1796:
case 3435:
case 652:
case 1910:
case 238:
case 1481:
case 1859:
case 375:
case 2517:
case 2999:
case 1366:
case 1773:
case 1034:
case 1820:
case 287:
case 2289:
case 3976:
case 558:
case 3101:
case 2772:
case 1027:
case 960:
case 2931:
case 2322:
case 798:
case 118:
case 2154:
case 825:
case 2158:
case 1486:
case 202:
case 3234:
case 2166:
case 3562:
case 3413:
case 246:
case 1361:
case 2943:
case 3971:
case 771:
case 2230:
case 3106:
case 467:
case 1490:
case 2555:
case 3617:
case 1942:
case 3150:
case 439:
case 1122:
case 2419:
case 1387:
case 3732:
case 2082:
case 2936:
case 81:
case 868:
case 3707:
case 1505:
case 2473:
case 2242:
case 3484:
case 760:
case 1930:
case 3415:
case 3559:
case 1014:
case 219:
case 3740:
case 2537:
case 2496:
case 1160:
case 28:
case 2748:
case 1104:
case 596:
case 1243:
case 3441:
case 2677:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749420001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,];
var gg_b = "1749420001/";

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
