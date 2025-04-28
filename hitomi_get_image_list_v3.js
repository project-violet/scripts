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
case 1227:
case 3368:
case 2056:
case 2938:
case 326:
case 2671:
case 2744:
case 1407:
case 2878:
case 3689:
case 1078:
case 1856:
case 3629:
case 1685:
case 3356:
case 704:
case 1164:
case 855:
case 997:
case 2815:
case 1386:
case 3655:
case 2523:
case 3886:
case 2505:
case 3908:
case 3472:
case 2583:
case 1199:
case 983:
case 3019:
case 1496:
case 2713:
case 3257:
case 399:
case 863:
case 564:
case 101:
case 2598:
case 732:
case 2602:
case 917:
case 3552:
case 64:
case 3724:
case 28:
case 2370:
case 3804:
case 974:
case 365:
case 3514:
case 2649:
case 3543:
case 458:
case 527:
case 3401:
case 2846:
case 1791:
case 3632:
case 1046:
case 785:
case 3265:
case 2279:
case 2834:
case 793:
case 1020:
case 1080:
case 2954:
case 2880:
case 1144:
case 1817:
case 2820:
case 3435:
case 2991:
case 2393:
case 367:
case 2687:
case 2261:
case 1271:
case 889:
case 1596:
case 1610:
case 2203:
case 2423:
case 3093:
case 2225:
case 2799:
case 759:
case 566:
case 2328:
case 672:
case 3452:
case 1340:
case 976:
case 3840:
case 678:
case 995:
case 1422:
case 1482:
case 3647:
case 2154:
case 1936:
case 439:
case 1066:
case 1249:
case 3501:
case 3618:
case 442:
case 1392:
case 2112:
case 2076:
case 3856:
case 3164:
case 1356:
case 2590:
case 3685:
case 3625:
case 1689:
case 2553:
case 3661:
case 2378:
case 3868:
case 614:
case 199:
case 2542:
case 550:
case 2130:
case 2086:
case 447:
case 1019:
case 2633:
case 581:
case 1706:
case 87:
case 3199:
case 3659:
case 852:
case 2315:
case 58:
case 2437:
case 1655:
case 1195:
case 1886:
case 2462:
case 2218:
case 3360:
case 231:
case 2930:
case 455:
case 119:
case 165:
case 3304:
case 3251:
case 30:
case 2870:
case 3999:
case 23:
case 2004:
case 301:
case 2060:
case 1995:
case 2247:
case 782:
case 1784:
case 3294:
case 1265:
case 3754:
case 463:
case 3269:
case 735:
case 3046:
case 3900:
case 2275:
case 2346:
case 1401:
case 362:
case 1632:
case 1543:
case 1221:
case 3144:
case 2197:
case 2657:
case 1317:
case 3439:
case 2255:
case 3641:
case 3136:
case 737:
case 3080:
case 912:
case 3774:
case 918:
case 616:
case 820:
case 2562:
case 848:
case 2537:
case 2289:
case 2229:
case 3271:
case 266:
case 528:
case 2442:
case 721:
case 1675:
case 2124:
case 1028:
case 2184:
case 630:
case 1277:
case 279:
case 2621:
case 2040:
case 1414:
case 3913:
case 445:
case 2828:
case 2267:
case 2681:
case 3392:
case 1892:
case 3944:
case 1443:
case 2358:
case 3249:
case 225:
case 3066:
case 1618:
case 3738:
case 1647:
case 3058:
case 489:
case 696:
case 1563:
case 998:
case 3876:
case 1376:
case 143:
case 545:
case 2864:
case 1934:
case 1717:
case 3637:
case 2720:
case 2780:
case 2459:
case 714:
case 344:
case 1064:
case 191:
case 3095:
case 3830:
case 2541:
case 1099:
case 2485:
case 3416:
case 2403:
case 2899:
case 3119:
case 3557:
case 4048:
case 19:
case 2395:
case 2607:
case 2298:
case 907:
case 3673:
case 866:
case 111:
case 3008:
case 3170:
case 3919:
case 248:
case 1551:
case 986:
case 688:
case 242:
case 309:
case 3214:
case 1134:
case 3243:
case 3521:
case 2956:
case 2038:
case 440:
case 428:
case 557:
case 3445:
case 1776:
case 635:
case 3581:
case 1146:
case 1402:
case 3792:
case 2968:
case 3338:
case 794:
case 3565:
case 1838:
case 354:
case 1120:
case 3897:
case 1605:
case 1180:
case 1958:
case 1623:
case 1768:
case 2836:
case 1207:
case 1756:
case 637:
case 1:
case 1044:
case 1013:
case 83:
case 2561:
case 2639:
case 3786:
case 1296:
case 4056:
case 2503:
case 3516:
case 3988:
case 2585:
case 3150:
case 3690:
case 2441:
case 1306:
case 2525:
case 3928:
case 3193:
case 905:
case 3824:
case 27:
case 621:
case 1324:
case 252:
case 1384:
case 3577:
case 1451:
case 3884:
case 3950:
case 62:
case 3993:
case 3128:
case 2682:
case 2231:
case 3312:
case 2479:
case 703:
case 1812:
case 2917:
case 827:
case 2746:
case 1502:
case 1158:
case 2054:
case 1469:
case 1980:
case 2734:
case 1549:
case 3354:
case 481:
case 2948:
case 2176:
case 547:
case 775:
case 3421:
case 910:
case 2672:
case 3946:
case 1374:
case 466:
case 604:
case 1235:
case 1433:
case 2186:
case 2895:
case 520:
case 542:
case 39:
case 3471:
case 3099:
case 1970:
case 2489:
case 1095:
case 2960:
case 3330:
case 391:
case 2750:
case 840:
case 3915:
case 425:
case 2432:
case 1214:
case 31:
case 74:
case 2926:
case 1252:
case 1008:
case 1170:
case 4011:
case 289:
case 2788:
case 1673:
case 649:
case 2547:
case 3594:
case 311:
case 2160:
case 1565:
case 3838:
case 3146:
case 2575:
case 3776:
case 3449:
case 1243:
case 479:
case 1533:
case 4026:
case 693:
case 146:
case 3427:
case 247:
case 4086:
case 3487:
case 1642:
case 3958:
case 3180:
case 3623:
case 3768:
case 3683:
case 3605:
case 3306:
case 1928:
case 2589:
case 881:
case 1516:
case 96:
case 1988:
case 3571:
case 3296:
case 1726:
case 2006:
case 961:
case 3494:
case 1128:
case 1704:
case 2024:
case 780:
case 2084:
case 1950:
case 934:
case 3384:
case 1884:
case 772:
case 1577:
case 2643:
case 1824:
case 255:
case 2614:
case 1481:
case 431:
case 3502:
case 4060:
case 3980:
case 3698:
case 3158:
case 3812:
case 1263:
case 3891:
case 2863:
case 1933:
case 1145:
case 836:
case 3566:
case 4018:
case 3373:
case 2721:
case 269:
case 2955:
case 3558:
case 2801:
case 3446:
case 3102:
case 2765:
case 2073:
case 2592:
case 194:
case 1063:
case 2608:
case 890:
case 665:
case 1528:
case 2284:
case 1470:
case 1916:
case 1588:
case 2929:
case 3971:
case 71:
case 1718:
case 2540:
case 2167:
case 2132:
case 2189:
case 791:
case 2037:
case 3674:
case 3741:
case 2396:
case 1550:
case 1072:
case 3096:
case 79:
case 1419:
case 512:
case 2872:
case 407:
case 3362:
case 2757:
case 2932:
case 3213:
case 1862:
case 2486:
case 518:
case 1837:
case 3244:
case 1133:
case 3949:
case 276:
case 1630:
case 3236:
case 3478:
case 3902:
case 922:
case 2695:
case 928:
case 626:
case 114:
case 2411:
case 2843:
case 2492:
case 834:
case 2175:
case 3169:
case 3458:
case 297:
case 2745:
case 3466:
case 2382:
case 3927:
case 1043:
case 283:
case 2322:
case 3534:
case 1121:
case 3898:
case 378:
case 405:
case 2118:
case 1767:
case 372:
case 2852:
case 1957:
case 35:
case 130:
case 1208:
case 1488:
case 2504:
case 351:
case 2560:
case 2814:
case 3515:
case 2230:
case 3309:
case 3823:
case 2586:
case 1323:
case 3805:
case 1697:
case 3951:
case 3883:
case 3299:
case 1789:
case 3725:
case 1450:
case 3785:
case 1295:
case 667:
case 2009:
case 1493:
case 808:
case 2947:
case 4055:
case 2090:
case 1965:
case 3264:
case 3200:
case 4089:
case 86:
case 3969:
case 2053:
case 981:
case 2975:
case 274:
case 3759:
case 1853:
case 3353:
case 217:
case 1606:
case 2733:
case 624:
case 1921:
case 1035:
case 861:
case 723:
case 2959:
case 3063:
case 807:
case 2769:
case 2254:
case 1102:
case 886:
case 1566:
case 3001:
case 2212:
case 576:
case 2363:
case 3933:
case 410:
case 212:
case 2751:
case 601:
case 1831:
case 14:
case 1971:
case 1638:
case 3177:
case 2794:
case 3916:
case 3470:
case 2903:
case 2985:
case 60:
case 141:
case 3528:
case 3862:
case 1213:
case 3837:
case 4010:
case 1741:
case 2896:
case 2185:
case 3072:
case 436:
case 3116:
case 2125:
case 3593:
case 2600:
case 2699:
case 744:
case 2468:
case 1902:
case 1236:
case 1580:
case 2807:
case 2727:
case 3630:
case 3945:
case 1244:
case 3133:
case 490:
case 2787:
case 3043:
case 2476:
case 233:
case 2910:
case 3121:
case 2749:
case 375:
case 517:
case 1987:
case 2882:
case 3181:
case 1458:
case 1082:
case 2179:
case 574:
case 3684:
case 1022:
case 461:
case 3208:
case 180:
case 3570:
case 1151:
case 3732:
case 1612:
case 3957:
case 46:
case 1898:
case 3398:
case 3729:
case 2141:
case 1994:
case 3493:
case 2023:
case 2005:
case 2083:
case 3450:
case 4059:
case 3519:
case 2644:
case 3305:
case 3383:
case 434:
case 1515:
case 3809:
case 1309:
case 1823:
case 93:
case 597:
case 3890:
case 3035:
case 2556:
case 3921:
case 2448:
case 746:
case 3981:
case 3853:
case 3606:
case 1187:
case 1200:
case 2839:
case 1480:
case 4025:
case 931:
case 2417:
case 3965:
case 805:
case 2568:
case 3755:
case 1264:
case 4003:
case 623:
case 768:
case 1101:
case 205:
case 2302:
case 534:
case 2743:
case 335:
case 2349:
case 3258:
case 273:
case 2292:
case 2211:
case 609:
case 2962:
case 3332:
case 382:
case 1867:
case 2937:
case 2752:
case 3367:
case 1228:
case 2877:
case 1288:
case 3798:
case 1972:
case 2714:
case 483:
case 70:
case 2032:
case 497:
case 149:
case 4053:
case 1361:
case 3705:
case 3861:
case 2371:
case 3723:
case 1016:
case 4090:
case 2029:
case 1709:
case 3499:
case 1303:
case 502:
case 3803:
case 1742:
case 1385:
case 508:
case 3513:
case 3825:
case 3389:
case 1359:
case 1033:
case 971:
case 1626:
case 3544:
case 644:
case 3355:
case 1855:
case 1901:
case 4042:
case 833:
case 952:
case 3280:
case 1790:
case 3400:
case 97:
case 3464:
case 1963:
case 561:
case 656:
case 2990:
case 1773:
case 2821:
case 3246:
case 3069:
case 2953:
case 2881:
case 2628:
case 3182:
case 536:
case 3939:
case 1081:
case 1640:
case 1875:
case 2701:
case 1379:
case 415:
case 2942:
case 2018:
case 159:
case 3347:
case 1847:
case 2394:
case 3676:
case 32:
case 3051:
case 1611:
case 1508:
case 2351:
case 1692:
case 1152:
case 2204:
case 2909:
case 1818:
case 2047:
case 2424:
case 2530:
case 3841:
case 1341:
case 2406:
case 1219:
case 2226:
case 812:
case 1737:
case 3617:
case 2857:
case 1762:
case 1595:
case 2772:
case 3810:
case 286:
case 2327:
case 3564:
case 2650:
case 3922:
case 3500:
case 2387:
case 942:
case 3982:
case 4062:
case 3087:
case 3139:
case 207:
case 2497:
case 106:
case 3027:
case 3604:
case 2849:
case 1258:
case 135:
case 261:
case 2802:
case 1049:
case 3045:
case 2438:
case 400:
case 874:
case 2276:
case 349:
case 765:
case 170:
case 202:
case 611:
case 2634:
case 1996:
case 3077:
case 208:
case 3288:
case 3832:
case 1332:
case 2646:
case 3867:
case 947:
case 182:
case 3228:
case 332:
case 1513:
case 3889:
case 2061:
case 1389:
case 3303:
case 1656:
case 1196:
case 3385:
case 3829:
case 2003:
case 3172:
case 3016:
case 2085:
case 69:
case 1783:
case 2025:
case 3361:
case 2931:
case 1861:
case 3495:
case 3963:
case 304:
case 2333:
case 1464:
case 897:
case 2217:
case 1536:
case 2474:
case 1280:
case 1400:
case 1107:
case 3901:
case 234:
case 3626:
case 1859:
case 2538:
case 3935:
case 507:
case 1234:
case 418:
case 1879:
case 1939:
case 3640:
case 3875:
case 1069:
case 2321:
case 1122:
case 2079:
case 660:
case 957:
case 2923:
case 2198:
case 2658:
case 3692:
case 3270:
case 1051:
case 12:
case 210:
case 359:
case 3114:
case 2894:
case 2998:
case 945:
case 3595:
case 2183:
case 1617:
case 3737:
case 3762:
case 2105:
case 1648:
case 1215:
case 1841:
case 498:
case 2010:
case 306:
case 2256:
case 1087:
case 492:
case 989:
case 1500:
case 2887:
case 1982:
case 387:
case 1278:
case 6:
case 236:
case 393:
case 1893:
case 3393:
case 1442:
case 456:
case 166:
case 2216:
case 2050:
case 3405:
case 1229:
case 2572:
case 3285:
case 1795:
case 1562:
case 81:
case 2093:
case 3225:
case 3799:
case 3259:
case 2348:
case 3017:
case 3764:
case 617:
case 1453:
case 4095:
case 941:
case 1380:
case 674:
case 3880:
case 3048:
case 2233:
case 3820:
case 3991:
case 2317:
case 1092:
case 2563:
case 683:
case 1011:
case 3866:
case 2647:
case 697:
case 3858:
case 125:
case 409:
case 2618:
case 2501:
case 2892:
case 2443:
case 2811:
case 1040:
case 1828:
case 322:
case 179:
case 710:
case 340:
case 1665:
case 423:
case 2452:
case 2675:
case 2840:
case 3669:
case 3498:
case 1124:
case 1315:
case 3815:
case 1437:
case 2655:
case 2195:
case 3523:
case 1819:
case 2472:
case 164:
case 454:
case 3713:
case 1633:
case 2257:
case 2706:
case 1542:
case 3210:
case 3671:
case 2797:
case 568:
case 951:
case 1553:
case 860:
case 676:
case 978:
case 2356:
case 3068:
case 972:
case 1616:
case 2543:
case 2401:
case 2281:
case 2632:
case 8:
case 761:
case 669:
case 615:
case 2463:
case 3431:
case 2995:
case 3598:
case 3602:
case 2784:
case 1004:
case 13:
case 1870:
case 2804:
case 381:
case 131:
case 1930:
case 1218:
case 219:
case 2514:
case 3649:
case 265:
case 1423:
case 3409:
case 1225:
case 3289:
case 4000:
case 4064:
case 809:
case 3984:
case 3229:
case 1405:
case 1285:
case 2596:
case 1350:
case 2610:
case 994:
case 1393:
case 3442:
case 1687:
case 2144:
case 1048:
case 1912:
case 2817:
case 2507:
case 2439:
case 707:
case 1880:
case 3453:
case 491:
case 1259:
case 2774:
case 3490:
case 1651:
case 2311:
case 1076:
case 3358:
case 2738:
case 411:
case 3366:
case 1154:
case 2936:
case 524:
case 3573:
case 633:
case 3092:
case 2422:
case 3011:
case 1498:
case 3708:
case 2679:
case 3184:
case 3665:
case 914:
case 379:
case 3040:
case 2913:
case 3906:
case 3267:
case 1328:
case 122:
case 3681:
case 3542:
case 3086:
case 903:
case 2496:
case 1319:
case 2659:
case 364:
case 1583:
case 2199:
case 2326:
case 3437:
case 3509:
case 2386:
case 692:
case 4036:
case 1523:
case 3462:
case 2164:
case 2603:
case 3616:
case 3553:
case 553:
case 1174:
case 2287:
case 2661:
case 2539:
case 2407:
case 1878:
case 327:
case 784:
case 2868:
case 1056:
case 1938:
case 2227:
case 1671:
case 930:
case 3334:
case 2964:
case 1834:
case 1974:
case 2046:
case 2269:
case 2900:
case 773:
case 705:
case 2791:
case 2034:
case 1649:
case 460:
case 2304:
case 599:
case 3870:
case 2251:
case 1370:
case 18:
case 1431:
case 3060:
case 3247:
case 2294:
case 1602:
case 3639:
case 1719:
case 801:
case 2786:
case 1529:
case 2272:
case 2988:
case 2690:
case 3813:
case 1262:
case 2806:
case 2928:
case 80:
case 2653:
case 2193:
case 3559:
case 3778:
case 3117:
case 2897:
case 1911:
case 1555:
case 1336:
case 147:
case 982:
case 3836:
case 2642:
case 499:
case 2533:
case 3976:
case 3148:
case 3410:
case 246:
case 4019:
case 1097:
case 2312:
case 2263:
case 1192:
case 3917:
case 3746:
case 1475:
case 3054:
case 1273:
case 465:
case 3734:
case 2481:
case 2201:
case 2354:
case 3012:
case 2545:
case 3176:
case 3091:
case 37:
case 1418:
case 1140:
case 352:
case 1567:
case 2884:
case 700:
case 2577:
case 1084:
case 2993:
case 1770:
case 3682:
case 3231:
case 1209:
case 2830:
case 3425:
case 3223:
case 2970:
case 3283:
case 424:
case 1399:
case 3899:
case 798:
case 2119:
case 1030:
case 1895:
case 1242:
case 3510:
case 256:
case 1364:
case 3156:
case 1300:
case 467:
case 921:
case 157:
case 4093:
case 1455:
case 92:
case 244:
case 3168:
case 3038:
case 3956:
case 2521:
case 3766:
case 4028:
case 605:
case 1575:
case 223:
case 2565:
case 4088:
case 3579:
case 1788:
case 1728:
case 2008:
case 443:
case 591:
case 1663:
case 2919:
case 348:
case 1808:
case 2740:
case 342:
case 712:
case 1467:
case 59:
case 209:
case 1986:
case 4078:
case 1441:
case 1813:
case 2306:
case 3313:
case 1525:
case 3589:
case 3529:
case 819:
case 2571:
case 2296:
case 1715:
case 3006:
case 2013:
case 3940:
case 2:
case 636:
case 1410:
case 2427:
case 3097:
case 853:
case 1836:
case 2756:
case 2207:
case 949:
case 3555:
case 2623:
case 2768:
case 774:
case 1778:
case 1559:
case 1117:
case 2120:
case 3344:
case 1844:
case 2605:
case 3911:
case 2397:
case 40:
case 1948:
case 1176:
case 260:
case 1091:
case 3614:
case 355:
case 797:
case 3475:
case 826:
case 2158:
case 1054:
case 3111:
case 1479:
case 1917:
case 1746:
case 3024:
case 4046:
case 1231:
case 171:
case 2384:
case 2451:
case 904:
case 158:
case 3643:
case 468:
case 3418:
case 462:
case 3030:
case 3186:
case 1461:
case 3242:
case 3895:
case 2115:
case 913:
case 3126:
case 1485:
case 2099:
case 1205:
case 1283:
case 1403:
case 3960:
case 2330:
case 1425:
case 3209:
case 634:
case 3672:
case 1780:
case 1168:
case 1459:
case 2000:
case 2946:
case 2587:
case 3300:
case 795:
case 1800:
case 2239:
case 843:
case 2748:
case 3364:
case 66:
case 1968:
case 2838:
case 2569:
case 2631:
case 2146:
case 2402:
case 769:
case 556:
case 1956:
case 987:
case 3518:
case 4066:
case 3432:
case 148:
case 2551:
case 993:
case 3104:
case 3728:
case 608:
case 3663:
case 389:
case 139:
case 4058:
case 3547:
case 2898:
case 278:
case 4049:
case 3777:
case 3118:
case 1352:
case 100:
case 2151:
case 2612:
case 628:
case 3504:
case 763:
case 640:
case 3147:
case 1098:
case 251:
case 3814:
case 622:
case 1343:
case 1179:
case 3411:
case 2022:
case 1702:
case 3492:
case 482:
case 2082:
case 755:
case 516:
case 2466:
case 3745:
case 133:
case 1910:
case 383:
case 3322:
case 1822:
case 1335:
case 3090:
case 2264:
case 1979:
case 1839:
case 3339:
case 1274:
case 2759:
case 2353:
case 747:
case 1556:
case 4071:
case 2127:
case 1448:
case 1110:
case 3230:
case 2515:
case 2309:
case 3042:
case 2805:
case 2761:
case 2951:
case 832:
case 1005:
case 3009:
case 3716:
case 2994:
case 789:
case 241:
case 1794:
case 1903:
case 2971:
case 2638:
case 68:
case 3167:
case 112:
case 3132:
case 1961:
case 42:
case 2434:
case 1291:
case 887:
case 3721:
case 369:
case 315:
case 2149:
case 806:
case 2779:
case 2558:
case 3801:
case 421:
case 2102:
case 3765:
case 3073:
case 3592:
case 1959:
case 1456:
case 2244:
case 395:
case 2949:
case 813:
case 1727:
case 2710:
case 2902:
case 3155:
case 2580:
case 3695:
case 1699:
case 1159:
case 2520:
case 3062:
case 3037:
case 2674:
case 3129:
case 3396:
case 1664:
case 943:
case 2362:
case 3757:
case 2213:
case 3486:
case 192:
case 3967:
case 4087:
case 1147:
case 485:
case 230:
case 771:
case 3352:
case 2767:
case 4045:
case 2957:
case 2732:
case 758:
case 77:
case 2398:
case 229:
case 1118:
case 2014:
case 333:
case 3910:
case 3476:
case 4077:
case 449:
case 1745:
case 197:
case 1175:
case 432:
case 3179:
case 203:
case 1411:
case 1492:
case 2890:
case 2035:
case 3448:
case 3613:
case 1733:
case 174:
case 1090:
case 2965:
case 3568:
case 3335:
case 2755:
case 2842:
case 2295:
case 3141:
case 3636:
case 962:
case 580:
case 1947:
case 2789:
case 3005:
case 2450:
case 3083:
case 404:
case 2519:
case 2157:
case 2305:
case 578:
case 1526:
case 2809:
case 1230:
case 55:
case 1042:
case 1586:
case 3771:
case 1540:
case 312:
case 4081:
case 3961:
case 1132:
case 63:
case 4021:
case 3794:
case 2916:
case 1404:
case 3985:
case 4065:
case 739:
case 631:
case 1224:
case 1460:
case 1989:
case 2528:
case 3031:
case 2775:
case 294:
case 2063:
case 1511:
case 1955:
case 1073:
case 3254:
case 115:
case 1721:
case 3212:
case 2933:
case 1781:
case 837:
case 214:
case 3699:
case 3468:
case 1695:
case 1155:
case 1307:
case 627:
case 3807:
case 2630:
case 3548:
case 2945:
case 2133:
case 3787:
case 1757:
case 3161:
case 1486:
case 1967:
case 1426:
case 2977:
case 821:
case 398:
case 541:
case 1396:
case 493:
case 2072:
case 3125:
case 1062:
case 2593:
case 3600:
case 1037:
case 82:
case 3942:
case 1894:
case 110:
case 22:
case 779:
case 1905:
case 658:
case 3484:
case 1851:
case 1983:
case 3909:
case 67:
case 2318:
case 1923:
case 3424:
case 652:
case 587:
case 2069:
case 2246:
case 877:
case 3628:
case 2182:
case 3075:
case 2939:
case 725:
case 3369:
case 2375:
case 814:
case 506:
case 1538:
case 1491:
case 3865:
case 2234:
case 2879:
case 1412:
case 1827:
case 136:
case 2922:
case 3650:
case 2436:
case 909:
case 2087:
case 894:
case 2139:
case 3497:
case 1010:
case 2027:
case 2444:
case 2841:
case 3406:
case 2648:
case 1183:
case 1620:
case 2617:
case 3857:
case 1105:
case 1680:
case 3772:
case 3109:
case 642:
case 2332:
case 282:
case 1646:
case 3752:
case 2367:
case 3584:
case 2798:
case 1634:
case 3714:
case 3240:
case 3067:
case 16:
case 1512:
case 45:
case 472:
case 2907:
case 3743:
case 1722:
case 2002:
case 235:
case 1554:
case 373:
case 3845:
case 3292:
case 1782:
case 3211:
case 134:
case 1248:
case 384:
case 2544:
case 1739:
case 2355:
case 2107:
case 3735:
case 727:
case 2536:
case 896:
case 3055:
case 875:
case 1333:
case 2464:
case 3833:
case 585:
case 2220:
case 538:
case 2783:
case 2705:
case 3162:
case 2861:
case 3371:
case 532:
case 829:
case 2499:
case 764:
case 2668:
case 2071:
case 1316:
case 2885:
case 2656:
case 2196:
case 3506:
case 830:
case 4039:
case 2825:
case 3430:
case 2818:
case 1909:
case 1047:
case 3658:
case 3198:
case 3905:
case 1351:
case 2152:
case 3983:
case 740:
case 310:
case 1942:
case 2114:
case 1018:
case 722:
case 3894:
case 3365:
case 1865:
case 3491:
case 2379:
case 1369:
case 3869:
case 2081:
case 2640:
case 991:
case 1953:
case 3381:
case 1075:
case 2773:
case 213:
case 3079:
case 1497:
case 3707:
case 2135:
case 911:
case 107:
case 3574:
case 3887:
case 287:
case 1693:
case 186:
case 336:
case 1190:
case 2595:
case 3680:
case 3123:
case 1109:
case 3183:
case 3620:
case 2952:
case 414:
case 3105:
case 2219:
case 390:
case 841:
case 2057:
case 1226:
case 52:
case 1530:
case 2914:
case 1142:
case 1240:
case 781:
case 1032:
case 249:
case 302:
case 1714:
case 3634:
case 750:
case 475:
case 308:
case 4043:
case 1877:
case 238:
case 2288:
case 9:
case 2408:
case 2832:
case 3131:
case 1524:
case 1962:
case 3646:
case 2228:
case 1937:
case 1752:
case 2604:
case 1670:
case 3345:
case 1211:
case 430:
case 2163:
case 3849:
case 1173:
case 645:
case 173:
case 2660:
case 4014:
case 2101:
case 429:
case 1743:
case 36:
case 3591:
case 204:
case 3059:
case 1833:
case 2753:
case 535:
case 3217:
case 1055:
case 2790:
case 1973:
case 2686:
case 2359:
case 3739:
case 1619:
case 1597:
case 880:
case 2889:
case 416:
case 570:
case 3316:
case 2385:
case 2829:
case 582:
case 960:
case 1371:
case 2172:
case 2016:
case 878:
case 2250:
case 1029:
case 2709:
case 3678:
case 2361:
case 1162:
case 3931:
case 85:
case 2495:
case 1089:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1745809201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,];
var gg_b = "1745809201/";

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
