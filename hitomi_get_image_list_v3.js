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
case 274:
case 539:
case 3745:
case 2446:
case 3007:
case 2531:
case 3581:
case 1229:
case 2643:
case 2889:
case 3240:
case 3839:
case 3000:
case 600:
case 2602:
case 624:
case 1966:
case 1219:
case 425:
case 214:
case 4080:
case 3513:
case 4087:
case 1384:
case 3884:
case 2834:
case 1288:
case 819:
case 3030:
case 3809:
case 2080:
case 350:
case 3682:
case 603:
case 11:
case 2505:
case 791:
case 3255:
case 2112:
case 1309:
case 1556:
case 564:
case 803:
case 2501:
case 3750:
case 675:
case 3948:
case 792:
case 2122:
case 3037:
case 3157:
case 2804:
case 3797:
case 4068:
case 2712:
case 229:
case 1765:
case 1558:
case 815:
case 3291:
case 2722:
case 1980:
case 918:
case 3790:
case 2231:
case 182:
case 1990:
case 3961:
case 1529:
case 1644:
case 2311:
case 919:
case 144:
case 2325:
case 44:
case 3547:
case 2730:
case 3965:
case 3540:
case 296:
case 2737:
case 2977:
case 228:
case 654:
case 2235:
case 1519:
case 3285:
case 2315:
case 3862:
case 331:
case 3180:
case 4045:
case 1833:
case 979:
case 915:
case 618:
case 3213:
case 106:
case 3012:
case 1950:
case 2383:
case 818:
case 4041:
case 3692:
case 3022:
case 1070:
case 2620:
case 255:
case 2669:
case 3768:
case 1256:
case 3166:
case 3894:
case 3551:
case 2041:
case 4090:
case 1879:
case 1567:
case 3854:
case 2899:
case 3168:
case 1354:
case 1941:
case 1412:
case 847:
case 259:
case 538:
case 2461:
case 2100:
case 1560:
case 647:
case 1945:
case 3591:
case 3470:
case 496:
case 1002:
case 1203:
case 1858:
case 1668:
case 2876:
case 3358:
case 2504:
case 2299:
case 1896:
case 3432:
case 3573:
case 941:
case 2801:
case 1666:
case 2878:
case 710:
case 380:
case 2805:
case 1898:
case 3294:
case 797:
case 773:
case 3823:
case 3584:
case 2534:
case 3402:
case 705:
case 936:
case 3813:
case 2149:
case 1233:
case 1032:
case 1313:
case 2835:
case 3885:
case 2516:
case 121:
case 3063:
case 1152:
case 594:
case 1792:
case 3539:
case 2932:
case 1385:
case 713:
case 133:
case 2831:
case 3881:
case 122:
case 3144:
case 3648:
case 709:
case 1650:
case 2371:
case 3891:
case 2163:
case 2910:
case 1391:
case 3895:
case 289:
case 2204:
case 1782:
case 2599:
case 2375:
case 2920:
case 2308:
case 1579:
case 3072:
case 1944:
case 1351:
case 2763:
case 3851:
case 1017:
case 1355:
case 1010:
case 3049:
case 3594:
case 3665:
case 2677:
case 1027:
case 3855:
case 2338:
case 1641:
case 2218:
case 1888:
case 485:
case 1645:
case 466:
case 516:
case 2228:
case 1069:
case 1533:
case 3386:
case 1340:
case 2336:
case 3562:
case 1472:
case 2216:
case 151:
case 1886:
case 2289:
case 3239:
case 1449:
case 3847:
case 641:
case 3410:
case 3329:
case 842:
case 3427:
case 4044:
case 1347:
case 884:
case 152:
case 1337:
case 2762:
case 4018:
case 3272:
case 4034:
case 1220:
case 1721:
case 3073:
case 1217:
case 3837:
case 1183:
case 96:
case 2880:
case 3009:
case 3830:
case 4028:
case 683:
case 55:
case 549:
case 2346:
case 1330:
case 1115:
case 1543:
case 728:
case 168:
case 1635:
case 1484:
case 2004:
case 2348:
case 1783:
case 1300:
case 3039:
case 2089:
case 1473:
case 680:
case 1409:
case 3807:
case 2868:
case 1307:
case 1676:
case 3199:
case 1934:
case 2658:
case 1601:
case 2034:
case 2453:
case 3084:
case 1926:
case 2698:
case 1532:
case 3799:
case 2754:
case 1916:
case 2656:
case 2028:
case 3638:
case 1517:
case 2415:
case 3789:
case 2979:
case 2841:
case 492:
case 3134:
case 3572:
case 1999:
case 3118:
case 2942:
case 714:
case 3726:
case 43:
case 3624:
case 342:
case 3094:
case 577:
case 384:
case 2845:
case 1510:
case 758:
case 2686:
case 3636:
case 1202:
case 3974:
case 3734:
case 1042:
case 1243:
case 1003:
case 3433:
case 3054:
case 2099:
case 3263:
case 101:
case 590:
case 983:
case 1153:
case 2850:
case 66:
case 3062:
case 102:
case 2857:
case 3104:
case 2667:
case 3675:
case 2474:
case 86:
case 729:
case 1494:
case 2709:
case 169:
case 3911:
case 3442:
case 292:
case 3370:
case 2173:
case 3822:
case 1870:
case 3403:
case 165:
case 1569:
case 2109:
case 3921:
case 725:
case 186:
case 1312:
case 837:
case 336:
case 3377:
case 3812:
case 3606:
case 2365:
case 3704:
case 2897:
case 3013:
case 3458:
case 2382:
case 766:
case 3332:
case 1832:
case 1708:
case 3496:
case 2795:
case 2155:
case 3212:
case 379:
case 4001:
case 3023:
case 2791:
case 3693:
case 3222:
case 1270:
case 319:
case 2568:
case 2031:
case 3456:
case 8:
case 1175:
case 1706:
case 3507:
case 789:
case 303:
case 3653:
case 2035:
case 931:
case 3863:
case 2751:
case 3500:
case 99:
case 6:
case 2147:
case 1058:
case 1413:
case 1724:
case 1802:
case 1616:
case 1738:
case 1714:
case 1136:
case 3302:
case 4035:
case 1481:
case 904:
case 2078:
case 920:
case 324:
case 2005:
case 2245:
case 2747:
case 2580:
case 3530:
case 3537:
case 1736:
case 1634:
case 846:
case 2408:
case 3369:
case 1495:
case 3105:
case 210:
case 1577:
case 1659:
case 156:
case 3674:
case 2475:
case 2266:
case 2919:
case 347:
case 473:
case 497:
case 3460:
case 2471:
case 1088:
case 2364:
case 3047:
case 3176:
case 270:
case 1455:
case 3938:
case 3778:
case 2988:
case 2268:
case 804:
case 512:
case 3914:
case 820:
case 2679:
case 409:
case 3701:
case 953:
case 1019:
case 1451:
case 3200:
case 209:
case 2844:
case 3131:
case 2181:
case 107:
case 470:
case 262:
case 2424:
case 3135:
case 2185:
case 318:
case 213:
case 3906:
case 1060:
case 3091:
case 195:
case 2352:
case 261:
case 2414:
case 623:
case 354:
case 3327:
case 2960:
case 2545:
case 1810:
case 410:
case 3971:
case 631:
case 205:
case 3055:
case 3683:
case 1827:
case 950:
case 3872:
case 3908:
case 1820:
case 89:
case 2541:
case 2436:
case 3051:
case 1440:
case 632:
case 3237:
case 3320:
case 2967:
case 273:
case 3975:
case 831:
case 3735:
case 1817:
case 1583:
case 1824:
case 3228:
case 46:
case 164:
case 1444:
case 3234:
case 2284:
case 1702:
case 4072:
case 1838:
case 1814:
case 3218:
case 3314:
case 3338:
case 2388:
case 1064:
case 3226:
case 2329:
case 57:
case 2410:
case 2847:
case 3492:
case 1143:
case 2239:
case 1515:
case 2840:
case 3969:
case 1521:
case 2386:
case 1102:
case 139:
case 775:
case 719:
case 2992:
case 2554:
case 2469:
case 1875:
case 1972:
case 3375:
case 891:
case 3204:
case 2367:
case 692:
case 2895:
case 389:
case 63:
case 1253:
case 3927:
case 1052:
case 3910:
case 1949:
case 385:
case 2855:
case 2665:
case 3464:
case 3306:
case 1132:
case 3559:
case 366:
case 1612:
case 2594:
case 1806:
case 2209:
case 2952:
case 715:
case 2273:
case 3763:
case 1293:
case 1622:
case 3670:
case 667:
case 2072:
case 754:
case 1127:
case 1630:
case 991:
case 2646:
case 1082:
case 3149:
case 1283:
case 1110:
case 3528:
case 2813:
case 992:
case 2443:
case 2402:
case 3518:
case 2823:
case 967:
case 2648:
case 3749:
case 3831:
case 2144:
case 2982:
case 3772:
case 3932:
case 1335:
case 1720:
case 2063:
case 3589:
case 1215:
case 283:
case 1221:
case 2885:
case 1717:
case 582:
case 1607:
case 544:
case 1769:
case 2254:
case 2396:
case 483:
case 581:
case 2356:
case 1169:
case 3943:
case 1305:
case 3878:
case 747:
case 1593:
case 3801:
case 1301:
case 1450:
case 3041:
case 4022:
case 3045:
case 2166:
case 870:
case 2768:
case 355:
case 1874:
case 2555:
case 2470:
case 49:
case 610:
case 423:
case 2591:
case 521:
case 1571:
case 533:
case 2379:
case 2595:
case 359:
case 3899:
case 810:
case 1508:
case 1497:
case 522:
case 2766:
case 246:
case 34:
case 873:
case 897:
case 1912:
case 231:
case 2862:
case 2652:
case 223:
case 1821:
case 2285:
case 3235:
case 2965:
case 3737:
case 396:
case 2540:
case 2787:
case 29:
case 3325:
case 1922:
case 3730:
case 232:
case 2547:
case 2780:
case 673:
case 697:
case 1811:
case 2961:
case 2281:
case 3057:
case 1825:
case 3137:
case 861:
case 3620:
case 2692:
case 609:
case 3090:
case 3617:
case 1538:
case 813:
case 3383:
case 862:
case 530:
case 2012:
case 1649:
case 1065:
case 2180:
case 809:
case 3627:
case 1883:
case 3087:
case 2037:
case 1170:
case 2873:
case 2948:
case 808:
case 1468:
case 2197:
case 2:
case 1177:
case 116:
case 905:
case 1046:
case 1206:
case 1853:
case 1271:
case 913:
case 3722:
case 2946:
case 1930:
case 1770:
case 961:
case 453:
case 2291:
case 551:
case 1275:
case 909:
case 4007:
case 1937:
case 3576:
case 1777:
case 176:
case 3712:
case 2295:
case 329:
case 962:
case 2797:
case 3804:
case 2157:
case 1048:
case 1208:
case 552:
case 358:
case 3535:
case 2000:
case 2839:
case 2240:
case 2741:
case 1389:
case 970:
case 3531:
case 2007:
case 587:
case 2745:
case 2523:
case 2141:
case 1318:
case 4037:
case 1907:
case 2145:
case 2513:
case 314:
case 450:
case 742:
case 4:
case 1328:
case 784:
case 361:
case 1071:
case 2615:
case 3438:
case 2621:
case 3352:
case 1852:
case 3185:
case 1951:
case 3713:
case 4047:
case 3424:
case 2611:
case 1075:
case 3181:
case 1008:
case 1248:
case 2095:
case 373:
case 3967:
case 1995:
case 3392:
case 3123:
case 2872:
case 2310:
case 2429:
case 2683:
case 3781:
case 2971:
case 1006:
case 3113:
case 2327:
case 1991:
case 3590:
case 1561:
case 2101:
case 3929:
case 1014:
case 3471:
case 1947:
case 478:
case 1198:
case 1758:
case 2105:
case 2512:
case 2178:
case 149:
case 1694:
case 3597:
case 84:
case 3408:
case 1156:
case 4055:
case 2924:
case 2040:
case 418:
case 4091:
case 655:
case 958:
case 3268:
case 2914:
case 4095:
case 1196:
case 1756:
case 1654:
case 3988:
case 145:
case 2778:
case 2176:
case 3406:
case 1798:
case 1158:
case 2047:
case 190:
case 1186:
case 4085:
case 501:
case 3956:
case 1639:
case 1788:
case 475:
case 814:
case 1548:
case 3076:
case 3001:
case 4023:
case 674:
case 1435:
case 1684:
case 148:
case 1719:
case 3958:
case 3587:
case 3580:
case 658:
case 224:
case 3245:
case 3078:
case 479:
case 2222:
case 1760:
case 3791:
case 1261:
case 1673:
case 629:
case 3155:
case 1609:
case 215:
case 1882:
case 2458:
case 400:
case 193:
case 1985:
case 12:
case 928:
case 3250:
case 1401:
case 2863:
case 3191:
case 1913:
case 1167:
case 3568:
case 3257:
case 1923:
case 219:
case 275:
case 3195:
case 3709:
case 2608:
case 367:
case 3667:
case 3474:
case 1459:
case 1025:
case 3857:
case 2062:
case 988:
case 3933:
case 2671:
case 1015:
case 1282:
case 1499:
case 33:
case 750:
case 3365:
case 1962:
case 7:
case 4094:
case 484:
case 1655:
case 1083:
case 889:
case 2403:
case 3173:
case 1651:
case 392:
case 2925:
case 689:
case 1861:
case 2442:
case 526:
case 2128:
case 284:
case 3845:
case 2549:
case 598:
case 3425:
case 2624:
case 3059:
case 1345:
case 2118:
case 2572:
case 3841:
case 2134:
case 2614:
case 1592:
case 3739:
case 1341:
case 2716:
case 2638:
case 3483:
case 2433:
case 540:
case 2728:
case 2116:
case 1552:
case 2734:
case 3784:
case 3619:
case 2718:
case 2636:
case 1984:
case 746:
case 3658:
case 3868:
case 2199:
case 2759:
case 1264:
case 507:
case 2807:
case 1179:
case 2563:
case 2800:
case 595:
case 3493:
case 3028:
case 4009:
case 1779:
case 3194:
case 3754:
case 160:
case 720:
case 1742:
case 4073:
case 1426:
case 2953:
case 556:
case 985:
case 1133:
case 1846:
case 3880:
case 1489:
case 171:
case 1623:
case 4084:
case 888:
case 1387:
case 1093:
case 3762:
case 3348:
case 1681:
case 989:
case 732:
case 163:
case 1053:
case 1434:
case 1418:
case 723:
case 4039:
case 1909:
case 731:
case 1287:
case 3892:
case 1436:
case 2440:
case 2372:
case 1785:
case 1967:
case 197:
case 173:
case 4088:
case 2820:
case 299:
case 3995:
case 1541:
case 916:
case 1633:
case 2810:
case 1545:
case 1113:
case 3246:
case 1280:
case 3006:
case 2447:
case 3955:
case 721:
case 3662:
case 733:
case 4086:
case 4019:
case 3852:
case 3075:
case 207:
case 1713:
case 976:
case 3008:
case 1181:
case 4060:
case 2451:
case 3036:
case 1550:
case 495:
case 345:
case 1988:
case 3654:
case 1679:
case 3864:
case 3196:
case 1268:
case 407:
case 170:
case 1471:
case 499:
case 3014:
case 894:
case 2088:
case 3561:
case 1590:
case 2570:
case 110:
case 2659:
case 730:
case 3024:
case 1475:
case 1266:
case 694:
case 1408:
case 1597:
case 3796:
case 2495:
case 3694:
case 1001:
case 1241:
case 1587:
case 243:
case 1958:
case 1245:
case 3546:
case 1580:
case 426:
case 2098:
case 2481:
case 2056:
case 3729:
case 1998:
case 2843:
case 3186:
case 2136:
case 994:
case 2616:
case 2738:
case 2978:
case 2802:
case 751:
case 2689:
case 2901:
case 3129:
case 3548:
case 2096:
case 1147:
case 3401:
case 2363:
case 1250:
case 2171:
case 108:
case 616:
case 3913:
case 3167:
case 2175:
case 240:
case 3405:
case 1195:
case 1755:
case 3923:
case 1257:
case 2108:
case 1568:
case 816:
case 1791:
case 3760:
case 2270:
case 676:
case 2771:
case 3673:
case 3261:
case 1290:
case 876:
case 1297:
case 2832:
case 4056:
case 90:
case 1155:
case 32:
case 3265:
case 1382:
case 1566:
case 2106:
case 377:
case 298:
case 1365:
case 3499:
case 839:
case 3282:
case 2232:
case 1897:
case 2033:
case 3083:
case 2454:
case 2569:
case 1109:
case 286:
case 500:
case 2312:
case 524:
case 191:
case 3865:
case 1173:
case 639:
case 1361:
case 2753:
case 3861:
case 1890:
case 2322:
case 3651:
case 1709:
case 4079:
case 269:
case 3695:
case 3564:
case 202:
case 727:
case 1667:
case 3011:
case 3691:
case 1850:
case 2153:
case 3015:
case 201:
case 1933:
case 635:
case 938:
case 3021:
case 1544:
case 2079:
case 1629:
case 2243:
case 2003:
case 401:
case 1686:
case 1619:
case 2202:
case 486:
case 1845:
case 2510:
case 465:
case 3345:
case 1059:
case 1425:
case 1184:
case 2520:
case 2999:
case 3954:
case 1979:
case 1739:
case 3592:
case 1415:
case 2916:
case 2678:
case 964:
case 2269:
case 1754:
case 1866:
case 3779:
case 3939:
case 1028:
case 2605:
case 2926:
case 578:
case 2601:
case 3264:
case 2307:
case 757:
case 1658:
case 1026:
case 2934:
case 3984:
case 1696:
case 3368:
case 1154:
case 1794:
case 1089:
case 1016:
case 2473:
case 468:
case 1493:
case 2300:
case 2631:
case 2783:
case 1244:
case 2125:
case 2111:
case 744:
case 3418:
case 3434:
case 1162:
case 781:
case 363:
case 311:
case 3252:
case 2115:
case 2121:
case 706:
case 638:
case 935:
case 2725:
case 1346:
case 3380:
case 3846:
case 1880:
case 547:
case 2183:
case 3416:
case 2715:
case 1887:
case 3292:
case 838:
case 3489:
case 1762:
case 3093:
case 3511:
case 3525:
case 2347:
case 1216:
case 2819:
case 1969:
case 1289:
case 3836:
case 1492:
case 2340:
case 2472:
case 1228:
case 3824:
case 3583:
case 960:
case 2533:
case 4010:
case 2069:
case 4027:
case 3444:
case 1324:
case 5:
case 3814:
case 2888:
case 4020:
case 1234:
case 1452:
case 166:
case 1559:
case 2182:
case 3132:
case 798:
case 1306:
case 2697:
case 2355:
case 3806:
case 3612:
case 3092:
case 1763:
case 2020:
case 2944:
case 1670:
case 2351:
case 3622:
case 3293:
case 1917:
case 1308:
case 912:
case 287:
case 2657:
case 339:
case 740:
case 452:
case 1599:
case 3972:
case 1927:
case 3253:
case 2542:
case 3871:
case 68:
case 2650:
case 553:
case 963:
case 2860:
case 3052:
case 2381:
case 546:
case 3710:
case 1526:
case 3211:
case 1831:
case 222:
case 672:
case 338:
case 3720:
case 3335:
case 2385:
case 1835:
case 1516:
case 3717:
case 188:
case 3221:
case 3215:
case 2152:
case 2792:
case 795:
case 221:
case 430:
case 663:
case 3082:
case 3630:
case 3127:
case 812:
case 520:
case 1528:
case 3110:
case 3283:
case 2233:
case 1149:
case 2687:
case 3637:
case 3120:
case 1805:
case 3169:
case 2898:
case 2856:
case 3305:
case 1801:
case 3593:
case 3607:
case 422:
case 1299:
case 2896:
case 2858:
case 3769:
case 532:
case 2279:
case 860:
case 421:
case 59:
case 3553:
case 2242:
case 2945:
case 1100:
case 2560:
case 394:
case 2422:
case 65:
case 3571:
case 649:
case 3490:
case 990:
case 2842:
case 1461:
case 3508:
case 2354:
case 159:
case 2941:
case 2879:
case 1276:
case 14:
case 2258:
case 2567:
case 849:
case 1041:
case 1201:
case 4070:
case 1700:
case 845:
case 406:
case 2298:
case 1374:
case 1045:
case 1278:
case 3874:
case 1859:
case 3457:
case 2394:
case 2070:
case 1137:
case 2588:
case 1617:
case 3514:
case 3649:
case 2950:
case 92:
case 977:
case 30:
case 2077:
case 580:
case 1321:
case 3441:
case 1315:
case 3815:
case 2586:
case 1977:
case 1737:
case 2362:
case 281:
case 2519:
case 1311:
case 244:
case 457:
case 3922:
case 3825:
case 1057:
case 2148:
case 917:
case 2529:
case 2990:
case 3811:
case 3663:
case 3271:
case 701:
case 1353:
case 677:
case 693:
case 62:
case 3930:
case 2980:
case 3777:
case 3937:
case 27:
case 2987:
case 3304:
case 2558:
case 3466:
case 3275:
case 227:
case 702:
case 3048:
case 1804:
case 893:
case 1122:
case 3170:
case 1087:
case 1393:
case 617:
case 3893:
case 2161:
case 1501:
case 786:
case 2309:
case 3206:
case 3046:
case 2407:
case 1505:
case 21:
case 1632:
case 3238:
case 1834:
case 1818:
case 0:
case 2384:
case 3334:
case 1066:
case 114:
case 949:
case 1828:
case 3224:
case 3328:
case 1448:
case 1889:
case 2286:
case 3236:
case 2437:
case 1535:
case 158:
case 848:
case 3389:
case 1531:
case 1068:
case 2229:
case 1826:
case 174:
case 945:
case 3326:
case 47:
case 1446:
case 3121:
case 2252:
case 2053:
case 2685:
case 2434:
case 3502:
case 2418:
case 3111:
case 1993:
case 987:
case 2733:
case 2973:
case 3783:
case 2681:
case 2428:
case 3904:
case 1272:
case 2387:
case 622:
case 1837:
case 2292:
case 3715:
case 833:
case 2489:
case 271:
case 3439:
case 1073:
case 3721:
case 2846:
case 2133:
case 3183:
case 621:
case 3330:
case 272:
case 633:
case 460:
case 2426:
case 2703:
case 597:
case 3601:
case 471:
case 4093:
case 3926:
case 1084:
case 3605:
case 2404:
case 3532:
case 260:
case 2582:
case 505:
case 2939:
case 3269:
case 951:
case 2142:
case 3300:
case 794:
case 463:
case 3473:
case 513:
case 1800:
case 3928:
case 1563:
case 830:
case 952:
case 2368:
case 562:
case 2984:
case 3774:
case 1199:
case 3676:
case 2264:
case 3307:
case 1734:
case 2994:
case 508:
case 4015:
case 4021:
case 1189:
case 1054:
case 1728:
case 2647:
case 4025:
case 1126:
case 4011:
case 2592:
case 1789:
case 1638:
case 3520:
case 1118:
case 1134:
case 3462:
case 652:
case 142:
case 1624:
case 3527:
case 1726:
case 334:
case 2074:
case 3510:
case 4083:
case 852:
case 184:
case 48:
case 1549:
case 1094:
case 651:
case 1925:
case 1370:
case 2861:
case 1442:
case 687:
case 1403:
case 3870:
case 3877:
case 386:
case 1479:
case 3454:
case 2083:
case 3033:
case 1921:
case 3232:
case 4074:
case 1704:
case 2282:
case 2962:
case 1606:
case 1812:
case 1377:
case 1983:
case 2021:
case 933:
case 2015:
case 1671:
case 1263:
case 2350:
case 3153:
case 2691:
case 776:
case 1675:
case 1104:
case 2459:
case 922:
case 3494:
case 2357:
case 1081:
case 2478:
case 3604:
case 217:
case 2167:
case 982:
case 3175:
case 1500:
case 2160:
case 1653:
case 490:
case 103:
case 2401:
case 981:
case 3363:
case 3935:
case 1458:
case 277:
case 3106:
case 22:
case 326:
case 1013:
case 3277:
case 2265:
case 2476:
case 2609:
case 115:
case 1212:
case 827:
case 87:
case 1496:
case 3708:
case 3832:
case 2882:
case 2673:
case 1023:
case 3931:
case 3771:
case 67:
case 1222:
case 1693:
case 2729:
case 2431:
case 3056:
case 3481:
case 1530:
case 2546:
case 42:
case 3098:
case 124:
case 343:
case 2435:
case 3634:
case 2684:
case 3736:
case 3138:
case 2188:
case 417:
case 3058:
case 957:
case 2548:
case 567:
case 2129:
case 3714:
case 3423:
case 3616:
case 3905:
case 3843:
case 1302:
case 3136:
case 2186:
case 1705:
case 4075:
case 3699:
case 2158:
case 2196:
case 1914:
case 1938:
case 1701:
case 3451:
case 1924:
case 3019:
case 1512:
case 1178:
case 147:
case 2198:
case 1467:
case 2758:
case 3869:
case 1674:
case 2940:
case 4006:
case 1936:
case 1776:
case 2947:
case 1460:
case 3088:
case 2014:
case 1230:
case 45:
case 4024:
case 3810:
case 2991:
case 1327:
case 91:
case 1429:
case 844:
case 449:
case 1971:
case 3349:
case 399:
case 2995:
case 4014:
case 682:
case 4038:
case 881:
case 3372:
case 1320:
case 1419:
case 178:
case 2892:
case 1486:
case 3440:
case 1051:
case 927:
case 1131:
case 2248:
case 97:
case 1625:
case 3067:
case 1611:
case 1091:
case 3060:
case 2852:
case 738:
case 4036:
case 1906:
case 606:
case 2662:
case 1615:
case 2071:
case 2955:
case 1621:
case 566:
case 585:
case 956:
case 1513:
case 2900:
case 4046:
case 1145:
case 416:
case 2334:
case 2907:
case 2318:
case 2238:
case 3288:
case 1884:
case 476:
case 1247:
case 2480:
case 3430:
case 1745:
case 643:
case 1581:
case 1741:
case 2389:
case 2316:
case 1839:
case 3286:
case 3437:
case 1295:
case 2048:
case 2208:
case 3596:
case 1157:
case 2466:
case 2275:
case 3558:
case 2304:
case 3267:
case 37:
case 3987:
case 2937:
case 3765:
case 1946:
case 3980:
case 2930:
case 3761:
case 2853:
case 1150:
case 2177:
case 1682:
case 216:
case 2206:
case 3407:
case 2468:
case 1757:
case 3556:
case 3309:
case 1255:
case 78:
case 1:
case 1948:
case 3373:
case 1190:
case 1750:
case 2893:
case 2170:
case 1213:
case 3833:
case 3146:
case 1180:
case 998:
case 1333:
case 2649:
case 926:
case 1012:
case 807:
case 2514:
case 2538:
case 2061:
case 3588:
case 771:
case 3070:
case 1022:
case 895:
case 3529:
case 1961:
case 940:
case 2811:
case 3990:
case 3148:
case 132:
case 1780:
case 3746:
case 1547:
case 712:
case 344:
case 1285:
case 3519:
case 899:
case 123:
case 2821:
case 494:
case 2536:
case 763:
case 3362:
case 131:
case 2912:
case 3997:
case 2575:
case 3258:
case 1766:
case 357:
case 3879:
case 1477:
case 1379:
case 1595:
case 3941:
case 856:
case 2497:
case 1168:
case 3296:
case 2490:
case 2571:
case 3945:
case 3394:
case 2457:
case 1768:
case 104:
case 1894:
case 40:
case 2506:
case 760:
case 4065:
case 2359:
case 1551:
case 4061:
case 943:
case 3463:
case 2301:
case 2593:
case 330:
case 2305:
case 2274:
case 3666:
case 1398:
case 2169:
case 3898:
case 1356:
case 749:
case 2600:
case 2553:
case 3002:
case 3242:
case 3203:
case 596:
case 528:
case 745:
case 1396:
case 2769:
case 1254:
case 1432:
case 3896:
case 3164:
case 1358:
case 2607:
case 3792:
case 2215:
case 3152:
case 321:
case 2717:
case 238:
case 1982:
case 3385:
case 1144:
case 2225:
case 1881:
case 969:
case 54:
case 2710:
case 2637:
case 1823:
case 3687:
case 868:
case 2117:
case 3323:
case 3192:
case 3233:
case 1813:
case 2963:
case 2110:
case 2630:
case 1646:
case 986:
case 2127:
case 2082:
case 3032:
case 2622:
case 3944:
case 3017:
case 3690:
case 669:
case 2092:
case 1594:
case 1209:
case 3010:
case 802:
case 514:
case 3355:
case 3027:
case 869:
case 2132:
case 16:
case 3182:
case 793:
case 1665:
case 777:
case 3503:
case 2052:
case 686:
case 3542:
case 717:
case 3782:
case 865:
case 574:
case 3579:
case 239:
case 2875:
case 387:
case 3867:
case 1554:
case 3472:
case 1562:
case 2102:
case 1386:
case 3340:
case 1239:
case 2836:
case 1840:
case 3886:
case 2515:
case 3819:
case 1417:
case 1329:
case 1410:
case 3449:
case 439:
case 2525:
case 352:
case 529:
case 4092:
case 2743:
case 1388:
case 1284:
case 2702:
case 1964:
case 748:
case 2814:
case 2444:
case 3645:
case 3533:
case 2583:
case 3069:
case 2824:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754125201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,];
var gg_b = "1754125201/";

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
